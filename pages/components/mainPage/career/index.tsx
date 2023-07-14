import Layout from "../../layout";
import { Box, Heading, Card } from "@chakra-ui/react";
import { TOKEN, DATABASE_ID } from "../../../../config";
import React from "react";
import CardItem from "./careerItem"
import {CareerInterface} from "./career"

const career = ({ projects }: { projects: CareerInterface.Project }) => {
  
  return (
    <Layout>
      <Box className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
        <Heading className="text-4xl font-bold sm:text-6xl">
          총 프로젝트 : {projects.results.length}
          <Box as="span" className="pl-4 text-blue-500"></Box>
        </Heading>
        <Box className="grid grid-cols-3 gap-10 p-16 m-4 md:grid-cols-3">
        {projects.results.map((projects) => (
            <CardItem key={projects.id} data={projects}/>
        ))}
        </Box>
      </Box>
    </Layout>
  );
};

export async function getServerSideProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
            "property": "Date",
            "direction": "ascending"
        }
    ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();
  
  return {
    props: { projects }, // will be passed to the page component as props
    // getStaticProps() 메소드를 사용한다면 revalidate 로 데이터 변경시 갱신가능!
    // revalidate: 1 // 데이터 변경이 있으면 갱신 1초 마다
  };
}

export default career;
