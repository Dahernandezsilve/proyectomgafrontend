import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ModalComponent } from './modalComponent';

const HeaderInformation = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {navigation.goBack()}} hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}>
          <View style={styles.iconContainer}>
            <Ionicons name="arrow-back" size={28} color="#2B4985" />
          </View>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Información requerida</Text>
        </View>
        <View style={styles.placeholder}></View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Lote #1</Text>
        <Text style={styles.info}>Galera #1</Text>
      </View>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,   
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    backgroundColor: 'transparent',
    pointerEvents: 'auto'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -28, 
  },
  title: {
    fontSize: 30,
    fontWeight: 'normal',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  info: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#2B4985',
  },
  placeholder: {
    width: 0, 
  },
  line: {
    backgroundColor: '#EAEAEA',
    marginTop: 10,
  },
});

export default HeaderInformation;
