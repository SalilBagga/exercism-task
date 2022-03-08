import React from 'react';

//svg
import { ReactComponent as LoadingSvg } from '../assets/Loading.svg';

export default function Loading() {
  return (
    <div>
      <div className="mx-auto absolute bg-white w-full h-full opacity-60 flex items-center">
        <LoadingSvg className="animate-spin mx-auto" />
      </div>
    </div>
  );
}
