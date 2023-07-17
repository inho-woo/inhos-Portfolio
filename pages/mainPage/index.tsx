import { Box, Button, Heading, Spacer, Text } from "@chakra-ui/react";
import Animation from "./animation";
import Link from "next/link";

const MainPage = () => {
  return (
    <>
      <Box className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <Heading className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            안녕하세요.
          <Text className="hidden lg:inline-block" >
          늘 성장하는 개발자, 황인호 입니다.
          </Text>
        </Heading>
        <Box className="flex justify-center">
          <Link href="/components/project" passHref>
            <Button variant="solid" color={"CaptionText"}>프로젝트 보러가기</Button>
          </Link>
        </Box>
      </Box>
      <Box className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </Box>
    </>
  );
};

export default MainPage;
