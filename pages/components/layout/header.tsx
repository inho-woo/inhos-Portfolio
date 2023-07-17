import { Flex, Box, Button, Avatar } from "@chakra-ui/react";
import  Link  from "next/link";
import { useRouter } from "next/router";



const Header = () => {

  const router = useRouter();

  const HomeRouter = () => {
    router.push('/');
  }

  const AboutRouter = () => {
    router.push('/components/about');
  }

  const ProjectRouter = () => {
    router.push('/components/project');
  }

  const ContactRouter = () => {
    router.push('/components/contact');
  }

  return (
    <>
      <Flex className="body-font">
        <Box className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Avatar className="w-10" src="https://github.com/inho-woo/inhos-Portfilo/assets/58337935/c4307970-c23b-4228-ad8f-4503f1fba0ae" onClick={HomeRouter}/>
        </Box>
        <Box className="md:ml-auto flex flex-wrap items-center text-base justify-center mr-6 ml-1 hover:text w-15">
        <Button onClick={HomeRouter}>Home</Button>
        </Box>
        <Box className="md:ml-auto flex flex-wrap items-center text-base justify-center mr-6 ml-1 hover:text w-15">
        <Button onClick={AboutRouter}>About</Button>
        </Box>
        <Box className="md:ml-auto flex flex-wrap items-center text-base justify-center mr-6 ml-1 hover:text w-15">
        <Button onClick={ProjectRouter}>Project</Button>
        </Box>
        <Box className="md:ml-auto flex flex-wrap items-center text-base justify-center mr-6 ml-1 hover:text w-15">
        <Button onClick={ContactRouter}>Contact</Button>
        </Box>
      </Flex>
    
    </>
  );
};

export default Header;
