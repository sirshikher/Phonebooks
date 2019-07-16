import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input
} from "reactstrap";
import './demo.css'
//components
import { connect } from "react-redux";
import { Search } from '../../action/postActions';
// search_box
import ReactSearchBox from 'react-search-box';
import MDSpinner from "react-md-spinner";

import routes from "routes.js";

class Header extends React.Component {
constructor(props){
  super(props);
    this.state = {
      isOpen: false,
    dropdownOpen: false,
    color: "transparent",
    aa:'',
    items:[],
    goto_view:false,
    trydata : ''
    }
    this.open1 = this.open1.bind(this);
  }

  open1(data) {
   
    window.location.reload();
    console.log(data.client_id)
    this.setdata(data.client_id)
    sessionStorage.setItem('lelo', data.client_id);
    // this.props.
 this.setState({


})
   }

   

setdata=(a)=>{
  // this.setState({
  //   trydata : a,
  //   goto_view : true
  // })
  return(
    this.props.history.push('/admin/searched_user')      )
  
}

  componentDidMount() {
    window.addEventListener("resize", this.updateColor.bind(this));

    this.props.Search()
      .then(res => {
        const search_response = this.props.response
        this.setState({
          isloaded: true,
          items: search_response,
        })
      })

  }
  sidebarToggle = React.createRef();
  toggle = () => {
    if (this.state.isOpen) {
      this.setState({
        color: "transparent"
      });
    } else {
      this.setState({
        color: "white"
      });
    }
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  dropdownToggle = e => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };
  getBrand = () => {
    var name;
    routes.map((prop, key) => {
      if (prop.collapse) {
        prop.views.map((prop, key) => {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
          return null;
        });
      } else {
        if (prop.redirect) {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        } else {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        }
      }
      return null;
    });
    return name;
  };
  openSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    this.sidebarToggle.current.classList.toggle("toggled");
  };
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor = () => {
    if (window.innerWidth < 993 && this.state.isOpen) {
      this.setState({
        color: "white"
      });
    } else {
      this.setState({
        color: "transparent"
      });
    }
  };

  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      this.sidebarToggle.current.classList.toggle("toggled");
    }
  }
  render() {
   
    var {
      isloaded,goto_view,
      items,
    } = this.state;

   
    if (!isloaded) {

      return (
      <div>
        
      </div>);

    } else {
  
      const values = items;

      return (
        // add or remove classes  depending if we are on full-screen-maps page or not
        <Navbar
          color={
            this.props.location.pathname.indexOf("full-screen-maps") !== -1
              ? "white"
              : this.state.color
          }
          expand="lg"
          className={
            this.props.location.pathname.indexOf("full-screen-maps") !== -1
              ? "navbar-absolute fixed-top"
              : "navbar-absolute fixed-top " +
              (this.state.color === "transparent" ? "navbar-transparent " : "")
          }
        >
          <Container fluid>
            <div className="navbar-wrapper">


            </div>


            <form>
           
             < InputGroup className="no-border">
                 
                <ReactSearchBox
                  placeholder="Search.."
                  onSelect={ this.open1.bind(values.value)}
                  data={values}
                  // inputBoxBorderColor='red'
                  autoFocus='false'
                  />
                
                
                 
                <InputGroupAddon addonType="append">
                <InputGroupText className="input-group.no-border .input-group-append .input-group-text">
                  <i className="now-ui-icons ui-1_zoom-bold " />
                </InputGroupText>
              </InputGroupAddon>
              </InputGroup>
              
              
                       {/* < InputGroup className="no-border">
                <Input placeholder="Search..." />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i className="now-ui-icons ui-1_zoom-bold" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup> */}
            </form>
          </Container>
        </Navbar>
      );
    }
  }
}
function mapStateToProps(state) {


  return {
    response: state.postReducer.search_data,


  }
}
export default connect(mapStateToProps, { Search })(Header);
