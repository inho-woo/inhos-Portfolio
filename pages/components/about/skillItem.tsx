/* eslint-disable jsx-a11y/alt-text */
import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";
import { aboutInterface } from "./about";

const skillItem = ({data} : { data: aboutInterface.data }) => {

  // Next.js svg 이미지 이슈로 id 값 includes 하여 이미지 크기 줄이려고 했으나, 크롬 배율 문제
  //const nextImage = data.id.includes('Next.js');

  // const imageStyle = {
  //   width: nextImage ? '100%' : '100%',
  //   height: nextImage ? '100%' : '100%',
  // };

  return (
    <>
    <Box className="project-card">
    <Card>
    <CardBody className="flex items-center w-1/4">
    <Image src={data?.src} className="w-auto h-auto rounded-xl"/>
        <Text className="ml-32 text-3xl">{data?.id}</Text>
    </CardBody>
  </Card>
    </Box>
    </>
  );
};

export default skillItem;
