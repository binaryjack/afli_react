import Person from 'core/entities/Person';
import PInputBox from 'lib/components/primal/PInputBox/PInputBox';
import PValidation from 'lib/components/primal/PValidationBox/PValidationType';
import { FC, useEffect, useState } from 'react';
import { useGetAllQuery } from '../../features/person/person-api-slice';
import ComboBox, { IComboBoxProperty, toComboBoxProperties } from '../../lib/components/ComboBox/ComboBox';
import "./persons.css";

const Persons: FC = () => {

    const { data, error, isFetching } = useGetAllQuery();

    const [personData, setPesonData] = useState<IComboBoxProperty[]>([]);
    const [lastName, setLastName] = useState<string>();

    const onNameUpdate = (name: string) => useState(name);

    const validationData: PValidation = {
        errorNumber: 152,
        message: "Validation Error",
        rule: "Mandatory"
    }

    const isMandatory = (value: any): boolean => value && `${value}`.length > 0;


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
                <h1 className="person-header">Persons ({personData?.length})</h1>
                <ComboBox data={personData} />
                <PInputBox value={lastName} setValue={() => onNameUpdate} validate={isMandatory} validationData={validationData} />



            </>
        )}
    </>);
}

export default Persons;