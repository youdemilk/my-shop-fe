import Image from 'next/image';
import styles from '@root/components/ProductCard/productCard.module.css';
import { NextPage } from 'next';
import { ProductCardInterface } from '@root/interfaces/ProductCardInterface';

// @ts-ignore
export const ProductCard: NextPage<ProductCardInterface> = ({ item }) => {
  const { name, price, description, image } = item.attributes;

  // console.log('QQQQQ ffdgdfgdf', process.env.API_URL + image.data.attributes.url);
  // console.log('QQQQQ image.data.attributes.url}', image.data.attributes.url);

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={`${process.env.PUBLIC_URL}${image.data.attributes.url}`} width={380} height={245} />
      </div>
      <div className={styles.containerForDescription}>
        <div className={styles.title}>{name}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{price} ₽/шт.</div>
        <button className={styles.button}>Заказать</button>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(``);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
