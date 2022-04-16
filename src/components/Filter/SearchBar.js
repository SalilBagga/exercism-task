import React, { useState, useEffect, useContext, useRef } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/SearchIcon.svg';

import { FilterContext } from '../../context/FilterContext';

function SearchBar() {
  const  {setSearchTerm} = useContext(FilterContext);
  const [search, setSearch] = useState('');

  const initialRender = useRef(false);

  useEffect(() => {
    if (initialRender.current) {
      console.log('this is rendering second time');
      const delayDebounceFn = setTimeout(() => {
         setSearchTerm(search.trim());
      }, 1000);
      return () => clearTimeout(delayDebounceFn);
    } else {
      initialRender.current = true;
      console.log('this rendering first time');
    }
  }, [search, setSearchTerm]);

  return (
    <div className="relative rounded-lg shadow-sm w-searchbar ml-10">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-auto">
        <SearchIcon />
      </div>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Filter by exercise title"
        className="font-sans block text-md h-12 w-full pl-12 py-2 px-3 ring-1 ring-slate-900/10 text-searchtext rounded-md bg-ex-trackhover"
      />
    </div>
  );
}
export default React.memo(SearchBar);
