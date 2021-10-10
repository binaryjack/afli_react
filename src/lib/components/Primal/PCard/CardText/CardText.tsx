import { FC } from 'react';
import "./CardText.css";

const CardText: FC = ({ children }) => {
    return (
        <div className="card-text p-card-text">
            {children}
        </div>
    )
}
export default CardText;