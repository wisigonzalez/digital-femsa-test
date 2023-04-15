import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {ROUTES} from '../../navigators/routes';
import {MovementsDetails} from './MovementsDetails';

const mockData = {
  id: '1',
  createdAt: '2023-04-15T10:43:25.607Z',
  product: 'Test product title',
  points: 100,
  image: 'https://testimage.com',
  is_redemption: false,
};
const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

describe('Movements Details page', () => {
  it('should renders correctly', () => {
    const {getByTestId} = render(
      <MovementsDetails navigation={mockNavigation} movement={mockData} />,
    );

    expect(getByTestId('container-id')).toBeDefined();
  });

  it('should calls handleOnPress when button is pressed', () => {
    const {getByTestId} = render(
      <MovementsDetails navigation={mockNavigation} movement={mockData} />,
    );

    fireEvent.press(getByTestId('button-id'));

    expect(mockNavigation.goBack).toHaveBeenCalled();
  });
});
