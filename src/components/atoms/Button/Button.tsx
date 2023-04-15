import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {ButtonStyles} from './styles';
import {ButtonProps} from './types';

const Button = ({text = 'Boton', handleOnPress}: ButtonProps): JSX.Element => {
  const styles = ButtonStyles;

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export {Button};
