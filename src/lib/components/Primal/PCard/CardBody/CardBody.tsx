import { FC } from 'react';
import "./CardBody.css";

const CardBody: FC = ({ children }) => {
    return (
        <div className="card-body p-card-body">
            {children}
        </div>
    )
}
export default CardBody;