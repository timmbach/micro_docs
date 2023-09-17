import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

export default function Page() {
  return (
    <>
      {/* <main>
        <div className="border border-yellow-300 max-w-6xl mx-auto flex">
          <div className="border border-red-500 w-1/4 mt-28 relative overflow-hidden">
            <SideBar />
          </div>
          <div className="border border-blue-700 w-3/4">content</div>
        </div>
      </main> */}
      <div className="border border-green-900 w-3/4">content</div>
    </>
  );
}
