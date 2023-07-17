import { Box, Card, CardBody, Heading, Img, Stack, Text } from "@chakra-ui/react";
import { ProjectInterface } from "./project";

const CardItem = ({ data }: { data: ProjectInterface.Project }) => {
  const title = data.properties.Project.title[0].plain_text; //Notion 프로젝트별 Title
  const tags = data.properties.Tags.multi_select; // Notion 프로젝트별 Tags
  const work = data.properties.Work.rich_text[0].plain_text; // Notion 프로젝트별 Work
  const date = data.properties.Date.rich_text[0].plain_text; // Notion 프로젝트별 Date
  const imgSrc = data.cover.file?.url || data.cover.external.url; // Notion 프로젝트별 이미지


  //Project 별 Tag 데이터 보여주기
  const project_Tag = tags.map((tag: ProjectInterface.Tag) => (
    <Text
      className="px-2 py-1 mr-1 rounded-md  bg-sky-600  w-auto text-white"
      key={tag.id}
    >
      {tag.name}
    </Text>
  ));
  
  //work 별 번호순 띄어쓰기
  const workText = work.split("\n").map((item: string, index: number) => (
    <Box key={index} className="ml-2 mr-2">
      <Text>{`${item.trim()}`}</Text>
    </Box>
  ));

  return (
    <>
      <Box className="project-card">
        <Card className="max-w-lg">

          <CardBody>
            <Img
              src={imgSrc}
              alt="cover image"
              className=" rounded-md"
            />
         
            <Stack mt="2" spacing="10">
              <Heading className="text-base ml-2 mr-2">{title}</Heading>
              <Heading className="text-sm ml-2 mr-2">{date}</Heading>
              <Box>{workText}</Box>
                <Box className="flex items-start ml-3 mb-3">{project_Tag}</Box>
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default CardItem;
