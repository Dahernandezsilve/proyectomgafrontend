import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HeaderGalley = () => {
  const [activeTab, setActiveTab] = useState('lote1');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Galeras y tareas pendientes</Text>
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
            Lote #1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'lote3' ? styles.activeTabButton : null,
          ]}
          activeOpacity={0.7}
          onPress={() => handleTabPress('lote3')}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 'lote3' ? styles.activeTabButtonText : null,
            ]}
          >
            Lote #2
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
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
    fontWeight: 'black',
    marginBottom: 8,
    textAlign: 'center',
    fontFamily: 'Roboto'
  },
  buttonContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  tabButton: {
    backgroundColor: 'transparent',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 0,
    marginHorizontal: 4,
  },
  activeTabButton: {
    backgroundColor: '#FFC107',
    borderRadius: 8,
  },
  tabButtonText: {
    fontSize: 25,
    color: '#000000',
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  },
  activeTabButtonText: {
    color: '#FFFFFF',
  },
});

export default HeaderGalley;
