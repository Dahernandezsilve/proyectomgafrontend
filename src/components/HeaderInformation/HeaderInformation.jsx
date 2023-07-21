import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './styles';

const HeaderInformation = ({
  lotes, title, customTitles, activeTab, setActiveTab, showLote
}) => {
  const handleTabPress = tabName => {
    setActiveTab(tabName);
    console.log('loteactivoiNFO', activeTab);
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
              {customTitles[index]}
              {' '}
              {showLote ? lote : null}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HeaderInformation;
