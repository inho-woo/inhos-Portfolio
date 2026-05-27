import {chakra} from "@chakra-ui/react";
import Image from "next/image";

const OptImg = chakra(Image, {
    shouldForwardProp: (prop) =>
      [
        "src",
        "alt",
        "width",
        "height",
        "quality",
        "priority",
        "loading",
        "placeholder",
        "blurDataURL",
        "fill",
        "sizes",
        "className",
        "style",
      ].includes(prop),
  });

  export default OptImg;
