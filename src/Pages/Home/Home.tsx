import { FC } from 'react';

import PTextBox from '../../lib/components/Primal/PTextBox/PTextBox';
import './Home.css';

const Home: FC = () => {
  return (
    <>
      <h1 className="pge-home">Home</h1>

      <PTextBox text={'Hello React'} />
    </>
  );
};

export default Home;
