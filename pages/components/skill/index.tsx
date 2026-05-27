import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import ImgData from "../../data/data.json";
import SkillItem from "./skillItem";

const SkillDecor = dynamic(() => import("./skillDecor"), { ssr: false });

const MotionBox = motion(Box);

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Skill = () => {
  return (
    <Box className="section-container relative">
      <Box className="relative">
        <SkillDecor />
        <Heading className="section-title relative">My Skill</Heading>
      </Box>
      <MotionBox
        as={SimpleGrid}
        className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {ImgData["skill"].map((skill) => (
          <MotionBox key={skill.id} variants={itemVariants}>
            <SkillItem data={skill} />
          </MotionBox>
        ))}
      </MotionBox>
    </Box>
  );
};

export default Skill;
