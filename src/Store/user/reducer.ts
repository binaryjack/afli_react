import { IUserState, UserActions, UserActionTypes } from './types';


const USER_INITIAL_STATE: IUserState = {
  user: undefined,
  users: [],
};

const UserReducer = (
  state: IUserState = USER_INITIAL_STATE,
  action: UserActions,
) => {
  console.log(`Type ${action.type}`, state.user, action.payload);
  console.log(`Type ${action.type}`, state.users, action.payload);

  switch (action.type) {
    case UserActionTypes.Add:
      return {
        ...state,
        users: state.users.push(action.payload),
      };
    case UserActionTypes.Update:
      const usersTemp = state.users.filter((o) => o.id !== action.payload.id);
      usersTemp.push(action.payload);
      return {
        ...state,
        users: usersTemp,
      };
    case UserActionTypes.Delete:
      return {
        ...state,
        users: state.users.filter((o) => o.id !== action.payload.id),
      };
    default:
      return {
        ...state,
      };
  }
};

export default UserReducer;
