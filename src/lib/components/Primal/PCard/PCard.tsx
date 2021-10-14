import { FC } from 'react';
import Card from './Card/Card';
import CardBody from './CardBody/CardBody';
import CardText from './CardText/CardText';
import CardTitle from './CardTitle/CardTitle';

type PCardProps = {
  title: string;
  text: string;
};

const PCard: FC<PCardProps> = ({ title, text }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </CardBody>
    </Card>
  );
};
export default PCard;
