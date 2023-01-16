//import Image from 'next/image';
//import Link from 'next/link';
//import { useRouter } from 'next/router';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
//import Banner from '../components/utility/banner/Banner';
//import Search from '../components/utility/search/Search';
//import Section from '../components/utility/section/Section';
import { NextPageWithLayout } from './page';
import Input from '../components/utility/editableInput/EditableInput';
import Table from '../components/utility/table/Table';

const Home: NextPageWithLayout = () => {
  //const { locale } = useRouter();

  return (
    <div className="mx-10 my-3 flex flex-1">
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
      <Container maxWidth="md" className="px-10">
        <div className="mt-5 px-10">
          <h1 className="font-bold text-xl mb-2">Account Settings</h1>
          <Divider></Divider>
        </div>
        {page}
      </Container>
    </PrimaryLayout>
  );
};
