import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";
import { aboutInterface } from "./about";

const skillItem = ({data} : { data: aboutInterface.data }) => {
  return (
    <>
    <Box className="project-card">
    <Card>
    <CardBody className="flex items-center w-1/4">
    <Image src={data?.src} borderRadius="full" />
        <Text className="ml-32 text-3xl">{data.id}</Text>
    </CardBody>
  </Card>
      </Box>
    </>
  );
};

export default skillItem;
