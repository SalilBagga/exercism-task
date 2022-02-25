import React from 'react';

export default function PageNum({ currendPage, setCurrendPage, lastPage }) {
  return (
    <div>
      {currendPage === 1 ? (
        <>
          <button className="border-1 border-searchtext bg-ex-rowhover px-3 py-1 rounded-md mr-2">
            {currendPage}
          </button>
          <button className="border-1 px-3 py-1 rounded-md mr-2">{currendPage + 1}</button>
          <button className="border-1 px-3 py-1 rounded-md mr-2">{currendPage + 2}</button>
          <span>....</span>
          <button className="border-1 px-3 py-1 rounded-md ml-2">{lastPage - 2}</button>
          <button className="border-1 px-3 py-1 rounded-md ml-2">{lastPage - 1}</button>
          <button className="border-1 px-3 py-1 rounded-md ml-2">{lastPage}</button>
        </>
      ) : currendPage > 1 && currendPage + 2 <= 4 ? (
        <>
          <button className="border-1 px-3 py-1 rounded-md mr-2">{currendPage - 1}</button>
          <button className="border-1 border-searchtext bg-ex-rowhover px-3 py-1 rounded-md mr-2">
            {currendPage}
          </button>
          <button className="border-1 px-3 py-1 rounded-md mr-2">{currendPage + 1}</button>
          {currendPage + 1 <= 7 && (
            <button className="border-1 px-3 py-1 rounded-md mr-2">{currendPage + 2}</button>
          )}
          <span>....</span>
          <button className="border-1 px-3 py-1 rounded-md ml-2">{lastPage - 2}</button>
          <button className="border-1 px-3 py-1 rounded-md ml-2">{lastPage - 1}</button>
          <button className="border-1 px-3 py-1 rounded-md ml-2">{lastPage}</button>
        </>
      ) : currendPage > 1 && currendPage + 2 <= 5 ? (
        <>
          <button className="border-1 px-3 py-1 rounded-md mr-2">{currendPage - 2}</button>
          <button className="border-1 px-3 py-1 rounded-md mr-2">{currendPage - 1}</button>
          <button className="border-1 border-searchtext bg-ex-rowhover px-3 py-1 rounded-md mr-2">
            {currendPage}
          </button>
          <button className="border-1 px-3 py-1 rounded-md mr-2">{currendPage + 1}</button>
          {currendPage + 1 <= 7 && (
            <button className="border-1 px-3 py-1 rounded-md mr-2">{currendPage + 2}</button>
          )}
          <span>....</span>
          <button className="border-1 px-3 py-1 rounded-md ml-2">{lastPage - 2}</button>
          <button className="border-1 px-3 py-1 rounded-md ml-2">{lastPage - 1}</button>
          <button className="border-1 px-3 py-1 rounded-md ml-2">{lastPage}</button>
        </>
      ) : currendPage > 1 && currendPage + 2 <= 6 ? (
        <>
          <button className="border-1 px-3 py-1 rounded-md mr-2">{currendPage - 3}</button>
          <button className="border-1 px-3 py-1 rounded-md mr-2">{currendPage - 2}</button>
          <button className="border-1 px-3 py-1 rounded-md mr-2">{currendPage - 1}</button>
          <button className="border-1 border-searchtext bg-ex-rowhover px-3 py-1 rounded-md mr-2">
            {currendPage}
          </button>
          <button className="border-1 px-3 py-1 rounded-md mr-2">{currendPage + 1}</button>
          {currendPage + 1 <= 7 && (
            <button className="border-1 px-3 py-1 rounded-md mr-2">{currendPage + 2}</button>
          )}
          <span>....</span>
          <button className="border-1 px-3 py-1 rounded-md ml-2">{lastPage - 2}</button>
          <button className="border-1 px-3 py-1 rounded-md ml-2">{lastPage - 1}</button>
          <button className="border-1 px-3 py-1 rounded-md ml-2">{lastPage}</button>
        </>
      ) : (
        <>
          <button className="border-1 px-3 py-1 rounded-md mr-2">{1}</button>
          <span>...</span>
          {(currendPage + 2 <= lastPage - 1 && currendPage + 3 === lastPage) ||
          currendPage + 2 === lastPage ||
          currendPage + 3 === lastPage ? (
            <>
              <button className="border-1 px-3 py-1 rounded-md mr-2">{currendPage - 2}</button>
              <button className="border-1 px-3 py-1 rounded-md mr-2">{currendPage - 1}</button>
              <button className="border-1 border-searchtext bg-ex-rowhover px-3 py-1 rounded-md mr-2">
                {currendPage}
              </button>
              <button className="border-1 px-3 py-1 rounded-md mr-2">{currendPage + 1}</button>
              {currendPage + 2 < lastPage && (
                <button className="border-1 px-3 py-1 rounded-md mr-2">{currendPage + 2}</button>
              )}

              <button className="border-1 px-3 py-1 rounded-md  ">{lastPage}</button>
            </>
          ) : (
            <>
              <button className="border-1 px-3 py-1 rounded-md mr-2">{currendPage - 2}</button>
              <button className="border-1 px-3 py-1 rounded-md mr-2">{currendPage - 1}</button>
              <button className="border-1 border-searchtext bg-ex-rowhover px-3 py-1 rounded-md mr-2">
                {currendPage}
              </button>
              {currendPage + 1 < lastPage && (
                <>
                  {currendPage + 2 <= lastPage && (
                    <button className="border-1 px-3 py-1 rounded-md mr-2">
                      A{currendPage + 2}
                    </button>
                  )}
                  <button className="border-1 px-3 py-1 rounded-md mr-2">Y{currendPage + 1}</button>
                </>
              )}

              {currendPage + 2 <= lastPage && currendPage + 1 <= lastPage && (
                <>
                  <span>....</span>
                  <button className="border-1 px-3 py-1 rounded-md ml-2">X{lastPage}</button>
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
