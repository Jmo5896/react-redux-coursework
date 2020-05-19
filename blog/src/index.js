import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import App from './components/App';
import reducers from './reducers';


// creating redux store and plugging in redux-thunk to said store
// whenever and action is dispatched it will gor thru redux-thunk first, and then on to the reducers
// redux-thunk lets your actions return functions this is key for having actions that make api requests
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);