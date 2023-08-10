import React from 'react'
import {
  Text, View, TouchableOpacity, Dimensions,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

const windowWidth = Dimensions.get('window').width

const HeaderCreation = ({galera}) => {
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
            <Ionicons name="arrow-back" size={windowWidth * 0.07} color="#2B4985" />
          </View>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Información requerida</Text>
        </View>
        <View style={styles.placeholder} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.info, { fontSize: windowWidth * 0.055 }]}>Lote #1</Text>
        <Text style={[styles.info, { fontSize: windowWidth * 0.055 }]}>{galera}</Text>
      </View>
      <View style={styles.line} />
    </View>
  )
}

export default HeaderCreation
