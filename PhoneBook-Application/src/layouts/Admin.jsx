import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Route, Switch, Redirect } from "react-router-dom";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.jsx";

import routes from "routes.js";
import extra_routes from "Routes_other.js";


var ps;

class Dashboard extends React.Component {
  state = {
    backgroundColor: "blue"
  };
  mainPanel = React.createRef();
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      this.mainPanel.current.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }
  handleColorClick = color => {
    this.setState({ backgroundColor: color });
  };
  render() {
    return (
      <div className="wrapper">
        <Sidebar
          {...this.props}
          routes={routes}
          backgroundColor={this.state.backgroundColor}
        />
        <div className="main-panel" ref={this.mainPanel}>
          <DemoNavbar {...this.props} />
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  path={ prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
            {extra_routes.map((prop, key) => {
              return (
                <Route
                  path={prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
            <Redirect to="/" />
          </Switch>
          <Footer fluid />
        </div>
        <FixedPlugin
          bgColor={this.state.backgroundColor}
          handleColorClick={this.handleColorClick}
        />
      </div>
    );
  }
}

export default Dashboard;
