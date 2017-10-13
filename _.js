// the main JS File 
// import Libraries
import React from "react"; 
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

// Import Store
import {store} from "./store";

// Import App
import {App} from "./app";

// Render the main application (which is in the Router) with the main store
ReactDOM.render(
    <Provider store={store}>
        {App}
    </Provider>, 
)