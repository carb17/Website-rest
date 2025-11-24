import { useEffect, useState } from 'react';

import { ProductProps } from '../types/product';

import { FetchProducts } from '../services/ProductService';

export function useProducts() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await FetchProducts();
        setProducts(data);
      } catch (err) {
        setError('The products could not be loaded.');
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return { products, loading, error };
}
