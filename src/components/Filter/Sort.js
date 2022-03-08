import React, { useContext } from 'react';
import { FilterContext } from '../../context/FilterContext';

export default function Sort() {
  const context = useContext(FilterContext);
  return (
    <div className="w-[348px]">
      <select
        name="sortby"
        id="sortby"
        className="py-2 pl-3   w-full h-12 bg-ex-trackhover ring-1 ring-slate-900/10 text-searchtext rounded-md"
        onChange={(e) => {
          context.setSortValue(e.target.value);
        }}
      >
        <option value="" defaultChecked>
          Select Order
        </option>
        <option value="newest_first">Sort By Most Recent</option>
        <option value="oldest_first">Sort By Most Oldest</option>
      </select>
    </div>
  );
}
