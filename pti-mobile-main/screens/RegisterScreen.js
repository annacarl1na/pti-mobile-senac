import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from '../styles/styles';

const RegisterScreen = ({ navigation }) => {
  const handleRegister = () => {
    Alert.alert('Cadastro realizado com sucesso!');
    navigation.navigate('Menu');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Cadastro</Text>
      <TextInput style={styles.input} placeholder="Nome" />
      <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

