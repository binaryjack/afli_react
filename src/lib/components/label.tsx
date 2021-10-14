import { FC } from 'react';

interface Props {
  name: string;
}

export const MyComponent: FC<Props> = (props) => {
  return (
    <>
      <div>{props.name}</div>
    </>
  );
};

interface BtnProps {}

export const CButton: FC<BtnProps> = (props) => {
  return <></>;
};
