import { FC } from 'react';
import { useFetchNumbersQuery } from '../../features/data/data-api-slice';
import ComboBox from '../../lib/components/ComboBox/ComboBox';
import './contact.css';


const Contact: FC = () => {

  const { data = [], isFetching } = useFetchNumbersQuery();

  return (
    <>
      <div>{isFetching}</div>
      <h1 className="pge-contact">Contact ({data?.length})</h1>
      {data &&
        <ComboBox data={data} />
      }
    </>
  )
};

export default Contact;
