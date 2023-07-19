import { Grid, GridItem, Text } from "@chakra-ui/react";
import { contactInterface } from "./contact";
import Link from "next/link";

const ContactGrid = ({ data }: { data: contactInterface.data }) => {
  
  const validUrl = require("valid-url"); //URL 인지 판별

  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem>
          <Text className="font-bold text-lg">{data.key}</Text>
        </GridItem>
        <GridItem>
          {validUrl.is_uri(data.value) ? (
            <Link href={data.value} target="_blank" rel="noopener noreferrer">
              <Text className="-ml-40 font-bold text-lg">{data.value}</Text>
            </Link>
          ) : (
            <Text className="-ml-40 font-bold text-lg">{data.value}</Text>
          )}
        </GridItem>
      </Grid>
    </>
  );
};
export default ContactGrid;
