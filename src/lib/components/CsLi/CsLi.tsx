import { FC } from 'react';
import chevron from './chevron.png';
import './CsLi.scss';

type CsLiProps = {
  item: number;
};

const CsLi: FC<CsLiProps> = ({ item }) => {
  return (
    <li className="csli-li">
      <img className="csli-chevronimg" src={chevron} /> <span>{item}</span>
    </li>
  );
};

export default CsLi;