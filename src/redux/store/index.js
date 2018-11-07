// node modules
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";
//custom modules
import contacts from "../components/reducers/contactReducer";
// This will help me state the state for the store, I will set file contactReducer.js later on.
const reducers = combineReducers({
 contacts
})
const middlewares = [thunk, promise]
const store = createStore(
 reducers,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
 applyMiddleware(...middlewares)
)
export default store;