import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import groceryReducer from './groceryReducer'
import shoppingBagReducer from './shoppungBagReducer'
import spendingReducer from './spendingReducer'


const rootReducer = combineReducers({
    groceryReducer,
    shoppingBagReducer,
    spendingReducer,
    form: formReducer
})

export default rootReducer;