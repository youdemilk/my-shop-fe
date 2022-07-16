import { NextPage } from 'next';
import { ProductCard } from '@root/components/ProductCard';
import styles from '@root/styles/container.module.css';
import { API_URL } from '@root/constants/general';
import Header from '@root/components/Header';
import { Icon } from '@root/interfaces/Icon';
import { getImage } from '@root/utils/getImage';
import { Order } from '@root/components/Order';
import { Product } from '@root/interfaces/Product';

interface HomePageProps {
  products: Product[];
  icons: Icon[];
}

const Home: NextPage<HomePageProps> = (props) => {
  const { products, icons } = props;

  const pinIcon = getImage(icons.find((icon) => icon.attributes.name === 'pin')) || '';
  const phoneIcon = getImage(icons.find((icon) => icon.attributes.name === 'phone')) || '';

  return (
    <div>
      <Header phoneIconUrl={phoneIcon} pinIconUrl={pinIcon} />
      <main>
        <div className={styles.container}>
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
        <Order />
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  const getProducts = await fetch(`${API_URL}/products?populate=*`);
  const { data: products } = await getProducts.json();

  const getIcons = await fetch(`${API_URL}/icons?populate=*`);
  const { data: icons } = await getIcons.json();

  return { props: { products, icons } };
}

export default Home;
