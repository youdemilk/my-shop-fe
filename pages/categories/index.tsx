import { NextPage } from 'next';
import Link from 'next/link';
import Container from '@root/components/Container';
import { Category } from '@root/interfaces';
import { URLS } from '@root/constants/urls';
import styles from '@root/pages/categories/categories.module.css';

interface CategoriesProps {
  categories: Category[];
}

const Categories: NextPage<CategoriesProps> = (props) => {
  const { categories = [] } = props;

  return (
    <Container title={'Index'}>
      <ul className={styles.categoriesList}>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`${URLS.CATEGORY}/[id]`} as={`${URLS.CATEGORY}/${category.id}`}>
              <a>{category.attributes.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export async function getServerSideProps(context) {
  const response = await fetch(`${process.env.API_URL}/categories`);
  const { data: categories } = await response.json();
  console.log(categories);

  return {
    props: { categories },
  };
}

export default Categories;
