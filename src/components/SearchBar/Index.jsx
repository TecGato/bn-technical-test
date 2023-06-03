import React, { useState } from 'react';
import useGlobalStore from '@/store/globalStore';
import useStore from '@/store/useStore';

export default function SearchBar() {
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearch(value.tolowerCase());
  };

  return (
    <div>
      <input placeholder="Filter Podcasts.." onChange={handleSearch}></input>
    </div>
  );
}
