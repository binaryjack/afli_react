import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // <= in order to use with

import CommonReducer from './Common/CommonReducer';

export const CommonStore = createStore(CommonReducer, composeWithDevTools());
export type AppDispatch = typeof CommonStore.dispatch;
