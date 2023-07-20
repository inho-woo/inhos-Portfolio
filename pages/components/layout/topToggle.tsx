import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const TopButton = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleShowButton = () => {
      window.scrollY > 200 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);
  return (
    visible && (
      <Box className="scroll">
        <Button className="scroll-button" onClick={scrollToTop}>
         <ArrowUpIcon w={30} h={20}/>
        </Button>
      </Box>
    )
  );
};

export default TopButton;
