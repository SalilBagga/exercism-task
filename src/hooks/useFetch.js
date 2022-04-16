import { useState, useEffect, useContext } from 'react';

import { FilterContext } from '../context/FilterContext';
export const useFetch = () => {
  const  {pageNo,
    searchTerm,
    sortValue,
    selectedTrack,setAvailableTracks,
    setTrackCounts} = useContext(FilterContext);

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      let finalurl = '';
      setIsPending(true);
      let baseurl = 'https://exercism.org/api/v2/hiring/testimonials';

      if (pageNo === 1) {
        let page = '?page=1';
        finalurl = baseurl + page;
      } else {
        let page = '?page=' + pageNo;
        finalurl = baseurl + page;
      }
      if (searchTerm) {
        let search = '&exercise=' + searchTerm;
        finalurl = finalurl + search;
      }
      if (sortValue) {
        let sort = '&order=' + sortValue;
        finalurl = finalurl + sort;
      }
      if (selectedTrack) {
        let track = '&track=' + selectedTrack;
        finalurl = finalurl + track;
        console.log(finalurl);
      }
      
      console.log('fghj');
      setError(null);
      try {
        const res = await fetch(finalurl);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        setAvailableTracks(data.testimonials.tracks);
        setTrackCounts(data.testimonials.track_counts);
        setData(data.testimonials);
        setError(null);
        setIsPending(false);
        // setTimeout(() => {}, 500);
      } catch (err) {
        setError(err.message);
        setData(null);
        setIsPending(false);
      }
    };
    fetchdata();
  }, [pageNo, searchTerm, selectedTrack, setAvailableTracks, setTrackCounts, sortValue]);

  return { data, isPending, error };
};
