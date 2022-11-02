//import Image from 'next/image';
//import Link from 'next/link';
//import { useRouter } from 'next/router';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
//import Banner from '../components/utility/banner/Banner';
//import Search from '../components/utility/search/Search';
//import Section from '../components/utility/section/Section';
import { NextPageWithLayout } from './page';
import Input from '../components/utility/editableInput/EditableInput';
import Table from '../components/utility/table/Table';

const Home: NextPageWithLayout = () => {
  //const { locale } = useRouter();

  return (
    <div className="mx-20 my-5 flex flex-1">
      <div className="flex-col w-full">
        <Input field={'username'} value={'Rebeka Dea'} link="Edit"></Input>
        <Input
          field={'email'}
          value={'rebeka.dea.l@gmail.com'}
          link="Edit"
        ></Input>
        <Input field={'password'} value={'************'} link="Edit"></Input>
        <Table
          sampleTextProp="Viewing Activity"
          note="Viewing activity only available for the last 30 days’ activity"
        ></Table>
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <h1 className="px-10 font-bold text-xl mt-5">Account Settings</h1>
      <div className="flex">
        <SidebarLayout />
        {page}
      </div>
    </PrimaryLayout>
  );
};
