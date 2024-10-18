import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { RadioButton } from 'react-native-paper'; 
import { TextInput } from 'react-native-gesture-handler';
import { useAppContext } from '../Context/AppContext'; 

type GetUserInfoScreenProp = NativeStackNavigationProp<RootStackParamList, 'GetUserInfo'>;

interface GetUserInfoProps {
  navigation: GetUserInfoScreenProp;
}

export function UserInfo({ navigation }: GetUserInfoProps) {
  const { setWeight, setHeight, setGoal, setAge, setSex } = useAppContext(); 
  const [weight, setLocalWeight] = useState<string>('');
  const [height, setLocalHeight] = useState<string>('');
  const [goal, setLocalGoal] = useState<'gain' | 'maintain' | 'lose' | ''>(''); 
  const [age, setLocalAge] = useState<string>(''); 
  const [sex, setLocalSex] = useState<'male' | 'female' | ''>(''); 

  const isValidWeight = (weight: number) => weight >= 30 && weight <= 300;
  const isValidHeight = (height: number) => height >= 100 && height <= 250;
  const isValidAge = (age: number) => age >= 18 && age <= 120; 

  const handleSubmit = () => {
    const weightNumber = parseFloat(weight);
    const heightNumber = parseFloat(height);
    const ageNumber = parseInt(age);

    if (!weight || !height || !goal || !age || !sex) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    if (!isValidWeight(weightNumber)) {
      Alert.alert("Erro", "O peso deve estar entre 30 e 300 kg.");
      return;
    }

    if (!isValidHeight(heightNumber)) {
      Alert.alert("Erro", "A altura deve estar entre 100 e 250 cm.");
      return;
    }

    if (!isValidAge(ageNumber)) {
      Alert.alert("Erro", "A idade deve estar entre 18 e 120 anos.");
      return;
    }

    setWeight(weightNumber);
    setHeight(heightNumber);
    setGoal(goal);
    setAge(ageNumber);  
    setSex(sex);        
    navigation.navigate('ConfirmCatalogScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forneça seus dados:</Text>

      {/* Peso */}
      <Text style={styles.label}>Peso (kg)</Text>
      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={setLocalWeight}
        inputMode="numeric" 
      />

      {/* Altura */}
      <Text style={styles.label}>Altura (cm)</Text>
      <TextInput
        style={styles.input}
        value={height}
        onChangeText={setLocalHeight}
        inputMode="numeric"  
      />

      {/* Idade */}
      <Text style={styles.label}>Idade (anos)</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setLocalAge}
        inputMode="numeric"  
      />

      {/* Sexo */}
      <Text style={styles.goalTitle}>Sexo</Text>
      <View style={styles.radioGroup}>
        <View style={styles.radioItem}>
          <RadioButton
            value="male"
            status={sex === 'male' ? 'checked' : 'unchecked'}
            onPress={() => setLocalSex('male')}
          />
          <Text style={styles.radioText}>Masculino</Text>
        </View>

        <View style={styles.radioItem}>
          <RadioButton
            value="female"
            status={sex === 'female' ? 'checked' : 'unchecked'}
            onPress={() => setLocalSex('female')}
          />
          <Text style={styles.radioText}>Feminino</Text>
        </View>
      </View>

      {/* Objetivo */}
      <Text style={styles.goalTitle}>Objetivo</Text>
      <View style={styles.radioGroup}>
        <View style={styles.radioItem}>
          <RadioButton
            value="lose"
            status={goal === 'lose' ? 'checked' : 'unchecked'}
            onPress={() => setLocalGoal('lose')}
          />
          <Text style={styles.radioText}>Emagrecimento</Text>
        </View>

        <View style={styles.radioItem}>
          <RadioButton
            value="gain"
            status={goal === 'gain' ? 'checked' : 'unchecked'}
            onPress={() => setLocalGoal('gain')}
          />
          <Text style={styles.radioText}>Ganho de Peso</Text>
        </View>

        <View style={styles.radioItem}>
          <RadioButton
            value="maintain"
            status={goal === 'maintain' ? 'checked' : 'unchecked'}
            onPress={() => setLocalGoal('maintain')}
          />
          <Text style={styles.radioText}>Manter Peso</Text>
        </View>
      </View>

      {/* Botão Salvar */}
      <Button title="Salvar" onPress={handleSubmit} color="#FF7F3F" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F2F2F2',  // Cinza claro
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E2E2E',  // Cinza escuro
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#5A5A5A',  // Cinza médio
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#B0B0B0',  // Cinza claro
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    color: '#2E2E2E',  // Cinza escuro
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5A5A5A',  // Cinza médio
    marginBottom: 10,
  },
  radioGroup: {
    marginBottom: 20,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioText: {
    fontSize: 16,
    color: '#2E2E2E',  // Cinza escuro
  },
});
