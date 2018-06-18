import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeGroceryById, addPocketMoneyById } from '../actions'


class ShoppingBag extends Component {

    displayShoppingBag(){

        if (this.props.shoppingBag.length > 0) {
            return(
                <ul className="list-group">

             {this.props.shoppingBag.map((item ) => {

                    return <li 
                    style={{cursor:'pointer',  textAlign:'center', fontSize:'15px'}}
                    key = {item.id} 
                    className="list-group-item"
                    onClick={()=>{
                        this.props.removeGroceryById(item.id);
                        this.props.addPocketMoneyById(item.id)
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
                            )
                        }else{
                            return(
                                <ul className="list-group">             
                                <li className="list-group-item">No items selected</li>                                
                    </ul>
                )
            }
        }

  render() {    
    return (
      <div className='col-md-4' style={{background:'lightblue', borderRadius:'5px', marginBottom:'20px', marginLeft:'5px'}}>
      <h2 className='text-center'>Shopping Bag Items</h2>
      {this.displayShoppingBag()}
      </div>
    )
  }
}


function mapStateToProps (state) {
    return {
        shoppingBag : state.shoppingBagReducer
    }
}

export default connect(mapStateToProps, { removeGroceryById, addPocketMoneyById } )(ShoppingBag);