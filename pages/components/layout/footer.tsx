import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box className="container px-10 py-5 mx-auto flex items-center sm:flex-row flex-col">
        <Text className="text-sm  sm:ml-6 sm:mt-0 mt-4">
          © 2023. Hwang In Ho. All rights reserved.
        </Text>
      </Box>
    </>
  );
};

export default Footer;
