import Link from 'next/link';
import Search from '../../utility/search/Search';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ ...headerProps }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
          <div>
            <div
              className="h-searchInput w-9 bg-blue-600 rounded-full"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            ></div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <div className="mx-3 mb-3">
                <b>Rebeka Dea</b>
              </div>
              <Divider />
              <Link href="/account">
                <MenuItem>Account Settings</MenuItem>
              </Link>
              <MenuItem onClick={handleClose}>Sign Out</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
