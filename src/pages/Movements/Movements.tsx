import React, {FC} from 'react';
import {View, Text} from 'react-native';

import {MovementsProps} from './types';
import {MovmentsStyles} from './styles';
import {FILTERS} from '../../constants';
import {List} from '../../components/organisms/List';
import {Card} from '../../components/atoms/Card/Card';
import {Button} from '../../components/atoms/Button/Button';

const Movements: FC<MovementsProps> = ({
  navigation,
  filterActive,
  movements = [],
  totalPoints = 0,
  handleFilter,
}) => {
  const styles = MovmentsStyles;

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
        <List navigation={navigation} data={movements} />
      </View>
      {filterActive === FILTERS.all && (
        <View style={styles.buttonContainerTwo}>
          <Button
            text="Ganados"
            customStyles={styles.customButtonStyles}
            handleOnPress={() => handleFilter(FILTERS.winned)}
          />
          <Button
            text="Canjeados"
            customStyles={styles.customButtonStyles}
            handleOnPress={() => handleFilter(FILTERS.redeemed)}
          />
        </View>
      )}
      {filterActive !== FILTERS.all && (
        <View style={styles.buttonContainer}>
          <Button
            text="Todos"
            handleOnPress={() => handleFilter(FILTERS.all)}
          />
        </View>
      )}
    </View>
  );
};

export {Movements};
