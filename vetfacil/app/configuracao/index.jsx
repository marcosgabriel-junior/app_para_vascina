import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';

export default function Settings() {
  const router = useRouter();

  const handleLogout = () => {
    console.log('Deslogando...');
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      
      <Text style={styles.header}>Configurações</Text>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option} onPress={() => router.push('/settings/conta')}>
          <Text style={styles.optionText}>👤 Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => router.push('/settings/notificacoes')}>
          <Text style={styles.optionText}>🔔 Notificações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.option, styles.logout]} onPress={handleLogout}>
          <Text style={[styles.optionText, styles.logoutText]}>🚪 Sair da Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 32,
    textAlign: 'left',
    color: '#1C1C1E',
  },
  optionsContainer: {
    gap: 16,
  },
  option: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  optionText: {
    fontSize: 17,
    color: '#1C1C1E',
    fontWeight: '500',
  },
  logout: {
    backgroundColor: '#FFEFEF',
  },
  logoutText: {
    color: '#D10000',
  },
});
