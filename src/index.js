import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";
import "./Assets/Style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const initialState = {};

const middleware = [thunk];

ReactDOM.render(
	<Provider store={createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))}>
		<App />
	</Provider>,
	document.getElementById("root")
);

serviceWorker.register();
