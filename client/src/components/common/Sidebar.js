"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "@/features/sidebar/sidebarSlice";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Avatar from "@/components/Avatar";
import Link from "next/link";
import "./Common.scss";

export default function Sidebar() {
  const open = useSelector((state) => state.sidebar.open);
  const dispatch = useDispatch();

  const itemsTop = [
    { item: "Home", link: "/" },
    { item: "Form", link: "/form" },
    { item: "Send email", link: "/email" },
    { item: "Drafts", link: "/draft" },
  ];

  const itemsBottom = [
    { item: "Home", link: "/" },
    { item: "Form", link: "/form" },
    { item: "Details", link: "/detailpage" },
    { item: "Drafts", link: "/draft" },
    { item: "Products", link: "/products" },
    { item: "UMS", link: "/ums" },
    { item: "test1", link: "/test1" },
    { item: "test2", link: "/test2" },
    { item: "test3", link: "/test3" },
    { item: "test4", link: "/test4" },
    { item: "test5", link: "/test5" },
    { item: "test6", link: "/test6" },
    { item: "test7", link: "/test4" },
    { item: "test8", link: "/test5" },
    { item: "test9", link: "/test6" },
  ];

  return (
    <>
      {/* Overlay on mobile */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-gray-200/50 md:hidden"
          onClick={() => dispatch(closeSidebar())}
        />
      )}

      {/* Sidebar */}
      <div
        className={`w-64 h-full bg-white shadow-lg z-50 fixed top-0 left-0 transform transition-transform ease-in-out
          ${
            open
              ? "translate-x-0 duration-300"
              : "-translate-x-full duration-10"
          } md:static md:translate-x-0 md:transform-none md:transition-none md:block`}
      >
        <div className="h-full max-h-screen overflow-y-auto py-4 scroll-hidden">
          {/* Top Avatar */}
          <div className="flex items-center justify-center mb-4 flex-col">
            <Avatar style={{ width: "160px", height: "160px" }} />

            {/* User name */}
            <div className="text-center mt-2">
              <h2 className="text-lg font-semibold text-gray-800">User Name</h2>
              <p className="text-sm text-gray-600">Email</p>
            </div>
          </div>

          <hr className="my-4 border-t border-gray-200" />

          {/* Bottom List (non-links) */}
          <ul>
            {itemsBottom.map((text, index) => (
              <li
                key={text.item}
                className="m-1 border border-gray-100 shadow-xs"
              >
                <Link
                  href={text.link}
                  className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-left"
                >
                  <span className="mr-3 text-gray-700">
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </span>
                  <span className="text-sm text-gray-800">{text.item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
