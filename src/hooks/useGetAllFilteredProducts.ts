import {useEffect, useState} from 'react';

import {ProductType} from './types';
import {FILTERS} from '../constants';
import getENV from '../../enviroment';
import {ApiProvider} from '../providers/api-provider';

const {API_URL} = getENV();
const apiProvider = new ApiProvider();

export const useGetAllFilteredProducts = (filter: string) => {
  const [data, setData] = useState<Array<ProductType>>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    if (filter !== FILTERS.all) {
      const value = filter === FILTERS.winned ? false : true;

      const fetchData = async () => {
        try {
          const response = await apiProvider.get(
            `${API_URL}/products?is_redemption=${value}`,
          );
          setData(response?.data as Array<ProductType>);
          setIsLoading(false);
        } catch (error) {
          console.log('useGetAllFilteredProducts hook', error);
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [filter]);

  return {data, isLoading};
};
