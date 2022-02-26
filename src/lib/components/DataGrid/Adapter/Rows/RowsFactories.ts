import {
  ColumnDataModel,
  RowDataModel,
  RowType,
} from 'core/model/DataGridModel';

import { SortColumns } from '../../DataGridUtils';

export const HeaderRowMetaModel = (columns: ColumnDataModel[]): RowDataModel => {
    SortColumns(columns);
    const tmpRow: RowDataModel = {
        id: 0,
        isHeader: true,
        dragDropSortOrder: 0,
        label: RowType.Header.toString(),
        columns: columns
    }
    return tmpRow
}
export const DataRowMetaModel = (columns: ColumnDataModel[]): RowDataModel => {
    SortColumns(columns);
    const tmpRow: RowDataModel = {
        id: 0,
        isHeader: false,
        dragDropSortOrder: 0,
        label: RowType.Data.toString(),
        columns: columns
    }
    return tmpRow
}