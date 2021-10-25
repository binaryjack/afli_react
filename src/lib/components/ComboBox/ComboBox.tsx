import { useAppSelector } from 'app/hooks';
import { IContextProps, ThemeContext } from 'lib/context/theme/ThemeContext';
import { FC, useContext, useState } from 'react';
import "./comboBox.css";

export interface IComboBoxProperty {
    id: string | number;
    label: string;
}

export function toComboBoxProperties<T>(data: T[], predicate: (item: T) => IComboBoxProperty): IComboBoxProperty[] {
    if (!data || data?.length === 0) return [];
    const builder: IComboBoxProperty[] = [];
    data.map((item: T) => {
        builder.push(predicate(item));
    });
    return builder;
}

type Props = {
    data: IComboBoxProperty[];
    label: string;
}

const ComboBox: FC<Props> = ({ data, label }) => {

    const { theme } = useContext<IContextProps>(ThemeContext);
    const [selectedItem, setSelectedItem] = useState<string | number | undefined>();
    const debugMode = useAppSelector((state) => state.appplicationSettings.debug);


    console.log("ComboBox", data);

    const onSelectedItem = (id: string | number) => {
        console.log("onSelectedItem", id);
        setSelectedItem(id);
    }

    return (
        <>
            <div className={"combo-box-select"}>
                <label htmlFor={label} className={`cb-label`}>{label}</label>
                <select
                    id={label}
                    defaultValue={selectedItem}
                    className={`base-components base-components-border ${theme ? 'darky-3  base-components-border-daky' : ''}`}

                    onChange={o => onSelectedItem(o.target.value)} >

                    {data?.length > 0 && data.map((item: IComboBoxProperty, index) =>
                        <option label={item.label} value={item.id} key={`${index}${item.id}`} />
                    )}
                </select>

                {debugMode &&
                    <div className="debug-view">
                        {selectedItem}
                    </div>
                }
            </div>
        </>
    )
}

export default ComboBox;