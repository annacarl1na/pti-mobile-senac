import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Menu Princial </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Consultation')}>
        <Text style={styles.buttonText}>Registrar Pacientes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CRUD')}>
        <Text style={styles.buttonText}>Atualizar ou Deletar Paciente</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuScreen;
