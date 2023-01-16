//import Image from 'next/image';
//import Link from 'next/link';
//import { useRouter } from 'next/router';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Banner from '../components/utility/banner/Banner';
//import Search from '../components/utility/search/Search';
import Section from '../components/utility/section/Section';

//import Slides from '../components/utility/slides/Slides';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  //const { locale } = useRouter();

  return (
    <section className="">
      <Banner title="Movie" description="Some movie description" />
      <Section title="Section" />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
