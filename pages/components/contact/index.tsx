import { Avatar, Box, Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import Layout from "../layout";
import data from "../../data/data.json";
import ContactGrid from "./grid";

const Contact = () => {
  return (
    <>
        <Box className="flex min-h-screen flex-col items-center justify-center">
          <Box className="flex items-center">
            <Avatar
              src="https://github.com/inho-woo/inhos-Portfilo/assets/58337935/c4307970-c23b-4228-ad8f-4503f1fba0ae"
              className="w-30"
            />
            <Box className="ml-20">
              {data["contact"]?.map((data) => (
                <ContactGrid key={data?.key} data={data}/>
              ))}   
            </Box>
          </Box>
        </Box>
    </>
  );
};

export default Contact;
