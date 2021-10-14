import PTextBox from 'lib/Components/Primal/PTextBox/PTextBox';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommonActionTypes } from 'Store/Common/CommonActions';
import { ICommonState } from 'Store/Common/CommonReducer';
const Version: FC = () => {
  const version = useSelector<ICommonState>((state) => state.version);
  const dispatch = useDispatch();
  const incrFunc = () => {
    dispatch({
      type: CommonActionTypes.Increase,
      payload: 1,
    });
  };
  const decrFunc = () => {
    dispatch({
      type: CommonActionTypes.Increase,
      payload: 1,
    });
  };

  return (
    <>
      <PTextBox text={`Version: ${version}`} />
      <button onClick={incrFunc}>+</button>
      <button onClick={decrFunc}>-</button>
    </>
  );
};

export default Version;
