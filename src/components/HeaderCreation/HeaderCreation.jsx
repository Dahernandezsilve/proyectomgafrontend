import React from 'react'
import {
  Text, View, TouchableOpacity,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

const HeaderCreation = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => { navigation.goBack() }}
          hitSlop={{
            top: 30, bottom: 30, left: 30, right: 30,
          }}
        >
          <View style={styles.iconContainer}>
            <Ionicons name="arrow-back" size={28} color="#2B4985" />
          </View>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Información requerida</Text>
        </View>
        <View style={styles.placeholder} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Lote #1</Text>
        <Text style={styles.info}>Galera #1</Text>
      </View>
      <View style={styles.line} />
    </View>
  )
}

export default HeaderCreation
