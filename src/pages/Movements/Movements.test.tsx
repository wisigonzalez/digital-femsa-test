import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {Movements} from './Movements';
import {FILTERS} from '../../constants';

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
    is_redemption: false,
  },
];
const mockHandleOnPress = jest.fn();
const testTotal = mockData[0].points + mockData[1].points;
const mockNavigation = {
  navigate: jest.fn(),
};

describe('Movements page', () => {
  it('should renders correctly', () => {
    const {getByTestId} = render(
      <Movements
        navigation={mockNavigation}
        filterActive={FILTERS.all}
        movements={mockData}
        totalPoints={testTotal}
        handleFilter={mockHandleOnPress}
      />,
    );

    expect(getByTestId('container-id')).toBeDefined();
  });

  it('should calls handleOnPress when button is pressed and filter is all', () => {
    const {getByTestId} = render(
      <Movements
        navigation={mockNavigation}
        filterActive={FILTERS.all}
        movements={mockData}
        totalPoints={testTotal}
        handleFilter={mockHandleOnPress}
      />,
    );

    fireEvent.press(getByTestId('button-winned-id'));

    expect(mockHandleOnPress).toHaveBeenCalledWith('winned');
  });

  it('should calls handleOnPress when button is pressed and filter is not all', () => {
    const {getByTestId} = render(
      <Movements
        navigation={mockNavigation}
        filterActive={FILTERS.winned}
        movements={mockData}
        totalPoints={testTotal}
        handleFilter={mockHandleOnPress}
      />,
    );

    fireEvent.press(getByTestId('button-all-id'));

    expect(mockHandleOnPress).toHaveBeenCalledWith('all');
  });
});
