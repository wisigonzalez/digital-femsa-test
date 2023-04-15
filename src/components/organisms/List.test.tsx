import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {List} from './List';
import {ROUTES} from '../../navigators/routes';

const mockNavigation = {
  navigate: jest.fn(),
};
const mockData = [
  {
    id: '1',
    createdAt: '2023-04-15T10:43:25.607Z',
    product: 'Test product title',
    points: 100,
    image: 'https://testimage.com',
    is_redemption: false,
  },
  {
    id: '2',
    createdAt: '2023-04-15T10:43:25.607Z',
    product: 'Test product title',
    points: 200,
    image: 'https://testimage.com',
    is_redemption: true,
  },
];

describe('List component', () => {
  it('should renders flatlist correctly', () => {
    const {getByTestId} = render(
      <List navigation={mockNavigation} data={mockData} />,
    );

    expect(getByTestId('flatlist-id')).toBeDefined();
  });

  it('should navigates to movements details when item is pressed', () => {
    const {getByTestId} = render(
      <List navigation={mockNavigation} data={mockData} />,
    );

    fireEvent.press(getByTestId('item-id-2'));

    expect(mockNavigation.navigate).toHaveBeenCalledWith(
      ROUTES.MOVEMENTS_DETAILS,
      {
        movement: mockData[1],
      },
    );
  });
});
