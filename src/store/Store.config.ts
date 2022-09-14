import { legacy_createStore as createStore } from "redux";

import { RootReducer } from "./Root.reducer";

export const Store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export type StoreState = ReturnType<typeof Store.getState>;
