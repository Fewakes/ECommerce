import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

function UserDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative flex items-center" ref={dropdownRef}>
        <img
          src="/profile-pic.png"
          alt="Profile Picture"
          className="h-[50px] w-[50px] rounded-full"
        />

        <MdKeyboardArrowDown
          size={28}
          color="white"
          onClick={toggleDropdown}
          style={{
            transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease-in-out",
          }}
        />
        {dropdownOpen && (
          <div className="absolute right-0 z-10  mt-[12rem] w-48 overflow-hidden rounded-md bg-white shadow-xl">
            <Link
              to="/admin/usersettings"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-color-primary hover:text-white"
            >
              Profile
            </Link>
            <Link
              to="/admin/storesettings"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-color-primary hover:text-white"
            >
              Settings
            </Link>
            <Link
              to="/admin/login"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-color-primary hover:text-white"
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default UserDropdown;
