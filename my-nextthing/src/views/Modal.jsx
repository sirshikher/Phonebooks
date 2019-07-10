import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,FormGroup,Input,Col,Row } from 'reactstrap';
 
import { Otpsend,VerifyOtp} from '../action/postActions';
import { connect } from "react-redux";
import options from './Notifications.jsx';
import NotificationAlert from "react-notification-alert";



class ModalExample extends React.Component {
constructor(props) {
super(props);
this.state = {
modal: false,
code:'',
contact:'',
otp:'',
number:'',
message:'',
status_message:false,
};

this.toggle = this.toggle.bind(this);
}
myFunc(){
  this.refs.notify.notificationAlert(options);
}
handleChange(e){
    this.setState({ number:e.target.value });
  }
  handleSubmit(e){
    this.myFunc()
    e.preventDefault();
    const otp = this.state.code;
    const contact = this.state.number;

    this.props.VerifyOtp(otp,contact)
    .then(res => {
      const aa = this.props.response 
this.setState({
  code:'',
  number:'',
  message:aa,
  status_message:true,

})
  

    
})
  }

otp(e){
    e.preventDefault();
console.log(this.state.number);

    const data = {
        
        
        contact:this.state.number,
       }
       this.props.Otpsend(data)
    }


getcode(e){
    this.setState({ code:e.target.value });

  }


toggle() {
this.setState(prevState => ({
modal: !prevState.modal
}));
}

render() {
  var {
    status_message
  } = this.state;
   if(status_message){
     sessionStorage.setItem('msg',this.state.message)
   }
  
 
return (
<div>
<Button color="info" style={{ borderRadius: '6px'}} onClick={this.toggle}>{this.props.buttonLabel} Add Phone-No</Button>
<Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
<ModalHeader toggle={this.toggle}>Phone-Verification</ModalHeader>
<ModalBody>
<br/>
<br/>
<Row>
<Col md="5">
<form onSubmit={this.otp.bind(this)}>
<FormGroup >
{/* <h4> <b> <label>Phone-No</label></b></h4> */}
<Input onChange={this.handleChange.bind(this)}value={this.state.number}
type="number"
/><Button color="info" style={{ borderRadius: '10px'}}trigger="hover">Send-Otp</Button>
</FormGroup>
</form>
</Col>
<Col md="4">
<form onSubmit={this.handleSubmit.bind(this)}>
<FormGroup>
{/* <h4> <b> <label>Verify- Otp</label></b></h4> */}
    <NotificationAlert ref="notify" />

<Input
onChange={this.getcode.bind(this)}
value={this.state.code}
type="number"

/><Button onClick={() => this.myFunc()} type='submit' color="info" style={{ borderRadius: '10px',}}trigger="hover">Verify</Button>
</FormGroup>
</form>
</Col>
</Row>
</ModalBody>
<ModalFooter>
{/* <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '} */}
<Button color="danger" onClick={this.toggle}>Cancel</Button>
</ModalFooter>
</Modal>
</div>
);

}
}


function mapStateToProps(state) {
   
  
    return {
      response: state.postReducer.user_verify_otp,
      
  
    }
  }
export default connect(mapStateToProps, {Otpsend,VerifyOtp})(ModalExample);

