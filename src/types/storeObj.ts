import {UserData} from '../utils/commonUtils';

export type HomeState = {
  data: UserData[];
  tableData: object[];
  searchedList: UserData[];
  lowestRankUsers: object[];
  searchedIndex: number;
};

export type StoreObj = {
  home: HomeState;
};
