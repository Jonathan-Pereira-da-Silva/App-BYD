import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{uri:'pao.png'}}></Image>
      <Text style={styles.Text}>Bem vindo ao app da sua hamburgueria favorita!</Text>
      <Text style={styles.Text1}>Bem vindo ao app da sua hamburgueria favorita!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ed5e03',
    alignItems: 'center',
  },
  Text: {
    fontSize: 30,
    color: '#fff8dc',
    fontWeight: 'bold',
    backgroundColor: '#228b22',
    marginTop: 60,
  },
  Text1: {
    fontSize: 20,
    color: '#fff8dc',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
