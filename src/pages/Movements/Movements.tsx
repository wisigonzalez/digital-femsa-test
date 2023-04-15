import React, {FC} from 'react';
import {View, Text} from 'react-native';

import {MovementsProps} from './types';
import {MovmentsStyles} from './styles';
import {Card} from '../../components/atoms/Card/Card';
import {Button} from '../../components/atoms/Button/Button';
import {List} from '../../components/organisms/List';

const Movements: FC<MovementsProps> = ({movements = [], totalPoints = 0}) => {
  const styles = MovmentsStyles;
  console.log(movements);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenido de vuelta!</Text>
      <Text style={styles.welcomeName}>Luis González</Text>
      <Text style={styles.sectionOne}>TUS PUNTOS</Text>
      <View style={styles.cardContainer}>
        <Card title="Diciembre" value={totalPoints} />
      </View>
      <Text style={styles.sectionTwo}>TUS MOVIMIENTOS</Text>
      <View style={styles.listContainer}>
        <List data={movements} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text="Todos"
          handleOnPress={() => {
            console.log('*** PRESS ***');
          }}
        />
      </View>
    </View>
  );
};

export {Movements};
