import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PTextBox from 'lib/components/primal/PTextBox/PTextBox';
import { CommonActionTypes, ICommonState } from 'store/common/types';

const Version: FC = () => {
  const versionNumber = useSelector<ICommonState, number>((state) => ({
    ...state.version,
  }));
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
