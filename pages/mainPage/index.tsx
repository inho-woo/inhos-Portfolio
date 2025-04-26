import { Box, Heading, Text } from "@chakra-ui/react";
// import Animation from "./animation";
import dynamic from 'next/dynamic';
const Animation = dynamic(() => import('./animation'), { ssr: false });

const MainPage = () => {

  return (
    <>
      <Box className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <Heading className="w-full text-2xl md:w-5/6  md:text-3xl lg:text-6xl font-medium">
          안녕하세요.
        </Heading>
        <Text className="text-3xl lg:inline-block">
          늘 성장하는 개발자, 황인호 입니다.
        </Text>
      </Box>
      <Box className=" ml-10 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-6">
        <Animation />
      </Box>
    </>
  );
};

export default MainPage;
