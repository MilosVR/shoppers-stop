import React, { Component } from 'react'
import { Carousel} from 'react-bootstrap'
import './Carousel.css'
import { Link } from 'react-router-dom'

export default class CarouselHome extends Component {
  render() {
    return (
      
          
          
        <Carousel>
            <Carousel.Item>
                <img height={500} alt="1200x600" src="assets/gas.jpg" />
                <Carousel.Caption>
                <h3><b>Get your FREE coupn here</b></h3>
                <Link to='/App'><img className='imgCoupon' width={100} height={100}  src='assets/coupon.png' alt='' style={{cursor:'pointer'}}/></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height={500} alt="1200x600" src="/assets/gas4.jpg" />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height={500} alt="1200x600" src="assets/gas5.jpg" />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    
    )
  }
}
