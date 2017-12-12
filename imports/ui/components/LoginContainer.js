import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import Login from './Login';

export default LoginContainer = withTracker(() => {
  const isAuthenticated = !!Meteor.userId();
  return { isAuthenticated };
})(isAuthenticated ? Login : 'nothing');
