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
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  
} from "reactstrap";
// core components
import { Redirect } from "react-router-dom";

import PanelHeader from "components/PanelHeader/PanelHeader.jsx";
import { connect } from "react-redux";
import { User_Search } from '../action/postActions';
// import { thead, tbody } from "variables/general";

class Searched_user extends React.Component {
state ={
  isloaded:false,
  items:'',
  goto_searcheduser_hirerachy:false,
  goto_editpage:false,

}
  componentDidMount() {

    this.props.User_Search(this.props.clientId)
      .then(res => {
        const user_search_response = this.props.response
        this.setState({
          isloaded: true,
          items: user_search_response,
        })
        console.log(this.state.items);
      })

  }
  goto_edit(){
    this.setState({
      goto_editpage:true,
    })
      }
      

  viewhirerachy(e){
e.preventDefault();

this.setState({
  goto_searcheduser_hirerachy:true,
})



  }
  render() {
    
    var {
      isloaded,goto_editpage,goto_searcheduser_hirerachy,
      items,
    } = this.state;
    if(goto_editpage){
      return(
     
  
      <Redirect to={'/user-page'}/>
      )
    }
   if(goto_searcheduser_hirerachy){
     return(
       <Redirect to ={'/searched_user_hirerachy'} />
     )
   }
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
        
        <PanelHeader
          size="lg"
          content={<Col  md={12}>
          <Card className="card-chart "
           style={{borderRadius:"10px",maxWidth:"1600px",minWidth:"800px",maxHeight:"170px",minHeight:"120px"}}>
            <CardHeader>
              <h5 className="card-category">Details</h5>
              {data.Basic.map((item) => (
              <CardTitle tag="h4">{item.bio}</CardTitle>
              ))
              }
              <UncontrolledDropdown>
                <DropdownToggle
                  className="btn-round btn-outline-default btn-icon"
                  color="default"
                >
                  <i className="now-ui-icons loader_gear" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={this.goto_edit.bind(this)}>Edit</DropdownItem>
                 
                </DropdownMenu>
              </UncontrolledDropdown>
            </CardHeader>
            <CardBody>
              <div className="chart-area">
              
                          
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
          }
        />





        <div className="content" >
        
        <Row>
        <Col md="4" sm={10} >
          
          
          <Card className="card-user"style={{borderRadius:"6px"}}>
          
          
            <div className="image">
            
              <img alt="..." src={require("assets/img/bg5.jpg")} />
            </div>
            
            <CardBody>
              
              
              <div className="author">
                <a href="#pablo" onClick={e => e.preventDefault()}>
                {data.Basic.map((item) => (

                  <img
                    alt="..."
                    className="avatar border-gray"
                    src={item.image_url}
                  />
                  ))
                }
                              

                              
                </a>
               
                <Col className="pr-1" >
                    <FormGroup>
                      
                      
                    {data.Basic.map((item) => (
                      <h4><label> {item.name} </label></h4>
                    ))}
                    {data.Basic.map((item) => (

                      <h4><label> {item.emp_id} </label></h4>
                    ))}
                    
                    </FormGroup>
                  </Col>
                  <Col className="pr-1" >
                    <FormGroup>
                    {data.Designation.map((item) => (

                      <h4><label> {item.designation}</label></h4>
                    ))}
                    </FormGroup>
                    
                  </Col>
              </div>
              <Button onClick={this.viewhirerachy.bind(this)} color="info" style={{ borderRadius: '8px',}}trigger="hover">View-Heirarchy</Button>
            
               
            </CardBody>
            <br/>
            <CardFooter>
             
              
            </CardFooter>
           
          
          </Card>
        </Col>
            
           
           
            <Col xs={12} md={4}>
              <Card className="card-chart"style={{borderRadius:"8px",maxHeight:"500px"}}>
                <CardHeader>
                  <h5 className="card-category">Contact</h5>
                  <CardTitle tag="h4">Contact-Details</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-outline-default btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                       <Col className="pr-1" >
                        <FormGroup>
                        
          {data.Basic.map((item) => (

                          <h6><label>Email : {item.email}</label></h6>
                          ))
                          }
                          <br/>
          {data.Basic.map((item) => (

                          <h6><label>SlackId : {item.slack_id} </label></h6>
                                                  ))}<br/>
          {data.Basic.map((item) => (

                          <h6><label>Github : {item.git_id} </label></h6>
          ))}<br/>
        
         {data.Basic.map((item) => (

                          <h6><label>Linkedin : {item.link_id} </label></h6>
         ))} <br/>
          {data.Basic.map((item) => (

                          <h6><label>Contact : {item.contact}</label></h6>
          ))
          }<br/>
         {data.Location.map((item) => (

                          <h6><label>Location:{item.location} </label></h6>
         ))}<br/>
                         
                        </FormGroup>
                      </Col>  
                   
                  </div>
                </CardBody>
                <br/>
                <br/>
                <br/>
                <br/>
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
                    
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody >
                  <div className="chart-area" >
                  <Col className="pr-1" >
                        <FormGroup>
          {data.Basic.map((item) => (
                          <h6><label>Skills : </label>{item.skills}</h6>
                        ))} <br/>
          {data.Basic.map((item) => (

                          <h6><label>Projects :  </label>{item.projects}</h6>
          ))}<br/>
          {data.Basic.map((item) => (
                          <h6><label>Current-Project :  </label>{item.project}</h6>
          ))}<br/>
          {data.Basic.map((item) => (
                          <h6><label>Duration : </label>{item.duration}</h6>
          ))}<br/>
                          
                        </FormGroup>
                      </Col> 
                    {/* <Bar
                      data={dashboard24HoursPerformanceChart.data}
                      options={dashboard24HoursPerformanceChart.options}
                    /> */}
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
          <br/>
          <br/>
          <Row>
            <Col xs={12} md={4}>
              <Card className="card-chart" style={{borderRadius:"8px"}}>
                <CardHeader>
                  <h5 className="card-category">Activities</h5>

                  <CardTitle tag="h4">Hobbies-Languages:</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-outline-default btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem onClick={this.goto_edit.bind(this)}>Edit</DropdownItem>
                    
                    </DropdownMenu>
                  </UncontrolledDropdown>
            
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                  <Col className="pr-1" >
                        <FormGroup>
                  {data.Basic.map((item) => (

                          <h6> <label>Hobbies :  </label>{item.hobbies}</h6 >
                        ))} <br/>
                  {data.Basic.map((item) => (

                          <h6><label>Languages :  </label>{item.language}</h6>
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
            <Col xs={8} md={4}>
            <Card className="card-chart" style={{borderRadius:"6px"}}>
                <CardHeader>
                  
                  <h5 className="card-category">Handles</h5>
                  <CardTitle tag="h4">Social-Handles</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-outline-default btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem onClick={this.goto_edit.bind(this)}>Edit</DropdownItem>
                   
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                  <Col className="pr-1" >
                        <FormGroup>
        <Button color="link">< a href="https://linkedin.com" className="fa fa-linkedin"></a> </Button> 
                         
                        </FormGroup>
                      </Col>
                      
                      
                      <Col className="px-3" >
                        <FormGroup>
                          
                          
          <Button color="link" ><a href="https://facebook.com" class="fa fa-facebook"></a> </Button>

                        </FormGroup>
                      </Col>

                      <Col className="px-3" >
                        <FormGroup>
          <Button color="link"><a href="https://github.com"  className="fa fa-github"></a> </Button>
                         
                        </FormGroup>
                      </Col>
                  
                  
                   
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons arrows-1_refresh-69" />Just-Updated
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
function mapStateToProps(state) {


  return {
    response: state.postReducer.user_search_data,


  }
}
export default connect(mapStateToProps, { User_Search })(Searched_user);


