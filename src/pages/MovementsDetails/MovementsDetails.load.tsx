import React from 'react';

import {MovementsDetails} from './MovementsDetails';

const MovementsDetailsLoad = (props: any) => {
  const {movement} = props?.route?.params;

  return <MovementsDetails movement={movement} />;
};

export {MovementsDetailsLoad};
