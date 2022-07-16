import { NextPage } from 'next';
import { ProductCard } from '@root/components/ProductCard';
import styles from '@root/styles/container.module.css';
import { API_URL } from '@root/constants/general';
import { Order } from '@root/components/Order';

const Home: NextPage = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.data.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
      <Order />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/products?populate=*`);
  const data = await res.json();

  return { props: { data } };
}

export default Home;
