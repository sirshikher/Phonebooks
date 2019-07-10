import React from "react";
import {Redirect} from "react-router-dom"
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import {GoogleLogout} from 'react-google-login';
import Modal from 'react-modal';
import id from 'Service_File/ngrok'

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";
Modal.setAppElement('#root')
const customStyles = {
  content: {
    maxHeight: "500px",

    width: "600px",
    height: "200px",
    fontFamily: 'sans-serif',
    fontSize: '17px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '10px solid #ccc',
    opacity: 1,
    // background		  : 'rgba(0,0,0,0.34)',
    overflow: 'auto',
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "#808080",
    padding: "20px",
    effect: "fadeInRight",

  }
};
class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gotohomepage:false,
      redirect_to_homepage: false,
    
    }
  }

  
  closeModal() {
    // window.localStorage.removeItem('emails');
    this.setState({
      gotohomepage:true,
      modalIsOpen: false });
    // window.location.reload();


  }
  componentDidMount(){

    this.setState({
      modalIsOpen:true,
      
    })
  }
  logout() {
    console.log('dd');
    const access_token = sessionStorage.getItem('token_id');
    fetch(`https://${id}.ngrok.io/userlogout`, {
      method: 'POST',
      mode: "cors",
      headers: {
        'access-token': access_token,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }).then((response) => {
      console.log(response);
    })
    localStorage.clear();
    sessionStorage.clear();

    this.setState({redirect_to_homepage: true});
  }
  gotohome = () => {

    const currentState = this.state.redirect_home;
    this.setState({
      redirect_home: !currentState
    }, () => console.log("gotohome", this.state));
    return (this.props.history.push('/homepage'));

  };
  
  render() {

    if (this.state.gotohomepage) {
      return (<Redirect to={'/admin/dashboard'}/>)
    }
    if (this.state.redirect_to_homepage) {
      return (<Redirect to={'/'}/>)
    }
    return (
      


      <>
      <PanelHeader size="sm" />
      <div className="content">
      <Modal

isOpen={this.state.modalIsOpen}
onRequestClose={this.closeModal}
style={customStyles}
contentLabel="Learning Modal">
<span onClick={this.closeModal.bind(this)}> &times;</span>
<br /><br />
<p>Are you sure want to Logout?</p>
<GoogleLogout clientId="1088987782359-v6n6temt6ebhmki03ahak9uci1cs212c.apps.googleusercontent.com" buttonText="Logout" onLogoutSuccess={this.logout.bind(this)}></GoogleLogout>
</Modal>
      </div>
    </>
  );
}
      
      
    

}

export default Logout;
