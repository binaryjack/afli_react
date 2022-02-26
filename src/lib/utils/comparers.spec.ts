import {
  ColumnDataModel,
  DataGridModel,
} from '../model/tableModel';
import { TableAdapter } from '../table/TableUtils';

const createTestMock = (): DataGridModel => {

    const c1: ColumnDataModel[] = [{ order: 0, value: "1" }]
    const c2: ColumnDataModel[] = [{ order: 0, value: "2" }]
    const c3: ColumnDataModel[] = [{ order: 0, value: "3" }]
    const c4: ColumnDataModel[] = [{ order: 0, value: "4" }]

    const dataGridMock = TableAdapter("Numbers")

    if (dataGridMock && dataGridMock.newRow) {

        const Row1 = dataGridMock.newRow("Row1")
        const Row2 = dataGridMock.newRow("Row2")
        const Row3 = dataGridMock.newRow("Row3")
        const Row4 = dataGridMock.newRow("Row4")

        Row1.addColumns!(c1)
        Row2.addColumns!(c2)
        Row3.addColumns!(c3)
        Row4.addColumns!(c4)
    }
    return dataGridMock
}

test('UTILS COMPARERS', () => {
    const testCases = {
        numbers: [],
        text: [],
        dates: [],
        complexObject: [],


    }



    // testCases.numbers.sort((a, b) => compareNumberColumn(a, b, direction))


    // expect(compareNumberColumn(testCases.text)).toBe(true);
    // expect(validators.isNumber(testCases.text)).toBe(false);


});
