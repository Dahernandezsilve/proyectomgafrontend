import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeaderInformation = () => {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Información Requerida</Text>
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
      backgroundColor: '#F8F8F8',
      borderBottomWidth: 1,
      borderBottomColor: '#EAEAEA',
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    titleContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    title: {
      fontSize: 22,
      fontWeight: 'normal',
      textAlign: 'center',
      fontFamily: 'Roboto',
    },
    infoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
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
