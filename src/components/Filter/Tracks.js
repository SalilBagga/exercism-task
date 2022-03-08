import React from 'react';

export default function Tracks({ data, id, setTrackList, trackList, trackCounts, setDropDown }) {
  return (
    <label htmlFor={id} className="flex my-2  items-center  cursor-pointer ">
      <input
        type="radio"
        name="tracks"
        id={id}
        className="tracks ml-[1.5rem] absolute  z-10"
        checked={trackList === data.slug}
        onChange={() => {
          setTrackList(data.slug);
          setDropDown(false);
        }}
        value={data.slug}
      />
      <div className="mx-auto pl-[1.8rem] flex w-[22.5rem] h-[3.625rem] items-center justify-between">
        <div className="flex items-center ">
          <img src={data.icon_url} alt={data.slug} className="ml-4 h-[42px]" />
          <span className="ml-4">{data.title}</span>
        </div>
        <h1 className=" px-2 py-1 border-1 rounded-[100px] mr-4">{trackCounts[data.slug]}</h1>
      </div>
    </label>
  );
}
