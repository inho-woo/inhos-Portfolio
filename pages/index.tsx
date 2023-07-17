import Head from "next/head";
import Layout from "./components/layout";
import MainPage from "./mainPage";
import { Box } from "@chakra-ui/react";
import {
  Animator,
  Fade,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  batch,
} from "react-scroll-motion";
import About from "./components/about";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const Home = () => {
  return (
    <>
      <Header />
      <ScrollContainer snap="mandatory">
        <ScrollPage>
          <Animator
            animation={batch(Fade(0, 1), Sticky(50, 50), MoveOut(0, -700))}>
            <Box className="flex min-h-screen flex-col items-center justify-center  body-font">
              <Box className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <MainPage />
              </Box>
            </Box>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator
            animation={batch(Fade(0, 2), Sticky(50, 50), MoveOut(700, -500))}>
            <About />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
      <Footer />
    </>
  );
};

export default Home;
