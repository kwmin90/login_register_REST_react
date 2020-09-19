import React from "react";
import { Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./../redux/";

interface PrivateRouteProps {
  path: string;
  component: React.FC;
  redirectTo: string;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  path,
  component,
  redirectTo,
}) => {
  const { loggedIn } = useSelector((state: RootState) => {
    return {
      loggedIn: state.status.loggedIn,
    };
  });
  const history = useHistory();

  if (!loggedIn) {
    history.push(redirectTo);
  }
  return <Route exact path={path} component={component} />;
};
