import Layout from "../layout";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Layout>
      <Box p={4}>
        <Flex direction="column" align="center" maxW="xl" mx="auto">
          <Heading as="h1" size="2xl" my={4}>
            About Me
          </Heading>
          <Card maxW="sm">
          <Heading className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          <Box className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
         123
         </Box>
     
        </Heading>
          </Card>
        </Flex>
      </Box>
    </Layout>
  );
};

export default About;
