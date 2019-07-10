import React from "react";
// react plugin used to create charts
// import { Line, Bar } from "react-chartjs-2";
import axios from 'axios'
import MDSpinner from "react-md-spinner";
import { Redirect, Link } from 'react-router-dom';
import Modal from 'react-modal';
import id from '../Service_File/ngrok'
//search Bar
import '../assets/css/scroller.css'

// reactstrap components
import {
  Buttons,
  Icons,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  form,
  Table,
  Button,
  Label,
  FormGroup,
  Input,
  UncontrolledTooltip
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

import {
  dashboardPanelChart,
  dashboardShippedProductsChart,
  dashboardAllProductsChart,
  dashboard24HoursPerformanceChart
} from "variables/charts.jsx";
// modal style
const customStyles = {
  content: {
    maxHeight: "500px",

    width: "600px",
    height: "400px",
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

Modal.setAppElement('#root')


var style = {
  color: 'white',
  fontSize: 20,
  // font-Family: 'Josefin Sans', cursive;
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isloaded: false,
      items: [],
      topicBox: undefined,
      itemss: [],
      isloa: false,
      aaa: '',
      stat: '',
      editstate:false,

    };
  }


  componentDidMount() {

    const token = sessionStorage.getItem('token_id');
    const logged_client_id = localStorage.getItem('edit_id');
    const response = axios.get(`https://${id}.ngrok.io/homepage?client_id=${logged_client_id}`, {
      mode: "cors",
      headers: {
        'Authorization': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }).then(res => {
      if (res.status === 200 || res.data.status === 201 || res.data.status === 202) {
        const user = this.state.isloaded;
        const persons = res.data;
        this.setState({
          isloaded: !user,
          items: persons,
          showMenua: false,
        })
      }
      else {
        localStorage.clear();
        sessionStorage.clear();
        this.setState({ sessionfail: true })
      }


    }).catch((error) => {
      if (error.response.status) {
        const users = this.state.error;

        this.setState({ error: !users })
      }
    });
  }

  showMenu(e) {

    this.setState({

      modalIsOpen: true,

    })

  }
  closeModal() {
    // window.localStorage.removeItem('emails');
    this.setState({ modalIsOpen: false });
    // window.location.reload();


  }
  closeModal1() {
    // window.localStorage.removeItem('emails');
    this.setState({ modal1IsOpen: false });
    // window.location.reload();


  }
  handleChange({ target }) {

    this.setState({ [target.name]: target.value });
    localStorage.setItem("emails", target.value);

  }
  open(item, index) {
    window.localStorage.removeItem('emails');
    const searched_client_id = localStorage.getItem('edit_id');
    const token = sessionStorage.getItem('token_id');
    const response = axios.put(`https://${id}.ngrok.io/addmanager/${searched_client_id}`, {
      mode: "cors",
      headers: {
        'Authorization': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      manager_id: item.client_id
    }).then(res => {
      console.log('yes');
      if (res.status === 200 || res.data.status === 201 || res.data.status === 202) {
        const user = this.state.isloa;
        const persons = res.data;
        this.setState({
          isloa: !user,
          stat: persons,
        })
      }
      else {
        localStorage.clear();
        sessionStorage.clear();
        this.setState({ sessionfail: true })
      }


    })

    sessionStorage.setItem("search_email", item.email);
    this.setState({ gotoview: true });
    console.log(item.email);
    console.log(index);

  }

  onsubmit(e) {
    e.preventDefault();
    const result = localStorage.getItem('emails');
    console.log(result);

    const token = sessionStorage.getItem('token_id');
    fetch(`https://${id}.ngrok.io/usersearch?name=${result}`, {
      mode: "cors",
      headers: {
        'Authorization': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    })
      .then(res => res.json()
        .then(json => {
          if (res.status === 200 || res.status === 201 || res.status === 202) {

            this.setState({
              isLoaded: true,
              modalIsOpen:false,
              modal1IsOpen: true,
              itemss: json,
              topicBox: '',
            })
          }
          else {
            localStorage.clear();
            sessionStorage.clear();
            this.setState({ gotohome: true })
          }
        })
      )

  }


  gotoedit(){
    this.setState({
      editstate:true,
    })
  }
  render() {
    var {
      isloaded, isloa,stat,editstate,
      items, showMenua
    } = this.state;
    if(editstate){
      return(
        <Redirect to ={'/admin/user-page'} />
      )
    }
  
    if (isloa) {
      
        return (
        <div>
          {
            alert(stat)
            }
          {window.location.reload()}
        </div>);

        
    
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
      // <div style={{height:"100%",margin:"auto",marginTop:"30%"}}>
      //   <center>
      //     <MDSpinner />
      //   </center>
      // </div>
      );

    } else {

      const data = items;

      return (
        <>

          <PanelHeader
            size="lg"


            content={<Col md={12}>
              <Card className="card-chart"
                style={{ height: 180, borderRadius: "10px" }}>
                <CardHeader>
                  <h5 className="card-category">Details</h5>
                  {data.User.map((item) => (

                  <CardTitle tag="h4">About-Me:{item.bio}</CardTitle>
                  ))}
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-outline-default btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    
                    <DropdownMenu right>
                      <DropdownItem >Edit</DropdownItem>

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
          <div className="content">

            <Row>
            <Col md="4" >
                    <Card className="card-user" style={{borderRadius:"8px"}}>
            <div className="image">
                    <img alt="..." src={require("assets/img/bg5.jpg")} />
            </div>
                    <CardBody>
                    <div className="author">
         <a href="#pablo" onClick={e => e.preventDefault()}>
         {data.User.map((item) => (

                    <img
                    alt="..."
                    className="avatar border-gray"
                    src={item.image_url}
                    />
         ))}
            </a>
                    
                  <Col className="pr-1" >
                    <FormGroup>
                      {data.User.map((item) => (

                    <h6><label>{item.name}</label></h6>
                     ))} 
                    </FormGroup>
                  </Col>
                    <br/>

                 <Col className="pr-1" >
                    <FormGroup>
                    {data.User.map((item) => (

                    <h6><label>{item.emp_id}
                    </label></h6>
                    ))}
                    </FormGroup>
                </Col>
           <br/>
                 <Col className="pr-1" >
                    <FormGroup>
                    {data.User.map((item) => (

                    <h6><label>{item.email}</label></h6>
                    ))}
                    </FormGroup>
                </Col>

                    </div>
          </CardBody>
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
              {/* <Col xs={12} md={4}>
                
                <Card className="card-user"style={{borderRadius:"6px"}}>
          
          
          <div className="image">
          
            <img alt="..." src={require("assets/img/bg5.jpg")} />
          </div>
                  <CardHeader>
                    <h5 className="card-category">Details</h5>
                    <CardTitle tag="h4">Basic-Details</CardTitle>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="btn-round btn-outline-default btn-icon"
                        color="default"
                      >
                        <i className="now-ui-icons loader_gear" />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem onClick={this.gotoedit.bind(this)}>Edit-page</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                        <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </CardHeader>
                  <CardBody>
                    <br/>
                    <br/>
                    <div className="chart-area">
                    
                    
                      <Col className="pr-1" >
                        <FormGroup>
                          <h6><label>Name : {data.User[0].name}</label></h6>
                         
                        </FormGroup>
                      </Col>
                         <br/>
                         <br/>
                      <Col className="px-3" >
                        <FormGroup>
                          <h6><label>Designation : {data.Designation[0].designation}</label></h6>
                          
                        </FormGroup>
                      </Col>
                       <br/>
                       <br/>
                      <Col className="px-3" >
                        <FormGroup>
                          <h6><label>Emp-id : {data.User[0].emp_id}</label></h6>
                        
                        </FormGroup>

                      </Col>






                    </div>
                  </CardBody>
                  <br />
                  <br />
                  <CardFooter>
                    <div className="stats">
                      <i className="now-ui-icons arrows-1_refresh-69" /> Just
                      Updated
                  </div>
                  </CardFooter>
                </Card>
              </Col> */}
              <Col xs={12} md={4}>
                <Card className="card-chart" style={{ borderRadius: "6px" }}>
                  <CardHeader>
                    <h5 className="card-category">Manager</h5>
                    <CardTitle tag="h4">Add-Manager</CardTitle>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="btn-round btn-outline-default btn-icon"
                        color="default"
                      >
                        <i className="now-ui-icons loader_gear" />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem onClick={this.showMenu.bind(this)}>Add-Manager</DropdownItem>
                        <Modal

                          isOpen={this.state.modalIsOpen}
                          onRequestClose={this.closeModal}
                          style={customStyles}
                          contentLabel="Learning Modal">
                          <span onClick={this.closeModal.bind(this)}> &times;</span>
                          <br /><br />
                          <form onSubmit={this.onsubmit.bind(this)}>
                            <Input type='text' value={this.state.topicBox} onChange={this.handleChange.bind(this)}></Input>
                          </form>
                        </Modal>
                        <Modal
                          isOpen={this.state.modal1IsOpen}
                          onRequestClose={this.closeModal1}
                          style={customStyles}
                          contentLabel="Learning Modal">
                          <span onClick={this.closeModal1.bind(this)}>&times;</span>
                          <br /><br />
                          {this.state.itemss.map((item, index) => (
                            <ul>
                              <li key={`${item.name}_{item.email}`}>
                                <div>
                                  <b> {item.name}</b><br></br>Email - {item.email}

                                  <button style={{ backgroundColor: "white", marginLeft: "325px", marginTop: "-36px" }} onClick={this.open.bind(this, item, index)} variant="Danger">Add Manager</button>

                                </div>
                              </li>
                              <br /><br />
                            </ul>


                          ))}

                        </Modal>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Col className="pr-1" >
                        <FormGroup>
                          <br/>
                        {data.Manager.map((item) => (
                         
                          <h6><label>Email : {item.email} </label></h6>
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
                        {data.Manager.map((item) => (

                          <h6><label>Name : {item.name}</label></h6>
                        ))}
                          {/* <Input

                            type="text"
                          /> */}
                        </FormGroup>
                      </Col>


                      {/* <Line
                      data={dashboardAllProductsChart.data}
                      options={dashboardAllProductsChart.options}
                    /> */}
                    </div>
                  </CardBody>
                  <br />
                  <br/>

                  <CardFooter>
                    <div className="stats">
                      <i className="now-ui-icons arrows-1_refresh-69" /> Just
                      Updated
                  </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col xs={8} md={4}>
                <Card className="card-chart" style={{ borderRadius: "6px" }}>
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
                        <DropdownItem onClick={this.gotoedit.bind(this)}>Edit</DropdownItem>
                      
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Col className="pr-1" >
                        <FormGroup>
                          <Button color="link" width="50"><a href={data.User[0].link_id} className="icon-button linkedin" style={{
                            color: "black"
                          }}>
                            <i className="fa fa-linkedin"></i>
                            <span></span>
                          </a> </Button>

                        </FormGroup>
                      </Col>


                      <Col className="px-3" >
                        <FormGroup>




                          <Button color="link" ><a href="https://facebook.com" className="icon-button facebook" style={{
                            color: "black"
                          }}>
                            <i className="fa fa-facebook"></i>
                            <span></span>
                          </a> </Button>
                        </FormGroup>
                      </Col>

                      <Col className="px-3" >
                        <FormGroup>
                          <Button color="link"><a href={data.User[0].git_id} className="icon-button github" style={{
                            color: "black"
                          }}>
                            <i className="fa fa-github"></i>
                            <span></span>
                          </a> </Button>

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

export default Dashboard;
