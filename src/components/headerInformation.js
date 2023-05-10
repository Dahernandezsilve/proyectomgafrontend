import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeaderInformation = () => {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Información requerida</Text>
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
      borderBottomColor: '#EAEAEA',
      paddingHorizontal: 16,
      paddingVertical: 8,
      paddingTop: 20,
    },
    titleContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
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
      marginBottom: 10,
    },
    info: {
      fontSize: 25,
      fontWeight: 'bold',
      fontFamily: 'Roboto',
      color: '#2B4985',
    },
  });
  

export default HeaderInformation;