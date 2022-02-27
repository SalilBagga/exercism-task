import React from 'react';

//svg
import { ReactComponent as Logo } from '../assets/Logo.svg';
import { ReactComponent as Dashboard } from '../assets/Dashboard.svg';
import { ReactComponent as Tracks } from '../assets/Tracks.svg';
import { ReactComponent as Messages } from '../assets/Messages.svg';
import { ReactComponent as Contributor } from '../assets/Contributor.svg';
import { ReactComponent as Happy } from '../assets/Happy.svg';
import { ReactComponent as Hexagon } from '../assets/Hexagon.svg';
import { ReactComponent as Bell } from '../assets/Bell.svg';
import { ReactComponent as Badge } from '../assets/Badge.svg';
import { ReactComponent as Menu } from '../assets/Menu.svg';

import ProfileImg from '../assets/ProfileImg.png';

function Header() {
  return (
    <div className="w-full h-16 border-b-2">
      <div className="flex items-center  justify-between">
        <ul className="flex items-center ml-4">
          <li className=" cursor-pointer">
            <Logo />
          </li>
          <li className="flex items-center ml-4 cursor-pointer">
            <Dashboard />
            <strong className="ml-2">Dashboard</strong>
          </li>
          <li className="flex items-center ml-4 cursor-pointer">
            <Tracks />
            <strong className="ml-2">Tracks</strong>
          </li>
          <li className="flex items-center ml-4 cursor-pointer">
            <Messages />
            <strong className="ml-2">Messages</strong>
          </li>
          <li className="flex items-center ml-4 cursor-pointer">
            <Contributor />
            <strong className="ml-2">Contributor</strong>
          </li>
        </ul>
        <ul className="flex items-center mr-4">
          <li className="relative mr-8 cursor-pointer">
            <Happy />
            <span className="bg-notification w-[10px] h-[10px] rounded-full text-white absolute -top-1   right-0 py-[1px] px-[3px] "></span>
          </li>
          <li className="relative mr-8 cursor-pointer">
            <Hexagon />
            <span className="bg-notification w-[10px] h-[10px] rounded-full text-white absolute -top-1   right-0 py-[1px] px-[3px] "></span>
          </li>
          <li className=" mr-8   cursor-pointer">
            <div className="py-2 px-2 relative rounded-md shadow-lg">
              <Bell />
              <span className="bg-notification   rounded-full text-white absolute -top-1  -right-3 py-[1px] px-[7px] text-sm">
                2
              </span>
            </div>
          </li>
          <li className=" mr-8 cursor-pointer">
            <div className="rounded-[100px] mx-auto bg-gradient-to-b p-[4px] from-[#CC01FF] via-[#3B82F6] to-[#3301FF]">
              <div className="px-4 leading-[200%] items-center relative   rounded-[100px] bg-badge flex text-white">
                <Badge />
                <span className="font-semibold">200k</span>
                <span className="bg-notification w-[20px] h-[20px] rounded-full text-white absolute -top-3 -right-2 py-[1px] px-[3px] border-[3px] border-white"></span>
              </div>
            </div>
          </li>
          <li className=" mr-8 cursor-pointer">
            <img src={ProfileImg} alt="profile-img" />
          </li>
          <li className=" mr-4 cursor-pointer">
            <Menu />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default React.memo(Header);
