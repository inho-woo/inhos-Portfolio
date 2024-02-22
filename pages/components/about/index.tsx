import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Layout from "../layout";
import ImgData from "../../data/data.json";
import SkillItem from "./skillItem";
import TopToggle from "../layout/topToggle";

const About = () => {
  return (
    <>
      <Box className="flex min-h-screen flex-col items-center justify-center">
        <Heading className="text-4xl text-center">About Me</Heading>
        <Heading className="ml-4 text-3xl mt-10">
          [신기술에 대한 두려움이 없습니다.]
        </Heading>
        <Box className="w-full md:w-1/2 mt-4 md:mt-0">
          {[
            "- Korean FE 를 통해 매일 신기술에 대한 동향 체크",
            "- 버전업에 따른 기능을 현재 사용하는 프로젝트에 적용할 수 있는지와",
            "  다른 기능과 충돌이 일어나지 않게하기 위한 파악",
            "",
          ].map((text, index) => (
            <Text
              key={index}
              className={`mt-${
                index === 0 ? 10 : 5
              } text-2xl text-center text-zinc-100`}
            >
            {text}
            </Text>
          ))}
          </Box>
          <Heading className="ml-4 text-3xl mt-10 text-center">
          [처음보는 사람도 쉽게 이해할 수 있는 코드 구현]
        </Heading>
        <Box className="w-full md:w-1/2 mt-4 md:mt-0">
          {[
             "- Typescript 를 사용해 보다 쉬운 코드 구현",
             "- 함수, 이벤트 등에 대한 명칭 정의 , 이벤트 구역 화면 구역등",
             "  구분짓고 중복기능을 최소화 하기 위한 노력",
             "",
          ].map((text, index) => (
            <Text
              key={index}
              className={`mt-${
                index === 0 ? 10 : 5
              } text-2xl text-center text-zinc-100`}
            >
            {text}
            </Text>
          ))}
          </Box>
      </Box>

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
// "[처음보는 사람도 쉽게 이해할 수 있는 코드 구현]",
// "- Typescript 를 사용해 보다 쉬운 코드 구현",
// "- 함수, 이벤트 등에 대한 명칭 정의 , 이벤트 구역 화면 구역등",
// "  구분짓고 중복기능을 최소화 하기 위한 노력",
// "- 사용하지 않아도 될 useMemo 기능에 대해 파악후 useCallback 으로",
// "  변경해 속도개선",