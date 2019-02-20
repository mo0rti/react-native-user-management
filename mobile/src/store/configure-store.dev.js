import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from "@Reducers";

let logOptions = {
    //predicate: (getState, action) => action.type.includes('ACCOUNT23'),
    diff: true
};
const logger = createLogger(logOptions);

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    blacklist: ['statistics']
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = createStore(persistedReducer, undefined, applyMiddleware(thunk/*, logger*/));
export const persistor = persistStore(store);
