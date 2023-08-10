import React from 'react'
import {
  View, Text, TouchableOpacity, Dimensions,
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const windowWidth = Dimensions.get('window').width

const HeaderGalley = ({
  lotes, title, activeTab, setActiveTab,
}) => {
  const handleTabPress = tabName => {
    setActiveTab(tabName)
  }

  const generateUniqueKey = (lote, index) => `${lote}-${index}`

  const getButtonWidth = () => {
    const buttonWidth = windowWidth / lotes.length
    return buttonWidth
  }

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
      {lotes.length > 0 && (
        <View style={styles.buttonContainer}>
          {lotes.map((lote, index) => (
            <TouchableOpacity
              key={generateUniqueKey(lote, index)}
              style={[
                styles.tabButton,
                activeTab === lote ? styles.activeTabButton : null,
                { width: getButtonWidth() },
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
                { lote }
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  )
}

HeaderGalley.propTypes = {
  lotes: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func,
}

export default HeaderGalley
