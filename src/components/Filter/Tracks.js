import React from 'react';

export default function Tracks({ data, id, setfirst }) {
  return (
    <div htmlFor="alltracks" className="flex my-2  items-center ">
      <input
        type="radio"
        name="tracks"
        id={id}
        className="tracks ml-[1.5rem] absolute  z-10"
        onChange={() => setfirst(data.slug)}
      />
      <div className="mx-auto pl-[1.8rem] flex w-[22.5rem] h-[3.625rem] items-center justify-between">
        <div className="flex items-center ">
          <img src={data.icon_url} alt={data.slug} className="ml-4 h-[42px]" />
          <span className="ml-4">{data.title}</span>
        </div>
        <h1 className=" px-4 py-2 border-1 rounded-full mr-4">{data.num_exercises}</h1>
      </div>
    </div>
  );
}
