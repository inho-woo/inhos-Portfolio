import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const aboutTexts = [
  "이전 회사에서는 MES 솔루션과 모니터링 대시보드 솔루션의 개발 및 유지보수를 담당하며, React와 TypeScript를 활용한 다양한 프로젝트를 경험했습니다.",
  "이후에는 AI 음성인식·STT 엔진 기반의 실시간 자막 및 회의록 솔루션을 개발하는 회사에서 솔루션 고도화와 유지보수 업무를 수행했습니다.",
  "현재는 디지털 치료제 솔루션 회사에서 모니터링 대시보드와 백오피스 개발을 맡고 있습니다.",
  "맡은 업무에 끝까지 책임지는 개발자로서, 다른 팀과의 협업과 원활한 소통을 무엇보다 중요하게 생각합니다.",
  "이러한 경험을 바탕으로, 도전을 두려워하지 않는 태도로 한 걸음씩 더 나은 결과를 만들어 나가고 싶습니다.",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const About = () => {
  return (
    <Box className="section-container flex min-h-screen flex-col justify-center">
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Heading className="section-title">About Me</Heading>
      </MotionBox>
      <MotionBox
        className="mx-auto mt-10 w-full max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Box className="mt-8 space-y-5">
          {aboutTexts.map((text) => (
            <MotionBox key={text} variants={itemVariants}>
              <Text className="text-left text-base leading-8 text-slate-300 sm:text-lg">
                {text}
              </Text>
            </MotionBox>
          ))}
        </Box>
      </MotionBox>
    </Box>
  );
};

export default About;
