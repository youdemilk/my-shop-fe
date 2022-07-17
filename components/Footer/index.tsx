import Image from 'next/image';
import upperСloud from '@root/public/2222.png';
import styles from '@root/components/Footer/footer.module.css';
import { NextPage } from 'next';

export const Footer: NextPage = () => {
  return (
    <div className={styles.container}>
      <Image src={upperСloud} />
      <div className={styles.feedBackContainer}>
        <div className={styles.title}>Чтобы сделать заказ, укажите ваш телефон</div>
        <div className={styles.subTitle}>Мы перезвоним в течении 15 минут, чтобы уточнить ваши пожелания</div>
        <div className={styles.buttonsContainer}>
          <input className={styles.inputPhone} type={'tel'} placeholder={'Номер телефона'} />
          <button className={styles.button}>Сделать заказ</button>
        </div>
      </div>
      <div className={styles.lowerContainer}>
        <div className={styles.subLowerContainer}>
          <span className={styles.text}>Согласие на обработку данных</span>
          <span className={styles.text}>Служба поддержки</span>
          <span className={styles.text}>Политика конфиденциальности</span>
        </div>
        <span> © nazvaniesaita.ru, 2054 | Название компании или ИП ОГРН 0000000000000</span>
      </div>
    </div>
  );
};
