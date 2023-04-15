import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {Button} from './Button';

const mockHandleOnPress = jest.fn();
const testText = 'Test button text';
const customStyles = {
  backgroundColor: 'red',
  borderRadius: 1,
  height: 74,
  justifyContent: 'center',
  opacity: 1,
};

describe('Button component', () => {
  it('should renders text correctly', () => {
    const {getByText} = render(
      <Button text={testText} handleOnPress={mockHandleOnPress} />,
    );

    expect(getByText(testText)).toBeDefined();
  });

  it('should calls handleOnPress when button is pressed', () => {
    const {getByTestId} = render(
      <Button text={testText} handleOnPress={mockHandleOnPress} />,
    );

    fireEvent.press(getByTestId('button-id'));

    expect(mockHandleOnPress).toHaveBeenCalled();
  });

  it('should applies custom styles', () => {
    const {getByTestId} = render(
      <Button
        text={testText}
        customStyles={customStyles}
        handleOnPress={mockHandleOnPress}
      />,
    );
    const button = getByTestId('button-id');

    expect(button.props.style).toEqual(customStyles);
  });
});
