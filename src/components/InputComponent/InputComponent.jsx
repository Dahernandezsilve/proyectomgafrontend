import React from 'react'
import { SafeAreaView, TextInput } from 'react-native'
import styles from './styles'

const InputComponent = () => {
  const [text, onChangeText] = React.useState('Useless Text')
  const [number, onChangeNumber] = React.useState('')

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  )
}

export default InputComponent
