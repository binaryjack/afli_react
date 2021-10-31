import Person from 'core/entities/Person';
import PInputBox from 'lib/components/primal/PInputBox/PInputBox';
import { useValidationRule, ValidationsPreset, ValidationsRuleSpecific } from 'lib/validations/formInputValidations';
import { FC, useEffect, useState } from 'react';
import { useGetAllQuery } from '../../features/person/person-api-slice';
import ComboBox, { IComboBoxProperty, toComboBoxProperties } from '../../lib/components/ComboBox/ComboBox';
import "./persons.css";


const lastNameValidation: ValidationsRuleSpecific = { fieldName: 'Last Name', min: 6, max: 20 };




const Persons: FC = () => {

    const { data, error, isFetching } = useGetAllQuery();

    const [personData, setPesonData] = useState<IComboBoxProperty[]>([]);
    const [lastName, setLastName] = useState<string>('');

    const onNameUpdate = (name: string) => setLastName(name);
    const validationsRules = useValidationRule(ValidationsPreset.MandatoryNames, lastNameValidation);

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
                <ComboBox label={"Combo box"} data={personData} />
                <PInputBox value={lastName}
                    label={"Last name"}
                    type={'text'}
                    setValue={onNameUpdate}
                    validationsRule={validationsRules ?? undefined} />
            </>
        )}
    </>);
}

export default Persons;