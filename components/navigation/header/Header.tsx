import Link from 'next/link';
import Search from '../../utility/search/Search';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between p-3`}
    >
      <div className="space-x-7 flex">
        <Link href="/">
          <a className="font-logo text-3xl flex  items-center">
            <p className=" leading-none logo-text">Watchflix</p>
          </a>
        </Link>
        <div className=" hidden sm:flex space-x-5">
          <Link href="/">
            <a className="hover:font-bold flex  items-center">
              <p className="leading-none ">Home</p>
            </a>
          </Link>
          <Link href="/genres" className="flex">
            <a className="hover:font-bold  flex  items-center">
              <p className="leading-none ">Genres</p>
            </a>
          </Link>
        </div>
      </div>
      <div className="">
        <div className="space-x-5  sm:flex  hidden">
          <Search />
          <div className="dropdown relative">
            <div className="h-searchInput w-9 bg-blue-600 rounded-full"></div>
            <ul className="dropdown-menu absolute hidden right-0 text-gray-700 pt-1 w-max z-50">
              <li className="">
                <Link
                  className="rounded-t-default bg-gray-200 hover:bg-purple-300 py-2 px-4 block whitespace-no-wrap"
                  href="/account"
                >
                  Account Settings
                </Link>
              </li>
              <li className="">
                <a
                  className="rounded-b-default bg-gray-200 hover:bg-purple-300 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
