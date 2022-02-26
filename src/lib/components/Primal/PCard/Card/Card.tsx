import { FC } from 'react';
import './card.scss';

const Card: FC = ({ children }) => {
  return <div className="card p-card">{children}</div>;
};
export default Card;
