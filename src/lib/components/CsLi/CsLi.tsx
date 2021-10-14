import { FC } from 'react';
import chevron from './chevron.png';
import './csLi.css';

type CsLiProps = {
  item: number;
};
export const CsLi: FC<CsLiProps> = ({ item }) => {
  return (
    <li className="csli-li">
      {' '}
      <img className="csli-chevronimg" src={chevron} /> <span>{item}</span>
    </li>
  );
};
