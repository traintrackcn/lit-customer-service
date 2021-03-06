import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

import LITStore from 'lit-react/src/LITStore';
// const logger = createLogger();
import LITRootReducer from './model/LITRootReducer';
// import { pref } from './pref';

export const r = new LITRootReducer();

const rootReducer = combineReducers({
    r: r.reducer
});

export const store = createStore(rootReducer,
    applyMiddleware(
        thunk, // lets us dispatch() functions
        // logger// neat middleware that logs actions
    )
);


// export const store = createStore(rootReducer,
//     compose(
//         applyMiddleware(thunk),
//         offline(offlineConfig)
//     )
// );





const s = new LITStore(store);
s.r = r;

// pref.s = s;

const appendKeyValueToReducer = (reducer, key, value) => {
    // console.log('appendKeyValueToReducer key -> '+key+' value'+value);
    reducer[key] = value;

    let subReducers = reducer.subReducers;
    // console.log('subReducers -> '+JSON.stringify(subReducers, null, 2));
    for (const subKey in subReducers) {
        const subReducer = subReducers[subKey];
        appendKeyValueToReducer(subReducer, key, value);
    }
        
}

appendKeyValueToReducer(r, 's', s);
appendKeyValueToReducer(r, 'r', r);

export default s;





