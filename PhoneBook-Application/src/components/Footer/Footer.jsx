/*eslint-disable*/
import React from "react";
import { Container } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <nav>
            <ul>
              <li>
                <a href="https://www.creative-tim.com?ref=nudr-footer" target="_blank">Nineleaps PhoneBook</a>
              </li>
              <li>
                <a href="https://www.nineleaps.com/company/" target="_blank">About Us</a>
              </li>
              {/* <li>
                <a href="https://blog.creative-tim.com?ref=nudr-footer" target="_blank"></a>
              </li> */}
            </ul>
          </nav>
          <div className="copyright">
            &copy; {1900 + new Date().getYear()}, Designed by{" "}
            <a
              href="https://www.nineleaps.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nineleaps
            </a>
            . Coded by{" "}
            <a
              href="https://www.nineleaps.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bourvardia/Colorlib
            </a>
            .
          </div>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;
