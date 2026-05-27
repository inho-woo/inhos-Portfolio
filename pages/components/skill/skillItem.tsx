import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, useRef } from "react";
import { skillInterface } from "./skill";

const MotionBox = motion(Box);

const SkillItem = ({ data }: { data: skillInterface.data }) => {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), {
    stiffness: 220,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 220,
    damping: 18,
  });
  const glowX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <MotionBox
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="skill-card-3d relative"
    >
      <MotionBox
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 hover:opacity-100"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([x, y]) =>
              `radial-gradient(circle at ${x} ${y}, rgba(99,102,241,0.35), transparent 60%)`
          ),
        }}
      />
      <Card
        className="h-full bg-transparent shadow-none"
        style={{ transform: "translateZ(20px)" }}
      >
        <CardBody className="flex h-full flex-col items-center justify-between gap-4 p-4">
          <Box className="flex aspect-square w-full max-w-[120px] items-center justify-center overflow-hidden rounded-lg bg-white shadow-lg shadow-indigo-500/10">
            <Image
              src={data?.src}
              alt={`${data?.id} logo`}
              className="h-full w-full object-contain"
            />
          </Box>
          <Text className="break-words text-center text-sm font-semibold text-slate-300 sm:text-base md:text-lg">
            {data?.id}
          </Text>
        </CardBody>
      </Card>
    </MotionBox>
  );
};

export default SkillItem;
