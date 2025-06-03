import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

// Importa a imagem local - ajuste o caminho conforme seu projeto
const girlAvatar = require('@/assets/images/avatar.jpg');

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={girlAvatar}
        style={styles.avatar}
      />
      <Text style={styles.name}>Vanessa Silva</Text>
      <Text style={styles.title}>Desenvolvedora Frontend & Backend</Text>

      <Text style={styles.bio}>
        Olá! Sou apaixonada por tecnologia e desenvolvimento de software. Aqui você vai encontrar meu currículo, experiência, projetos e até um joguinho divertido!
      </Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>📧 E-mail</Text>
        <Text style={styles.infoText}>vanessa@email.com</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>📍 Localização</Text>
        <Text style={styles.infoText}>Recife, Brasil</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>💼 Tecnologias</Text>
        <Text style={styles.infoText}>React Native, Expo, Java, Spring Boot, PostgreSQL</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 48,
    backgroundColor: '#f0f6ff',
    alignItems: 'center',
    minHeight: '100%',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#004a99',
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#003366',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0066cc',
    marginBottom: 16,
  },
  bio: {
    fontSize: 16,
    color: '#004a99',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  infoBox: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    width: '100%',
    marginBottom: 15,
    shadowColor: '#003366',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  infoTitle: {
    fontSize: 14,
    color: '#004a99',
    fontWeight: '700',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 16,
    color: '#003366',
  },
});
