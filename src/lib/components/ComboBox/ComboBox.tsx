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

}

const ComboBox: FC<Props> = ({ data }) => {

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
            <select className={`combo-box-select base-components base-components-border ${theme ? 'darky-3' : ''}`} value={selectedItem} onChange={o => onSelectedItem(o.target.value)} >
                {data?.length > 0 && data.map((item, index) => {
                    return <option value={item.id} key={`${index}${item.id}`} defaultValue={selectedItem} selected={selectedItem === item.id} >{item.label}</option>
                })}
            </select>
            {debugMode &&
                <div className="debug-view">
                    {selectedItem}
                </div>
            }

        </>
    )
}

export default ComboBox;