// import React from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function UserLayout({ children }) {
  return (
    <div className="flex">

    <Sidebar/>

    <div className="flex-1">
        <Navbar/>

        <div className="p-6">
        { children }
        </div>
    </div>
    </div>
  );
}

export default UserLayout;
