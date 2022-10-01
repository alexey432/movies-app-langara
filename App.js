
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from "native-base";
import Header from './components/layout/Header';
import TabStack from './components/stacks/TabStack';

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
       <TabStack /> 
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
