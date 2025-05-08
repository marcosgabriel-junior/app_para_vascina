import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { Tabs, useRouter } from "expo-router";

export default function MenuModalHeader() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  
  const handleNavigate = (screen) => {
    closeModal();
    navigation.navigate(screen);
  };

  return (
    <View>
      {/* Cabeçalho limpo sem fundo */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={openModal} 
          style={styles.menuButton}
        >
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalWrapper}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigate('/menu/Profile')}>
              <Text style={styles.menuText}>Ver Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigate('/menu/MainPage')} >
              <Text style={styles.menuText}>Página Principal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/configuracao/conta')}>
              <Text style={styles.menuText}>Configurações</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 60,
  },
  menuButton: {
    padding: 8,
  },
  modalWrapper: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 60,
  },
  modalContent: {
    width: '50%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    marginLeft: 16,
  },
  menuItem: {
    paddingVertical: 12,
  },
  menuText: {
    fontSize: 16,
  },
});