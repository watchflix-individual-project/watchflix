import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Banner from '../components/utility/banner/Banner';
import Search from '../components/utility/search/Search';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();

  return (
    <section className="flex flex-col items-center gap-y-5">
      <Banner />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
