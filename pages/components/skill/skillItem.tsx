/* eslint-disable jsx-a11y/alt-text */
import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";
import { skillInterface } from "./skill";

const skillItem = ({data} : { data: skillInterface.data }) => {

  return (
    <>
    <Box className="project-card">
    <Card>
    <CardBody className="flex flex-col items-center w-full sm:flex-col md:flex-row sm:w-full md:w-1/3 lg:w-1/4">
    <Image src={data?.src} className="w-full h-auto rounded-xl"/>
        <Text className="mt-4 text-center sm:mt-4 md:mt-0 md:ml-8 text-lg sm:text-xl md:text-2xl lg:text-3xl whitespace-nowrap">{data?.id}</Text>
    </CardBody>
  </Card>
    </Box>
    </>
  );
};

export default skillItem;
