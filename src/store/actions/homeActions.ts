export const SET_TABLE_DATA = 'SET_TABLE_DATA';
export interface TableData extends Array<[string, string | number, number]> {}

export const setTableData = (
  data: TableData,
  searchIndex?: number,
  finalElements?: object[],
) => ({
  type: SET_TABLE_DATA,
  payload: {data, searchIndex, finalElements},
});
