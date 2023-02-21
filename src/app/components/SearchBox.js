'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SearchBox = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSubmit = e => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
    setSearch('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex max-w-6xl mx-auto justify-between items-center'
    >
      <input
        onChange={e => setSearch(e.target.value)}
        value={search}
        type='text'
        placeholder='Search keywords...'
        className='w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent mx-6 flex-1 '
      />
      <button
        type='submit'
        className='text-amber-600 mx-6 disabled:text-gray-400 '
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
