import React from "react";
// react plugin used to create charts
// import { Line, Bar } from "react-chartjs-2";
import { Redirect } from 'react-router-dom';
import Modal from 'react-modal';
//search Bar
import '../assets/css/scroller.css'
//import connection with redux store
import {connect } from 'react-redux'
//importing api call function from action
import {Homepage,Add_Manager,Search_User} from '../action/postActions'
// reactstrap components
import NotificationAlert from "react-notification-alert";
import {
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
  Button,
  FormGroup,
  Input,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

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




var option = {};
option = {
  place: 'br',
  message: (
      <div>
          <div>
            <p>Manager added</p>
              
          </div>
      </div>
  ),
  type: "success",
  icon: "now-ui-icons ui-1_bell-53",
  autoDismiss: 7
}

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
this.props.Homepage()
  .then(res => {
     const user_data = this.props.response
     const user = this.state.isloading;

        this.setState({
          isloaded: !user,
          items: user_data,
          showMenua: false,
        })
      

    })
  }

  showMenu(e) {

    this.setState({

      modalIsOpen: true,

    })

  }
  closeModal() {
    // window.localStorage.removeItem('emails');
    this.setState({ modalIsOpen: false });
    //  window.location.reload();


  }
  closeModal1() {
    // window.localStorage.removeItem('emails');
    this.setState({ modal1IsOpen: false });
     window.location.reload();


  }
  handleChange({ target }) {

    this.setState({ [target.name]: target.value });
    localStorage.setItem("emails", target.value);

  }
  add_manager(item) {
    this.myFunc();
    window.localStorage.removeItem('emails');
    this.props.Add_Manager(item)
    sessionStorage.setItem("search_email", item.email);
    this.setState({ gotoview: true });

  }
  myFunc(){
    this.refs.notify.notificationAlert(option);
  }

  onsubmit(e) {
    e.preventDefault();
    this.props.Search_User
      .then(res => res.json()
      
        .then(json => {
          const searched_data = this.props.search_response

            this.setState({
              isLoaded: true,
              modalIsOpen:false,
              modal1IsOpen: true,
              itemss: searched_data,
              topicBox: '',
            })
          
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
      isloaded, editstate,
      items,
    } = this.state;
    if(editstate){
      return(
        <Redirect to ={'/admin/user-page'} />
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

          <PanelHeader
            size="lg"


            content={<Col md={12}>
              <Card className="card-chart"
                style={{ height: 180, borderRadius: "10px" }}>
                <CardHeader>
                  <h5 className="card-category">Details</h5>
                  {data.User.map((item,index) => (

                  <CardTitle  key={index} tag="h4">About-Me:{item.bio}</CardTitle>
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
            
                    <CardBody>
                    <div className="image">
                    <img alt="..." src={require("assets/img/bg5.jpg")} />
            </div>
                     
                    <div className="author">
         <a href="#pablo" onClick={e => e.preventDefault()}>
         {data.User.map((item,index) => (

                    <img
                    key={index}
                    alt="..."
                    className="avatar border-gray"
                    src={item.image_url}
                    />
         ))}
            </a>
                    
                  <Col className="pr-1" >
                    <FormGroup>
                      {data.User.map((item,index) => (

                    <h6 key={index}><label>{item.name}</label></h6>
                     ))} 
                    </FormGroup>
                  </Col>
                

                 <Col className="pr-1" >
                    <FormGroup>
                    {data.User.map((item,index) => (

                    <h6 key={index}><label>{item.emp_id}
                    </label></h6>
                    ))}

                    {data.User.map((item,index) => (

                    <h6  key={index}><label>{item.email}</label></h6>
                    ))}
                    </FormGroup>
                </Col>
                <br/>

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
                                  <NotificationAlert ref="notify" />
                                  <button style={{ backgroundColor: "white", marginLeft: "325px", marginTop: "-36px" }} onClick={this.add_manager.bind(this, item, index)} variant="Danger">Add Manager</button>

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
                        {data.Manager.map((item,index) => (
                         
                          <h6 key={index}><label>Email : {item.email} </label></h6>
                        ))}
                         
                        </FormGroup>
                      </Col>

                        <br/>
                      <Col className="px-3" >
                        <FormGroup>
                        {data.Manager.map((item,index) => (

                          <h6 key={index}><label>Name : {item.name}</label></h6>
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
function mapStateToProps(state){
  return{
    response: state.postReducer.homepage_data,
    search_response:state.postReducer.search_result_data,
  }
}

export default connect(mapStateToProps , {Homepage,Add_Manager,Search_User}) (Dashboard);
