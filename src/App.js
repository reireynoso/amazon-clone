import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home';
import Checkout from './components/Checkout'
import Login from './components/Login'
import Payment from './components/Payment'

import {auth} from './firebase'
import {useStateValue} from './StateProvider'


const App = () => {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      // console.log(authUser)
      if(authUser){
        // user is logged in/ was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (
  <Router>
    <div className="app">
      <Switch>
        <Route path="/login">  
          <Login/>
        </Route>
        <Route path="/checkout">
          <Header/>  
          <Checkout/>
          <Footer/>
        </Route>
        <Route path="/payment">
          <Header/>  
          <Payment/>
          <Footer/>
        </Route>
        <Route path="/">
          <Header/>
          <Home/>
          <Footer/>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
