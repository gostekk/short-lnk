import React from 'react';
import { ReactiveVar } from 'meteor/reactive-var';

export default class LinksListFilters extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showHidden: true,
    };
  }
  render () {
    return (
      <div>
        <label className="checkbox">
          <input className="checkbox__box" type="checkbox" checked={!this.state.showHidden} onChange={(e) => {
            this.setState({ showHidden: !e.target.checked});
            this.props.visible.set(!e.target.checked);
          }}/>
          show hidden links
        </label>
      </div>
    );
  }
};
