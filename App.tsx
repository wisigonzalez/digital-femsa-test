import React from 'react';
import {SafeAreaView} from 'react-native';
import {enableScreens} from 'react-native-screens';

import {AppStyles} from './App.styles';
import {MovementsNavigator} from './src/navigators/Movements.navigator';

enableScreens();

const App = (): JSX.Element => {
  const styles = AppStyles;

  return (
    <SafeAreaView style={styles.container}>
      <MovementsNavigator />
    </SafeAreaView>
  );
};

export default App;
