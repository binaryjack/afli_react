import { FC, useState } from 'react';
import MyArrComponent from '../MyArrComponent/MyArrComponent';
import { TodoList } from '../TodoList/TodoList';

export const MyView: FC = () => {
  const [array] = useState<number[]>([123, 326, 210, 53, 23, 52, 36, 26]);
  const calc = (val: number) => val > 100;
  console.log(array);

  return (
    <>
      <MyArrComponent arr={array} fn={calc} />

      <TodoList />
    </>
  );
};
