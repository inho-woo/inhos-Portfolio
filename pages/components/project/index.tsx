import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import CardItem from "./cardItem";
import { ProjectInterface } from "./project";

const Project = ({ projects }: { projects: ProjectInterface.Project }) => {
  return (
    <Box className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
      <Heading className="text-4xl font-bold sm:text-4xl">
        <Box as="span" className="pl-4 text-blue-500"></Box>
      </Heading>
      <SimpleGrid className="grid grid-cols-3 gap-10 p-1 m-0 ">
        {projects?.results?.map((projects) => (
          <CardItem key={projects?.id} data={projects} />
        ))}
      </SimpleGrid>
    </Box>
  );
};


export default Project;
