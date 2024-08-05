import { Grid, GridItem, Text } from "@chakra-ui/react";
import { contactInterface } from "./contact";
import Link from "next/link";

const ContactGrid = ({ data }: { data: contactInterface.data }) => {
  
  const validUrl = require("valid-url"); //URL 인지 판별

  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem>
          <Text className="text-lg font-bold sm:flex-row sm:w-1/3">{data?.key}</Text>
        </GridItem>
        <GridItem>
          {validUrl.is_uri(data?.value) ? (
            <Link href={data?.value} target="_blank" rel="noopener noreferrer">
              <Text className="ml-30 font-bold">{data?.value}</Text>
            </Link>
          ) : (
            <Text className="text-lg ml-30 font-bold">{data?.value}</Text>
          )}
        </GridItem>
      </Grid>
    </>
  );
};
export default ContactGrid;

// sm: '480px',
// md: '768px',
// lg: '976px',
// xl: '1440px',