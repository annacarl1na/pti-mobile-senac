import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from '../styles/styles';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    Alert.alert('Login realizado com sucesso!');
    navigation.navigate('Menu');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Hospital Código do Bem</Text>
      <Text style={styles.title}>Digite seus dados</Text>
      <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

