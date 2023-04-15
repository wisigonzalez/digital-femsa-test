import {waitFor} from '@testing-library/react-native';
import {renderHook} from '@testing-library/react-hooks';

import {FILTERS} from '../constants';
import {useGetAllProducts} from './useGetAllProducts';

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

describe('useGetAllProducts hook', () => {
  it('should fetch all products', async () => {
    const {result, waitForNextUpdate} = renderHook(() =>
      useGetAllProducts(FILTERS.all),
    );

    await waitForNextUpdate();

    await waitFor(() => {
      expect(result.current.data).toEqual(mockData);
    });
  });

  it('should not fetch all products', () => {
    const {result} = renderHook(() => useGetAllProducts(''));

    expect(result.current.data).toEqual([]);
  });
});
