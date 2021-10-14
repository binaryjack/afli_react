import { FC } from 'react';
import './Card.css';

const Card: FC = ({ children }) => {
  return <div className="card p-card">{children}</div>;
};
export default Card;
