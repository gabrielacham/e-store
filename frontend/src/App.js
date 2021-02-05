import React from "react";
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './views/Login';
import Register from './views/Register';
import { PrivateRoute } from './components/PrivateRoute';
import Manager from "./views/Manager";
import AdminStore from "./views/AdminStore";
import Admin from "./layouts/Admin.js";


class AppConnect extends React.Component {
  render(){
    return(
      <Switch>
        <PrivateRoute exact path="/adminstore" component={AdminStore} />
        <PrivateRoute exact path="/manager" component={Manager} />
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Redirect from="*" to="/admin/home" />
      </Switch>
    );
  }
}

const mapStateToProps = state => {};

const mapDispatchToProps = {};

const App = connect(mapStateToProps, mapDispatchToProps)(AppConnect);
export default App;

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
