import React from 'react';

export default function Sort() {
  return (
    <div className="w-[348px]">
      <select
        name="sortby"
        id="sortby"
        className="py-2 pl-3   w-full h-12 bg-ex-trackhover ring-1 ring-slate-900/10 text-searchtext rounded-md  "
      >
        <option value="newest">Sort By Most Recent</option>
        <option value="oldest">Sort By Most Oldest</option>
      </select>
    </div>
  );
}
