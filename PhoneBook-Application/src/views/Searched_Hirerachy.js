import React, { Component } from 'react';
import $ from 'jquery'
import './Orgchart.css';
import { connect } from "react-redux";

//importing api function, calling from redux-action
import { User_hierarchy } from '../action/postActions';


class Searched_Hirerachy extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isloaded: false,
      items: [],
      aa: '',

    };
  }

  componentDidMount() {
    const client_id = sessionStorage.getItem('lelo');
    this.$el = $(this.el);
    this.props.User_hierarchy(client_id)
    .then(response => {
  
        const view = this.props.response;
        this.setState({
          isloaded: true,
          items: view
        })

      this.$el.orgchart({
        'data': view,
        'nodeContent': 'email',
        'pan': true,
        'zoom': false,
        'nodeTitle': 'name',
        'toggleSiblingsResp': false,
        'visibleLevel': 999,
        'chartClass': '',
        // 'exportButton': true,
        // 'exportFilename': 'OrgChart',
        // 'exportFileextension': 'png',
        'parentNodeSymbol': 'fa-users',
        'draggable': false,
        'direction': 't2b',
        'zoominLimit': 7,
        'zoomoutLimit': 0.5
      });
    })
  }
  componentWillUnmount() {
    this.$el.empty();
  }

  render() {
  


    return (
      
      <div id="chart-container" ref={el => this.el = el}></div>
    );
    
  }
}


function mapStateToProps(state) {
   
  
  return {
    response: state.postReducer.user_hierarchy,

  }
}

export default connect(mapStateToProps, {User_hierarchy})(Searched_Hirerachy);

