"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function SideBar() {
  const pathname = usePathname();

  return (
    <nav className="styled_scrollbar pr-2 pb-4 h-[calc(100vh-200px)]">
      <ul className="pb-3">
        <li>
          <Link
            scroll={false}
            href="/frontend"
            className={`hover:text-gray-1000 cursor-pointer relative flex w-full items-center justify-between rounded-md py-1 pl-2 text-left text-sm ${
              pathname === "/frontend" ? "text-blue-700" : "text-gray-1000"
            } font-medium`}
          >
            Frontend
          </Link>
          <div
            className=""
            style={{
              height: "auto",
              opacity: 1,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              transition: "opacity 0.15s ease 0s, height 0.2s ease-in-out 0s",
            }}
          >
            <div className="relative">
              <ul className="px-0.5 last-of-type:mb-0 mb-8">
                <li className="my-1.5">
                  <a
                    href="/frontend/frameworks"
                    className={`hover:text-gray-1000 relative flex w-full cursor-pointer items-center justify-between rounded-md py-1 pl-2 text-left text-sm font-medium ${
                      pathname === "/frontend/frameworks"
                        ? "text-blue-700"
                        : "text-gray-1000"
                    }`}
                  >
                    Frameworks
                  </a>
                </li>
                <li className="my-1.5">
                  <a
                    href="/frontend/libraries"
                    className={`hover:text-gray-1000 relative flex w-full cursor-pointer items-center justify-between rounded-md py-1 pl-2 text-left text-sm font-medium ${
                      pathname === "/frontend/libraries"
                        ? "text-blue-700"
                        : "text-gray-1000"
                    }`}
                  >
                    Libraries
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <Link
            scroll={false}
            href="/backend"
            className={`cursor-pointer relative flex w-full items-center justify-between rounded-md py-1 pl-2 text-left text-sm ${
              pathname === "/backend" ? "text-blue-700" : "text-gray-1000"
            } hover:text-gray-1000  font-medium`}
          >
            Backend
          </Link>
        </li>
      </ul>
    </nav>
  );
}
