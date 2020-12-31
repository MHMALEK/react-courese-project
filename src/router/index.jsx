import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import checkAuth from "../auth-mock/checkAuth";
import routes from "./routes";

const token = checkAuth(true);

class RouterProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: null,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      if (token) {
        this.setState({
          isAuthenticated: true,
        });
      } else {
        this.setState({
          isAuthenticated: false,
        });
      }
    }, 1000);
  }
  handleRouteEnter = (route, props) => {
    const { isAuthenticated } = this.state;
    if (isAuthenticated) {
      return <route.component routeProps={props} />;
    } else {
      return <Redirect to="/401" />;
    }
  };
  render() {
    const { isAuthenticated } = this.state;
    if (isAuthenticated === null) {
      return <p>loading</p>;
    }
    return (
      <BrowserRouter>
        <div>header</div>
        <Switch>
          {routes.map((route) => (
            <Route path={route.path} exact={route.exact}>
              {(props) => {
                return route.needAuth ? (
                  this.handleRouteEnter(route, props)
                ) : (
                  <route.component routeProps={props} />
                );
              }}
            </Route>
          ))}
        </Switch>
        <div>footer</div>
      </BrowserRouter>
    );
  }
}

export default RouterProvider;
