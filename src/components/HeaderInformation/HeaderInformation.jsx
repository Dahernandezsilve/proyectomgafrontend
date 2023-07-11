import React from 'react'
import {
  View, Text, TouchableOpacity,
  Dimensions,
} from 'react-native'

import styles from './styles'

const HeaderInformation = ({
  lotes, title, activeTab, setActiveTab,
}) => {
  const handleTabPress = tabName => {
    setActiveTab(tabName)
    console.log('loteactivoiNFO', activeTab)
  }

  const windowWidth = Dimensions.get('window').width

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
                { flex: 1, fontSize: windowWidth * 0.036 },
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

export default HeaderInformation
