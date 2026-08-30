import React from 'react';
import { StyleSheet, View,  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useMatch from '../hooks/usematch'
import { Appbar, Button, Card, Text, Chip } from 'react-native-paper';

export const GameScreen = () => {
    const { score,playerChoice, computerChoice, matchWinner, startMatch } = useMatch();

  const result = !matchWinner?.status 
    ? 'Elige una opción' 
    : matchWinner.status === 'draw' 
      ? '¡Empate!' 
      : matchWinner.status === 'wins' ? '¡Ganaste!' : '¡Perdiste!';

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={styles.fullWidth}>
        <Appbar.Content title="PPT" />
      </Appbar.Header>

      <Text variant="titleLarge" style={styles.margin}>Piedra, Papel, Tijeras</Text>

      <View style={styles.row}>
        <Card style={styles.card}>
          <Card.Content style={styles.center}>
            <Text>Jugador</Text>
            <Text variant="headlineMedium">{score.playerScore}</Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content style={styles.center}>
            <Text>Computadora</Text>
            <Text variant="headlineMedium">{score.computerScore}</Text>
          </Card.Content>
        </Card>
      </View>

      <View style={styles.controls}>
            <Button mode="contained-tonal" onPress={() => startMatch('rock')}>
                Piedra ✊
            </Button>
        <View style={styles.row}>
            <Button mode="contained-tonal" icon="hand-back-left" style={styles.flex} onPress={() => startMatch('paper')}>
            Papel 
            </Button>
            <Button mode="contained-tonal" icon="scissors-cutting" style={styles.flex} onPress={() => startMatch('scissors')}>
            Tijeras 
            </Button>
        </View>
        </View>

      <Chip icon="gamepad-variant" style={styles.margin}>{result}</Chip>
      {playerChoice && (
        <View style={styles.choicesRow}>
          <Chip style={styles.margin}>Elegiste: {playerChoice}</Chip>
          <Chip style={styles.margin}>Computadora: {computerChoice}</Chip>
        </View>
      )}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  fullWidth: { width: '100%' },
  margin: { marginVertical: 20 },
  row: { flexDirection: 'row', gap: 10, width: '85%' },
  card: { flex: 1 },
  center: { alignItems: 'center' },
  controls: { width: '85%', gap: 10, marginTop: 20 },
  flex: { flex: 1 },
});

export default GameScreen;