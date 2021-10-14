import { FC, useEffect, useState } from 'react';
import CsUl from '../CsUl/CsUl';

interface MyArrProps {
  arr: number[];
  fn: (val: number) => boolean;
}

const MyArrComponent: FC<MyArrProps> = ({ arr, fn }) => {
  const [newArr, setNewArr] = useState<number[]>([]);

  useEffect(() => {
    console.log('use effect');
    const tempArray: number[] = [];

    setNewArr([]);
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i])) {
        console.log(arr[i]);
        tempArray.push(arr[i]);
      }
    }
    setNewArr(tempArray);

    return console.log('dispose effect');
  }, [arr, fn, setNewArr]);

  return <CsUl arr={newArr} />;
};

export default MyArrComponent