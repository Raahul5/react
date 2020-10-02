import React,{Component} from 'react';
import Register from './auth/Register';
import Login from './auth/Login'
import Home from './auth/home'
import Questionpage from './auth/questionpage'
import ProtectedRoute from './auth/protectedRoute'
import {Switch,Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
    return (
        <div>
           <Switch>
              <Route exact path="/" component={Login}/>
               <Route exact path="/login" component={Login}/>
               <Route exact path="/register" component={Register}/>  
               <Route exact path="/questionpage" component={Questionpage}/> 
              <ProtectedRoute exact path="/home" component={Home}/>
           </Switch>
           <ToastContainer/>
        </div>
    )
}

export default App;