import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';

import {MovementProps} from './types';
import {MovmentsDetailsStyles} from './styles';
import {Button} from '../../components/atoms/Button/Button';
import {dateFormmatter, numberFormatter} from '../../utils/formatter';

const MovementsDetails: FC<MovementProps> = ({navigation, movement}) => {
  const styles = MovmentsDetailsStyles;
  const {product, image, createdAt, points} = movement;

  return (
    <View testID="container-id" style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.product}>{product}</Text>
      </View>
      <View style={styles.containerTwo}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{uri: image}}
            resizeMode="cover"
          />
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.sectionOne}>Detalles del producto:</Text>
          <Text style={styles.dateText}>
            Comprado el {dateFormmatter(createdAt)}
          </Text>
          <Text style={styles.sectionTwo}>Con esta compra acumulaste:</Text>
          <Text style={styles.pointText}>{numberFormatter(points)} puntos</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text="Aceptar"
            handleOnPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </View>
    </View>
  );
};

export {MovementsDetails};
