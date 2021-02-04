import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Manager from "../../views/Manager";
import AdminStore from "../../views/AdminStore";
import Admin from "../../layouts/Admin.js";

export const PrivateRoute = ({ ...rest }) => (
  <Switch>
     {RenderView ({ ...rest })}
  </Switch>
)

function RenderView ({ ...rest }) {
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
     if (user.tipo === 'A'){
       view = {
         path: '/',
         component: Admin
       }}
     <Route
       exact
       path={view.path}
       component={view.component}
       {...rest}
     />
   }
  else
   <Redirect from="/" to="/home" />

}
