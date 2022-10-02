import Link from 'next/link';
import Search from '../../utility/search/Search';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`z-10 w-full flex flex-row justify-between ${className}`}
    >
      <div className="space-x-5 m-5 flex align-middle">
        <Link href="/">
          <a className="font-logo text-3xl leading-none">Watchflix</a>
        </Link>
        <Link href="/">
          <a className="hover:font-bold">
            <p>Home</p>
          </a>
        </Link>
        <Link href="/">
          <a className="hover:font-bold">Genres</a>
        </Link>
      </div>
      <div className="space-x-5 m-5 flex">
        <Search />
        <Link href="/">
          <a>
            <div className="h-searchInput w-9 bg-blue-600 rounded-full"></div>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
