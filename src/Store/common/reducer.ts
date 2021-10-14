import { CommonActions, CommonActionTypes, ICommonState } from './types';

const INITIAL_STATE: ICommonState = {
  version: 1,
};

const CommonReducer = (
  state: ICommonState = INITIAL_STATE,
  action: CommonActions,
) => {
  console.log(`Type ${action.type}`, state.version, action.payload);
  switch (action.type) {
    case CommonActionTypes.Increase:
      return {
        ...state,
        version: state.version + action.payload,
      };
    case CommonActionTypes.Decrease:
      return {
        ...state,
        version: state.version - action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default CommonReducer;
