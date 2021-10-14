import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // <= in order to use with
import CommonReducer from './common/reducer';
import { ICommonState } from './common/types';
import UserReducer from './user/reducer';
import { IUserState } from './user/types';

export interface IRootReducer {
  common: ICommonState;
  users: IUserState;
}

export const rootReducer = combineReducers<IRootReducer>({
  common: CommonReducer,
  users: UserReducer,
});

export const CommonStore = createStore(rootReducer, composeWithDevTools());
export type AppDispatch = typeof CommonStore.dispatch;
