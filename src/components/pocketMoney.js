import { connect } from 'react-redux'

import React, { Component } from 'react'


class PocketMoney extends Component {

    
    
  render() {
    return (
      <div>
        <div className='row text-center'>
          {this.props.pocketMoney < 0 ? <h2 className='text-center'>You are over the <span style={{color:'red',fontSize:'Lucida Sans'}}><b>LIMIT!</b></span></h2> : <h2>You have <span className='label label-success'>{this.props.pocketMoney}$</span> amount to spend on grocery today</h2>}
          <hr/>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
    return {
        pocketMoney : state.spendingReducer
    }
}

export default connect(mapStateToProps, null )(PocketMoney);