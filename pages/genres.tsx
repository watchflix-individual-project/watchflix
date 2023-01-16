//import Image from 'next/image';
//import Link from 'next/link';
//import { useRouter } from 'next/router';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
//import Banner from '../components/utility/banner/Banner';
//import Search from '../components/utility/search/Search';
import Section from '../components/utility/section/Section';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  //const { locale } = useRouter();

  return (
    <section>
      <Section title="Action" />
      <Section title="Comedy" />
      <Section title="Documentary" />
      <Section title="Horror" />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};