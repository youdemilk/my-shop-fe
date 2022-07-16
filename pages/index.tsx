import { NextPage } from 'next';
import { ProductCard } from '@root/components/ProductCard';
import styles from '@root/styles/container.module.css';
import { API_URL } from '@root/constants/general';

const Home: NextPage = ({ data }) => {
  console.log('QQQQ data', data);
  return (
    <div className={styles.container}>
      {data.data.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API

  console.log('QQQQ API_URL', API_URL);
  const res = await fetch(`${API_URL}/products?populate=*`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Home;
