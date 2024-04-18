import {TableData, setTableData} from '../src/store/actions/homeActions';
import {ActionType} from '../src/store/actions/homeActions';

describe('setTableData Action Creator', () => {
  const testCases = [
    {
      tableData: [['Emma', '9', '6550']],
      index: 9,
      searchedList: [],
      description: 'handles single user data',
    },
    {
      tableData: [
        ['Alexander Mochalski', '10', '6200'],
        ['Bryan Holleman', '4', '18250'],
        ['Chris Buckley', '1', '36750'],
      ],
      index: 3,
      searchedList: [
        {
          name: 'Alexander Mochalski',
          uid: 'zOKzuWGBUVWRrTxyEHgTKc4gin32',
          bananas: 6200,
        },
        {
          name: 'Bryan Holleman',
          uid: 'zBgGPzU0saQuZHL7EH3T8xX6zCm2',
          bananas: 18250,
        },
      ],
      description: 'handles multiple users data',
    },
    {
      tableData: [
        ['Emma-Lee Crothers', '236', '150'],
        ['Emma', '9', '6550'],
      ],
      index: -1,
      searchedList: [],
      description: 'handles negative index',
    },
    {
      tableData: [
        ['Andrew Semakin', '492', '0'],
        ['Dylan Alexander', '483', '0'],
      ],
      index: -1,
      searchedList: [],
      description: 'handles zero values',
    },
  ];

  testCases.forEach(({tableData, index, searchedList, description}) => {
    it(`should create an action to set the table data: ${description}`, () => {
      const expectedAction = {
        type: ActionType.SET_TABLE_DATA,
        payload: {
          data: tableData,
          searchIndex: index,
          finalElements: searchedList,
        },
      };

      expect(setTableData(tableData as TableData, index, searchedList)).toEqual(
        expectedAction,
      );
    });
  });
});
