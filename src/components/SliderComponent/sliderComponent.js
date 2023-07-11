/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { Slider } from '@miblanchard/react-native-slider'
import {
  AppRegistry, View, Text,
} from 'react-native'
import styles from './styles'

// eslint-disable-next-line import/prefer-default-export
export class SliderComponent extends React.Component {
  state = {
    value: 20,
  }

  render() {
    return (
      <View style={styles.container}>
        <Slider
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
        />
        <Text>
          Value:
          {this.state.value}
        </Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('SliderComponent', () => SliderComponent)
