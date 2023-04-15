import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {ListItemProps} from './types';
import {ListItemStyles} from './styles';
import {numberFormatter, dateFormmatter} from '../../utils/formatter';

export const ListItem = ({item, handleOnPress}: ListItemProps): JSX.Element => {
  const style = ListItemStyles;
  const {id, product, createdAt, points, is_redemption, image} = item;

  return (
    <TouchableOpacity onPress={handleOnPress} testID={`item-id-${id}`}>
      <View style={style.container}>
        <View style={style.leftContentSide}>
          <View>
            <Image
              style={style.image}
              source={{uri: image}}
              resizeMode="cover"
            />
          </View>
          <View>
            <Text style={style.title}>{product}</Text>
            <Text style={style.date}>{dateFormmatter(createdAt)}</Text>
          </View>
        </View>
        <View style={style.rightContentSide}>
          <Text style={style.points}>
            <Text style={is_redemption ? style.negative : style.positive}>
              {is_redemption ? '-' : '+'}
            </Text>
            {numberFormatter(points)}
          </Text>
        </View>
        <Text style={style.arrow}>{'>'}</Text>
      </View>
    </TouchableOpacity>
  );
};
