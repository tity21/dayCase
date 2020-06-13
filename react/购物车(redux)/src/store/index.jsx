import { createStore, combineReducers } from 'redux'
import Reducer from './reducer.jsx'

const reducers = new combineReducers({
    Reducer
})

const Store = createStore(reducers)
export default Store