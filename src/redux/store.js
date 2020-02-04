import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import menuReducer from './menu/menuReducer'
const store = createStore(menuReducer, applyMiddleware(logger))

export default store