import { FC } from 'react';
import CsLi from '../CsLi/CsLi';
import './csUl.css';

type CsUlProps = {
  arr: number[];
};

 const CsUl: FC<CsUlProps> = ({ arr }) => {
  return (
    <ul className="csul-ul">
      {arr && arr.map((item, index) => <CsLi key={index} item={item} />)}
    </ul>
  )
};


export default CsUl;