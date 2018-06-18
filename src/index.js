import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider} from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/reducers'
import { Router , Route, Switch } from 'react-router-dom'
import Home from './Home'
import Navigation from './Navigation'
import SignIn from './SignIn'
import SignUp from './SignUp'
import {firebaseApp} from './firebase'
import history from "./history.js";


const store = createStore(rootReducer);


firebaseApp.auth().onAuthStateChanged(user =>{
    if (user) {
       history.push('/App')
    }else{
        history.replace('/SignIn')
    }
})



ReactDOM.render(
<Provider store={store} >

<Router history={history}>
<div>
<Navigation/>
<Switch>
<Route path='/App' component={App} />
<Route exact path='/' component={Home} />
<Route path='/SignIn' component={SignIn} />
<Route path='/SignUp' component={SignUp} />
</Switch>
</div>    
</Router>

</Provider>,
 document.getElementById('root'));
registerServiceWorker();
