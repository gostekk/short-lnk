import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { ReactiveVar } from 'meteor/reactive-var';
import React from 'react';
import FlipMove from 'react-flip-move';
import PropTypes from 'prop-types';

import Loading from './Loading';
import LinksListItem from './LinksListItem';

import { Links } from '../../api/links';

class LinksList extends React.Component {
  constructor(props) {
    super(props)
  }

  renderLinksListItems() {
    if (this.props.links.length === 0) {
      return (
        <div className="item">
          <p className="item__status-message">No Links Found.</p>
        </div>
      );
    }

    return this.props.links.map((link) => {
      const shortUrl = Meteor.absoluteUrl(link._id);
      return <LinksListItem key={link._id} shortUrl={shortUrl} {...link}/>;
    });
  }

  render () {
    return ( !this.props.loading ?
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderLinksListItems()}
        </FlipMove>
      </div>
    : <Loading />);
  }
}

LinksList.propTypes = {
  loading: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withTracker(({ visible }) => {
  const subscription = Meteor.subscribe('links');
  return {
    loading: !subscription.ready(),
    links: Links.find({ visible: visible.get() }).fetch(),
  };
})(LinksList);
