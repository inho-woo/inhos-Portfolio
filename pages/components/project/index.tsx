import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import CardItem from "./cardItem";
import { ProjectInterface } from "./project";

const Project = ({ projects }: { projects: ProjectInterface.Project }) => {
  return (
    <Box className="flex-col justify-center px-3 mb-10">
      <SimpleGrid className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-1 m-0">
        {projects?.results?.map((projects) => (
          <CardItem key={projects?.id} data={projects} />
        ))}
      </SimpleGrid>
    </Box>
  );
};


export default Project;
