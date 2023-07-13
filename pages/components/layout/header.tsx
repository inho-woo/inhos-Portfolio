import { Flex, Box } from "@chakra-ui/react";
import  Link  from "next/link";

const Header = () => {
  return (
    <>
      <Flex className="body-font">
        <Box className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Box className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ... text-3xl">
            <Link  href="/" >
              inho
            </Link>
          </Box>
        </Box>
        <Box className="md:ml-auto flex flex-wrap items-center text-base justify-center mr-6 ml-1 hover:text w-20">
          <Link href="/">
            Home
          </Link>
        </Box>
        <Box className="md:ml-auto flex flex-wrap items-center text-base justify-center mr-6 ml-1 hover:text w-20">
          <Link  href="/about" >
            About
          </Link>
        </Box>
        <Box className="md:ml-auto flex flex-wrap items-center text-base justify-center mr-6 ml-1 hover:text w-20">
          <Link  href="/components/mainPage/career" >
            Project
          </Link>
        </Box>
        <Box className="md:ml-auto flex flex-wrap items-center text-base justify-center mr-6 ml-1 hover:text w-20">
          <Link href="/contact" >
            Contact
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default Header;
