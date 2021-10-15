import PTextBox from 'lib/components/primal/PTextBox/PTextBox';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { decremented, incremented } from 'features/version/slice';
import {
  amountAdding,
  incremented as counterIncremented,
} from 'features/counter/slice';

const Version: FC = () => {
  const versionNumber = useAppSelector((state) => state.version.value);
  const counterValue = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const incrFunc = () => {
    dispatch(incremented());
  };

  const decrFunc = () => {
    dispatch(decremented());
  };

  const addValue = (value: number): void => {
    dispatch(amountAdding(value));
  };

  return (
    <>
      <input
        value={counterValue}
        type="number"
        onChange={(e) => addValue(parseInt(e.target.value))}
      ></input>

      <PTextBox text={`Version: ${versionNumber}`} />
      <button onClick={incrFunc}>+</button>
      <button onClick={decrFunc}>-</button>
    </>
  );
};

export default Version;
