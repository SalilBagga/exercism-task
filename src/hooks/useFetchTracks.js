import { useState, useEffect, useContext } from 'react';

import { FilterContext } from '../context/FilterContext';

export const useFetchTracks = () => {
  const context = useContext(FilterContext);
  let finalurl = '';
  const [tracks, setTracks] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchtracks = async () => {
      setError(null);
      try {
        const res = await fetch('https://exercism.org/api/v2/tracks');
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();

        setTracks(data);

        setError(null);
        setIsPending(false);
      } catch (err) {
        setError(err.message);
        setTracks(null);
        setIsPending(false);
      }
    };
    fetchtracks();
  }, [context]);

  return { tracks, isPending, error };
};
