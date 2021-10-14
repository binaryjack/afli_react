import { FC } from 'react';

import PTextBox from '../../lib/components/primal/PTextBox/PTextBox';
import './home.css';

const Home: FC = () => {
  return (
    <>
      <h1 className="pge-home">Home</h1>

      <PTextBox text={'Hello React'} />
    </>
  );
};

export default Home;
