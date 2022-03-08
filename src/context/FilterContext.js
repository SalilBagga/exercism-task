import { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [pageNo, setPageNo] = useState(1);
  const [searchTerm, setSearchTerm] = useState(null);
  const [sortValue, setSortValue] = useState(null);
  const [selectedTrack, setSelecTrack] = useState(null);
  const [lastPageNo, setLastPageNo] = useState(20);
  const [availableTracks, setAvailableTracks] = useState([]);
  const [trackCounts, setTrackCounts] = useState({});

  return (
    <FilterContext.Provider
      value={{
        pageNo,
        setPageNo,
        searchTerm,
        setSearchTerm,
        sortValue,
        setSortValue,
        selectedTrack,
        setSelecTrack,
        lastPageNo,
        setLastPageNo,
        availableTracks,
        setAvailableTracks,
        trackCounts,
        setTrackCounts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
