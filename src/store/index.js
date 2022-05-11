import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

//thunk middleware is used to intercept actions so as to make API call before dispatching result to reducer
const middleware = [thunk];
const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

export default store;
