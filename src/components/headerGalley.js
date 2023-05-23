import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SamsungOne from '../fonts/SamsungOne-400.ttf'
import * as Font from 'expo-font';

const HeaderGalley = ({lotes, title}) => {
  const [activeTab, setActiveTab] = useState('lote1');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{ title }</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'lote1' ? styles.activeTabButton : null,
          ]}
          activeOpacity={0.7}
          onPress={() => handleTabPress('lote1')}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 'lote1' ? styles.activeTabButtonText : null,
            ]}
          >
            {lotes[0]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'lote2' ? styles.activeTabButton : null,
          ]}
          activeOpacity={0.7}
          onPress={() => handleTabPress('lote2')}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 'lote2' ? styles.activeTabButtonText : null,
            ]}
          >
            {lotes[1]}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,   
  },
  headerText: {
    fontSize: 30,
    marginBottom: 8,
    textAlign: 'center',
    fontFamily: 'SamsungOne'
  },
  buttonContainer: {
    paddingTop: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  tabButton: {
    width: '50%',
    backgroundColor: 'transparent',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 0,
    marginHorizontal: 4,
    borderBottomWidth: 3,
    color: '#FFC107',
    borderBottomColor: '#CCCCCC',
  },
  activeTabButton: {
    width: '50%',
    color: '#FFC107',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 3,
    borderBottomColor: '#FFC107',
  },
  tabButtonText: {
    fontSize: 30,
    color: '#000000',
    fontFamily: 'SamsungOne',
    textAlign: 'center',
  },
  activeTabButtonText: {
    color: '#FFC107',
    textAlign: 'center',
  },
});

export default HeaderGalley;
