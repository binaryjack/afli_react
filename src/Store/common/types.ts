export interface ICommonState {
  version: number;
}

export enum CommonActionTypes {
  Increase = 'INCREASE',
  Decrease = 'DECREASE',
}

export type CommonActions = {
  type: CommonActionTypes;
  payload: any;
};
