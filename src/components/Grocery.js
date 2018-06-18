import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGroceryById, removePocketMoneyById } from '../actions'


 class Grocery extends Component {
  render() {
    return (
      <div className='col-md-4' style={{background:'lightblue', borderRadius:'5px', minHeight:'630px', marginBottom:'20px'}}>
      <h2 className='text-center'>Grocery Items</h2>
        <ul className="list-group">

            {this.props.grocery.map((item) => {

                return <li 
                style={{cursor:'pointer', textAlign:'center', fontSize:'15px'}}
                key = {item.id} 
                className="list-group-item"
                onClick={()=>{
                    this.props.addGroceryById(item.id);
                    this.props.removePocketMoneyById(item.id)
                }
            }
                >
                <strong style={{margin:'5px'}}> { item.name } </strong> 
                <img src={item.img} alt='' style ={{ width:'60px', height:'60px',margin:'5px'}}/>
                 <span style={{margin:'5px'}} className="label label-success">{item.cost} $</span> 
                 <span style={{margin:'5px'}} className="label label-warning">{item.calories} kcal</span> 
                 <span style={{margin:'5px'}} className="label label-info">{item.weight} mg</span>
                </li>
                
            })
            }
            
            
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
    return {
        grocery : state.groceryReducer
    }
}

export default connect(mapStateToProps, { addGroceryById, removePocketMoneyById } )(Grocery);