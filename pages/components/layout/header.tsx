import { Flex, Box, Button, Avatar, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";

const Header = () => {

  return (
    <>
      <Flex>
        <Box className="flex flex-wrap p-5 flex-col md:flex-row items-center ">
          <Avatar
            className="w-10"
            src="https://github.com/inho-woo/inhos-Portfilo/assets/58337935/c4307970-c23b-4228-ad8f-4503f1fba0ae"
          />
        </Box>
        <Box className="flex flex-wrap right-0 py-2 fixed">
          <Box className=" md:ml-auto flex flex-wrap items-center text-base justify-center mr-6 ml-1 hover:text w-15">
            <Button>
              <Link to="Home" smooth={true} duration={800}>
                <Text className=" text-white">Home</Text>
              </Link>
            </Button>
          </Box>
          <Box className="md:ml-auto flex flex-wrap items-center text-base justify-center mr-6 ml-1 hover:text w-15">
            <Button>
              <Link to="About" smooth={true} duration={800}>
                <Text className=" text-white">About</Text>
              </Link>
            </Button>
          </Box>
          <Box className="md:ml-auto flex flex-wrap items-center text-base justify-center mr-6 ml-1 hover:text w-15">
            <Button>
              <Link to="Project" smooth={true} duration={800}>
                <Text className=" text-white">Project</Text>
              </Link>
            </Button>
          </Box>
          <Box className="md:ml-auto flex flex-wrap items-center text-base justify-center mr-6 ml-1 hover:text w-15">
            <Button>
              <Link to="Contact" smooth={true} duration={800}>
                <Text className=" text-white">Contact</Text>
              </Link>
            </Button>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Header;
