//import Image from 'next/image';
//import Link from 'next/link';
//import { useRouter } from 'next/router';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
//import Banner from '../components/utility/banner/Banner';
import Card from '../components/utility/card/Card';
//import Search from '../components/utility/search/Search';
//import Section from '../components/utility/section/Section';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  //const { locale } = useRouter();

  return (
    <section className="grid grid-cols-4 gap-10 m-20">
      <Card title="test" description="test"></Card>
      <Card title="test" description="test"></Card>
      <Card title="test" description="test"></Card>
      <Card title="test" description="test"></Card>
      <Card title="test" description="test"></Card>
      <Card title="test" description="test"></Card>
      <Card title="test" description="test"></Card>
      <Card title="test" description="test"></Card>
      <Card title="test" description="test"></Card>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
