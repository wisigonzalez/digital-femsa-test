import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {ButtonProps} from './types';
import {ButtonStyles} from './styles';

const Button = ({
  text = 'Boton',
  customStyles = {},
  handleOnPress,
}: ButtonProps): JSX.Element => {
  const styles = ButtonStyles;

  return (
    <TouchableOpacity
      style={[styles.container, customStyles]}
      onPress={handleOnPress}>
      <Text style={[styles.text, customStyles.text]}>{text}</Text>
    </TouchableOpacity>
  );
};

export {Button};
