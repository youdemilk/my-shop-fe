import { GalleryItem } from '@root/components/Galery/galeryItem';
import styles from '@root/components/Galery/galery.module.css';
import { NextPage } from 'next';

interface GaleryProps {
  galleryIcons: any;
}

export const Gallery: NextPage<GaleryProps> = ({ galleryIcons }) => {
  return (
    <>
      <div className={styles.titleContainer}>
        <div className={styles.title}>Сделали более 3.000 заказов за 2 года</div>
        <div className={styles.subTitle}>Посмотрите фото реальных заказов из нашего instagram</div>
      </div>
      <div className={styles.container}>
        {galleryIcons.map((item) => {
          return <GalleryItem key={item.id} url={item.attributes.image.data.attributes.url} />;
        })}
      </div>
    </>
  );
};
