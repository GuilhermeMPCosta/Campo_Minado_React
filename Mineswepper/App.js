import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params';
import Field from './src/components/field';
import mine from './src/components/mine';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Iniciando Mines</Text>
      <Text style={styles.instructions}>Tamanho da Grade:
        {params.getrowsamount()}X{params.getcolumnsAmount()}
      </Text>
      <Field />
      <Field opened/>
      <Field opened nearMines={2}/>
      <Field mined />
      <Field mined opened/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
