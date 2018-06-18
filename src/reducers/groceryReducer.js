import { ADD_GROCERY, REMOVE_GROCERY } from '../actions'
import  groceryItemsList from '../data/groceryItems.json'
import  { addToBag } from './helper'

export default function groceryReducer (state = groceryItemsList, action) {

    switch(action.type) {
        
        case ADD_GROCERY:
        let groceryFilter = state.filter(item => item.id !== action.payload)
        return groceryFilter;

        case REMOVE_GROCERY:
        groceryFilter = [...state, addToBag(action.payload)];
        return groceryFilter;
        
        default:
        return state;
    }
}

 