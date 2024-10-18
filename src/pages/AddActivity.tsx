import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useAppContext } from '../Context/AppContext';
import activitiesData from '../data/activities.json';

export function AddActivity() {
  const { activities, addActivity, removeActivity } = useAppContext();
  
  const handleActivityToggle = (activity: any) => {
    const isActivityAlreadyAdded = activities.some((existingActivity) => existingActivity.id === activity.id);
    if (isActivityAlreadyAdded) {
      removeActivity(activity.id);
    } else {
      addActivity(activity);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Atividade</Text>

      <ScrollView style={styles.scrollContainer}>
        {activitiesData.map((activity) => (
          <View key={activity.id} style={styles.activityItem}>
            <Text style={styles.activityDescription}>{activity.description}</Text>
            <Text style={styles.activityCalories}>{activity.calories_burned} kcal</Text>
            <Button
              title={activities.some((existingActivity) => existingActivity.id === activity.id)
                ? `Remover ${activity.description}`
                : `Adicionar ${activity.description}`}
              color={activities.some((existingActivity) => existingActivity.id === activity.id) ? '#2A9D8F' : '#E76F51'}
              onPress={() => handleActivityToggle(activity)}
            />
          </View>
        ))}
      </ScrollView>

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
  activityItem: {
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
  activityDescription: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2A9D8F', 
  },
  activityCalories: {
    fontSize: 16,
    color: '#333333', 
  },
  subTitle: {
    fontSize: 18,
    marginVertical: 10,
    color: '#014E5C', 
  },
  activityAdded: {
    fontSize: 16,
    color: '#333', 
    marginBottom: 5,
  },
  emptyText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
  scrollContainer: {
    marginBottom: 20, 
  },
});
