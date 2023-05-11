import React from 'react';
import {
  SafeAreaView,
  View,
  useColorScheme,
} from 'react-native';
import ProductsList from './AppModules/ProductList';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{ flex: 1 }}>
        <ProductsList/>
      </View>
    </SafeAreaView>
  );
}

export default App;
