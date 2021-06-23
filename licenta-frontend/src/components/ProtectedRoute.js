import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, loggedIn, ...rest }) => {
  return (
    <>
    {console.log(loggedIn)}
    <Route {...rest} render={  
      props => {
        if (loggedIn) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: `/`,
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
    </>
  )
}


export default ProtectedRoute;