import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ICommonState } from 'Store/Common/CommonReducer';
import { CommonActionTypes } from 'Store/Common/CommonActions';
import PTextBox from 'lib/Components/Primal/PTextBox/PTextBox';

const Version: FC = () => {
  const versionNumber = useSelector((state: ICommonState) => state.version);
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
      <PTextBox text={`Version: ${versionNumber}`} />
      <button onClick={incrFunc}>+</button>
      <button onClick={decrFunc}>-</button>
    </>
  );
};

export default Version;
