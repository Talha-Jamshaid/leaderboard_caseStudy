import {Reducer} from 'redux';
import userData from '../../constants/leaderboard.json';
import {sortUserDataByBananas} from '../../utils/commonUtils';
import {SET_TABLE_DATA} from '../actions/homeActions';
import {HomeState} from '../../types/storeObj';
import {UserData} from '../../utils/commonUtils';

const initialState: HomeState = {
  data: sortUserDataByBananas(userData),
  tableData: [],
  searchedList: [],
  lowestRankUsers: [],
  searchedIndex: 0,
};

const homeReducer: Reducer<HomeState, any> = (state = initialState, action) => {
  switch (action.type) {
    case SET_TABLE_DATA:
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
