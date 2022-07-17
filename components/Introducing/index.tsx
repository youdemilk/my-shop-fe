import React, { ReactNode } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import berry from '@root/public/berry.png';
import leaf from '@root/public/leaf.png';
import styles from '@root/components/Introducing/introducing.module.css';

interface IntroducingProps {
  children: ReactNode;
}

const Introducing: NextPage<IntroducingProps> = (props) => {
  const { children } = props;

  return (
    <div className={styles.introducingContainer}>
      {children}
      <div className={styles.introducingTextContainer}>
        <div className={styles.introducingTitle}>Вкуснейшие</div>
        <div className={styles.introducingPrimaryText}>
          Пирожные и капкейки от 150 ₽/шт. с доставкой по Санкт Петербургу
        </div>
        <div className={styles.introducingSecondaryText}>
          Приготовим за 3 часа в день заказа. Доставка на авто в холодильнике.
        </div>
        <div className={styles.introducingButtonContainer}>
          <button className={styles.introducingButton}>Перейти в каталог</button>
          <p className={styles.introducingText}>9 различных видов на выбор</p>
        </div>
      </div>
      <div className={styles.firstBerryImage}>
        <Image src={berry} alt={'berry'} />
      </div>
      <div className={styles.secondBerryImage}>
        <Image src={berry} alt={'berry'} />
      </div>
      <div className={styles.thirdBerryImage}>
        <Image src={berry} alt={'berry'} />
      </div>
      <div className={styles.leafImage}>
        <Image src={leaf} alt={'leaf'} />
      </div>
    </div>
  );
};

export default Introducing;
