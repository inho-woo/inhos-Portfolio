import { CheckIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Card,
  Flex,
  HStack,
  Heading,
} from "@chakra-ui/react";

const About = () => {
  return (
       <Box className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <Avatar
        size="xs"
        src="https://github.com/inho-woo/inhos-Portfilo/assets/58337935/c4307970-c23b-4228-ad8f-4503f1fba0ae"
        />
        <HStack>
          <CheckIcon>inho.hwang</CheckIcon>
        </HStack>
       </Box>
  );
};

export default About;
