import type { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import styles from '/styles/Home.module.css';
import faker from 'faker';

type WelcomeProps = {
  name: string;
  quoteOfDay: string;
};

const Welcome: NextPage<WelcomeProps> = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome {props.name}</h1>

        <p className={styles.description}>{props.quoteOfDay}</p>
        <Link href='/welcome/sub'>
          <a>SUB</a>
        </Link>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<WelcomeProps> = (context) => {
  //await new Promise((resolve) => setTimeout(resolve, 5000));

  const result: WelcomeProps = {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    quoteOfDay: faker.lorem.paragraphs(1),
  };

  console.log(`result`, result);

  return {
    props: { ...result },
    revalidate: 1,
  };
};

export default Welcome;
