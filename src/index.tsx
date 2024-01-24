import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from "./App";
import {Provider} from "react-redux";
import {reduxStore} from "./store/reduxStore";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
            <BrowserRouter>
                <Provider store={reduxStore}>
                <App />
                </Provider>
            </BrowserRouter>
);