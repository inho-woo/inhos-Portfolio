import { Avatar, Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import data from "../../data/data.json";
import ContactGrid from "./grid";

const MotionBox = motion(Box);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Contact = () => {
  return (
    <Box className="section-container flex min-h-screen flex-col justify-center">
      <MotionBox
        className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 md:flex-row md:justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <MotionBox variants={itemVariants} className="contact-avatar-glow rounded-full">
          <Avatar
            src="https://github.com/inho-woo/inhos-Portfilo/assets/58337935/c4307970-c23b-4228-ad8f-4503f1fba0ae"
            className="h-40 w-40 md:h-56 md:w-56"
          />
        </MotionBox>
        <MotionBox variants={itemVariants} className="w-full max-w-md space-y-3">
          {data["contact"]?.map((item) => (
            <ContactGrid key={item?.key} data={item} />
          ))}
        </MotionBox>
      </MotionBox>
    </Box>
  );
};

export default Contact;
