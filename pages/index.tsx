import { NextPage } from 'next';
import { ProductCard } from '@root/components/ProductCard';
import styles from '@root/styles/container.module.css';
import { API_URL } from '@root/constants/general';
import Header from '@root/components/Header';
import { Icon } from '@root/interfaces/Icon';
import { getImage } from '@root/utils/getImage';

interface HomePageProps {
  products: any[];
  icons: Icon[];
}

const Home: NextPage<HomePageProps> = ({ products, icons }) => {
  const pinIcon = getImage(icons.find((icon) => icon.attributes.name === 'pin')) || '';
  const phoneIcon = getImage(icons.find((icon) => icon.attributes.name === 'phone')) || '';

  return (
    <div>
      <Header phoneIconUrl={phoneIcon} pinIconUrl={pinIcon} />
      <main>
        <div className={styles.container}>
          {products.map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })}
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API

  const getProducts = await fetch(`${API_URL}/products?populate=*`);
  const { data: products } = await getProducts.json();

  const getIcons = await fetch(`${API_URL}/icons?populate=*`);
  const { data: icons } = await getIcons.json();

  // Pass data to the page via props
  return { props: { products, icons } };
}

export default Home;
