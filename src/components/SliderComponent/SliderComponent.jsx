import React, { useState } from 'react'
import Slider from '@miblanchard/react-native-slider'
import { View, Text } from 'react-native'
import styles from './styles'

const SliderComponent = () => {
  const [value, setValue] = useState(20)

  const handleValueChange = newValue => {
    setValue(newValue)
  }

  return (
    <View style={styles.container}>
      <Slider
        value={value}
        onValueChange={handleValueChange}
      />
      <Text>
        Value:
        {' '}
        {value}
      </Text>
    </View>
  )
}

export default SliderComponent
