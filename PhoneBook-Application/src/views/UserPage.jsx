import React from "react";
// components page
import { connect } from "react-redux";
import { EditPage,EditPage_recieve,EditPage_SendData } from '../action/postActions';
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

// core components
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
     isloadedd:false,
     git_id:'',
     slack_id:'',
     link_id:'',
     designation:'',
     emp_id:'',
     skill:[],
     contact:'',
     hobbies:'',
     location:'',
     language:'',
     previous_project:'',
     current_project:'',
     formErrors: {email: '', password: ''},
     bio:'',
     email: "",
     password: "",
     skill_var:'',
     selectedOption:[],

     everFocusedEmail: false,
     everFocusedPassword: false,
     inFocus: ""
    };

  }
 
 
 handleChange_emp_id(event) {
    this.setState({ emp_id:event.target.value.toUpperCase() });
  }
  
  handleChange_skill = selectedOption => {
   
    this.setState({
       selectedOption ,
       
      });

     
    this.aaa();
    
  };
aaa(){

   this.setState({
     
     skill: [...this.state.selectedOption].map(o => o.label)
    });
  console.log(this.state.skill);
  
}
  
 
  handleChange_location(event) {
    this.setState({ location:event.target.value });
  }
  handleChange_language(event) {
    this.setState({ language:event.target.value });
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });    }
 

      handleSubmit(event) {
        console.log(this.state.selectedOption);
        
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

    this.props.EditPage()
    .then(
      response => {
        const data_skill = this.props.responses
        this.setState({
          isloadedd: true,
          skill_var:data_skill,
        })
    
        
      }
    )
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
       this.setState({
        designation:Designation.designation,
        emp_id:Basic.emp_id,
        contact:Basic.contact,
        slack_id:Basic.slack_id,
        hobbies:Basic.hobbies,
        location:Location.location,
        language:Language.language,
        current_project:Project.current_project,
        previous_project:Project.previous_project,
        bio:Basic.bio,
        git_id:Basic.git_id,
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
    // const errors = validate(this.state.link_id, this.state.slack_id);
    // const isDisabled = Object.keys(errors).some(x => errors[x]);
    var {
      isloaded, isloadedd,
      skill_var
    } = this.state;
    if (!isloadedd || !isloaded) {
  
      return (
        <div className="container"style={{width:"20%",height:"20%"}}>
        <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
        <circle cx="170" cy="170" r="160" stroke="#E2007C"/>
        <circle cx="170" cy="170" r="135" stroke="#404041"/>
        <circle cx="170" cy="170" r="110" stroke="#E2007C"/>
        <circle cx="170" cy="170" r="85" stroke="#404041"/>
        </svg>
        </div>
      );
  
    } else {
  
      const data_skills = skill_var;
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
                           name="contact"
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
                            id="previous_project"
                            onChange={this.handleChange.bind(this)}
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
                            id="current_project"
                            onChange={this.handleChange.bind(this)}
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
                            onChange={this.handleChange.bind(this)}
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
              Skill
                </label>
                
                <Select
                        optionLabelProp="label"
                        value={this.state.selectedOption}
                        onChange={this.handleChange_skill}
                mode="multiple"
                labelInValue
                tokenSeparators={[" ", ","]}
                 defaultvalue={[{ key: "green", label: <span style={{ color: 'green' }}>hello</span>}]} 
                 >
                  {data_skills.map((item ) => (
                <Option label={item.skill}  key={item.skill}  ><span style={{ color: 'green' }}>{item.skill}</span></Option>
                ))}
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
                            onChange={this.handleChange.bind(this)}
                            value={this.state.hobbies}

                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-0" md="5">
                        <FormGroup>
                       

                        </FormGroup>
                      </Col>
                      <Col className="pl-0" md="3">
                        <FormGroup>
                          <label>Slack-Id</label>
                          <Input
                          // className={errors.slack_id ? "error" : ""}
                            name="slack_id"
                            type="text"
                            onChange={this.handleChange.bind(this)}
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
                          // className={errors.link_id ? "error" : ""}

                            type="text"
                            name="link_id"
                            onChange={this.handleChange.bind(this)}
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
                            onChange={this.handleChange.bind(this)}
                            value={this.state.git_id}

                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="3">
                        <FormGroup>
                        
                        </FormGroup>
                      </Col>
                      </Row>
                  
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
                            onChange={this.handleChange.bind(this)}
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
                        <Button  color="info" style={{ borderRadius: '10px',}}trigger="hover">submit</Button>
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
     responses:state.postReducer.user,

  }
}

export default connect(mapStateToProps, {EditPage_recieve,EditPage_SendData,EditPage})(User);
