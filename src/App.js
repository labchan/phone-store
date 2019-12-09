import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Detail from './components/Detail'
import Cart from './components/Cart/Cart'
import Default from './components/Default'
import Modal from './components/Modal'



class App extends Component {
  render(){
    return(
      <React.Fragment>
         <Navbar />
         <Switch>
           <Route exact path='/' component={ProductList}/>
           <Route path='/detail' component={Detail}/>
           <Route path='/cart' component={Cart}/>
           <Route component={Default}/>
         </Switch>

         <Modal/>
      </React.Fragment>
    )
  }
  
}

export default App;
