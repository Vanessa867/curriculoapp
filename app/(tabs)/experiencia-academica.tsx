import { View, Text } from "react-native";

export default function ExperienciaAcademica() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F5F9FF", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#1E88E5", marginBottom: 10 }}>
        Experiência Acadêmica
      </Text>
      <Text style={{ fontSize: 16, color: "#444" }}>
        🎓 Universidade Católica de Pernambuco (UNICAP){"\n"}
        Curso: Sistemas para Internet{"\n"}
        Participação no programa Embarque Digital, com atuação em projetos reais com empresas do Porto Digital.
      </Text>
    </View>
  );
}
