import React from 'react';

export default function PageNum({ currentPage, setCurrentPage, lastPage }) {
  let pagearray = [];
  for (var i = 1; i <= lastPage; i++) {
    pagearray.push(i);
  }

  return (
    <div>
      {lastPage > 10 ? (
        <>
          {currentPage === 1 ? (
            <>
              <button className="border-1 border-searchtext bg-ex-rowhover px-3 py-1 rounded-md mr-2">
                {currentPage}
              </button>
              <button
                className="border-1 px-3 py-1 rounded-md mr-2"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                {currentPage + 1}
              </button>
              <button
                className="border-1 px-3 py-1 rounded-md mr-2"
                onClick={() => setCurrentPage(currentPage + 2)}
              >
                {currentPage + 2}
              </button>
              <span>....</span>
              <button
                className="border-1 px-3 py-1 rounded-md ml-2"
                onClick={() => setCurrentPage(lastPage - 2)}
              >
                {lastPage - 2}
              </button>
              <button
                className="border-1 px-3 py-1 rounded-md ml-2"
                onClick={() => setCurrentPage(lastPage - 1)}
              >
                {lastPage - 1}
              </button>
              <button
                className="border-1 px-3 py-1 rounded-md ml-2"
                onClick={() => setCurrentPage(lastPage)}
              >
                {lastPage}
              </button>
            </>
          ) : currentPage > 1 && currentPage + 2 <= 4 ? (
            <>
              <button
                className="border-1 px-3 py-1 rounded-md mr-2"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                {currentPage - 1}
              </button>
              <button className="border-1 border-searchtext bg-ex-rowhover px-3 py-1 rounded-md mr-2">
                {currentPage}
              </button>
              <button
                className="border-1 px-3 py-1 rounded-md mr-2"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                {currentPage + 1}
              </button>
              {currentPage + 1 <= 7 && (
                <button
                  className="border-1 px-3 py-1 rounded-md mr-2"
                  onClick={() => setCurrentPage(currentPage + 2)}
                >
                  {currentPage + 2}
                </button>
              )}
              <span>....</span>
              <button
                className="border-1 px-3 py-1 rounded-md ml-2"
                onClick={() => setCurrentPage(lastPage - 2)}
              >
                {lastPage - 2}
              </button>
              <button
                className="border-1 px-3 py-1 rounded-md ml-2"
                onClick={() => setCurrentPage(lastPage - 1)}
              >
                {lastPage - 1}
              </button>
              <button
                className="border-1 px-3 py-1 rounded-md ml-2"
                onClick={() => setCurrentPage(lastPage)}
              >
                {lastPage}
              </button>
            </>
          ) : currentPage > 1 && currentPage + 2 <= 5 ? (
            <>
              <button
                className="border-1 px-3 py-1 rounded-md mr-2"
                onClick={() => setCurrentPage(currentPage - 2)}
              >
                {currentPage - 2}
              </button>
              <button
                className="border-1 px-3 py-1 rounded-md mr-2"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                {currentPage - 1}
              </button>
              <button className="border-1 border-searchtext bg-ex-rowhover px-3 py-1 rounded-md mr-2">
                {currentPage}
              </button>
              <button
                className="border-1 px-3 py-1 rounded-md mr-2"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                {currentPage + 1}
              </button>
              {currentPage + 1 <= 7 && (
                <button
                  className="border-1 px-3 py-1 rounded-md mr-2"
                  onClick={() => setCurrentPage(currentPage + 2)}
                >
                  {currentPage + 2}
                </button>
              )}
              <span>....</span>
              <button
                className="border-1 px-3 py-1 rounded-md ml-2"
                onClick={() => setCurrentPage(lastPage - 2)}
              >
                {lastPage - 2}
              </button>
              <button
                className="border-1 px-3 py-1 rounded-md ml-2"
                onClick={() => setCurrentPage(lastPage - 1)}
              >
                {lastPage - 1}
              </button>
              <button
                className="border-1 px-3 py-1 rounded-md ml-2"
                onClick={() => setCurrentPage(lastPage)}
              >
                {lastPage}
              </button>
            </>
          ) : currentPage > 1 && currentPage + 2 <= 6 ? (
            <>
              <button
                className="border-1 px-3 py-1 rounded-md mr-2"
                onClick={() => setCurrentPage(currentPage - 3)}
              >
                {currentPage - 3}
              </button>
              <button
                className="border-1 px-3 py-1 rounded-md mr-2"
                onClick={() => setCurrentPage(currentPage - 2)}
              >
                {currentPage - 2}
              </button>
              <button
                className="border-1 px-3 py-1 rounded-md mr-2"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                {currentPage - 1}
              </button>
              <button className="border-1 border-searchtext bg-ex-rowhover px-3 py-1 rounded-md mr-2">
                {currentPage}
              </button>
              <button
                className="border-1 px-3 py-1 rounded-md mr-2"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                {currentPage + 1}
              </button>
              {currentPage + 1 <= 7 && (
                <button
                  className="border-1 px-3 py-1 rounded-md mr-2"
                  onClick={() => setCurrentPage(currentPage + 2)}
                >
                  {currentPage + 2}
                </button>
              )}
              <span>....</span>
              <button
                className="border-1 px-3 py-1 rounded-md ml-2"
                onClick={() => setCurrentPage(lastPage - 2)}
              >
                {lastPage - 2}
              </button>
              <button
                className="border-1 px-3 py-1 rounded-md ml-2"
                onClick={() => setCurrentPage(lastPage - 1)}
              >
                {lastPage - 1}
              </button>
              <button
                className="border-1 px-3 py-1 rounded-md ml-2"
                onClick={() => setCurrentPage(lastPage)}
              >
                {lastPage}
              </button>
            </>
          ) : (
            <>
              <button
                className="border-1 px-3 py-1 rounded-md mr-2"
                onClick={() => setCurrentPage(1)}
              >
                {1}
              </button>
              <span>...</span>
              {(currentPage + 2 <= lastPage - 1 && currentPage + 3 === lastPage) ||
              currentPage + 2 === lastPage ||
              currentPage + 3 === lastPage ||
              currentPage + 1 === lastPage ? (
                <>
                  <button
                    className="border-1 px-3 py-1 rounded-md mr-2"
                    onClick={() => setCurrentPage(currentPage - 2)}
                  >
                    {currentPage - 2}
                  </button>
                  <button
                    className="border-1 px-3 py-1 rounded-md mr-2"
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    {currentPage - 1}
                  </button>
                  <button className="border-1 border-searchtext bg-ex-rowhover px-3 py-1 rounded-md mr-2">
                    {currentPage}
                  </button>
                  {currentPage + 1 < lastPage && (
                    <button
                      className="border-1 px-3 py-1 rounded-md mr-2"
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      {currentPage + 1}
                    </button>
                  )}

                  {currentPage + 2 < lastPage && (
                    <button
                      className="border-1 px-3 py-1 rounded-md mr-2"
                      onClick={() => setCurrentPage(currentPage + 2)}
                    >
                      {currentPage + 2}
                    </button>
                  )}
                  <button
                    className="border-1 px-3 py-1 rounded-md"
                    onClick={() => setCurrentPage(lastPage)}
                  >
                    {lastPage}
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="border-1 px-3 py-1 rounded-md mr-2"
                    onClick={() => setCurrentPage(currentPage - 2)}
                  >
                    {currentPage - 2}
                  </button>
                  <button
                    className="border-1 px-3 py-1 rounded-md mr-2"
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    {currentPage - 1}
                  </button>
                  <button className="border-1 border-searchtext bg-ex-rowhover px-3 py-1 rounded-md mr-2">
                    {currentPage}
                  </button>
                  {currentPage + 1 < lastPage && (
                    <>
                      <button
                        className="border-1 px-3 py-1 rounded-md mr-2"
                        onClick={() => setCurrentPage(currentPage + 1)}
                      >
                        {currentPage + 1}
                      </button>
                      {currentPage + 2 <= lastPage && (
                        <button
                          className="border-1 px-3 py-1 rounded-md mr-2"
                          onClick={() => setCurrentPage(currentPage + 2)}
                        >
                          {currentPage + 2}
                        </button>
                      )}
                    </>
                  )}

                  {currentPage + 2 <= lastPage && currentPage + 1 <= lastPage && (
                    <>
                      <span>....</span>
                      <button
                        className="border-1 px-3 py-1 rounded-md ml-2"
                        onClick={() => setCurrentPage(lastPage)}
                      >
                        {lastPage}
                      </button>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      ) : (
        <>
          {pagearray &&
            pagearray.length > 0 &&
            pagearray.map((items) => (
              <span key={items}>
                {currentPage === items ? (
                  <button
                    key={items}
                    className="border-1 border-searchtext bg-ex-rowhover px-3 py-1 rounded-md mr-2"
                  >
                    {items}
                  </button>
                ) : (
                  <button
                    key={items}
                    className="border-1 px-3 py-1 rounded-md mr-2"
                    onClick={() => setCurrentPage(items)}
                  >
                    {items}
                  </button>
                )}
              </span>
            ))}
        </>
      )}
    </div>
  );
}
