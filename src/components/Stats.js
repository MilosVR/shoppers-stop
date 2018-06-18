import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Stats.css'
import Modal from 'react-modal';

const customStyles = {
  content : {
    width                 : '600px',
    height                : '700px',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            : 'skyBlue', 
  }
};

class Stats extends Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
      
    };
    
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    if (this.cost() > 0 && this.cost()<=50 ) {
      this.setState({modalIsOpen: true});
      
    }
    
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  

  cost() {
    let totalCost = 0;
    this.props.stats.map(item => totalCost += item.cost);
    return totalCost;
  }
  calories() {
    let totalCalories = 0;
    this.props.stats.map(item => totalCalories += item.calories);
    return totalCalories;
  }
  weight() {
    let totalWeight = 0;
    this.props.stats.map(item => totalWeight += item.weight);
    return totalWeight;
  }
 
  AllStats () {
    let imgStats = this.props.stats.map(item => <ul className="list-group"><li key={item.id} className="list-group-item"><li className="list-group-item" style={{background:'#f49542', color:'white', fontSize:'20px'}}><b>{item.name}</b></li> <br/> <img src={item.img} alt='' style={{height:'200px', width:'300'}}/></li></ul>);
    return imgStats;
  } 
 
  
  

  render() {
    const isEnabled = this.cost() > 0 && this.cost() <= 50;
    return (
        
        
      <div className='col-md-2' style={{background: '#188bce',marginLeft:'5px'}}>

      <Modal
          isOpen={this.state.modalIsOpen}
          style={customStyles}
          onRequestClose={this.closeModal}
          
        >       
        
        <div className='text-center'> 
        {this.AllStats ()}
        <div className="list-group-item" style={{background:'rgb(38, 170, 82)', color:'white', margin:'10px', fontSize:'20px'}}>Total cost : <b>{this.cost()} $</b></div> 
        </div> 
        <button onClick={this.closeModal}>Save</button>
        <button onClick={this.closeModal}>Close</button>
      </Modal>

      <h2 className='text-center' style={{color:'white'}}><b>Calculation table</b></h2>
        <ul className="list-group">
            
            <li className="list-group-item">Calories  <b>{this.calories()}</b> kcal</li>
            <li className="list-group-item">Weight  <b>{this.weight()}</b> mg</li>
            <li className="list-group-item costStyle"><b>Cost {this.cost()}> $</b></li>
            <button  className="btn btn-lg btn-warning" onClick={this.openModal} disabled={!isEnabled}><b>Order now</b></button>
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
      stats : state.shoppingBagReducer,
      pocketMoneyValue : state.spendingReducer
  }
}

export default connect(mapStateToProps, null )(Stats);