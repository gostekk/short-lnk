import { Meteor } from 'meteor/meteor';
import React    from 'react';
import ReactDOM from 'react-dom';

import App from '../imports/ui/layout/App';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('app'));
});
