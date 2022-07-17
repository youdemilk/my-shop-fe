import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import berry from '@root/public/berry.png';
import confectionerName from '@root/public/confectionerName.png';
import grass from '@root/public/grass.png';
import lowerСloud from '@root/public/2222.png';
import woman from '@root/public/woman.png';
import styles from '@root/components/Confectioner/confectioner.module.css';

const Confectioner: NextPage = () => {
  return (
    <div>
      <div className={styles.confectionerContext}>
        <div className={styles.confectionerContainer}>
          <div className={styles.confectionerTextContainer}>
            <div className={styles.confectionerTitle}>Кто будет готовить?</div>
            <div className={styles.confectionerPrimaryText}>
              Лично приготовлю и всё красиво упакую для вашего события
            </div>
            <ul className={styles.confectionerListItem}>
              <li>Проконсультирую по выбору капкейков и придумаю нестандартную идею</li>
              <li>Приготовлю капкейки для вашего события, которые обязательно всем понравятся</li>
              <li>Аккуратно и красиво всё упакую, если вы хотите сделать приятный подарок</li>
            </ul>
            <button className={styles.confectionerButton}>Задать вопрос Юлии</button>
          </div>
          <div className={styles.confectionerImageContainer}>
            <div className={styles.confectionerBerry}>
              <Image src={berry} alt={'berry'} />
            </div>
            <div className={styles.confectionerGrass}>
              <Image src={grass} alt={'grass'} />
            </div>
            <Image src={woman} width={580} height={804} alt={'confectioner'} />
          </div>
        </div>
        <div className={styles.confectionerName}>
          <Image src={confectionerName} alt={'confectioner name'} />
        </div>
      </div>
      <div className={styles.confectionerCloudContainer}>
        <Image src={lowerСloud} alt={'upper cloud'} />
      </div>
    </div>
  );
};

export default Confectioner;
