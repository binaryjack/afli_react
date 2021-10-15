import { NumbersObject } from 'features/data/data-api-slice'
import { FC } from 'react'
import "./comboBox.css"

type Props = {
    data: NumbersObject[];
}

const ComboBox: FC<Props> = ({ data }) => {

    return (
        <select className="combo-box-select">
            {data?.length > 0 && data.map((num, index) => {
                <option key={index}>{num}</option>
            })}
        </select>
    )
}

export default ComboBox;