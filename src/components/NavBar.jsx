import React from 'react';
import Icon from '../containers/Icon';

const NavBar = () => {
  return (
    <div className="w-11/12 justify-around text-white my-2 py-2 text-lg font-semibold hidden lg:flex">
      <a href="#Profile" className="link">
        <Icon name="Profile" className="w-[27px] mr-[1px] text-sky-500" />
        Profile
      </a>
      <a href="#Skills" className="link">
        <Icon name="Lightning" className="mr-0.5 text-yellow-300" />
        Skills
      </a>
      <a href="#Experience" className="link">
        <Icon name="Experience" className="mr-0.5 text-amber-800" />
        Experience
      </a>
      <a href="#Academic" className="link">
        <Icon name="Education" className="mr-0.5 text-neutral-900" />
        Academic
      </a>
      <a href="#Projects" className="link">
        <Icon
          name="Experiment"
          className="mr-0.5 text-fuchsia-600 text-green-500"
        />
        Projects
      </a>
      <a href="#Interest" className="link">
        <Icon name="Fire" className="mr-0.5 text-red-500" />
        Interest
      </a>
      <a href="#About" className="link">
        <Icon name="User" className="mr-0.5 text-cyan-400" />
        About
      </a>
      <a href="#Languages" className="link">
        <Icon name="Language" className="mr-0.5" />
        Languages
      </a>
    </div>
  );
};

export default NavBar;
