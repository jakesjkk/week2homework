/* eslint-disable */


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';


// let wordInfo = [
//     { word : 'explain', pronunciation : word, content : '설명하다', example : '문장1', interpret: '해석1' },
//     { word : 'go', pronunciation : word, content : '가다', example : '문장2', interpret : '해석2'},
//     { word : 'make', pronunciation : word, content : '만들다', example : '문장3', interpret : '해석3'}
// ]

let store = createStore(()=>{ return [
    { word : 'explain', pronunciation : 'pro1', content : '설명하다', example : '문장1', interpret: '해석1' },
    { word : 'go', pronunciation : 'pro2', content : '가다', example : '문장2', interpret : '해석2'},
    { word : 'make', pronunciation : 'pro3', content : '만들다', example : '문장3', interpret : '해석3'}
]  });




ReactDOM.render(

    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>        
        </BrowserRouter>
    </React.StrictMode>, 



document.getElementById('root'));

