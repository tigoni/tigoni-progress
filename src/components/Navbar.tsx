import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { TailcastLogo } from "../assets/logos/TailcastLogo";
import { GithubIcon } from "../assets/icons/GithubIcon";

const navbarLinks = [
  { label: "Home", href: "/", ariaLabel: "Home" },
  { label: "Exprerience", href: "/experience", ariaLabel: "Experience" },
  { label: "About me", href: "/about", ariaLabel: "About me" },
  { label: "Projects", href: "/projects", ariaLabel: "Projects" },
  { label: "Blog", href: "/blog", ariaLabel: "Blog" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="w-7xl mx-auto left-1/2 rounded-xl px-4 -translate-x-[50%] h-20 flex flex-col justify-center items-center fixed bg-background-1 top-4 lg:bg-background-3 z-40 lg:backdrop-blur-xl"
      aria-label="Main navigation"
    >
      <div className="w-full max-w-7xl px-4 lg:p-0 text-text-primary dark:text-text-primary flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a href="/" aria-label="Home">
            <div className="flex justify-start items-center grow basis-0">
              <div className="mr-2 text-6xl">
                <TailcastLogo />
              </div>
              <div className="font-['Nunito'] font-bold text-xl">Tailcast</div>
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden lg:flex items-center justify-center gap-x-8">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className="relative group lg:text-base text-2xl flex flex-col cursor-pointer font-normal lg:font-medium transition"
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-primary group-hover:w-full transition-all duration-150 rounded-full" />
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a
            className="main-border-gray rounded-xl
           bg-background-2 hover:bg-background-3  border-gray-700 justify-center items-end p-2 text-sm flex"
            href="https://github.com/matt765/Tidestream"
            target="_blank"
            aria-label="source code"
          >
            <GithubIcon />
          </a>
        </motion.div>
        <div
          className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-background-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 "></div>
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex text-text-primary dark:text-text-primary flex-col lg:hidden absolute top-20 left-0  bg-background-1 z-50 w-full 
        items-center gap-10 border-y border-solid border-background-3 py-10
        "
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="relative group text-xl flex flex-col cursor-pointer font-normal lg:font-medium"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-primary group-hover:w-full transition-all duration-150 rounded-full" />
                </a>
              ))}
              <a
                className="outlined-button pl-6 pr-8 pt-2 pb-2  flex"
                href="https://github.com/matt765/Tidestream"
                target="_blank"
              >
                <GithubIcon />
                Source code
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
