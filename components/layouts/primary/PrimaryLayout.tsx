import Head from 'next/head';
import Header from '../../navigation/header/Header';
//import Script from 'next/script';
//import SidebarLayout from '../sidebar/SidebarLayout';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Watchflix</title>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default PrimaryLayout;
