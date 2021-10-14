import { FC } from 'react';
import './cardTitle.css';

const CardTitle: FC = ({ children }) => {
  return <div className="card-title p-card-title">{children}</div>;
};
export default CardTitle;
