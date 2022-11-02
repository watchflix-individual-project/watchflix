//import Image from 'next/image';
//import Link from 'next/link';
//import { useRouter } from 'next/router';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
// import Banner from '../components/utility/banner/Banner';
// import Search from '../components/utility/search/Search';
// import Section from '../components/utility/section/Section';
import { NextPageWithLayout } from './page';
import Input from '../components/utility/editableInput/EditableInput';
//import Table from '../components/utility/table/Table';
import Button from '../components/utility/button/Button';

const Home: NextPageWithLayout = () => {
  //const { locale } = useRouter();

  return (
    <div className="mx-20 my-5 flex flex-1">
      <div className="flex-col w-full">
        <Input
          field={'subscription plan'}
          value={'Monthly Plan ($12.99/month)'}
          link="Change Plan"
        ></Input>
        <div className="w-fit">
          <Button text="Cancel Subscription Plan"></Button>{' '}
        </div>
        <p className="mt-4">
          You can cancel subscription plan before next billing date (2 Oct
          2022).{' '}
        </p>
        <p className="mt-4">
          Once canceled, you will still be able to watch for the remaining
          period.
        </p>
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
