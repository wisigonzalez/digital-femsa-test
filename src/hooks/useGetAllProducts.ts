import {useEffect, useState} from 'react';

import {ProductType} from './types';
import {FILTERS} from '../constants';
import getENV from '../../enviroment';
import apiProvider from '../providers';

const {API_URL} = getENV();

export const useGetAllProducts = (filter: string) => {
  const [data, setData] = useState<Array<ProductType>>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    if (filter === FILTERS.all) {
      const fetchData = async () => {
        try {
          const response = await apiProvider.get(`${API_URL}/products`);
          setData(response?.data as Array<ProductType>);
          setIsLoading(false);
        } catch (error) {
          console.log('useGetAllProducts hook', error);
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [filter]);

  return {data, isLoading};
};
