import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {MovementsDetails} from './MovementsDetails';

const MovementsDetailsLoad = (props: any) => {
  const navigation = useNavigation();
  const {movement} = props?.route?.params;

  return <MovementsDetails navigation={navigation} movement={movement} />;
};

export {MovementsDetailsLoad};
