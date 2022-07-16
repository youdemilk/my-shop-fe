import React from 'react';
import { NextPage, NextPageContext } from 'next';
import { Category } from '@root/interfaces';
import Container from '@root/components/Container';

interface CategoryProps {
  category: Category;
}

interface ProductNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

const Category: NextPage<CategoryProps> = (props) => {
  return (
    <Container title={'Categories'}>
      <h1>{props.category?.attributes?.name}</h1>
    </Container>
  );
};

export async function getServerSideProps({ query, req }: ProductNextPageContext) {
  const response = await fetch(`${process.env.API_URL}/categories/${query.id}`);
  const { data: category } = await response.json();

  return {
    props: { category },
  };
}

export default Category;
