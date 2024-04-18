import homeReducer, {initialStateHome} from '../../store/reducers/homeReducer';
import {ActionType} from '../../store/actions/homeActions';

describe('homeReducer', () => {
  const initialState = initialStateHome;

  const testCases = [
    {
      initialState: initialState,
      action: {
        type: ActionType.SET_TABLE_DATA,
        payload: {
          data: [['Emma', '9', '6550']],
          searchIndex: 9,
          finalElements: [],
        },
      },
      expectedState: {
        ...initialState,
        tableData: [['Emma', '9', '6550']],
        searchedIndex: 9,
        searchedList: [],
      },
      description: 'updates state with single user data',
    },
    {
      initialState: initialState,
      action: {
        type: ActionType.SET_TABLE_DATA,
        payload: {
          data: [
            ['Alexander Mochalski', '10', '6200'],
            ['Bryan Holleman', '4', '18250'],
            ['Chris Buckley', '1', '36750'],
          ],
          searchIndex: 3,
          finalElements: [
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
        },
      },
      expectedState: {
        ...initialState,
        tableData: [
          ['Alexander Mochalski', '10', '6200'],
          ['Bryan Holleman', '4', '18250'],
          ['Chris Buckley', '1', '36750'],
        ],
        searchedIndex: 3,
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
      },
      description: 'updates state with multiple user data',
    },
    {
      initialState: initialState,
      action: {
        type: ActionType.SET_TABLE_DATA,
        payload: {
          data: [
            ['Emma-Lee Crothers', '236', '150'],
            ['Emma', '9', '6550'],
          ],
          searchIndex: -1,
          finalElements: [],
        },
      },
      expectedState: {
        ...initialState,
        tableData: [
          ['Emma-Lee Crothers', '236', '150'],
          ['Emma', '9', '6550'],
        ],
        searchedIndex: -1,
        searchedList: [],
      },
      description: 'handles negative index correctly',
    },
  ];

  testCases.forEach(({initialState, action, expectedState, description}) => {
    it(`should handle action correctly: ${description}`, () => {
      expect(homeReducer(initialState, action)).toEqual(expectedState);
    });
  });

  it('should return the initial state when no action is given', () => {
    expect(homeReducer(undefined, {})).toEqual(initialState);
  });
});
