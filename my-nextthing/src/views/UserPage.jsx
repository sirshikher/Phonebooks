import React from "react";
// components page
import { connect } from "react-redux";
import { EditPage_recieve,EditPage_SendData } from '../action/postActions';
// import '/src/assets/now-ui-dashboard.css';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";
import NotificationAlert from "react-notification-alert";
import options from './Notifications.jsx';

// core components
import MDSpinner from "react-md-spinner";
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";
import ModalExample from "views/Modal";
import "antd/dist/antd.css";
import { Select } from "antd";
const Option = Select.Option;

var option = {};
option = {
  place: 'br',
  message: (
      <div>
          <div>
            <p>Info Saved</p>
              
          </div>
      </div>
  ),
  type: "danger",
  icon: "now-ui-icons ui-1_bell-53",
  autoDismiss: 7
}
function validate(email, password) {
  // true means invalid, so our conditions got reversed
  return {
    email: email.length === 0,
    password: password.length === 0
  };
}


class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     items:[],
     isloaded:false,
     git_id:'',
     slack_id:'',
     link_id:'',
     designation:'',
     emp_id:'',
     skill:'',
     contact:'',
     slack_id:'',
     hobbies:'',
     location:'',
     language:'',
     previous_project:'',
     current_project:'',
     formErrors: {email: '', password: ''},
     bio:'',
     email: "",
     password: "",

     everFocusedEmail: false,
     everFocusedPassword: false,
     inFocus: ""
    };

  }
  handleChange_slack_id(event) {
    this.setState({ slack_id:event.target.value });
 
  }
  handleChange_designation(event) {
    this.setState({ designation:event.target.value });
  }
 handleChange_emp_id(event) {
    this.setState({ emp_id:event.target.value.toUpperCase() });
  }
  handleChange_link_id(event) {
    this.setState({ link_id:event.target.value });
  }
  handleChange_skill(event) {
    this.setState({ skill:event.target.value });
  }
  handleChange_git_id(event) {
    this.setState({ git_id:event.target.value });
  }
  handleChange_hobbies(event) {
    this.setState({ hobbies:event.target.value });
  }
  handleChange_location(event) {
    this.setState({ location:event.target.value });
  }
  handleChange_language(event) {
    this.setState({ language:event.target.value });
  }
  handleChange_current_project(event) {
    this.setState({ current_project:event.target.value });
  }
  handleChange_previous_project(event) {
    this.setState({ previous_project:event.target.value });
  }
  handleChange_bio(event) {
    this.setState({ bio:event.target.value });
  }
      handleSubmit(event) {
        this.myFunc();
        event.preventDefault();
        const data = {
          git_id:this.state.git_id,
          contact:this.state.contact,
          emp_id:this.state.emp_id,
          skill:this.state.skill,
          slack_id:this.state.slack_id,
          location:this.state.location,
          manager_id:this.state.manager_id,
          current_project:this.state.current_project,
          previous_project:this.state.previous_project,
          designation:this.state.designation,
          language:this.state.language,
          hobbies:this.state.hobbies,
          bio:this.state.bio,
        }
        this.props.EditPage_SendData(data)
        .then(response =>{           
        
      })
    }
    myFunc(){
      this.refs.notify.notificationAlert(option);
    }
  componentDidMount() {

    this.props.EditPage_recieve()
      .then(response => {
        const user_editpage_response = this.props.response
        this.setState({
          isloaded: true,
          items: user_editpage_response,
        })
         console.log(this.props.response);
    
      const Basic = this.state.items.Basic;
      const Designation = this.props.response.Designation;
      const Language = this.state.items.Language;
      const Location = this.state.items.Location;
      const Project = this.state.items.Project;
      const Skill = this.state.items.Skill;
       this.setState({
        designation:Designation.designation,
        emp_id:Basic.emp_id,
        skill:Skill.skill,
        contact:Basic.contact,
        slack_id:Basic.slack_id,
        hobbies:Basic.hobbies,
        location:Location.location,
        language:Language.language,
        current_project:Project.current_project,
        previous_project:Project.previous_project,
        bio:Basic.bio,
        git_id:Basic.git_id,
        slack_id:Basic.slack_id,
        link_id:Basic.link_id,
      })
       })

  }

  canBeSubmitted() {
    const errors = validate(this.state.link_id, this.state.slack_id);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {

    const errors = validate(this.state.link_id, this.state.slack_id);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    var {
      isloaded, 
      items,
    } = this.state;
    if (!isloaded) {
  
      return (
        <div class="container"style={{width:"20%",height:"20%"}}>
        <svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
        <circle cx="170" cy="170" r="160" stroke="#E2007C"/>
        <circle cx="170" cy="170" r="135" stroke="#404041"/>
        <circle cx="170" cy="170" r="110" stroke="#E2007C"/>
        <circle cx="170" cy="170" r="85" stroke="#404041"/>
        </svg>
        </div>
      );
  
    } else {
  
      const data = items;
      return (
      <>
        <PanelHeader size="sm" />
        
        <div className="content" >

          <Row>
            <Col xs={12} md="12">
              <Card style={{borderRadius:"8px"}}>
                <CardHeader>
                <Row>
                 <Col > <h5 className="title">Edit Profile</h5></Col>
                 <Col md="2"><ModalExample/></Col>
                  </Row> 
                </CardHeader>
                <CardBody>
                <Form onSubmit={this.handleSubmit.bind(this)}>   
              <Row>
                      <Col className="pr-1" md="2">
                        <FormGroup>
                          <label>Emp-id </label>
                      
                          <Input 
                            name="emp_id"
                            onChange={this.handleChange_emp_id.bind(this)}
                            placeholder="NLI-000"
                            type="text"
                            value={this.state.emp_id}
                            
                          />
                         
                        </FormGroup>
                      </Col>
                     
                      <Col className="pl-4" md="4">
                        <FormGroup>
                          <label>
                            Contact-No
                          </label>
                          <Input 
                          type="number"
                          // name="contact"
                          value={this.state.contact}
                         readOnly
                                                      />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>Pervious Project</label>
                          <Input
                            name="previous_project"
                            onChange={this.handleChange_previous_project.bind(this)}
                            value={this.state.previous_project}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      
                    </Row>
                    <Row>
                      <Col className="pr-1" md="3">
                        <FormGroup>
                          <label> Current Project</label>
                          <Input
                            name="current_project"
                            onChange={this.handleChange_current_project.bind(this)}
                            type="text"
                            value={this.state.current_project}
                          />
                        </FormGroup>
                      </Col>
                      <Col  md="4">
                        <FormGroup>
                          <label>Designation</label>
                          <Input
                            name="designation"
                            onChange={this.handleChange_designation.bind(this)}
                            type="text"
                            value={this.state.designation}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="4">
                      <FormGroup>
                     <label >
                    Location
                    </label>
                     <Input 
                     type="select" 
                     name="location" 
                     onChange={this.handleChange_location.bind(this)}
                     id="exampleSelect">
                    
                     <option>{this.state.location}</option>
                     {/* <option>ROUSh</option>
                     <option>CCD</option>
                     <option>SVC</option>
                     <option>Pasta Street</option>
                     <option>WhiteField</option> */}
                     </Input>
                    </FormGroup>
                      </Col>
                      <Col className="pr-1" md="5">
                <FormGroup>
                 <label >
                Skills
                </label>
                <Select
                // style={{ width: 500 }}
                mode="multiple"
                labelInValue
                tokenSeparators={[" ", ","]}
                defaultvalue={[{ key: "green", label: <span style={{ color: 'green' }}></span> }]} >
                <Option key={"green"} value={"vert"}><span style={{ color: 'green' }}>vert</span></Option>
                <Option key={"red"} value={"rouge"}><span>rouge</span></Option>
                <Option key={"green"} value={"java"}><span >java</span></Option>
                <Option key={"red"} value={"c++"}><span>c++</span></Option>
                </Select>
                </FormGroup>
                </Col>
                <Col className="pr-1" md="5" >
                  <FormGroup>
                  <b><label >
                  Languages
                  </label></b>
                  <Select
                  // style={{ borderRadius:"8px" }}
                  mode="multiple"
                  labelInValue
                  tokenSeparators={[" ", ","]}
                  Value={[{ key: "green", label: <span style={{ color: 'green' }}></span> }]} >
                  <Option key={"green"} value={"vert"}><span >English</span></Option>
                  <Option key={"red"} value={"rouge"}><span>Hindi</span></Option>
                  {/* <Option key={"green"} value={"java"}><span>java</span></Option>
                  <Option key={"red"} value={"c++"}><span style={{ color: 'red' }}>c++</span></Option> */}
                  </Select>
                  </FormGroup>
                  </Col>
                      {/* <Col className="pr-1" md="3">
                        <FormGroup>
                          <label>Project</label>
                          <Input
                            
                            type="text"
                          />
                        </FormGroup>
                      </Col> */}
                    </Row>
                    <Row>
                      <Col md="3">
                        <FormGroup>
                          <label>Hobbies</label>
                          <Input
                            name="hobbies"
                            type="text"
                            onChange={this.handleChange_hobbies.bind(this)}
                            value={this.state.hobbies}

                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-0" md="5">
                        <FormGroup>
                       

                          <label>Skill's:</label>
                    
                          <Input 
                            name="skill"
                            type="text"
                            onChange={this.handleChange_skill.bind(this)}
                            value={this.state.skill}

                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-0" md="3">
                        <FormGroup>
                          <label>Slack-Id</label>
                          <Input
                          className={errors.slack_id ? "error" : ""}
                            name="slack_id"
                            type="text"
                            onChange={this.handleChange_slack_id.bind(this)}
                            value={this.state.slack_id}

                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>Linkedin</label>
                          <Input
                          className={errors.link_id ? "error" : ""}

                            type="text"
                            name="link_id"
                            onChange={this.handleChange_link_id.bind(this)}
                            value={this.state.link_id}

                          />
                        </FormGroup>
                      </Col>
                     

                      <Col md="4">
                        <FormGroup>
                          <label>Github</label>
                          <Input
                            name="git_id"
                            type="text"
                            onChange={this.handleChange_git_id.bind(this)}
                            value={this.state.git_id}

                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="3">
                        <FormGroup>
                          <label>Language</label>
                          <Input
                          value={this.state.language}
                            type="text"
                            onChange={this.handleChange_language.bind(this)}
                            name="language"
                          />
                        </FormGroup>
                      </Col>
                      </Row>
                    {/* <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>City</label>
                          <Input
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            defaultValue="INDIA"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>Postal Code</label>
                          <Input placeholder="ZIP Code" type="number" />
                        </FormGroup>
                      </Col>
                    </Row> */}
                    <Row>
                      <Col  md="12">
                        <FormGroup>
                          <label>Bio</label>
                          <Input
                            cols="80"
                            
                            placeholder="Write something about youself--- "
                            rows="4"
                            value={this.state.bio}
                            name="bio"
                            onChange={this.handleChange_bio.bind(this)}
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <br/>
                          <NotificationAlert ref="notify" />
                        <Button disabled={isDisabled} color="info" style={{ borderRadius: '10px',}}trigger="hover">submit</Button>
                        </FormGroup>
                        
                        {/* <ModalExample/> */}
                      </Col>
                    </Row>
                  </Form>
                  
                </CardBody>
                
              </Card>
              
            </Col>
            
          </Row>
        </div>
      </>
    );
                  }
  }
}
function mapStateToProps(state) {
   
  
  return {
    response: state.postReducer.user_editpage_recieve_data,
    

  }
}

export default connect(mapStateToProps, {EditPage_recieve,EditPage_SendData})(User);
