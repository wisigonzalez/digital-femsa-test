import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {ProductsType} from './types';
import {Movements} from './Movements';
import {FILTERS} from '../../constants';
import {useGetAllProducts} from '../../hooks/useGetAllProducts';
import {useGetAllFilteredProducts} from '../../hooks/useGetAllFilteredProducts';

const MovementsLoad = () => {
  const navigation = useNavigation();
  const [filter, setFilter] = useState<string>(FILTERS.all);
  const [products, setProducts] = useState<Array<ProductsType>>([]);

  const {data: allProducts} = useGetAllProducts(filter);
  const {data: allFilteredProducts} = useGetAllFilteredProducts(filter);

  const handleOnPressFilter = (value: string) => {
    setFilter(value);
  };

  useEffect(() => {
    if (filter === FILTERS.all) {
      setProducts(allProducts);
    }
  }, [allProducts, filter]);

  useEffect(() => {
    if (filter !== FILTERS.all) {
      setProducts(allFilteredProducts);
    }
  }, [allFilteredProducts, filter]);

  const totalPoints = products.reduce((acc, item) => acc + item.points, 0);
  const toltalRedeemPoints = products.reduce((acc, item) => {
    if (item.is_redemption) {
      return acc + item.points;
    }
    return acc;
  }, 0);

  const points = totalPoints - toltalRedeemPoints;

  return (
    <Movements
      navigation={navigation}
      movements={products}
      totalPoints={points}
      filterActive={filter}
      handleFilter={handleOnPressFilter}
    />
  );
};

export {MovementsLoad};
