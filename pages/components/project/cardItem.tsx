import { Box, Card, CardBody, CardFooter, Heading, Img, Stack, Text } from "@chakra-ui/react";
import { ProjectInterface } from "./project";

const CardItem = ({ data }: { data: ProjectInterface.Project }) => {
  const title = data?.properties?.Project.title[0].plain_text; //Notion 프로젝트별 Title
  const tags = data?.properties?.Tags.multi_select; // Notion 프로젝트별 Tags
  const work = data?.properties?.Work.rich_text[0].plain_text; // Notion 프로젝트별 Work
  const date = data?.properties?.Date.rich_text[0].plain_text; // Notion 프로젝트별 Date
  const imgSrc = data?.cover?.file.url || data?.cover?.external.url; // Notion 프로젝트별 Image

  //Project 별 Tag 데이터 보여주기
  const project_Tag = tags?.map((tag: ProjectInterface.Tag) => (
    <Text className="text-center px-2 py-1 mr-1 rounded-md  bg-sky-700 w-auto text-white" key={tag.id}>
      {tag.name}
    </Text>
  ));
  
  //workText - 을 기준으로 띄어쓰기
  const workText = work?.split("-")?.map((item: string, index: number) => (
    <Box key={index} className="ml-2 mr-2">
      <Text>{`${item.trim()}`}</Text>
    </Box>
  ));

  return (
    <>
      <Box className="project-card" mt="50">
        <Card className="w-auto">
          <CardBody>
            <Img
              src={imgSrc}
              alt="cover image"
              className="rounded-xl"
            />
            <Stack mt="5" spacing="10">
              <Heading className="text-base ml-2 mr-2">{title}</Heading>
              <Heading className="text-md ml-2 mr-2">{date}</Heading>
              <Box className="text-lg">{workText}</Box>
            </Stack>
          </CardBody>
            <Stack mt="10" spacing="10">
              <Box className="flex mt-auto mb-2 ml-2 mr-2">{project_Tag}</Box>
            </Stack>
        </Card>
      </Box>
    </>
  );
};

export default CardItem;
