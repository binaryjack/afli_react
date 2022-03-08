import './home.scss';

import {
  FC,
  memo,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';

import PTextBox from '../../lib/components/primal/PTextBox/PTextBox';

const Home: FC = () => {
  const [value, setValue] = useState<string>('')
  const [updated, setUpdaed] = useState<number>(0)
  const [steps, setSteps] = useState<string[]>([])
  const [count, setCount] = useState(0);
  let items = 0;
  useEffect(() => {
    const step = ['useEffect', ...steps]
    setSteps(step)
  }, [])

  // Similaire à componentDidMount et componentDidUpdate :
  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    document.title = `Vous avez cliqué ${count} fois`;

    items++;

  });

  useEffect(() => {
    const step = ['useEffect []', ...steps]
    setSteps(step)
  }, [])

  useLayoutEffect(() => {
    const step = ['useLayoutEffect', ...steps]
    setSteps(step)
  }, [])



  useEffect(() => {
    const step = ['useEffect [updated]', ...steps]
    setSteps(step)
  }, [updated])

  const handleUpdate = () => {
    setUpdaed(updated + 1)
  }


  return (<>
    <h1 className="pge-home">Home</h1>
    <button onClick={handleUpdate}>hit me</button>

    <button onClick={() => setCount(count + 1)}>
      Cliquez ici
    </button>

    <PTextBox text={'Hello React'} />
    <div>items {items}</div>
    <br />
    <div>updated {updated}</div>
    <div className="steps" >
      {steps.map((item, index) => {
        return <div key={index} className="step">{item}</div>
      })}
    </div>
  </>);
};

export default memo(Home);

