import Person from 'core/entities/Person';
import { FC, useEffect, useState } from 'react';
import { useGetAllQuery } from '../../features/person/person-api-slice';
import ComboBox, { IComboBoxProperty, toComboBoxProperties } from '../../lib/components/ComboBox/ComboBox';
import "./persons.css";

const Persons: FC = () => {

    const { data, error, isFetching } = useGetAllQuery();

    const [personData, setPesonData] = useState<IComboBoxProperty[]>([]);

    useEffect(() => {
        if (isFetching) return;
        if (!data || data.person?.length === 0) return;

        var items = toComboBoxProperties<Person>(data.person, (item) => {
            return { id: item.id, label: `${item.firstName} ${item.lastName}` };
        });

        setPesonData(items);

    }, [data]);

    return (<>
        {personData?.length > 0 && (
            <>
                < h1 className="person-header">Persons ({personData?.length})</h1>
                < ComboBox data={personData} />
            </>
        )}
    </>);
}

export default Persons;