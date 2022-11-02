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
      <div className="flex">
        <input
          type="text"
          className="border px-3 rounded-l"
          value={SearchTerm}
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="btn-icon flex rounded-r bg-color-primary"
        >
          <Image
            className="align-middle"
            src="/search.svg"
            alt="search icon"
            width={20}
            height={20}
            priority
          />
        </button>
      </div>
    </form>
  );
};

export default Search;
