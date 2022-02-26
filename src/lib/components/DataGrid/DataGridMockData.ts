import { dataFromApi } from 'lib/mock/api/mock';

import { DataAdapter } from './Adapter/Columns/ColumnDataAdapter';

const dataTable = DataAdapter(dataFromApi)

export default dataTable





