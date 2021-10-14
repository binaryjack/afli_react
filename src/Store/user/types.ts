import { User } from 'core/entities/User';

export interface IUserState {
  user: User | undefined;
  users: User[];
}

export enum UserActionTypes {
  Add = 'ADD',
  Update = 'UPDATE',
  Delete = 'DELETE',
}

export type UserActions = {
  type: UserActionTypes;
  payload: User;
};
