import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Tooltip,
  useClipboard,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const UrlShortner = () => {
  const [url, setUrl] = useState("");
  const [short, setShort] = useState([]);
  const { hasCopied, onCopy } = useClipboard(
    `https://sfy.onrender.com/${short}`
  );

  const sendUrl = () => {
    axios
      .post("https://sfy.onrender.com/url/add", {
        originalURL: url,
      })
      .then((res) => {
        setShort(res.data.shortURL);
        console.log(res.data.shortURL);
      });
  };

  return (
    <>
      <Box w={{ base: "90%", md: "70%", lg: "50%" }} m="auto" mt="20">
        <Text
          fontSize={{ base: "30px", md: "38px" }}
          fontWeight="extrabold"
          textAlign="center"
        >
          URL Shortner
        </Text>
        <Flex
          w="100%"
          m="auto"
          mt="10"
          alignItems="center"
          gap="2"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box w="100%">
            <Input
              w="100%"
              size="lg"
              fontSize="16px"
              position="static"
              border="1px solid #444444"
              placeholder="enter your url"
              onChange={(e) => setUrl(e.target.value)}
            />
          </Box>
          <Box w={{ base: "100%", md: "20%" }}>
            <Button
              w="100%"
              bg="#2a5bd7"
              gap="2"
              color="white"
              _hover={{ bg: "#7aa3ff" }}
              fontWeight="normal"
              size="lg"
              fontSize="16px"
              position="static"
              onClick={sendUrl}
            >
              Generate
            </Button>
          </Box>
        </Flex>
      </Box>

      <Box
        boxSizing="border-box"
        w={{ base: "90%", md: "70%", lg: "50%" }}
        m="auto"
        textAlign="center"
        mt="40"
        pt="5"
        pl="10"
        pr="10"
        pb="5"
        border="1px solid #cecece"
        borderRadius="8"
      >
        <Text>Generated link will be apear here.</Text>

        <Flex alignItems="center" gap="8" justifyContent="center" mt="5">
          <Text fontWeight="bold" fontSize="17px" letterSpacing="0.5px">
            https://sfy.onrender.com/{short}
          </Text>

          <Button size={"sm"} onClick={onCopy}>
            <Tooltip
              label={hasCopied ? "Email Copied!" : "Copy Email"}
              closeOnClick={false}
              hasArrow
            >
              Copy Link
            </Tooltip>
          </Button>
          
        </Flex>
      </Box>
    </>
  );
};

export default UrlShortner;
