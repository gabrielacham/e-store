import React from "react";
import { history } from './helpers';
import { connect } from 'react-redux';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './views/Login';
import { Register } from './views/Register';
import Manager from "./views/Manager";
import AdminStore from "./views/AdminStore";
import Admin from "./layouts/Admin.js";


class App extends React.Component {
  render(){
    return(
      <Router history={history}>
        <Switch>
          {RenderView()}
          <Route path="/admin/home" component={Admin} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect from="/" to="/admin/home" />
        </Switch>
      </Router>

    );
  }
}

function mapState(state) {
}

const actionCreators = {
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };

function RenderView() {
  if (localStorage.getItem('user')) {
     let user = JSON.parse(localStorage.getItem('user'));
     let view
     if (user.tipo === 'A') {
       view = {
         path: '/manager',
         component: Manager
       }}
     if (user.tipo === 'T'){
       view = {
         path: '/adminstore',
         component: AdminStore
       }}
     if (user.tipo === 'C'){
       view = {
         path: '/admin',
         component: Admin
       }}
     <Route
       exact
       path={view.path}
       component={view.component}
     />
   }
  else
   <Redirect from="/" to="/admin/home" />

}
