import React, { useState, useEffect, useContext, useRef } from 'react';

//components
import DropDown from './DropDown';
// import SearchBar from './SearchBar';
import Sort from './Sort';

//svg
import { ReactComponent as AllTracks } from '../../assets/AllTrack.svg';
import { ReactComponent as ArrowDown } from '../../assets/ArrowDown.svg';
import { ReactComponent as SearchIcon } from '../../assets/SearchIcon.svg';

import { useFetchTracks } from '../../hooks/useFetchTracks';
import { FilterContext } from '../../context/FilterContext';
const SearchingBar = () => {
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
};

export default function Filters() {
  const [dropDown, setDropDown] = useState(false);

  const [tracksList, setTracksList] = useState(null);
  const { tracks } = useFetchTracks();
  useEffect(() => {
    if (tracks) {
      setTracksList(tracks);
    }
  }, [tracks]);
  console.log('FIlter Rendering ');
  return (
    <div className="h-25 w-full   flex justify-between items-center">
      <div className=" flex items-center ml-5">
        <div className="flex items-center cursor-pointer" onClick={() => setDropDown(!dropDown)}>
          <AllTracks />
          <ArrowDown className="ml-2" />
        </div>
        <div className="z-10">
          {dropDown && (
            <DropDown setDropDown={setDropDown} dropDown={dropDown} tracksList={tracksList} />
          )}
        </div>
        {/* <SearchBar /> */}
        {SearchingBar()}
      </div>
      <div className="mr-4">
        <Sort />
      </div>
    </div>
  );
}
