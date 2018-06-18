import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
         <div className='row text-center footerHome'>

            <div className='col-md-4 text-center'>
                <p>Clark Brands, LLC </p>
                <p>4200 Commerce Ct, Suite 350 </p>
                <p>Lisle, IL 60532 </p>
            </div>

            <div className='col-md-4 text-center'>
            <p>Main Phone: 877 GO CLARK</p>
            <img src='assets/fot1.jpg' width='80' height='80' alt='' />
            { ' ' }
            <img src='assets/fot2.jpg' width='80' height='80' alt='' />
            </div>

            <div className='col-md-4 text-center'>
            <p>customerservice@clarkbrands.com</p>
            <p>  sales@clarkbrands.com</p>
            <img src='assets/fb1.png' width='40' height='40' alt='' />
            { ' ' }
            <img src='assets/tw.png' width='40' height='40' alt='' />
            { ' ' }
            <img src='assets/in.png' width='40' height='40' alt='' />
            </div>
            </div>  
      </div>
    )
  }
}
