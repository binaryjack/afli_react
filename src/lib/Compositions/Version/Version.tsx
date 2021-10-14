import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ICommonState } from 'Store/Common/CommonReducer';
import { CommonActionTypes } from 'Store/Common/CommonActions';
import PTextBox from 'lib/Components/Primal/PTextBox/PTextBox';

const Version: FC = () => {
  const versionNumber = useSelector<ICommonState, number>((state) =>
    state ? state.version : 0,
  );
  const dispatch = useDispatch();
  const incrFunc = () => {
    dispatch({
      type: CommonActionTypes.Increase,
      payload: 1,
    });
  };
  const decrFunc = () => {
    dispatch({
      type: CommonActionTypes.Decrease,
      payload: 1,
    });
  };

  return (
    <>
      <PTextBox text={`Version: ${versionNumber}`} />
      <button onClick={incrFunc}>+</button>
      <button onClick={decrFunc}>-</button>
    </>
  );
};

export default Version;
