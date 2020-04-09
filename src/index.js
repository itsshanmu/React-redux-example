import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './main';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Mainreducer from './reducers/uobreducer'

const store = createStore(Mainreducer);

ReactDOM.render(<Provider store={store}><Main /></Provider>, document.getElementById('root'));




