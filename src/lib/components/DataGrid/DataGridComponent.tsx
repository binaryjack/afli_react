import './TableComponent.scss';

import { FC } from 'react';

import { DataGridModel } from 'core/model/DataGridModel';

import { TableContext } from './DataGridContext';
import TableContainer from './TableContainer/DataGridContainer';

export type DataGridProps = {
    data: DataGridModel
}

const TableComponent: FC<DataGridProps> = ({ data }) => {

    const { id, uniqueKey, name } = data

    const selecRowId = (id: number) => {
        console.log(`Row: ${id}`)
    }
    const onDrop = (event: EventTarget, targetId: number) => {
        console.log(`drag drop: ${event}  => ${targetId}`)
    }

    return <div className='table-component'>
        <span className='table-id'>{id}</span>
        <span className='table-unique-key'>{uniqueKey}</span>
        <span className='table-name'>{name}</span>

        <TableContext.Provider value={{ selectRow: selecRowId, onDrop: onDrop }} >
            <TableContainer data={data} />
        </TableContext.Provider>
    </div>

}


export default TableComponent