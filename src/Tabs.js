import { Tab, Tabs } from 'react-bootstrap'
import React, { Component } from 'react'


export default class TabsContainer extends Component {


  render() {
    return (
      <div>
        
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="About"  className="row" style={{height: '550px'}}>
              
              <div className='col-md-8'  >
              <h2>Gas station</h2>
              <p>Clark Brands, LLC (based in Lisle, Illinois) licenses both the Clark and Crown gasoline brands, and we are a trusted petroleum payment processing solution to independent petroleum marketers and retailers throughout the United States.<br/>

                  The Clark and Crown brand licensing is ideal for marketers who want to offer a low-cost alternative brand to entrepreneurial dealers. Our licensees manage their own petroleum supply, purchasing at their lowest available cost each day. Clark and Crown branded programs combined with unbranded fuel allow dealers to make more money.

                  Clark Brands offers a petroleum payment processing solutions to unbranded dealers. Clark processes transactions for over 1,200 locations every day.<br/> Our processing statements are simple and consolidated with no hidden fees.

                  Originally a Great Lakes region company, today Clark Brands operates in 32 states and the District of Columbia. Our reach has expanded from Minnesota to Louisiana, from Maryland to Arizona.

                  Being independent doesn’t mean you have to stand alone.
                  
                  </p>
                  </div>
              <div className='col-md-4 text-center tabOne' >    
              <img src='assets/gas3.jpg' width={300} height={150} alt=''/>
                <p><i>
                Clark Brands is made up of nearly 1,000 retailers in 32 states and the District of Columbia. Our stores create jobs and service thousands of customers like you each day. As independent merchants, Clark and Crown locations have close ties to their local community. We are proud of our local focus, and we look forward to serving you in the future.
                  </i></p>
              </div>
              <div className='col-md-12'>
              <p>Clark Brands, LLC (based in Lisle, Illinois) licenses both the Clark and Crown gasoline brands, and we are a trusted petroleum payment processing solution to independent petroleum marketers and retailers throughout the United States.<br/>

                  The Clark and Crown brand licensing is ideal for marketers who want to offer a low-cost alternative brand to entrepreneurial dealers. Our licensees manage their own petroleum supply, purchasing at their lowest available cost each day. Clark and Crown branded programs combined with unbranded fuel allow dealers to make more money.

                  Clark Brands offers a petroleum payment processing solutions to unbranded dealers. Clark processes transactions for over 1,200 locations every day.<br/> Our processing statements are simple and consolidated with no hidden fees.

                  Originally a Great Lakes region company, today Clark Brands operates in 32 states and the District of Columbia. Our reach has expanded from Minnesota to Louisiana, from Maryland to Arizona.

                  Being independent doesn’t mean you have to stand alone.
                  </p>
                  <br/>
                  <p>Clark Brands operates in 32 states and the District of Columbia. Our reach has expanded from Minnesota to Louisiana, from Maryland to Arizona.

                    Being independent doesn’t mean you have to stand alone.</p>
                  </div>
            </Tab>
            <Tab eventKey={2} title="Contact"  className="row" style={{height: '550px'}}>
              <div className='col-md-7'>
              
              <div className='text-center' style={{background: 'linear-gradient(white, gray)',height:'60px', verticalAlign:'middle'}} >
              <h2 style={{color:'white', paddingTop:'20px', marginTop:'5px'}}>Contact Us</h2>
              </div>
              <hr/>
              <br/>
              <h4>For more information regarding Clark Brands and Crown, please contact our customer service team at 877-GO-CLARK or customerservice@clarkbrands.com. </h4>
                <br/>
                <ul className='list-group'>
                  <li className='list-group-item'>Clark Brands, LLC</li>
                  <li className='list-group-item'>4200 Commerce Ct, Suite 350 </li>
                  <li className='list-group-item'>Lisle, IL 60532 </li>
                  <li className='list-group-item'>Main Phone: 630.355.8918</li>
                  <li className='list-group-item'>customerservice@clarkbrands.com </li>
                  <li className='list-group-item'>sales@clarkbrands.com </li>
                  </ul>
                  <br/>
              Contact us today to see why Clark is The Choice of Independents. You can also call 877-GO-CLARK
              
              </div>
              <div className='col-md-5 text-center'>
              <img src='/assets/contactImg.jpg' alt='' style={{marginTop:'70px'}}/>
              <p> <i>Special offers to our 5 customer</i></p>
              </div>
            </Tab>
            <Tab eventKey={3} title="Gallery"  className="row" style={{height: '550px'}}>
            <div className='col-md-12'>dsdsdd</div>
            </Tab>
          </Tabs>
      </div>
    )
  }
}
