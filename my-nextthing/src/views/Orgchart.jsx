import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'
import jQuery from 'jquery';
import './Orgchart.css';
import axios from 'axios';
import MDSpinner from "react-md-spinner";
import id from 'Service_File/ngrok';
//import {orgchart} from 'orgchart'
const orgchart = require("orgchart");

class Orgchart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isloaded: false,
      items: [],
      aa: '',

    };
  }

  componentDidMount() {
    const client_id = localStorage.getItem('edit_id');
    this.$el = $(this.el);
    const response = axios.get(`https://${id}.ngrok.io/newhierarchy?client_id=${client_id}`, {
      mode: "cors",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }).then(res => {
      console.log(res.data[0]);
      console.log(res.status);
      if (res.status === 200 || res.data.status === 201 || res.data.status === 202) {
        const view = res.data[0];
        this.setState({
          isloaded: true,
          items: view
        })
      }
      else {
        localStorage.clear();
        sessionStorage.clear();
      }
      console.log(this.state.items);

      this.$el.orgchart({
        'data': res.data[0],
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


function Example() {
  return (
    <div>
      <Orgchart />
    </div>
  );
}


ReactDOM.render(
  <Example />,
  document.getElementById('root')
);
export default Orgchart;