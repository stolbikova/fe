import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import * as S from './App.styles';

async function getLocation() {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    console.error('Permission to access location was denied');
    return;
  }

  let location = await Location.getCurrentPositionAsync({});
  console.log(location);
}

export default function App() {
  getLocation();
  return (
    <View style={styles.container}>
      <S.Text>This week</S.Text>
      <S.Text>Explore</S.Text>
      <StatusBar style="auto" />
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
