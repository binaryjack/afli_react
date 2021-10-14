import { CommonActions, CommonActionTypes } from './CommonActions';

export interface ICommonState {
  version: number;
}

const INITIAL_STATE: ICommonState = {
  version: 1,
};

const CommonReducer = (
  state: ICommonState = INITIAL_STATE,
  action: CommonActions,
) => {
  switch (action.type) {
    case CommonActionTypes.Increase:
      return {
        ...state,
        version: action.payload + 1,
      };
    case CommonActionTypes.Decrease:
      return {
        ...state,
        version: action.payload - 1,
      };
  }
};

export default CommonReducer;
