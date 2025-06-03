import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Alert } from 'react-native';

function gerarSenha() {
  let senha = '';
  while (senha.length < 4) {
    const digito = Math.floor(Math.random() * 10).toString();
    if (!senha.includes(digito)) senha += digito;
  }
  return senha;
}

function calcularResultado(chute: string, senha: string) {
  let bulls = 0; // número correto na posição correta
  let cows = 0;  // número correto na posição errada

  for (let i = 0; i < 4; i++) {
    if (chute[i] === senha[i]) {
      bulls++;
    } else if (senha.includes(chute[i])) {
      cows++;
    }
  }

  return { bulls, cows };
}

export default function Jogo() {
  const [senha, setSenha] = useState('');
  const [tentativa, setTentativa] = useState('');
  const [historico, setHistorico] = useState<
    { tentativa: string; bulls: number; cows: number }[]
  >([]);
  const [jogoAcabou, setJogoAcabou] = useState(false);

  useEffect(() => {
    setSenha(gerarSenha());
  }, []);

  function jogarNovamente() {
    setSenha(gerarSenha());
    setTentativa('');
    setHistorico([]);
    setJogoAcabou(false);
  }

  function handleTentativa() {
    if (tentativa.length !== 4 || new Set(tentativa).size !== 4 || !/^\d{4}$/.test(tentativa)) {
      Alert.alert('Erro', 'A senha deve ter 4 dígitos únicos (0-9).');
      return;
    }

    const resultado = calcularResultado(tentativa, senha);
    const novaTentativa = { tentativa, bulls: resultado.bulls, cows: resultado.cows };
    setHistorico([novaTentativa, ...historico]);

    if (resultado.bulls === 4) {
      Alert.alert('Parabéns!', 'Você acertou a senha!', [
        { text: 'Jogar novamente', onPress: jogarNovamente },
      ]);
      setJogoAcabou(true);
      return;
    }

    if (historico.length + 1 >= 10) {
      Alert.alert('Fim de jogo', `Você usou as 10 tentativas!\nA senha era: ${senha}`, [
        { text: 'Jogar novamente', onPress: jogarNovamente },
      ]);
      setJogoAcabou(true);
      return;
    }

    setTentativa('');
  }

  function mostrarSenha() {
    Alert.alert('Senha secreta', senha);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo Senha (Bulls and Cows)</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua tentativa (4 dígitos únicos)"
        keyboardType="numeric"
        maxLength={4}
        value={tentativa}
        editable={!jogoAcabou}
        onChangeText={setTentativa}
      />

      <Button title="Tentar" onPress={handleTentativa} disabled={jogoAcabou} />
      <View style={{ marginTop: 10 }}>
        <Button title="Mostrar Senha" onPress={mostrarSenha} />
      </View>

      <FlatList
        style={{ marginTop: 20, width: '100%' }}
        data={historico}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.tentativaText}>
              {historico.length - index} - {item.tentativa}
            </Text>
            <Text style={styles.resultadoText}>
              Bulls: {item.bulls} | Cows: {item.cows}
            </Text>
          </View>
        )}
      />

      {jogoAcabou && (
        <View style={{ marginTop: 20 }}>
          <Button title="Jogar Novamente" onPress={jogarNovamente} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f6ff',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 15,
  },
  input: {
    height: 50,
    borderColor: '#0055aa',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#dbe9ff',
    padding: 10,
    marginVertical: 4,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tentativaText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#003366',
  },
  resultadoText: {
    fontSize: 16,
    color: '#0055aa',
  },
});
