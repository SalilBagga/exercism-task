import { useState, useEffect, useContext } from 'react';

import { FilterContext } from '../context/FilterContext';
export const useFetch = () => {
  const context = useContext(FilterContext);

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const fetchdata = async () => {
    let finalurl = '';
    setIsPending(true);
    let baseurl = 'https://exercism.org/api/v2/hiring/testimonials';
    if (context.pageNo === 1) {
      let page = '?page=1';
      finalurl = baseurl + page;
    } else {
      let page = '?page=' + context.pageNo;
      finalurl = baseurl + page;
    }
    if (context.searchTerm) {
      let search = '&exercise=' + context.searchTerm;
      finalurl = finalurl + search;
    }
    if (context.sortValue) {
      let sort = '&order=' + context.sortValue;
      finalurl = finalurl + sort;
    }
    if (context.selectedTrack) {
      let track = '&track=' + context.selectedTrack;
      finalurl = finalurl + track;
    }
    console.log(finalurl, isPending, error);

    setError(null);
    try {
      const res = await fetch(finalurl);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      context.setAvailableTracks(data.testimonials.tracks);
      context.setTrackCounts(data.testimonials.track_counts);

      setTimeout(() => {
        setData(data.testimonials);
        console.log(data);
        setError(null);
        setIsPending(false);
      }, 1000);
    } catch (err) {
      setError(err.message);
      setData(null);
      setIsPending(false);
    }
  };
  useEffect(() => {
    fetchdata();
  }, [context.pageNo, context.searchTerm, context.sortValue, context.selectedTrack]);

  return { data, isPending, error };
};
