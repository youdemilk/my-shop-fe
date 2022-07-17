import Image from 'next/image';
import img from '@root/public/img1.png';
import styles from '@root/components/Galery/galery.module.css';
import { NextPage } from 'next';

interface GaleryItemProps {
  url: string;
}

export const GalleryItem: NextPage<GaleryItemProps> = ({ url }) => {
  return (
    <div className={styles.item}>
      <Image src={`${process.env.PUBLIC_URL}${url}`} width={470} height={340} />
    </div>
  );
};
