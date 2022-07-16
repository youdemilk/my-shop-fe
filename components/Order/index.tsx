import upperСloud from '@root/public/2222.png';
import lowerСloud from '@root/public/3333.png';
import Phone from '@root/public/phone.png';
import Image from 'next/image';
import styles from '@root/components/Order/order.module.css';

export const Order = () => {
  return (
    <div className={styles.container}>
      <Image src={upperСloud} />
      <div className={styles.centralContainer}>
        <Image className={styles.phone} src={Phone} width={700} height={700} />
        <div className={styles.info}>
          <div className={styles.title}>Не нашли то что нужно?</div>
          <div className={styles.firstDescription}>Приготовим заказ любой сложности по фото или эскизу</div>
          <div className={styles.secondDescription}>
            Загрузите фотографию или эскиз капкейков и мы рассчитаем стоимость за 30 минут
          </div>
          <button className={styles.button}>Загрузить Фотографию</button>
        </div>
      </div>
      <Image src={lowerСloud} />
    </div>
  );
};
