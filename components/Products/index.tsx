import React from 'react';
import { NextPage } from 'next';
import { ProductCard } from '@root/components/ProductCard';
import { Product } from '@root/interfaces/Product';
import styles from '@root/components/Products/products.module.css';

interface ProductsProps {
  products: Product[];
}

const Products: NextPage<ProductsProps> = (props) => {
  const { products } = props;

  return (
    <div>
      <p className={styles.productsTitle}>Для любых событий и дорогих вам людей</p>
      <div className={styles.productsContainer}>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
