import { Meteor } from 'meteor/meteor';
import React from 'react';
import Modal from 'react-modal';

class AddLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      isOpen: false,
      error: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();

    const { url } = this.state;

    Meteor.call('links.insert', url, (err, res) => {
      if (!err) {
        this.handleModalClose();
      } else {
        this.setState({ error: err.reason });
      }
    });
  }

  onChange(e) {
    this.setState({
      url: e.target.value,
    });
  }

  handleModalClose() {
    this.setState({isOpen: false, url: '', error: ''});
  }

  render() {

    return (
      <div>
        <button className="button" onClick={() => this.setState({ isOpen: true })}>+ Add link</button>
        <Modal
          className="boxed-view__box"
          overlayClassName="boxed-view boxed-view--modal"
          isOpen = { this.state.isOpen }
          contentLabel = "Add link"
          onAfterOpen = { () => this.refs.url.focus() }
          onRequestClose={this.handleModalClose.bind(this)}
        >
          <h1>Add Link</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)}>
            <input
              type = "text"
              placeholder = "URL"
              ref = "url"
              value = { this.state.url }
              onChange = { this.onChange.bind(this) }
            />
            <button className="button">Add Link</button>
            <button type="button" className="button button--secondary" onClick={this.handleModalClose.bind(this)}>Close</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default AddLink;
