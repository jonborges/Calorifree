import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

interface WelcomeProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
}

export function Welcome({ navigation }: WelcomeProps) {
  return (
    <ImageBackground 
      source={{ uri: 'https://www.transparenttextures.com/patterns/white-diamond.png' }} 
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>Bem-vindo ao CaloriFree</Text>
          <Button 
            title="Começar" 
            onPress={() => navigation.navigate('GetUserInfo')}  
            color="#ff7f50"
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  button: {
    backgroundColor: '#ff7f50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
});
