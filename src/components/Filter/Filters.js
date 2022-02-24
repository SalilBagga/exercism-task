import React from 'react';

//components
import DropDown from './DropDown';
import SearchBar from './SearchBar';
import Sort from './Sort';
//svg
import { ReactComponent as AllTracks } from '../../assets/AllTrack.svg';
import { ReactComponent as ArrowDown } from '../../assets/ArrowDown.svg';

export default function Filters() {
  return (
    <div className="h-25 w-full   flex justify-between items-center">
      <div className=" flex items-center ml-5">
        <div className="flex items-center cursor-pointer">
          <AllTracks />
          <ArrowDown className="ml-2" />
        </div>

        {/* <DropDown /> */}

        <SearchBar />
      </div>
      <div className="mr-4">
        <Sort />
      </div>
    </div>
  );
}
