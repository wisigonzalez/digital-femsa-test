import React from 'react';
import {render} from '@testing-library/react-native';

import {Card} from './Card';
import {numberFormatter} from '../../../utils/formatter';

const testTitle = 'Test card title';
const testValue = 100;

describe('Card component', () => {
  it('should renders title correctly', () => {
    const {getByText} = render(<Card title={testTitle} value={testValue} />);

    expect(getByText(testTitle)).toBeDefined();
  });

  it('should renders value with format', () => {
    const {getByText} = render(<Card title={testTitle} value={testValue} />);

    const formattedValue = numberFormatter(testValue);

    expect(getByText(`${formattedValue} pts`)).toBeDefined();
  });
});
