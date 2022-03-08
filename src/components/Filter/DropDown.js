import React, { useContext } from 'react';

//svg
import { ReactComponent as AllTracks } from '../../assets/AllTrack.svg';

//componenets
import Tracks from './Tracks';

//context
import { FilterContext } from '../../context/FilterContext';

function DropDown({ setDropDown, tacks }) {
  const context = useContext(FilterContext);

  return (
    <div className="absolute">
      <div className="z-10 rounded-lg drop-shadow-4xl w-[23.5rem] h-[22.75rem] section  bg-white overflow-y-auto overflow-x-hidden">
        <form>
          <label htmlFor="alltracks" className="flex my-2  items-center cursor-pointer">
            <input
              type="radio"
              name="tracks"
              id="alltracks"
              className="tracks ml-[1.5rem] absolute  z-10"
              checked={context.selectedTrack === null}
              onChange={() => {
                context.setSelecTrack(null);
                setDropDown(false);
              }}
            />
            <div className="mx-auto pl-[1.8rem] flex w-[22.5rem] h-[3.625rem] items-center justify-between">
              <div className="flex items-center ">
                <AllTracks className="ml-4 " />
                <span className="ml-4">All</span>
              </div>
            </div>
          </label>

          {tacks &&
            context.availableTracks.length > 0 &&
            tacks.tracks.map(
              (data, index) =>
                context.availableTracks.includes(data.slug) && (
                  <Tracks
                    key={index}
                    setTrackList={context.setSelecTrack}
                    trackList={context.selectedTrack}
                    id={index}
                    trackCounts={context.trackCounts}
                    data={data}
                    setDropDown={setDropDown}
                  />
                )
            )}
        </form>
      </div>
    </div>
  );
}
export default React.memo(DropDown);
