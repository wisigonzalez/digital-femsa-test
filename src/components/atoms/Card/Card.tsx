import React from 'react';
import {View, Text} from 'react-native';

import {CardProps} from './types';
import {CardStyles} from './styles';
import {numberFormatter} from '../../../utils/formatter';

const Card = ({
  title = '',
  value = 0,
  unit = 'pts',
}: CardProps): JSX.Element => {
  const styles = CardStyles;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>
        {numberFormatter(value)} {unit}
      </Text>
    </View>
  );
};

export {Card};
