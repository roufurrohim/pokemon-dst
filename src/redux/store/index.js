// ** Redux, Thunk & Root Reducer Imports
import thunk from "redux-thunk"
import reducer from "../reducers"
import { createStore, applyMiddleware, compose } from "redux"

// ** init middleware
const middleware = [thunk]

// ** Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// ** Create store
const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(...middleware))
)

export { store }
