import React, { useContext } from 'react';

//componenets
import PageNum from './PageNum';
//svg
import { ReactComponent as RightArrow } from '../../assets/RightArrow.svg';

//context
import { FilterContext } from '../../context/FilterContext';

export default function Pagination() {
  const context = useContext(FilterContext);

  let lastPage = context.lastPageNo;

  return (
    <div className="h-25 w-full   flex justify-between items-center">
      {/* Previous */}
      <div className="ml-4">
        <button
          className={`border-1 w-28 h-10 rounded-md flex items-center justify-evenly ${
            context.pageNo === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={() => context.setPageNo(context.pageNo - 1)}
          disabled={context.pageNo === 1}
        >
          <span>
            <RightArrow className="rotate-180" />
          </span>
          <span>Previous</span>
        </button>
      </div>
      {/* Middle */}
      <div>
        <PageNum
          currentPage={context.pageNo}
          setCurrentPage={context.setPageNo}
          lastPage={lastPage}
        />
      </div>
      {/* Next */}
      <div className="mr-4">
        <button
          className={`border-1 w-28 h-10 rounded-md flex items-center justify-evenly ${
            context.pageNo === lastPage ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={() => context.setPageNo(context.pageNo + 1)}
          disabled={context.pageNo === lastPage}
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
