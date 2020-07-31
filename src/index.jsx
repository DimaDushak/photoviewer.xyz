import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContainer from './containers/AppContainer';
import { rootReducer } from './store';

const store = createStore(rootReducer);

window.addEventListener('load', () => {
    ReactDOM.render(
        <Router>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </Router>,
        document.getElementById('root')
    );
});
