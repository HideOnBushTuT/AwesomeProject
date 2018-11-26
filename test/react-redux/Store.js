import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import reducer  from './Reducer';

const initValues = {
    'first': 100,
    'second': 80,
    'third': 40,
};

// const logger = store => next => action => {
//     console.group(action.type)
//     console.info('dispatching', action)
//     let result = next(action)
//     console.log('next state', store.getState())
//     console.groupEnd()
//     return result
// }



const store = createStore(reducer, initValues, applyMiddleware(logger));

export default store;

