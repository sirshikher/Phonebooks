/*eslint-disable*/
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
import {GoogleLogout} from 'react-google-login';

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "nineleaps.png";

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: true
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }


  render() {
    return (
      <div className="sidebar" data-color={this.props.backgroundColor}>
        <div className="logo">
          <a>
            <div className="logo-img">
              <img src={logo} alt="react-logo" />
            </div>
          </a>
        </div>
        <div className="sidebar-wrapper" ref="sidebar">
          <Nav>
            {this.props.routes.map((prop, key) => {

              if (prop.redirect) return null;
              if(prop.name !== 'Login')
              {return (
                
                <li
                
                  className={
                    this.activeRoute( prop.path) +
                    (prop.pro ? " active active-pro" : "")
                  }
                  
                  key={key}
                  
                >
                  <NavLink
                    to={ prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                  
                    <i className={"now-ui-icons " + prop.icon} />
                    <p>{prop.name}</p>

                  </NavLink>

                </li>
                                  
              );
            }
            })}
          </Nav>
         

        </div>
      </div>
    );
  }
}

export default Sidebar;
