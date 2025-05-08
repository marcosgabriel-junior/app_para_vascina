import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import MenuModalHeader from './MenuModalHeader';

export default function Profile() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <MenuModalHeader />
      <View style={styles.content}>
        <Text style={styles.title}>Perfil do Usuário</Text>
        <Text style={styles.text}>Esta é a tela de perfil</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
});