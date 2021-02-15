import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const initialState = {};

const middleware = [thunk];

const store = createStore(
    () => [],
    initialState,
    compose(
        applyMiddleware(...middleware),
        window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
    )
)

export default store;