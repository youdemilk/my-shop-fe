import { ReactNode } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '@styles/Container.module.css';
import { URLS } from '@root/constants/urls';

interface ContainerProps {
  children: ReactNode;
  title?: string;
}

const Container: NextPage<ContainerProps> = (props) => {
  const { children, title = '' } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav className={styles.navigation}>
        <Link href={URLS.HOME}>
          <a className={styles.link}>Home</a>
        </Link>
        <Link href={URLS.CATEGORIES}>
          <a className={styles.link}>Categories</a>
        </Link>
        <Link href={URLS.PRODUCTS}>
          <a className={styles.link}>Products</a>
        </Link>
      </nav>
      <main className={styles.content}>{children}</main>
    </>
  );
};

export default Container;
