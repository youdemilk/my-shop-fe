import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import styles from '@root/components/Header/header.module.css';

interface HeaderProps {
  phoneIconUrl: string;
  pinIconUrl: string;
}

const Header: NextPage<HeaderProps> = (props) => {
  const { phoneIconUrl = '', pinIconUrl = '' } = props;

  return (
    <header className={styles.headerContainer}>
      <p className={styles.headerTitle}>Сладкий сундук</p>
      <div className={styles.headerIconsContainer}>
        <div className={styles.headerIconContainer}>
          <Image src={pinIconUrl} width={20} height={20} alt={'pinIcon'} />
          <div>
            <p className={styles.headerIconPinText}>{'г. Санкт Петербург,'}</p>
            <p className={styles.headerIconPinText}>{'ул. Куйбышева 31'}</p>
          </div>
        </div>
        <div className={styles.headerIconContainer}>
          <Image src={phoneIconUrl} width={20} height={20} alt={'phoneIcon'} />
          <div>
            <p className={styles.headerIconPhonePrimaryText}>{'8 (812) 844-95-49'}</p>
            <p className={styles.headerIconPhoneSecondaryText}>{'Ежедневно с 9:00 до 20:00'}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
