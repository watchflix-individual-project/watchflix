import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
export interface ISearch {}

const Search: React.FC<ISearch> = () => {
  const router = useRouter();
  const [SearchTerm, setSearchTerm] = useState<string>('');

  return (
    <form
      className="flex flex-row items-center"
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/results?Search=${SearchTerm}`);
      }}
    >
      <input
        type="text"
        className="border w-5/6 sm:w-128 h-searchInput px-3"
        value={SearchTerm}
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="btn-icon flex">
        <Image
          className="align-middle"
          src="/search.svg"
          alt="search icon"
          width={20}
          height={20}
          priority
        />
      </button>
    </form>
  );
};

export default Search;
