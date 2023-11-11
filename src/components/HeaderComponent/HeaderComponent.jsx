import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const HeaderComponent = ({
  title, customTitles, activeTab, setActiveTab,
}) => {
  const handleTabPress = tabName => {
    setActiveTab(tabName)
  }
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.buttonContainer}>
        {customTitles.map((custom, index) => (
          <TouchableOpacity
            // eslint-disable-next-line react/no-array-index-key
            testID="tab-button"
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            style={[
              styles.tabButton,
              activeTab === custom ? styles.activeTabButton : null,
            ]}
            activeOpacity={0.7}
            onPress={() => handleTabPress(custom)}
          >
            <Text
              style={[
                styles.tabButtonText,
                activeTab === custom ? styles.activeTabButtonText : null,
              ]}
            >
              {customTitles ? customTitles[index] : null}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

HeaderComponent.propTypes = {
  title: PropTypes.string.isRequired,
  customTitles: PropTypes.arrayOf(PropTypes.string),
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
}

HeaderComponent.defaultProps = {
  customTitles: null,
}

export default HeaderComponent
