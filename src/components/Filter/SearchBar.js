import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/SearchIcon.svg';
export default function SearchBar() {
  return (
    <div className="relative rounded-lg shadow-sm w-searchbar ml-10">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-auto">
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Filter by exercise title"
        className="font-sans block text-md h-12 w-full pl-12 py-2 px-3 ring-1 ring-slate-900/10 text-searchtext rounded-md bg-ex-trackhover"
      />
    </div>
  );
}
