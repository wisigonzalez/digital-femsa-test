import React from 'react';
import {FlatList, View} from 'react-native';

import {ListStyles} from './styles';
import {ListItem} from '../molecules/ListItem';
import {ROUTES} from '../../navigators/routes';

const List = ({navigation, data = []}: any): JSX.Element => {
  const styles = ListStyles;

  const renderItem = ({item}: any): JSX.Element => {
    const {product, createdAt, points, is_redemption, image} = item;

    return (
      <ListItem
        title={product}
        date={createdAt}
        points={points}
        imageUrl={image}
        isRedemption={is_redemption}
        handleOnPress={() =>
          navigation.navigate(ROUTES.MOVEMENTS_DETAILS, {
            movement: item,
          })
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        windowSize={5}
        initialNumToRender={2}
        maxToRenderPerBatch={2}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item): string => item.id}
      />
    </View>
  );
};

export {List};
