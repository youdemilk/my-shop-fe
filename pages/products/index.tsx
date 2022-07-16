import { NextPage } from 'next';
import Link from 'next/link';
import Container from '@root/components/Container';
import { Product } from '@root/interfaces';
import { URLS } from '@root/constants/urls';
import styles from '@root/pages/products/Products.module.css';

interface ProductsProps {
  products: Product[];
}

const Products: NextPage<ProductsProps> = (props) => {
  const { products } = props;

  return (
    <Container title={'Index'}>
      <ul className={styles.productList}>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`${URLS.PRODUCT}/[id]`} as={`${URLS.PRODUCT}/${product.id}`}>
              <a>{product.attributes.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export async function getServerSideProps(context) {
  const response = await fetch('http://localhost:1337/api/products');
  const { data: products } = await response.json();

  return {
    props: { products },
  };
}

export default Products;
