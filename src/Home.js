import React, { Component } from 'react'
import CarouselHome from './Carousel'
import './Home.css'

import TabsContainer from './Tabs'
import Footer from './Footer'



export default class Home extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
        <CarouselHome/>
        </div>
        <div className='row text-justify' >
          <TabsContainer/>
        </div>
        
        <Footer/>
      </div>
    )
  }
}
