import Person from 'core/entities/Person';
import { useGetAllQuery } from 'features/person/person-api-slice';
import PInputBox from 'lib/components/primal/PInputBox/PInputBox';
import { useValidationRule, ValidationsPreset, ValidationsRuleSpecific } from 'lib/validations/formInputValidations';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ComboBox, { IComboBoxProperty, toComboBoxProperties } from '../../lib/components/ComboBox/ComboBox';
import "./persons.scss";


const lastNameValidation: ValidationsRuleSpecific = { fieldName: 'Last Name', lengthMin: 6, lengthMax: 20 };

type FormValues = {
    lastName: string,
    firstName: string,

}



const Persons: FC = () => {

    const { data, error, isFetching } = useGetAllQuery();

    const [personData, setPesonData] = useState<IComboBoxProperty[]>([]);
    const [lastName, setLastName] = useState<string>('');

    const onNameUpdate = (name: string) => setLastName(name);
    const validationsRules = useValidationRule([ValidationsPreset.Names, ValidationsPreset.Mandatory], lastNameValidation);
    const { register, handleSubmit, watch } = useForm<FormValues>({ mode: "onChange" });

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
            <form>
                <h1 className="person-header">Persons ({personData?.length})</h1>
                <ComboBox label={"Combo box"} data={personData} />
                <PInputBox
                    name={"lastName"}
                    value={watch('lastName')}
                    label={"Last name"}
                    register={register}
                    type={'text'}
                    validationsRule={validationsRules ?? undefined} />
            </form>
        )}
    </>);
}

export default Persons;