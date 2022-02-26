import './RowComponent.scss';

import { FC } from 'react';

import { DataGridModel } from 'core/model/DataGridModel';

export type RowComponentProps = {
    data: DataGridModel
}

const RowComponent: FC<RowComponentProps> = ({ data }) => {

    return <>{ }</>
}


export default RowComponentProps