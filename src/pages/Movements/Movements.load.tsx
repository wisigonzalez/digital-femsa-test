import React from 'react';

import {Movements} from './Movements';

const MovementsLoad = () => {
  const movements = [
    {
      createdAt: '2022-12-09T06:34:25.607Z',
      product: 'Handmade Metal Shoes',
      points: 16434,
      image: 'https://loremflickr.com/640/480/transport',
      is_redemption: false,
      id: '1',
    },
    {
      createdAt: '2022-12-09T17:02:51.904Z',
      product: 'Recycled Plastic Tuna',
      points: 92984,
      image: 'https://loremflickr.com/640/480/technics',
      is_redemption: false,
      id: '2',
    },
    {
      createdAt: '2022-12-09T06:34:25.607Z',
      product: 'Handmade Metal Shoes',
      points: 16434,
      image: 'https://loremflickr.com/640/480/transport',
      is_redemption: false,
      id: '3',
    },
    {
      createdAt: '2022-12-09T17:02:51.904Z',
      product: 'Recycled Plastic Tuna',
      points: 92984,
      image: 'https://loremflickr.com/640/480/technics',
      is_redemption: false,
      id: '4',
    },
    {
      createdAt: '2022-12-09T06:34:25.607Z',
      product: 'Handmade Metal Shoes',
      points: 16434,
      image: 'https://loremflickr.com/640/480/transport',
      is_redemption: false,
      id: '5',
    },
    {
      createdAt: '2022-12-09T17:02:51.904Z',
      product: 'Recycled Plastic Tuna',
      points: 92984,
      image: 'https://loremflickr.com/640/480/technics',
      is_redemption: false,
      id: '6',
    },
  ];

  const totalPoints = movements.reduce((accumulator, movement) => {
    if (!movement.is_redemption) {
      return accumulator + movement.points;
    }
    return accumulator;
  }, 0);

  return <Movements movements={movements} totalPoints={totalPoints} />;
};

export {MovementsLoad};
