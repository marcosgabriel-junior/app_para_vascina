import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import MenuModalHeader from './MenuModalHeader';

export default function Index() {
  return (
    <View style={styles.container1}>
      <StatusBar 
        backgroundColor="#FFFFFF" 
        barStyle="dark-content" 
      />
      <MenuModalHeader />
      <View style={styles.content}>
        {/* Conteúdo da sua tela principal */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingTop: 0, // Remove espaçamento residual
  },
});