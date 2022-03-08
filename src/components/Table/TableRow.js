import React from 'react';

import Moment from 'react-moment';
//svg
import { ReactComponent as Arrow } from '../../assets/Arrow.svg';

export default function TableRow({ logo, avatar, name, topic, content, createdAt }) {
  return (
    <tr className=" h-16 px-4 py-2 border-t-1 border-b-1 hover:bg-ex-rowhover cursor-pointer">
      <td>
        <div id="logo_name" className="flex items-center ml-4 ">
          <img src={logo} alt="logo" className="object-contain h-10 " />
          <img src={avatar} alt="avatar" className="object-contain h-10 mx-4 rounded-full" />
          <div className="text-left">
            <strong>{name}</strong>
            <h4>{topic}</h4>
          </div>
        </div>
      </td>

      <td>
        <div className="text-left">
          <h4>
            {content && content.length > 50 ? content.substring(0, 50).concat('...') : content}
          </h4>
        </div>
      </td>

      <td className="">
        <div>
          <h4 className=" flex items-center justify-end mr-4">
            <Moment fromNow>{createdAt.replace('Z', '')}</Moment>
            <span>
              <Arrow className="ml-3" />
            </span>
          </h4>
        </div>
      </td>
    </tr>
  );
}
