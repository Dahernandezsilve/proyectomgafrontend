import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const HeaderGalley = ({
  lotes, title, activeTab, setActiveTab,
}) => {
  const handleTabPress = tabName => {
    setActiveTab(tabName)
  }

  const generateUniqueKey = (lote, index) => `${lote}-${index}` // Genera una clave única combinando el valor del elemento y el índice

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.buttonContainer}>
        {lotes.map((lote, index) => (
          <TouchableOpacity
            key={generateUniqueKey(lote, index)}
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

HeaderGalley.propTypes = {
  lotes: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
}

export default HeaderGalley
