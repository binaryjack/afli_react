
export interface DataGridAbstract {
    id: number
    uniqueKey?: string
    name?: string
    active?: boolean
}

export interface DataGridModel extends DataGridAbstract {
    rows: RowDataModel[]
    newRow?: (label?: string) => RowDataModel
    addRow?: (row?: RowDataModel) => void,
}


export type RowDataModel = {
    id: number
    dragDropSortOrder?: number
    label?: string
    isHeader: boolean
    columns: ColumnDataModel[]
    addColumn?: (label?: string, sortable?: boolean, active?: boolean) => ColumnDataModel
    addColumnModel?: (model?: ColumnDataModel) => ColumnDataModel | undefined
    addColumns?: (columns?: ColumnDataModel[]) => ColumnDataModel[] | undefined
}


export interface ColumnDataModel {
    order: number
    value?: string
    sortable?: boolean
    active?: boolean
    editable?: boolean
    dataType?: DataTypes
    cell?: CellDataModel
    addCell?: (cell?: CellDataModel) => CellDataModel
}


export interface CellDataModel {
    value: string | number | undefined | null
    format: RegExp
    errors: ValidationError[]
    active?: boolean
}


export interface ValidationError {
    code: string
    text: string
}


export enum DataTypes {
    Int,
    BigInt,
    Float,
    Text,
    TextArea,
    Date,
    Hour,
    GUID,
    PhoneNumber,
    Header
}


export enum RowType {
    Header = 'Header',
    Data = 'Data'
}