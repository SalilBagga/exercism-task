import React, { useState } from 'react';

//componenets
import PageNum from './PageNum';
//svg
import { ReactComponent as RightArrow } from '../../assets/RightArrow.svg';
export default function Pagination() {
  const [currendPage, setCurrendPage] = useState(1);

  const [lastPage, setLastPage] = useState(10);
  return (
    <div className="h-25 w-full   flex justify-between items-center">
      {/* Previous */}
      <div className="ml-4">
        <button
          className={`border-1 w-28 h-10 rounded-md flex items-center justify-evenly ${
            currendPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={() => setCurrendPage(currendPage - 1)}
          disabled={currendPage === 1}
        >
          <span>
            <RightArrow className="rotate-180" />
          </span>
          <span>Previous</span>
        </button>
      </div>
      {/* Middle */}
      <div>
        <PageNum currendPage={currendPage} setCurrendPage={setCurrendPage} lastPage={lastPage} />
      </div>
      {/* Next */}
      <div className="mr-4">
        <button
          className={`border-1 w-28 h-10 rounded-md flex items-center justify-evenly ${
            currendPage === lastPage ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={() => setCurrendPage(currendPage + 1)}
          disabled={currendPage === lastPage}
        >
          <span>Next</span>
          <span>
            <RightArrow />
          </span>
        </button>
      </div>
    </div>
  );
}
