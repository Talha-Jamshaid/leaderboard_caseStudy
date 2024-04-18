import React, {useState} from 'react';
import {View, ScrollView, Dimensions} from 'react-native';
import {Table, Row} from 'react-native-table-component';
import {styles} from './styleTable';
import {useSelector} from 'react-redux';
import {StoreObj} from '../../types/storeObj';
const screenWidth = Dimensions.get('window').width;

function CustomTable(): React.JSX.Element {
  const cellWidth = screenWidth / 3;
  const [tableHead] = useState<string[]>(['Name', 'Rank', 'Number of bananas']);
  const [widthArr] = useState<number[]>([cellWidth, cellWidth, cellWidth]);
  const {tableData, searchedIndex} = useSelector(
    (state: StoreObj) => state.home,
  );

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View style={{width: '100%'}}>
          <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
            <Row
              data={tableHead}
              widthArr={widthArr}
              style={styles.header}
              textStyle={styles.headerTxt}
            />
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              {tableData?.map((rowData, index) => (
                <Row
                  key={index}
                  data={rowData}
                  widthArr={widthArr}
                  style={[
                    styles.row,
                    {
                      backgroundColor:
                        searchedIndex == index
                          ? '#19C37D'
                          : index % 2
                          ? '#F7F6E7'
                          : '#E7E6E1',
                    },
                  ]}
                  textStyle={styles.text}
                />
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

export default CustomTable;
