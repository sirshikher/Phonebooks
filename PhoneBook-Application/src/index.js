import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.2.0";
import "assets/css/demo.css";
import {Provider} from 'react-redux';
import store from './Store/store';
import PostForm from './components/Login_Page/postform';
import AdminLayout from "layouts/Admin.jsx";

const hist = createBrowserHistory();

ReactDOM.render(<Provider store={store}>
  <Router history={hist}>
    <Switch>
      <Route exact path='/' name="Login" component={PostForm}/>
      <Route  render={props => <AdminLayout {...props}/>}/>
      {/* <Route path="/user-page" layout='admin' component={UserPage} /> */}

    </Switch>
  </Router>,
</Provider>, document.getElementById("root")
);
if(module.hot){
  module.hot.accept()
}