import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CardItem from "./cardItem";
import { ProjectInterface } from "./project";

const MotionBox = motion(Box);

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Project = ({ projects }: { projects: ProjectInterface.ProjectsResponse }) => {
  const projectItems = Array.isArray(projects?.results) ? projects.results : [];

  if (projectItems.length === 0) return null;
  return (
    <Box className="section-container">
      <MotionBox
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Heading className="section-title">Project</Heading>
      </MotionBox>
      <MotionBox
        as={SimpleGrid}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projectItems.map((project) => (
          <MotionBox
            key={project.id}
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            <CardItem data={project} />
          </MotionBox>
        ))}
      </MotionBox>
    </Box>
  );
};


export default Project;
