import {Reducer} from 'redux';
import userData from '../../constants/leaderboard.json';
import {sortUserDataByBananas} from '../../utils/commonUtils';
import {HomeState} from '../../types/storeObj';
import {ActionType} from '../actions/homeActions';

export const initialStateHome: HomeState = {
  data: sortUserDataByBananas(userData),
  tableData: [],
  searchedList: [],
  lowestRankUsers: [],
  searchedIndex: 0,
};

const homeReducer: Reducer<HomeState, any> = (
  state = initialStateHome,
  action,
) => {
  switch (action.type) {
    case ActionType.SET_TABLE_DATA:
      return {
        ...state,
        tableData: action.payload.data,
        searchedIndex: action.payload.searchIndex,
        searchedList: action.payload.finalElements || [],
      };
    default:
      return state;
  }
};

export default homeReducer;
