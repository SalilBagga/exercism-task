import React, { useState } from 'react';

//componenets
import PageNum from './PageNum';
//svg
import { ReactComponent as RightArrow } from '../../assets/RightArrow.svg';

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const lastPage = 20;

  // const [lastPage, setLastPage] = useState(20);
  return (
    <div className="h-25 w-full   flex justify-between items-center">
      {/* Previous */}
      <div className="ml-4">
        <button
          className={`border-1 w-28 h-10 rounded-md flex items-center justify-evenly ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <span>
            <RightArrow className="rotate-180" />
          </span>
          <span>Previous</span>
        </button>
      </div>
      {/* Middle */}
      <div>
        <PageNum currentPage={currentPage} setCurrentPage={setCurrentPage} lastPage={lastPage} />
      </div>
      {/* Next */}
      <div className="mr-4">
        <button
          className={`border-1 w-28 h-10 rounded-md flex items-center justify-evenly ${
            currentPage === lastPage ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === lastPage}
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
