import React from 'react';
import {FlatList, View} from 'react-native';

import {ListStyles} from './styles';
import {ItemProps, ListProps} from './types';
import {ListItem} from '../molecules/ListItem';
import {ROUTES} from '../../navigators/routes';

const List = ({navigation, data = []}: ListProps): JSX.Element => {
  const styles = ListStyles;

  const renderItem = ({item}: ItemProps): JSX.Element => {
    return (
      <ListItem
        item={item}
        handleOnPress={() =>
          navigation.navigate(ROUTES.MOVEMENTS_DETAILS, {
            movement: item,
          })
        }
      />
    );
  };

  return (
    <View testID="list-id" style={styles.container}>
      <FlatList
        data={data}
        windowSize={5}
        testID="flatlist-id"
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
