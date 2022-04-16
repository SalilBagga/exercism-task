import React, { useEffect, useContext } from 'react';

//componenets
import Filters from '../Filter/Filters';
import TableComponent from './TableComponent';
import Pagination from '../Pagination/Pagination';
import Loading from '../Loading';
import EmptyData from '../EmptyData';

//fetch data
import { useFetch } from '../../hooks/useFetch';
import { FilterContext } from '../../context/FilterContext';
export default function Table() {
  const  {setLastPageNo} = useContext(FilterContext);
  const { data, isPending, error } = useFetch();
  useEffect(() => {
    if (data) {
       setLastPageNo(data.pagination.total_pages);
    }
  }, [data, setLastPageNo]);

  return (
    <div className="max-w-[95%] mb-5 max-h-[90%] border-2 mx-auto mt-6 rounded-lg  shadow-xl">
      <div className="shadow-3xl">
        <Filters />
        <div className="relative">
          {isPending && <Loading />}
          <div className="min-h-[100vh]">
            {data && <TableComponent testimonials={data.results} />}
            {error && <EmptyData msg={error} />}
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
}
