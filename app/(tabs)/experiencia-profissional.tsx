import { View, Text } from "react-native";

export default function ExperienciaProfissional() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F5F9FF", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#1E88E5", marginBottom: 10 }}>
        Experiência Profissional
      </Text>
      <Text style={{ fontSize: 16, color: "#444" }}>
        💼 Projeto DP - Domínio Digital{"\n"}
        Desenvolvimento de uma aplicação junto à startup.{"\n\n"}
        💼 Projeto Ustore{"\n"}
        Desenvolvimento de uma plataforma de marketplace com relatórios, controle de usuários e pedidos.
      </Text>
    </View>
  );
}
