import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box className="body-font">
        <Box className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <Text className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2023. Hwang In Ho. All rights reserved.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
