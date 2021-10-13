import PTextBox from 'lib/Components/Primal/PTextBox/PTextBox';
import { FC } from 'react';
import "./Home.css";


const Home: FC = () => {

    return <>
        <h1 className="pge-home">Home</h1>

        <PTextBox text={"Hello React"} />
    </>
}

export default Home;