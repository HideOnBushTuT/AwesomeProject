import { createStore } from 'redux';

import reducer  from './Reducers';

const initValues = {
    'first': 100,
    'second': 80,
    'third': 40,
};

const store = createStore(reducer, initValues);

export default store;

