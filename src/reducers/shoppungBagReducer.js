import { ADD_GROCERY, REMOVE_GROCERY } from '../actions'
import  { addToBag } from './helper'


export default function shoppingBagReducer (state = [], action) {

    switch(action.type) {
        
        case ADD_GROCERY:
        let shoppingBag = [...state, addToBag(action.payload)];
        return shoppingBag;

        case REMOVE_GROCERY:
        shoppingBag = state.filter(item => item.id !== action.payload)
        return shoppingBag;

        default:
        return state;
    }
}

 