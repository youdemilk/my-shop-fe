import React from 'react';
import { NextPage, NextPageContext } from 'next';
import { Product } from '@root/interfaces';
import Container from '@root/components/Container';

interface ProductProps {
  product: Product;
}

interface ProductNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

const Product: NextPage<ProductProps> = (props) => {
  return (
    <Container>
      <h1>{props.product.attributes.name}</h1>
      <h2>{props.product.attributes.description}</h2>
    </Container>
  );
};

export async function getServerSideProps({ query, req }: ProductNextPageContext) {
  const response = await fetch(`http://localhost:1337/api/products/${query.id}`);
  const { data: product } = await response.json();

  return {
    props: { product },
  };
}

export default Product;
