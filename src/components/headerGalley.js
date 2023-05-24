import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HeaderGalley = ({ lotes, title, activeTab, setActiveTab }) => {


  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    console.log('loteactivo', activeTab)
  };

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.buttonContainer}>
        {lotes.map((lote, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tabButton,
              activeTab === lote ? styles.activeTabButton : null,
            ]}
            activeOpacity={0.7}
            onPress={() => handleTabPress(lote)}
          >
            <Text
              style={[
                styles.tabButtonText,
                activeTab === lote ? styles.activeTabButtonText : null,
              ]}
            >
              Lote: {lote}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

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
    width: '33.33%',
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
    width: '33.33%',
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
