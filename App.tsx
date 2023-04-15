import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {AppStyles} from './App.styles';
import {MovementsLoad} from './src/pages/Movements/Movements.load';

const App = (): JSX.Element => {
  const styles = AppStyles;
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <MovementsLoad />
    </SafeAreaView>
  );
};

export default App;
