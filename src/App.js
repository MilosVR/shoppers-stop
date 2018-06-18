import React, { Component } from 'react';
import './App.css'
import Grocery from "./components/Grocery";
import ShoppingBag from'./components/ShoppingBag'
import Stats from'./components/Stats'
import PocketMoney from './components/pocketMoney'
import Footer from './Footer'
import { firebaseApp } from './firebase';



class App extends Component {

  
  signOut(){
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div className='container'>
        <div className='row text-center'>
        <div className="jumbotron">
            <button className='btn btn-danger'
            onClick={() => this.signOut}
            >Log Out  
            </button>

            <h1>Shoppers stop!</h1>
            <p>Where you can get your dailly groceryes</p>
            
        </div>
        </div>
        <PocketMoney/>
        <div className='row'>
            <Grocery/>
            <ShoppingBag/>
            <Stats/>
        </div>
        <Footer/>
        
      </div>
    );
  }
}

export default App;
