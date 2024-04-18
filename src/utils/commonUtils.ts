export interface UserData {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
  rank?: number;
}

export const searchByName = (query: string, data: UserData[]): UserData[] => {
  const result = data.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase()),
  );

  return result;
};

export const sortUserDataByBananas = (
  userData: Record<string, UserData>,
): UserData[] => {
  const userDataArray: UserData[] = Object.values(userData);

  userDataArray.sort((a, b) => b.bananas - a.bananas);

  userDataArray.forEach((user, index) => {
    user.rank = index + 1;
  });

  return userDataArray;
};

export const convertToTableArray = (array: UserData[]): string[][] => {
  const convertedArray: string[][] = [];

  array.forEach(obj => {
    const {name, rank, bananas} = obj;
    const element = [name, (rank ?? '').toString(), bananas.toString()];
    convertedArray.push(element);
  });

  return convertedArray;
};

export const partialSearchByName = (
  query: string,
  data: UserData[],
): UserData[] => {
  const filteredUsers = data.filter(user => {
    const fullName = user.name.toLowerCase();
    const firstName = fullName.split(' ')[0];
    return (
      firstName.includes(query.toLowerCase()) ||
      fullName.includes(query.toLowerCase())
    );
  });

  const sortedUsers = filteredUsers.sort(
    (a: UserData, b: UserData) => (b.rank ?? 0) - (a.rank ?? 0),
  );

  return sortedUsers;
};
