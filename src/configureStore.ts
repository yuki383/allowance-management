import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools, devToolsEnhancer } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, devToolsEnhancer({}));
  let persistor = persistStore(store);
  return { store, persistor }
}

export const store = createStore(persistedReducer, devToolsEnhancer({}));
export const persistor = persistStore(store);