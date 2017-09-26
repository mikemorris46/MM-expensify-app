// Higher Order Component (HOC) - a component (HOC) that renders another regular component
// (or several)

// HOC Allows:
//   Code reuse
//   Render hijacking
//   Prop manipulation
//   Abstraction of state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private information. Please DO NOT share!</p> }
      <WrappedComponent {...props} />
    </div>
  )
};

const withRequireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { !props.isAuthenticated 
        ? <p>Please login to view Info</p> 
        : <WrappedComponent {...props} />
      }
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = withRequireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="This is a regular component" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is a regular component" />, document.getElementById('app'));


