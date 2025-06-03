import { ScrollView, View, Text } from "react-native";

export default function Projetos() {
  return (
    <ScrollView style={{ backgroundColor: "#F5F9FF", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#1E88E5", marginBottom: 20 }}>
        Projetos
      </Text>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#333" }}>DramaDrop</Text>
        <Text style={{ color: "#555" }}>App criativo onde usuários postam dramas anonimamente e recebem reações.</Text>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#333" }}>ComLiv</Text>
        <Text style={{ color: "#555" }}>Plataforma de estudo coletivo baseada em salas temáticas e ODS 4.</Text>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#333" }}>Sistema de Condomínio</Text>
        <Text style={{ color: "#555" }}>Backend completo com Spring Boot, PostgreSQL, e deploy em nuvem.</Text>
      </View>
    </ScrollView>
  );
}
