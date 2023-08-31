import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const HeaderInformation = ({
  lotes, title, customTitles, activeTab, setActiveTab, showLote,
}) => {
  const handleTabPress = tabName => {
    setActiveTab(tabName)
  }

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.buttonContainer}>
        {lotes.map((lote, index) => (
          <TouchableOpacity
            // eslint-disable-next-line react/no-array-index-key
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
              {customTitles ? customTitles[index] : null}
              {' '}
              {showLote ? `Lote: ${lote}` : null}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

HeaderInformation.propTypes = {
  lotes: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  customTitles: PropTypes.arrayOf(PropTypes.string),
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  showLote: PropTypes.bool,
}

HeaderInformation.defaultProps = {
  customTitles: null,
  showLote: false,
}

export default HeaderInformation
