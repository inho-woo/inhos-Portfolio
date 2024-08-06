import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import ImgData from "../../data/data.json";
import SkillItem from "./skillItem";

const About = () => {
  return (
    <>
      <Heading className="text-4xl text-center">My Skill</Heading>
      <SimpleGrid className="justify-center grid grid-cols-2 gap-10 p-10 m-10 ">
        {ImgData["skill"].map((ImgData) => (
          <Box key={ImgData.id}>
            <SkillItem data={ImgData} />
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default About;