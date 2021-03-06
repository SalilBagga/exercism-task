import React from 'react';

//componenets
import TableRow from './TableRow';
import EmptyData from '../EmptyData';

function TableComponent({ testimonials }) {
  return (
    <div>
      {testimonials.length > 0 ? (
        <table className="table-fixed w-full ">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {testimonials &&
              testimonials.map((data, index) => (
                <TableRow
                  logo={data.track.icon_url}
                  avatar={data.mentor.avatar_url}
                  name={data.mentor.handle}
                  topic={data.exercise.title}
                  content={data.content}
                  createdAt={data.created_at}
                  key={data.id}
                />
              ))}
          </tbody>
        </table>
      ) : (
        <EmptyData msg="No Testimonials found" />
      )}
    </div>
  );
}
export default React.memo(TableComponent);
