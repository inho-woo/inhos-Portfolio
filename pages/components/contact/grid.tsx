import { Box, Text } from "@chakra-ui/react";
import { contactInterface } from "./contact";
import Link from "next/link";

const ContactGrid = ({ data }: { data: contactInterface.data }) => {
  const validUrl = require("valid-url");
  const isUrl = validUrl.is_uri(data?.value);

  return (
    <Box className="grid grid-cols-1 gap-1 border-b border-slate-600/70 pb-3 sm:grid-cols-[120px_1fr] sm:gap-4">
      <Text className="text-sm font-bold text-slate-400 sm:text-base">
        {data?.key}
      </Text>
      {isUrl ? (
        <Link href={data?.value} target="_blank" rel="noopener noreferrer">
          <Text className="break-all text-sm font-bold text-slate-300 hover:text-white sm:text-base">
            {data?.value}
          </Text>
        </Link>
      ) : (
        <Text className="break-all text-sm font-bold text-slate-300 sm:text-base">
          {data?.value}
        </Text>
      )}
    </Box>
  );
};
export default ContactGrid;
