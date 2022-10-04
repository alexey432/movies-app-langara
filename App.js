
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from "native-base";
import Header from './components/layout/Header';
import AppStack from './components/navigation/AppStack';

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
       <AppStack /> 
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
