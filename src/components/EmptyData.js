import React from 'react';

export default function EmptyData({ msg }) {
  return (
    <div className="flex items-center h-[100vh]">
      <h1 className="mx-auto">{msg}</h1>
    </div>
  );
}
