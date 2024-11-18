import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';

const CRUDScreen = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedAge, setUpdatedAge] = useState('');
  const [updatedBloodPressure, setUpdatedBloodPressure] = useState('');
  const [updatedGlucoseLevel, setUpdatedGlucoseLevel] = useState('');
  const [updatedCholesterolLevel, setUpdatedCholesterolLevel] = useState('');

  // Função para carregar os pacientes salvos
  const loadPatients = async () => {
    try {
      const storedPatients = await AsyncStorage.getItem('patients');
      if (storedPatients) {
        setPatients(JSON.parse(storedPatients));
      }
    } catch (error) {
      console.error('Error loading patients', error);
    }
  };

  // Função para salvar pacientes no AsyncStorage
  const savePatients = async (updatedPatients) => {
    try {
      await AsyncStorage.setItem('patients', JSON.stringify(updatedPatients));
    } catch (error) {
      console.error('Error saving patients', error);
    }
  };

  const handleSelect = (patient) => {
    setSelectedPatient(patient);
    setUpdatedName(patient.name);
    setUpdatedAge(patient.age.toString());
    setUpdatedBloodPressure(patient.bloodPressure || '');
    setUpdatedGlucoseLevel(patient.glucoseLevel || '');
    setUpdatedCholesterolLevel(patient.cholesterolLevel || '');
  };

  const handleUpdate = () => {
    if (!selectedPatient || !updatedName || !updatedAge || !updatedBloodPressure || !updatedGlucoseLevel || !updatedCholesterolLevel) {
      Alert.alert('Por favor, preencha todos os campos!');
      return;
    }

    const updatedPatients = patients.map(patient => 
      patient.id === selectedPatient.id
        ? {
            ...patient,
            name: updatedName,
            age: parseInt(updatedAge),
            bloodPressure: updatedBloodPressure,
            glucoseLevel: updatedGlucoseLevel,
            cholesterolLevel: updatedCholesterolLevel,
          }
        : patient
    );

    setPatients(updatedPatients);
    savePatients(updatedPatients); // Salvar pacientes atualizados
    setSelectedPatient(null);
    setUpdatedName('');
    setUpdatedAge('');
    setUpdatedBloodPressure('');
    setUpdatedGlucoseLevel('');
    setUpdatedCholesterolLevel('');
    Alert.alert('Paciente atualizado com sucesso!');
  };

  const handleDelete = () => {
    if (!selectedPatient) {
      Alert.alert('Selecione um paciente para deletar!');
      return;
    }

    const filteredPatients = patients.filter(patient => patient.id !== selectedPatient.id);
    setPatients(filteredPatients);
    savePatients(filteredPatients); // Salvar pacientes após a exclusão
    setSelectedPatient(null);
    Alert.alert('Paciente deletado com sucesso!');
  };

  useEffect(() => {
    loadPatients(); // Carrega os pacientes ao iniciar o componente
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atualizar ou Deletar Paciente</Text>
      {selectedPatient && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Nome do Paciente"
            value={updatedName}
            onChangeText={setUpdatedName}
          />
          <TextInput
            style={styles.input}
            placeholder="Idade do Paciente"
            keyboardType="numeric"
            value={updatedAge}
            onChangeText={setUpdatedAge}
          />
          <TextInput
            style={styles.input}
            placeholder="Pressão Arterial (ex: 120/80)"
            value={updatedBloodPressure}
            onChangeText={setUpdatedBloodPressure}
          />
          <TextInput
            style={styles.input}
            placeholder="Nível de Glicose (mg/dL)"
            keyboardType="numeric"
            value={updatedGlucoseLevel}
            onChangeText={setUpdatedGlucoseLevel}
          />
          <TextInput
            style={styles.input}
            placeholder="Nível de Colesterol (mg/dL)"
            keyboardType="numeric"
            value={updatedCholesterolLevel}
            onChangeText={setUpdatedCholesterolLevel}
          />
          <TouchableOpacity style={styles.button} onPress={handleUpdate}>
            <Text style={styles.buttonText}>Atualizar Paciente</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleDelete}>
            <Text style={styles.buttonText}>Deletar Paciente</Text>
          </TouchableOpacity>
        </>
      )}
      <FlatList
        data={patients}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.patientItem} onPress={() => handleSelect(item)}>
            <Text>{`${item.name} (${item.age} anos)`}</Text>
            <Text>{`Pressão Arterial: ${item.bloodPressure || 'Não Informado'}`}</Text>
            <Text>{`Nível de Glicose: ${item.glucoseLevel || 'Não Informado'} mg/dL`}</Text>
            <Text>{`Nível de Colesterol: ${item.cholesterolLevel || 'Não Informado'} mg/dL`}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CRUDScreen;
