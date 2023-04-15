import {waitFor} from '@testing-library/react-native';
import {renderHook} from '@testing-library/react-hooks';

import {FILTERS} from '../constants';
import {useGetAllFilteredProducts} from './useGetAllFilteredProducts';

const mockData = [
  {
    id: '2',
    createdAt: '2023-04-15T10:43:25.607Z',
    product: 'Test product title',
    points: 200,
    image: 'https://testimage.com',
    is_redemption: false,
  },
  {
    id: '3',
    createdAt: '2023-04-15T10:43:25.607Z',
    product: 'Test product title',
    points: 300,
    image: 'https://testimage.com',
    is_redemption: false,
  },
];

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({data: mockData})),
}));

jest.mock('../providers', () => ({
  get: jest.fn(() => Promise.resolve({data: mockData})),
}));

describe('useGetAllFilteredProducts hook', () => {
  it('should fetch all filtered products with is_redemption false', async () => {
    const {result, waitForNextUpdate} = renderHook(() =>
      useGetAllFilteredProducts(FILTERS.winned),
    );

    await waitForNextUpdate();

    await waitFor(() => {
      expect(result.current.data).toEqual(mockData);
    });
  });

  it('should not fetch all filtered products', () => {
    const {result} = renderHook(() => useGetAllFilteredProducts(FILTERS.all));

    expect(result.current.data).toEqual([]);
  });
});
