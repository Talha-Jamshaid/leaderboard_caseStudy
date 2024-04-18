import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  UserData,
  convertToTableArray,
  partialSearchByName,
  searchByName,
} from '../../utils/commonUtils';
import {Alert} from 'react-native';
import {TableData, setTableData} from '../../store/actions/homeActions';
import {StoreObj} from '../../types/storeObj';

export default function useHome() {
  const dispatch = useDispatch();
  const [searchQuey, setSearchQuery] = useState('');
  const {
    data,
    searchedList,
    searchedIndex,
  }: {data: UserData[]; searchedList: UserData[]; searchedIndex: number} =
    useSelector((state: StoreObj) => state.home);

  const updateTableData = (
    tableData: TableData,
    index: number,
    searchedList?: UserData[],
  ) => {
    console.log('tableData', tableData);
    console.log('index', index);
    console.log('searchedList', searchedList);
    dispatch(setTableData(tableData, index, searchedList));
  };
  const handleSearch = () => {
    const result = searchByName(searchQuey, data);
    if (!result?.length) {
      return Alert.alert(
        'This user name does not exist! Please specify an existing user name!',
      );
    }
    let finalElements: UserData[] = [];
    let finalSearchIndex = null;
    const resultedRank = result?.[0];

    const firstTenRankElements = data.slice(0, 10);
    const resultIndex = firstTenRankElements.findIndex(
      ele => ele.uid == resultedRank?.uid,
    );

    if (resultIndex != -1) {
      finalElements = firstTenRankElements;
      finalSearchIndex = resultIndex;
    } else {
      const lastIndex = firstTenRankElements?.length - 1;
      firstTenRankElements[lastIndex] = resultedRank;
      finalElements = firstTenRankElements;
      finalSearchIndex = lastIndex;
    }

    const tableFormat = convertToTableArray(finalElements);

    // dispatch(
    //   setTableData(tableFormat as TableData, finalSearchIndex, finalElements),
    // );
    updateTableData(tableFormat as TableData, finalSearchIndex, finalElements);
  };
  const hanldeLowestCount = () => {
    const lastTenElements: UserData[] = data.slice(-10);
    let searchIndex = -1;
    lastTenElements.sort((a, b) => {
      if (a.bananas !== b.bananas) {
        return b.bananas - a.bananas;
      } else {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      }
    });
    const tableFormat = convertToTableArray(lastTenElements);
    setSearchQuery('');
    // dispatch(setTableData(tableFormat as TableData, searchIndex, []));
    updateTableData(tableFormat as TableData, searchIndex, []);
  };

  const handleSortByName = () => {
    const searchedElement = searchedList[searchedIndex];

    searchedList.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

    const newIndex = searchedList.findIndex(
      elem => elem?.uid == searchedElement.uid,
    );

    const tableFormat = convertToTableArray(searchedList);

    // dispatch(setTableData(tableFormat as TableData, newIndex, searchedList));
    updateTableData(tableFormat as TableData, newIndex, searchedList);
  };

  const handlePartialUserSearch = () => {
    const serachedUsers = partialSearchByName(searchQuey, data);
    if (!serachedUsers?.length) {
      return Alert.alert(
        'This user name does not exist! Please specify an existing user name!',
      );
    }

    const tableFormat = convertToTableArray(serachedUsers);
    // dispatch(setTableData(tableFormat as TableData, -1, []));
    updateTableData(tableFormat as TableData, -1, []);
  };
  return {
    searchQuey,
    setSearchQuery,
    handleSearch,
    hanldeLowestCount,
    handleSortByName,
    searchedList,
    handlePartialUserSearch,
  };
}
