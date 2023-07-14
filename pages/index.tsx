import Head from "next/head";
import Layout from "./components/layout";
import MainPage from "./components/mainPage";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Layout>  
      <Head>
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center  body-font">
        <Box className="container mx-auto flex px-5 pㅌㅈy-24 md:flex-row flex-col items-center">
          <MainPage />
        </Box>
      </div>
    </Layout>
  );
};

export default Home;
