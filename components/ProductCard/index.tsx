import Image from 'next/image';
import styles from '@root/components/ProductCard/productCard.module.css';
import { NextPage } from 'next';
import { Product } from '@root/interfaces/Product';

export interface ProductCardInterface {
  product: Product;
}

export const ProductCard: NextPage<ProductCardInterface> = (props) => {
  const { product } = props;
  const { attributes } = product;
  const { name, price, description, image } = attributes;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={`${process.env.PUBLIC_URL}${image.data.attributes.url}`}
          width={380}
          height={245}
          alt={image.data.attributes.alternativeText}
        />
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
