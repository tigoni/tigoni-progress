import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="w-screen h-screen flex px-4 justify-center items-center bg-background-1">
      <div className="w-full md:max-w-3xl gap-y-8 lg:max-w-5xl flex text-center flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="gap-y-4 my-[1vh] md:my-[2vh] flex justify-center items-center flex-col"
        >
          <div className="size-20 lg:size-24 rounded-full bg-white"></div>
          <h3 className="text-secondary font-[JetBrains_Mono] text-lg lg:text-2xl font-bold">
            Hi, I'm Louai 👋
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="gap-y-2 lg:gap-y-4 lg:my-[1vh] flex justify-center items-center flex-col"
        >
          <h1 className="text-3xl md:text-6xl w-full font-bold tracking-wide text-white">
            Building digital
          </h1>
          <h1 className="text-3xl md:text-6xl w-full font-bold tracking-wide text-white">
            products, brands, and
          </h1>
          <h1 className="text-3xl md:text-6xl w-full font-bold tracking-wide text-white">
            experience.
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-gray-400 text-sm lg:text-lg mx-auto lg:w-2/3">
            a Product Designer and Visual Developer in SF. I specialize in UI/UX
            Design, Responsive Web Design, and Visual Development.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col  gap-4 sm:flex-row justify-center">
            <button
              className="bg-primary text-text-primary font-bold py-2 px-4 w-64 rounded-md lg:w-52 h-10 lg:h-12 hover:bg-primary/80 cursor-pointer transition"
              onClick={() => console.info("Hello")}
              aria-label="Get started"
            >
              Browse Projects
            </button>
            <button
              className="bg-background-2 border border-primary/50 text-text-primary font-bold py-2 px-4 rounded-md w-64 lg:w-52 h-10 lg:h-12 cursor-pointer hover:border-primary/90 transition"
              onClick={() => console.info("Hello")}
              aria-label="Get started"
            >
              Get my Resume
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
