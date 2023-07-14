import { Box, Card, CardBody, Heading, Img, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { CareerInterface } from "./career";

const CardItem = ({data} : {data : CareerInterface.Project}) => {
    
    const title = data.properties.Project.title[0].plain_text; //Notion 프로젝트별 Title
    const tags  = data.properties.Tags.multi_select; // Notion 프로젝트별 Tags
    const work = data.properties.Work.rich_text[0].plain_text; // Notion 프로젝트별 Work
    const date = data.properties.Date.rich_text[0].plain_text; // Notion 프로젝트별 Date
    const imgSrc = data.cover.file?.url || data.cover.external.url // Notion 프로젝트별 이미지


    //Project 별 Tag 데이터 보여주기
    const project_Tag  = tags.map((tag : CareerInterface.Tag) => (
        <Text className="px-2 py-1 mr-1 rounded-md  bg-sky-600  w-auto" key={tag.id}>{tag.name}</Text>
    ));
    
    return (
        <>
        <Box className="project-card">
        <Card className="max-w-md">
            <CardBody>
            {/* <Image 
                className="rounded-t-xl w-full h-2/4"
                src={imgSrc}
                alt="cover image"
                width={200}
                height={50}
                layout="responsive"
                objectFit="cover"
                quality={100}
            /> */}
            <Img src={imgSrc} alt="cover image" boxSize='400px'/>
            <Stack mt='15' spacing='10'>
            <Heading className="text-base ml-2 mr-2">{title}</Heading>
            <Heading className="text-sm ml-2 mr-2">{date}</Heading>
            <Text className="ml-2 mr-2">{work}</Text>
            <Box className="flex items-start mt-2 ml-3 mb-3">{project_Tag}</Box>
            </Stack>
            </CardBody>
        </Card>
        </Box>
        </>
    );
}

export default CardItem;
