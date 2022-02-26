import { FC } from 'react';
import './cardBody.scss';

const CardBody: FC = ({ children }) => {
  return <div className="card-body p-card-body">{children}</div>;
};
export default CardBody;
