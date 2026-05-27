import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";

const navItems = ["Home", "About", "Skill", "Project", "Contact"];

const Header = () => {
  return (
    <Flex className="fixed left-0 top-0 z-20 w-full items-center justify-between gap-3 bg-slate-900/80 px-4 py-3 backdrop-blur sm:px-6">
      <Avatar
        className="h-9 w-9 shrink-0"
        src="https://github.com/inho-woo/inhos-Portfilo/assets/58337935/c4307970-c23b-4228-ad8f-4503f1fba0ae"
      />
      <Box className="flex min-w-0 flex-1 justify-end overflow-x-auto">
        <Box className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <Button key={item} size="sm" variant="ghost" className="shrink-0 px-2">
              <Link to={item} smooth={true} duration={800} offset={-72}>
                <Text className="text-sm font-semibold text-white sm:text-base">
                  {item}
                </Text>
              </Link>
            </Button>
          ))}
        </Box>
      </Box>
    </Flex>
  );
};

export default Header;
