import { createContext, useState ,useMemo} from 'react';

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [pageNo, setPageNo] = useState(1);
  const [searchTerm, setSearchTerm] = useState(null);
  const [sortValue, setSortValue] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [lastPageNo, setLastPageNo] = useState(20);
  const [availableTracks, setAvailableTracks] = useState([]);
  const [trackCounts, setTrackCounts] = useState({});

  const contextValues = useMemo(()=>({pageNo, setPageNo,searchTerm, setSearchTerm,sortValue, setSortValue,selectedTrack, setSelectedTrack,lastPageNo, setLastPageNo,availableTracks, setAvailableTracks,trackCounts, setTrackCounts}),[availableTracks, lastPageNo, pageNo, searchTerm, selectedTrack, sortValue, trackCounts])

 
  return (
    <FilterContext.Provider
    value={contextValues}
    >
      {children}
    </FilterContext.Provider>
  );
};
