import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Sobre() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sobre o Aplicativo</Text>
      <Text style={styles.text}>
        Este aplicativo foi desenvolvido com React Native e Expo Router. Para o design e navegação, utilizei componentes modernos e uma paleta de cores em azul, para um visual minimalista e elegante.
      </Text>
      {/* Detalhe as tecnologias usadas aqui */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f6ff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    color: '#004a99',
    lineHeight: 24,
  },
});
