import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  //funcionalidad del Boton
  const saludo = () => {
    console.log('hola, mundo');
  };

  return (
    <View style={styles.container}>
      <Button title='Hola, mundo' onPress={saludo} color={estilos.boton.backgroundColor}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  boton: {
    backgroundColor: '#FF00FF',
    color: '#FF00FF'
  }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});