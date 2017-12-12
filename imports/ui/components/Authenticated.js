import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const Authenticated = ({
  authenticated, component, path, exact, ...rest
}) => (
  <Route
    path={path}
    exact={exact}
    render={props => (
      authenticated ?
        (React.createElement(component, {
          ...props, ...rest, authenticated,
        })) :
        (<Redirect to="/" />)
    )}
  />
);

Authenticated.defaultProps = {
  path: '',
  exact: false,
};

Authenticated.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  path: PropTypes.string,
  exact: PropTypes.bool,
};

export default Authenticated;
