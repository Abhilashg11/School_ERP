"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/sidebarSlice";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { IconButton, Avatar, Menu, MenuItem, Tooltip } from "@mui/material";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const dispatch = useDispatch();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <nav className="bg-blue-600 w-full">
      <div className="max-w-[100vw] px-2 sm:px-4 lg:px-6">
        <div className="relative flex items-center justify-between h-16">
          {/* Left: Mobile menu button */}
          <div className="flex md:hidden">
            <IconButton
              size="large"
              color="inherit"
              aria-label="open drawer"
              onClick={() => dispatch(toggleSidebar())}
            >
              <MenuIcon className="text-white" />
            </IconButton>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0 flex items-center space-x-2">
            <AdbIcon className="text-white" />
            <span className="text-white text-xl font-bold tracking-widest font-mono">
              LOGO
            </span>

            {/* Desktop Nav links */}
            <div className="hidden md:flex ml-4">
              {pages.map((page) => (
                <button
                  key={page}
                  className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium outline-none"
                >
                  {page}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Avatar */}
          <div className="flex items-center">
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar alt="User" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{ mt: "45px" }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  {setting}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
