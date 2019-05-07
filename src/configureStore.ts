import { createStore, applyMiddleware } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import rootReducer from "./reducers";

createStore(rootReducer, devToolsEnhancer({}))
