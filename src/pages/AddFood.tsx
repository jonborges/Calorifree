import React, { useState } from 'react';
import { View, FlatList, Text, Button, TextInput, StyleSheet } from 'react-native';
import foodsData from '../data/foods.json';
import { useAppContext } from '../Context/AppContext';

export function AddFood() {
  const { foods, addFood, removeFood } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFoods, setFilteredFoods] = useState(foodsData);

  const filterFoods = (query: string) => {
    if (query === '') {
      setFilteredFoods(foodsData);
    } else {
      const filtered = foodsData.filter((food) => {
        const description = food.description ? food.description.toLowerCase() : '';
        const name = food.description ? food.description.toLowerCase() : '';

        return description.includes(query.toLowerCase()) || name.includes(query.toLowerCase());
      });
      setFilteredFoods(filtered);
    }
  };

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    filterFoods(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Alimento</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar alimentos..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      <FlatList
        data={filteredFoods}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.foodItem}>
            <Text style={styles.foodName}>{item.description}</Text>
            <Text style={styles.foodEnergy}>{item.energy_kcal} kcal</Text>
            {foods.some((food) => food.id === item.id) ? (
              <Button title="Remover Alimento" color="#2A9D8F" onPress={() => removeFood(item.id)} />
            ) : (
              <Button title="Adicionar Alimento" color="#E76F51" onPress={() => addFood(item)} />
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5', 
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 25,
    color: '#014E5C', 
  },
  searchInput: {
    height: 45,
    borderColor: '#2A9D8F', 
    borderBottomWidth: 2,
    marginBottom: 20,
    paddingLeft: 15,
    fontSize: 16,
    color: '#333',
    borderRadius: 8,
  },
  foodItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF', 
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  foodName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2A9D8F', 
  },
  foodEnergy: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
});
