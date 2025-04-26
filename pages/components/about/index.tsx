import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import ImgData from "../../data/data.json";

const About = () => {
  return (
    <>
      <Box className="flex min-h-screen flex-col items-center justify-center">
        <Heading className="text-4xl text-center">About Me</Heading>
        <Heading className="ml-4 text-2xl mt-10">
          안녕하세요
        </Heading>
        <Box className="w-full sm:w-1/3 md:w-1/2 mt-5 md:mt-5 mb-10">
          {["늘 성장하는 개발자 황인호입니다.",
            "저는 이전회사에서 MES 솔루션과 모니터링 대시보드 솔루션을 개발하고 유지보수하는 업무를 ",
            "담당하였으며 React, Javascript , Typescript 를 이용해 다양한 프로젝트를 경험하였습니다.",
            "현재는 AI 음성인식 및 STT 엔진을 활용해 실시간 자막, 회의록 솔루션등 음성분야쪽으로 ",
            "활약하고 있는 회사에 재직중에 있습니다.",
            "주어진 업무에 최선을 다하는 열정적인 개발자로서 항상 새로운 기술동향을 체크하고 있으며 ",
            "다른팀과의 협업을 통해 팀원들과 소통하는 것을 중요시합니다.",
            "이러한 경험을 바탕으로 도전을 두려워하지 않는 태도로 최고의 성과를 이루어 나가고 싶습니다.",
          ].map((text, index) => (
            <Text
              key={index}
              className={`mt-${
                index === 0 ? 10 : 5
              } text-2xl text-center text-zinc-200`}
            >
            {text}
            </Text>
          ))}
          </Box>
      </Box>
    </>
  );
};

export default About;