// import Libraries
import {createStore, applyMiddleware, compose} from "redux";
import {createLogger} from 'redux-logger'
import createSagaMiddleware from "redux-saga";
import freeze from "redux-freeze";

const initialState = {};

// import all Reducers
import {reducers} from "./reducers";

// import all Sagas
import { sagas } from "./sagas";

// define middlewares
let middlewares = [];

// create and add the saga middleware 
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware); 


//add the freeze and logger dev middleware
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(freeze);
    middlewares.push(createLogger());
}

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
    middleware = compose(middleware, window.devToolsExtension());
}

const enhancer = compose(
  middleware
)

const store = createStore(reducers, initialState, enhancer);

// // Sync history and store, as the react-router-redux reducer
// // is under the non-default key ("routing"), selectLocationState
// // must be provided for resolving how to retrieve the "route" in the state
// const history = syncHistoryWithStore(browserHistory, store);

// expose store to dev window
// if (process.env.NODE_ENV !== 'production') {
    // window.store = store;
// }

// run saga middleware
sagaMiddleware.run(sagas);

// export store and history
export {store};