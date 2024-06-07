import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="container flex justify-between bg-slate-500 p-2 text-white">
        <div className="logo">
          <span className="font-bold text-lg ml-4">iTask</span>
        </div>
        <ul className="flex gap-7   mr-10  ">
          <li className="cursor-pointer hover:font-bold">Home</li>
          <li className="cursor-pointer hover:font-bold">Contact</li>
          <li className="cursor-pointer hover:font-bold">Service</li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
