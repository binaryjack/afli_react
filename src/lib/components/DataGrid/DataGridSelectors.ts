import {
  DataGridModel,
  RowDataModel,
} from 'core/model/DataGridModel';

const getHeader = (table: DataGridModel): RowDataModel | undefined =>
    table.rows.find((o) => o.label === 'Header')
const getRows = (table: DataGridModel): RowDataModel[] | undefined =>
    table.rows.filter((o) => o.label !== 'Header')


export const tableGetters = {
    getHeader,
    getRows
}