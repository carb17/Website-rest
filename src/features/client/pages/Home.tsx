import { Layout } from '../../../layout/pages/Layout';

import { useProducts } from '../hooks/useProducts';

import { Button } from '../../../components/common/buttons/Buttons';

import '../styles/client.css';

export default function HomeClient() {
  const { products, loading, error } = useProducts();

  if (loading)
    return (
      <Layout>
        <p className='products__loading'>Loading products...</p>
      </Layout>
    );
  if (error)
    return (
      <Layout>
        <p className='products__error'>{error}</p>
      </Layout>
    );

  return (
    <Layout>
      <h2 className='products__title'>Products list</h2>

      {products.length === 0 ? (
        <p>No hay productos disponibles.</p>
      ) : (
        <div className='products__grid'>
          {products.map((prod) => (
            <div key={prod._id} className='product__card'>
              <h3 className='product__name'>{prod.name}</h3>
              <p className='product__description'>{prod.description}</p>
              <p className='product__category'>
                Category:{' '}
                {typeof prod.category_id === 'string'
                  ? prod.category_id
                  : prod.category_id.name}
              </p>
              <p className='product__price'>${prod.price}</p>
              <Button text='Add to cart' className='product__btn' />
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}
