import { NextPage } from 'next';
import { ProductCard } from '@root/components/ProductCard';
import styles from '@root/styles/container.module.css';
import { API_URL } from '@root/constants/general';
import Header from '@root/components/Header';
import { Icon } from '@root/interfaces/Icon';
import { getImage } from '@root/utils/getImage';
import { Order } from '@root/components/Order';
import { Product } from '@root/interfaces/Product';
import { Gallery } from '@root/components/Galery';
import { Footer } from '@root/components/Footer';
import Confectioner from '@root/components/Confectioner';
import Introducing from '@root/components/Introducing';
import Products from '@root/components/Products';

interface HomePageProps {
  products: Product[];
  icons: Icon[];
  galleryIcons: Icon[];
}

const Home: NextPage<HomePageProps> = (props) => {
  const { products, icons, galleryIcons } = props;

  const pinIcon = getImage(icons.find((icon) => icon.attributes.name === 'pin')) || '';
  const phoneIcon = getImage(icons.find((icon) => icon.attributes.name === 'call')) || '';

  return (
    <div>
      <main>
        <Introducing>
          <Header phoneIconUrl={phoneIcon} pinIconUrl={pinIcon} />
        </Introducing>
        <Products products={products} />
        <Order />
        <Confectioner />
        <Gallery galleryIcons={galleryIcons} />
        <Footer />
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  const getProducts = await fetch(`${API_URL}/products?populate=*`);
  const { data: products } = await getProducts.json();

  const getIcons = await fetch(`${API_URL}/icons?populate=*`);
  const { data: icons } = await getIcons.json();

  const getGalleryIcons = await fetch(`${API_URL}/cupcakes?populate=*`);
  const { data: galleryIcons } = await getGalleryIcons.json();

  return { props: { products, icons, galleryIcons } };
}

export default Home;
