import React, { Component } from 'react'
import {firebaseApp} from './firebase'
import { Link } from 'react-router-dom'


export default class SignIn extends Component {

      state={
        email:'',
        password:'',
        error: {message:''}
      }
      signIn= () => {
          const email = this.state.email;
          const password = this.state.password;
          firebaseApp.auth().signInWithEmailAndPassword(email, password)
          .catch(error => {
            this.setState({error:error})
            
          })

      }
      
  render() {
    return (
      <div className='from-inline container '>
       <h2>Sign in</h2>
       <div className='form-group row' >
        <input 
        className='form-control' style={{margin:'5px'}}
        type='text'
        placeholder='email'
        onChange={(event) => this.setState({email:event.target.value})}
        />
        <input 
        className='form-control' style={{margin:'5px'}}
        type='password'
        placeholder='password'
        onChange={(event) => this.setState({password:event.target.value})}     />
        <button
        className='btn btn-primary' style={{margin:'5px'}}
        type='button'
        onClick= {() => this.signIn()}
        >
            Sign in
            
        </button>
        
       </div>
       <div>{this.state.error.message}</div>
       <div><Link to={'/SignUp'}>Sign Up instead?</Link></div>
      </div>
    )
  }
}
