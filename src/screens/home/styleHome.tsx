import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  searchCont: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    width: '50%',
    paddingHorizontal: 15,
    borderRadius: 50,
    height: 45,
  },
  txtInput: {
    flex: 1,
    marginStart: 5,
    color: '#000',
  },
  searchBtn: {
    width: '23%',
    backgroundColor: '#A7C942',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 10,
  },
  bntTxt: {
    fontWeight: '600',
    color: '#FFFFFF',
  },

  lowesRankBtn: {
    backgroundColor: 'red',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  btnCont: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
