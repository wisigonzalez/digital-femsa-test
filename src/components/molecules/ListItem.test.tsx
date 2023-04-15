import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {ListItem} from './ListItem';
import {numberFormatter} from '../../utils/formatter';

const mockHandleOnPress = jest.fn();
const testItem = {
  id: '1',
  createdAt: '2023-04-15T10:43:25.607Z',
  product: 'Test product title',
  points: 100,
  image: 'https://testimage.com',
  is_redemption: false,
};
const testItem2 = {
  id: '2',
  createdAt: '2023-04-15T10:43:25.607Z',
  product: 'Test product title',
  points: 100,
  image: 'https://testimage.com',
  is_redemption: true,
};

describe('ListItem component', () => {
  it('should renders title correctly', () => {
    const {getByText} = render(
      <ListItem item={testItem} handleOnPress={mockHandleOnPress} />,
    );

    expect(getByText(testItem.product)).toBeDefined();
  });

  it('should calls handleOnPress when item is pressed', () => {
    const {getByTestId} = render(
      <ListItem item={testItem} handleOnPress={mockHandleOnPress} />,
    );

    fireEvent.press(getByTestId('item-id-1'));

    expect(mockHandleOnPress).toHaveBeenCalled();
  });

  it('should displays positive points when isRedemption is false', () => {
    const {getByText} = render(
      <ListItem item={testItem} handleOnPress={mockHandleOnPress} />,
    );
    const formattedValue = numberFormatter(testItem.points);

    expect(getByText(`+${formattedValue}`)).toBeDefined();
  });

  it('should displays negative points when isRedemption is true', () => {
    const {getByText} = render(
      <ListItem item={testItem2} handleOnPress={mockHandleOnPress} />,
    );
    const formattedValue = numberFormatter(testItem2.points);

    expect(getByText(`-${formattedValue}`)).toBeDefined();
  });
});
