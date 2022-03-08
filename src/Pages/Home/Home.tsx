import './home.scss';

import {
  FC,
  useEffect,
  useState,
} from 'react';

import PTextBox from '../../lib/components/primal/PTextBox/PTextBox';

const Home: FC = () => {
  const [value, setValue] = useState<string>('')
  const [updated, setUpdaed] = useState<string>('')

  useEffect(() => {
    console.log("hello")
  }, [])

  const handleUpdate = () => {

  }


  return (<>
    <h1 className="pge-home">Home</h1>
    <button>hit me</button>
    <PTextBox text={'Hello React'} />
  </>);
};

export default Home;
