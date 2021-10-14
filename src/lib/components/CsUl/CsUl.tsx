import { FC } from 'react';
import { CsLi } from '../CsLi/CsLi';
import './CsUl.css';
type CsUlProps = {
  arr: number[];
};
export const CsUl: FC<CsUlProps> = ({ arr }) => {
  return (
    <ul className="csul-ul">
      {arr && arr.map((item, index) => <CsLi key={index} item={item} />)}
    </ul>
  );
};
