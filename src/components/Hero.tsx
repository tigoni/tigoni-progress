import { motion } from "framer-motion";

import dashboard from "../assets/images/dashboard.jpg";

export const Hero = () => {
  return (
    <section className="w-screen flex justify-center items-center bg-background-1">
      <div className="w-full max-w-3xl lg:max-w-5xl flex flex-col justify-center items-center mt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-secondary font-[JetBrains_Mono] text-sm lg:text-base font-bold">
            Hello there, my name is
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide  text-text-primary">
            Louai Boumediene
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide  text-text-primary">
            I'm a Software Engineer
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-text-secondary text-sm lg:text-lg w-full lg:w-2/3 mx-auto">
            Experience seamless business integrations and powerful insights with
            our cutting-edge analytic tools.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <button
              className="contained-button w-40 lg:w-52 h-10 lg:h-12"
              onClick={() => console.info("Hello")}
              aria-label="Get started"
            >
              Get Started
            </button>
            <button
              className="rounded-xl w-40 lg:w-52 h-10 lg:h-12 text-text-primary border  bg-background-2 hover:bg-background-3 border-primary transition"
              onClick={() => console.info("Hello")}
              aria-label="Live demo"
            >
              Live demo
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative bg-yellow-100 w-screen flex justify-center ">
            <img
              src={dashboard.src}
              alt="Dashboard image"
              className="w-4/5 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl main-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0"
            />
          </div>
        </motion.div>

        <div className="relative w-screen flex justify-center ">
          <div className="shape-divider-bottom-1665343298 hidden lg:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="bg-background-2"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill bg-background-1  fill-background-1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
