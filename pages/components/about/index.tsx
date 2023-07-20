import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Layout from "../layout";
import ImgData from "../../data/data.json";
import SkillItem from "./skillItem";
import TopToggle from "../layout/topToggle";

const About = () => {
  return (
    <>
        <Box className="flex min-h-screen flex-col items-center justify-center">
          <Box className="container mx-auto flex px-6  md:flex-row flex-col items-center">
            <Box className="flex justify-between items-center w-full">
              <Heading className="py-0 text-6xl">About Me</Heading>
              <Heading className="ml-4 text-right text-6xl">
              &apos;배움은 끝이 없다.&apos;
              </Heading>
            </Box>
            <Box className="w-full md:w-1/2 mt-4 md:mt-0  text-center">
              <Text className="mt-10 text-2xl">
                라는 motto 를 가지고 현재 사용하고 있는 기술들에 대해서도 공부를
                하고 있습니다. 신기술이라는 거부감없이, 항상 배우는 개발자가
                되겠습니다.
              </Text>
            </Box>
          </Box>
        </Box>
        <Heading className="text-4xl text-center">My Skill</Heading>
        <SimpleGrid className="justify-center grid grid-cols-2 gap-10 p-10 m-10 ">
          {ImgData["skill"].map((ImgData) => (
            <Box key={ImgData.id}>
              <SkillItem  data={ImgData} />
            </Box>
          ))}
        </SimpleGrid>
    </>
  );
};

export default About;
