import { DATABASE_ID, TOKEN } from "@/config";
import About from "./components/about";
import Skill from "./components/skill";
import Contact from "./components/contact";
import Layout from "./components/layout";
import TopButton from "./components/layout/topToggle";
import Project from "./components/project";
import MainPage from "./mainPage";
import { Box } from "@chakra-ui/react";
import { ProjectInterface } from "./components/project/project";
import { GetStaticProps } from 'next';


const Home = ({ projects }: { projects: ProjectInterface.ProjectsResponse }) => {
  return (
    <>
      <Layout>
        <Box id="Home" className="section-container flex min-h-screen items-center">
          <Box className="flex w-full flex-col items-center gap-10 md:flex-row md:justify-between">
            <MainPage />
          </Box>
        </Box>
        <Box id="About">
          <About />
        </Box>
        <Box id="Skill">
          <Skill />
        </Box>
        <Box id="Project">
          <Project projects={projects} />
        </Box>
        <Box id="Contact">
          <Contact />
        </Box>
        <TopButton />
      </Layout>
    </>
  );
};

//Notion 데이터 불러오기
export const getStaticProps : GetStaticProps = async () => {
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
          property: "Date",
          direction: "ascending",
        },
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
    props: { projects },
    revalidate: 10,
  };
};

export default Home;
