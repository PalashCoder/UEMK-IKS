"use client";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState("/");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const navbar = useRef();

  useEffect(() => {
    window.onscroll = () => {
      setMounted(true);
      if (window.pageYOffset >= 200) {
        navbar.current.classList.add("shadow");
      } else {
        navbar.current.classList.remove("shadow");
      }
    };
  }, []);

  return (
    <div
      ref={navbar}
      className={`${
        theme === "dark" ? "bg-[#121212]" : "bg-white text-black"
      } w-full z-50 fixed top-0 left-0 mb-10`}
    >
      <div className="container py-0 px-5 md:px-16 flex items-center justify-between mx-auto">
        <Link href={"/"}>
          <Image src={"/Logo.png"} height={100} width={100} />
        </Link>

        <div>
          <ul
            className={`${toggleMenu === true ? "left-0" : "-left-full"} ${
              theme === "dark"
                ? "bg-[#121212] text-white"
                : "bg-white text-black"
            } z-50 flex md:items-center gap-1 md:gap-5 lg:gap-10 md:relative absolute top-0 md:left-0 w-80 transition-all duration-500 h-screen md:w-auto md:h-auto flex-col md:flex-row shadow-2xl py-24 px-10 md:p-0 md:shadow-none`}
          >
            <button
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } md:hidden absolute top-6 right-5`}
              onClick={() => setToggleMenu(false)}
            >
              <CloseOutlinedIcon />
            </button>
            {["home", "features", "pricing", "testimonial"].map((link) => (
              <li
                key={link}
                className={`${
                  selectedItem === link ? "text-rose-600" : ""
                } capitalize border-b py-4 md:border-none md:py-0 hover:text-rose-600`}
                onClick={() => setSelectedItem(link)}
              >
                <Link href={`#${link}`}>{link}</Link>
              </li>
            ))}
            <div className="md:hidden mx-auto absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-3">
              <Link href="/">
                <FacebookOutlinedIcon className="cursor-pointer hover:text-rose-600 text-xl" />
              </Link>
              <Link href={"/"}>
                <LinkedInIcon className="cursor-pointer hover:text-rose-600 text-xl" />
              </Link>
              <Link href={"/"}>
                <GitHubIcon className="cursor-pointer hover:text-rose-600 text-xl" />
              </Link>
              <Link href={"/"}>
                <InstagramIcon className="cursor-pointer hover:text-rose-600 text-xl" />
              </Link>
            </div>
          </ul>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-2 lg:gap-4">
          <button className="capitalize text-sm sm:text-base border-2 hover:border-2 font-semibold sm:py-3 py-2 px-3 sm:px-6 text-rose-600 border-rose-600 hover:border-rose-600 hover:bg-rose-600 hover:text-white rounded-full">
            <Link href={"#pricing"}>Get Started</Link>
          </button>
          <button>
            {theme === "dark" ? (
              <LightModeRoundedIcon
                onClick={() => setTheme("light")}
                className="text-white"
              />
            ) : (
              <DarkModeOutlinedIcon onClick={() => setTheme("dark")} />
            )}
          </button>
          <button
            aria-label="menu"
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } md:hidden`}
            onClick={() => setToggleMenu(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
