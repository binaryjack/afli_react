import React, { FC } from 'react';
import Card from './card/card';
import CardBody from './cardBody/cardBody';
import CardText from './cardText/cardText';
import CardTitle from './cardTitle/cardTitle';

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
