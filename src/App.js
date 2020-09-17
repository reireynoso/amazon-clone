import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import 'react-notifications-component/dist/theme.css';

import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Payment from './components/Payment';
import Orders from './components/Orders';
import BackToTop from './components/BackToTop';
import ResultContainer from './components/ResultContainer';

import {auth} from './firebase'
import {useStateValue} from './StateProvider'

import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'

const promise = loadStripe(process.env.REACT_APP_STRIPE_API);

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

  useEffect(() => {
    
  }, [])

  return (
  <Router>
    <div className="app">
      <Switch>
        <Route path="/categories/:category">  
          <Header/>
          <ResultContainer category={true}/>
          <BackToTop/>
          <Footer/>
        </Route>
        <Route path="/orders">  
          <Header/>
          <Orders/>
          <BackToTop/>
          <Footer/>
        </Route>
        <Route path="/login">  
          <Login/>
        </Route>
        <Route path="/checkout">
          <Header/>  
          <Checkout/>
          <BackToTop/>
          <Footer/>
        </Route>
        <Route path="/payment">
          <Header/>
          <Elements stripe={promise}>
            <Payment/>
          </Elements>  
          <BackToTop/>
          <Footer/>
        </Route>
        <Route path="/">
          <Header/>
          <Home/>
          <BackToTop/>
          <Footer/>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
