import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
      <Box className="mx-auto flex w-full max-w-6xl flex-col items-center px-5 py-8 sm:px-8">
        <Text className="text-center text-sm text-slate-300">
          © 2023. Hwang In Ho. All rights reserved.
        </Text>
      </Box>
  );
};

export default Footer;
