import React, { useState } from 'react'
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native'

const HeaderGalley = ({
  lotes, title, activeTab, setActiveTab,
}) => {
  const handleTabPress = tabName => {
    setActiveTab(tabName)
    console.log('loteactivo', activeTab)
  }

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
              Lote:
              {' '}
              {lote}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  activeTabButton: {
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#FFC107',
    borderBottomWidth: 3,
    color: '#FFC107',
    width: '33.33%',
  },
  activeTabButtonText: {
    color: '#FFC107',
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 1,
  },
  headerContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
    elevation: 2,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  headerText: {
    fontFamily: 'SamsungOne',
    fontSize: 30,
    marginBottom: 8,
    textAlign: 'center',
  },
  tabButton: {
    backgroundColor: 'transparent',
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 3,
    borderRadius: 0,
    color: '#FFC107',
    marginHorizontal: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: '33.33%',
  },
  tabButtonText: {
    color: '#000000',
    fontFamily: 'SamsungOne',
    fontSize: 30,
    textAlign: 'center',
  },
})

export default HeaderGalley
