import { createStore } from 'redux'
import menuReducer from './menu/menuReducer'
const store = createStore(menuReducer)

export default store
