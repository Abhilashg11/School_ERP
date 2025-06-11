"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../../redux/sidebarSlice";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function Sidebar() {
  const open = useSelector((state) => state.sidebar.open);
  const dispatch = useDispatch();

  const itemsTop = ["Inbox", "Starred", "Send email", "Drafts"];
  const itemsBottom = [
    "All mail",
    "Trash",
    "Spam",
    "All maile",
    "Trashe",
    "Spams",
    "All mails",
    "Trashs",
    "Spama",
    "All mailss",
    "Trashss",
    "Spamas",
  ];

  console.log("Sidebar open state:", open);

  return (
    <>
      {/* Overlay on mobile */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={() => dispatch(closeSidebar())}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
         fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:block
  `}
      >
        <div className="h-full max-h-screen overflow-y-auto py-4 custom-scroll">
          {/* Top List */}
          <ul>
            {itemsTop.map((text, index) => (
              <li key={text} className="m-1">
                <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-left">
                  <span className="mr-3 text-gray-700">
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </span>
                  <span className="text-sm text-gray-800">{text}</span>
                </button>
              </li>
            ))}
          </ul>

          <hr className="my-4 border-t border-gray-200" />

          {/* Bottom List */}
          <ul>
            {itemsBottom.map((text, index) => (
              <li key={text} className="m-1">
                <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-left">
                  <span className="mr-3 text-gray-700">
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </span>
                  <span className="text-sm text-gray-800">{text}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
