import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { Ionicons } from '@expo/vector-icons'; 

type ConfirmCatalogScreenProp = NativeStackNavigationProp<RootStackParamList, 'ConfirmCatalogScreen'>;

interface ConfirmCatalogScreenProps {
  navigation: ConfirmCatalogScreenProp;
}

export function ConfirmCatalogScreen({ navigation }: ConfirmCatalogScreenProps) {
  return (
    <View style={styles.container}>
      <Ionicons name="checkmark-circle-outline" size={100} color="#4CAF50" style={styles.icon} />
      <Text style={styles.title}>Informações Salvas!</Text>
      <Text style={styles.text}>Seus dados foram salvos com sucesso.</Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('FitnessRoutes', { screen: 'AddFood' });
        }}
      >
        <Text style={styles.buttonText}>Ir para o Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f4f4f4', 
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50', 
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#FF5722', 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 2, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
