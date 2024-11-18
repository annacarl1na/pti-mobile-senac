import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const PatientItem = ({ patient, onSelect }) => {
  return (
    <TouchableOpacity style={styles.patientItem} onPress={() => onSelect(patient)}>
      <Text>{`${patient.name} (${patient.age} anos)`}</Text>
    </TouchableOpacity>
  );
};

export default PatientItem;

