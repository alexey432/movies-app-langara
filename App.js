
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from "native-base";
import Header from './components/layout/Header';
import MoviesContainer from './components/containers/MoviesContainer';

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
       <MoviesContainer />
    </NativeBaseProvider>
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
