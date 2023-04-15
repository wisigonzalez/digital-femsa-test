import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {ListItemStyles} from './styles';
import {numberFormatter, dateFormmatter} from '../../utils/formatter';

export const ListItem = ({
  title,
  date,
  points,
  imageUrl,
  isRedemption,
  handleOnPress,
}: any): JSX.Element => {
  const style = ListItemStyles;

  return (
    <TouchableOpacity onPress={handleOnPress} testID="item-id">
      <View style={style.container}>
        <View style={style.leftContentSide}>
          <View>
            <Image
              style={style.image}
              source={{uri: imageUrl}}
              resizeMode="cover"
            />
          </View>
          <View>
            <Text style={style.title}>{title}</Text>
            <Text style={style.date}>{dateFormmatter(date)}</Text>
          </View>
        </View>
        <View style={style.rightContentSide}>
          <Text style={style.points}>
            <Text style={isRedemption ? style.negative : style.positive}>
              {isRedemption ? '-' : '+'}
            </Text>
            {numberFormatter(points)}
          </Text>
        </View>
        <Text style={style.arrow}>{'>'}</Text>
      </View>
    </TouchableOpacity>
  );
};
