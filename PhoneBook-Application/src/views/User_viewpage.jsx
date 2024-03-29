import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
} from "reactstrap";
import {Redirect } from 'react-router-dom';
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { ViewPage } from '../action/postActions';

class RegularTables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     items:[],
     isloaded:false,
     goto_editpage:false,
    };
  }
  
  componentDidMount(){
    this.props.ViewPage()
    .then(res => {
      const aa = this.props.response
      this.setState({
        isloaded:true,
       items : aa,
      })

    })
  }
  goto_edit(){
this.setState({
  goto_editpage:true,
})
  }
  
  render() { 
    var {
    isloaded,goto_editpage,
    items
  } = this.state;

  if(goto_editpage){
    return(
   

    <Redirect to={'/admin/user-page'}/>
    )
  }
  if (!isloaded) {

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

    const data = items;

    return (
      
      <>
        <PanelHeader size="sm" />
        <div className="content">
        <Row>
            <Col xs={12} md={4}>
              <Card className="card-chart" style={{borderRadius:"8px",}}>
                <CardHeader>
                  <h6 className="card-category">Details</h6>
                  <CardTitle tag="h4">Basic-Details</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-outline-default btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem onClick={this.goto_edit.bind(this)}>Edit</DropdownItem>
                      {/* <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem> */}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                 
                  <Col className="pr-1" >
                        <FormGroup>
                        {data.Basic.map((item,index) => (
                          <h6 key={index}><label>Name:{item.name} </label></h6>
                        ))}
                          {/* <Input 
                            placeholder="NLI-000"
                            type="text"
                          /> */}
                        </FormGroup>
                      </Col>
                      <br/>

                      <Col className="px-3" >
                        <FormGroup>
                        {data.Basic.map((item,index) => (
                         <h6 key={index}><label>Email : {item.email}</label></h6>
                        ))}
                          {/* <Input
                           
                            type="text"
                          /> */}
                        </FormGroup>
                      </Col>
                      <br/>

                      <Col className="px-3" >
                        <FormGroup>

                        {data.Basic.map((item,index) => (
                          <h6 key={index}><label>Emp-ID : {item.emp_id}</label></h6>
                        ))}
                          {/* <Input
                           
                            type="text"
                          /> */}
                        </FormGroup>

                      </Col>
                      <br/>
                      <Col className="px-3" >
                        <FormGroup>
                        {data.Designation.map((item,index) => (
                          <h6 key={index}><label>Designation : {item.designation}</label></h6>
                        ))}
                          
                        </FormGroup>
                      </Col>
                      
                      
                      
                      
                 
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons arrows-1_refresh-69" /> Just
                    Updated
                  </div>
                </CardFooter>
              </Card>
            </Col>
           
           
           
            <Col xs={12} md={4}>
              <Card className="card-chart"style={{borderRadius:"8px"}}>
                <CardHeader>
                  <h5 className="card-category">Contact</h5>
                  <CardTitle tag="h4">Contact-Details </CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-outline-default btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem onClick={this.goto_edit.bind(this)}>Edit</DropdownItem>
                      {/* <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem> */}
                      {/* <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem> */}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                       <Col className="pr-1" >
                        <FormGroup>
                        {data.Basic.map((item,index) => (
                        <h6 key={index}><label>Slack-id : {item.slack_id} </label></h6>
                        ))}
                        <br/>
                        {data.Basic.map((item,index) => (
                        <h6 key={index}><label>Email : {item.email} </label></h6>
                        ))}
                        <br/>
                        {data.Basic.map((item,index) => (
                        <h6 key={index}><label>Github : {item.git_id}</label></h6>
                        ))}
                        <br/>
                        {data.Basic.map((item,index) => (
                        <h6 key={index}><label>Linkedin : {item.link_id} </label></h6>
                        ))}
                        <br/>
                        {data.Basic.map((item,index) => (
                        <h6 key={index}><label>Phone-No : {item.contact}</label></h6>
                        ))}
                        <br/>
                        {data.Basic.map((item,index) => (
                        <h6 key={index}><label>Location : {item.location} </label></h6>
                        ))}
                          
                        
                        </FormGroup>
                      </Col>  
                   
                  </div>
                </CardBody>
              
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons arrows-1_refresh-69" /> Just
                    Updated
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart" style={{borderRadius:"8px"}}>
                <CardHeader>
                  <h5 className="card-category">Tech_Details</h5>
                  <CardTitle tag="h4">Skills-Projects</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-outline-default btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem onClick={this.goto_edit.bind(this)}>Edit</DropdownItem>
                      {/* <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem> */}
                      {/* <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem> */}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody >
                  <div className="chart-area" >
                  <Col className="pr-1" >
                        <FormGroup>
                        {data.Skill.map((item,index) => (
                          <h6 key={index}><label>Skills : {item.skill}</label></h6>
                        ))}
                          <br/>
                          {data.Project.map((item,index) => (
                          <h6 key={index}><label>Projects : {item.previous_project} </label></h6>
                          ))}
                          <br/>

                          {data.Project.map((item,index) => (
                          <h6 key={index}><label>Current-Project : {item.current_project} </label></h6>
                          ))}
                          <br/>
                          {data.Basic.map((item,index) => (
                          <h6 key={index}><label>Duration :{item.duration} </label></h6>
                          ))}
               
                        </FormGroup>
                      </Col> 
                   
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons arrows-1_refresh-69" /> Just updated
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <Card className="card-chart" style={{borderRadius:"8px"}}>
                <CardHeader>
                  <h5 className="card-category">Activities</h5>
                  <CardTitle tag="h4">Hobbies-Languages</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-outline-default btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem onClick={this.goto_edit.bind(this)}>Edit</DropdownItem>
                      {/* <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem> */}
                      {/* <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem> */}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                  <Col className="pr-1" >
                        <FormGroup>
                        {data.Basic.map((item,index) => (
                          <h6 key={index}><label>Hobbies : {item.hobbies} </label></h6>
                        ))}
                          <br/>
                          {data.Basic.map((item,index) => (
                          <h6 key={index}><label>Languages : {item.language} </label></h6>
                          ))}
                          {/* <h5><label>Address</label></h5>
                          <h5><label>Location </label></h5> */}
                          {/* <Input 
                            placeholder="NLI-000"
                            type="text"
                          /> */}
                        </FormGroup>
                      </Col> 
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons arrows-1_refresh-69" /> Just updated
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
        
      </>
    );
                        }
  }
}
RegularTables.propTypes = {
  ViewPage: PropTypes.func.isRequired
};

function mapStateToProps(state) {
   
  
  return {
    response: state.postReducer.data,
    

  }
}

export default connect(mapStateToProps, {ViewPage})(RegularTables);
