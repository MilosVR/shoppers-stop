import React, { Component } from 'react'
import {firebaseApp} from './firebase'
import { Link } from 'react-router-dom'



export default class SignUp extends Component {

      state={
        email:'',
        password:'',
        error: {message:''}
      }
      signUp= () => {
          const email = this.state.email;
          const password = this.state.password;
          firebaseApp.auth().createUserWithEmailAndPassword(email, password)
          .catch(error => {
            this.setState({error:error})
            
          })

      }
      
  render() {
    return (
      <div className='from-inline container '>
       <h2>Sign up</h2>
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
        onChange={(event) => this.setState({password:event.target.value})} 
        />
        <button
        className='btn btn-primary' style={{margin:'5px'}}
        type='button'
        onClick= {() => this.signUp()}
        >
            Sign up
        </button>
       </div>
       <div>{this.state.error.message}</div>
       <div><Link to={'/SignIn'}>Already a user?</Link></div>
      </div>
    )
  }
}
