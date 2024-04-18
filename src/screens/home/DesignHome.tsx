import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styleHome';
import Table from '../../components/table/DesignTable';
import searchIcon from '../../assets/images/searchIcon.png';
import useHome from '.';
import DesignButton from '../../components/button/Designbutton';

export default function DesignHome() {
  const {
    searchQuey,
    setSearchQuery,
    handleSearch,
    hanldeLowestCount,
    handleSortByName,
    searchedList,
    handlePartialUserSearch,
  } = useHome();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchCont}>
          <Image source={searchIcon} />
          <TextInput
            placeholder="Search"
            style={styles.txtInput}
            value={searchQuey}
            onChangeText={setSearchQuery}
          />
        </View>
        <DesignButton
          onPress={handleSearch}
          isDisable={!searchQuey}
          title="Search"
          style={styles.searchBtn}
        />

        <DesignButton
          onPress={handlePartialUserSearch}
          isDisable={!searchQuey}
          title="Partial Search"
          style={[styles.searchBtn, {backgroundColor: '#6EB5FF'}]}
        />
      </View>
      <View style={styles.btnCont}>
        <DesignButton
          title="Sort by name"
          style={[
            styles.lowesRankBtn,
            {backgroundColor: '#537791', marginEnd: 10},
          ]}
          onPress={handleSortByName}
          isDisable={!searchedList?.length}
        />
        <DesignButton
          title="Show lowest rank"
          style={styles.lowesRankBtn}
          onPress={hanldeLowestCount}
        />
      </View>
      <Table />
    </View>
  );
}
