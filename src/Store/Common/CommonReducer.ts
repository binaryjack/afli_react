import { CommonActions } from './CommonActions';

export interface ICommonState {
    version: number;
}


const INITIAL_STATE: ICommonState = {
    version: 0
}

const CommonReducer = (state = INITIAL_STATE, action: CommonActions) => {
    switch (action.type) {
        case CommonActionTypes
    }
}

export default CommonReducer;