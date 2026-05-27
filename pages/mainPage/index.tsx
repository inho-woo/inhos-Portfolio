import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Animation = dynamic(() => import("./animation"), { ssr: false });

const MotionBox = motion(Box);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const MainPage = () => {
  return (
    <>
      <MotionBox
        className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <MotionBox variants={itemVariants}>
          <Text className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-indigo-300/80 sm:text-base">
            Frontend Developer
          </Text>
        </MotionBox>
        <MotionBox variants={itemVariants}>
          <Heading className="hero-gradient-text w-full text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
            inho&apos;s Portfolio
          </Heading>
        </MotionBox>
        {/* <MotionBox variants={itemVariants}>
          <Text className="mt-5 max-w-md text-base leading-7 text-slate-300 sm:text-lg">
            inho&apos;s portfolio
          </Text>
        </MotionBox> */}
      </MotionBox>
      <MotionBox
        className="w-full max-w-md md:w-1/2 lg:max-w-lg"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <Animation />
      </MotionBox>
    </>
  );
};

export default MainPage;
