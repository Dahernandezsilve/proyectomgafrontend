import React from 'react'
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as Font from 'expo-font'
import SamsungOne from '../fonts/SamsungOne-400.ttf'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    elevation: 2,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: 40,
    justifyContent: 'center',
    marginRight: 5,
    pointerEvents: 'auto',
    width: 40,
  },
  info: {
    color: '#2B4985',
    fontFamily: 'SamsungOne',
    fontSize: 25,
  },
  infoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  line: {
    backgroundColor: '#EAEAEA',
    marginTop: 10,
  },
  placeholder: {
    width: 0,
  },
  title: {
    fontFamily: 'SamsungOne',
    fontSize: 30,
    textAlign: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginLeft: -28,
  },
})

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
