import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import { useAppContext } from '../Context/AppContext';
import { Ionicons } from '@expo/vector-icons'; 

const calculateDailyCalories = (weight: number, height: number, goal: 'gain' | 'maintain' | 'lose', isMale: boolean) => {
  if (!weight || !height) return 0;

  let bmr = isMale
    ? 10 * weight + 6.25 * height - 5 * 30 + 5
    : 10 * weight + 6.25 * height - 5 * 30 - 161;

  if (goal === 'lose') {
    bmr *= 0.85;
  } else if (goal === 'gain') {
    bmr *= 1.15;
  }

  return bmr;
};

export function Resume() {
  const { foods, activities, weight, height, goal, removeFood, removeActivity } = useAppContext();
  const consumedCalories = foods.reduce((total, food) => total + (food.energy_kcal || 0), 0);
  const burnedCalories = activities.reduce((total, activity) => total + (activity.calories_burned || 0), 0);
  const dailyCalories = calculateDailyCalories(weight || 0, height || 0, goal, true);

  return (
    <ScrollView style={styles.container}>
      <Ionicons name="stats-chart" size={80} color="#FF5722" style={styles.icon} />
      <Text style={styles.title}>Resumo de Calorias</Text>
      <View style={styles.card}>
        <Text style={styles.subtitle}>Calorias Consumidas: <Text style={styles.value}>{consumedCalories} kcal</Text></Text>
        <Text style={styles.subtitle}>Calorias Queimadas: <Text style={styles.value}>{burnedCalories} kcal</Text></Text>
        <Text style={styles.subtitle}>Calorias Diárias Recomendadas: <Text style={styles.value}>{dailyCalories.toFixed(0)} kcal</Text></Text>
      </View>

      <View style={styles.list}>
        <Text style={styles.sectionTitle}>Alimentos Consumidos</Text>
        {foods.length > 0 ? (
          foods.map((food) => (
            <View key={food.id} style={styles.item}>
              <Text style={styles.itemText}>{food.description}</Text>
              <TouchableOpacity style={styles.removeButton} onPress={() => removeFood(food.id)}>
                <Ionicons name="trash-bin" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={styles.emptyText}>Nenhum alimento selecionado.</Text>
        )}
      </View>

      <View style={styles.list}>
        <Text style={styles.sectionTitle}>Atividades Realizadas</Text>
        {activities.length > 0 ? (
          activities.map((activity) => (
            <View key={activity.id} style={styles.item}>
              <Text style={styles.itemText}>{activity.description}</Text>
              <TouchableOpacity style={styles.removeButton} onPress={() => removeActivity(activity.id)}>
                <Ionicons name="trash-bin" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={styles.emptyText}>Nenhuma atividade selecionada.</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF5722', // Cor chamativa
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginBottom: 30,
    elevation: 5,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2a9d8f',
  },
  list: {
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  removeButton: {
    backgroundColor: '#FF5722', // Botão vermelho chamativo
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
});
