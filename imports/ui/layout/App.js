import { Meteor } from 'meteor/meteor';
import React    from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

import Authenticated from '../components/Authenticated';
import Public from '../components/Public';
import Login    from '../components/Login';
import Signup   from '../components/Signup';
import Link     from '../components/Link';
import NotFound from '../components/NotFound';

import { Links } from '../../api/links';
import '../../startup/simple-schema-configuration.js';

const App = (props) => (
  <Router>
    <div>
      <Switch>
        <Public exact path="/" component={Login} {...props} />
        <Public exact path="/signup" component={Signup} {...props} />
        <Authenticated exact path="/links" component={Link} {...props} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default withTracker(() => {
  const authenticated = !!Meteor.userId();
  const userId = Meteor.userId();
  return {
    authenticated,
    userId,
  };
})(App);
