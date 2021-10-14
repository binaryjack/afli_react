import { User } from 'Core/Entities/User';

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
