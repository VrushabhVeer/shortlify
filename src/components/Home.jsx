import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import amico from "../assets/amico.png";

const Home = () => {
  return (
    <>
      <Flex
        w={{base:"90%", md:"80%"}}
        m="auto"
        mt={{ base: "10", md: "20" }}
        gap={{ base: "10", md: "20" }}
        alignItems="center"
        flexDirection={{ base: "column-reverse", md: "row" }}
      >
        <Box w="100%">
          <Text fontSize={{ base: "30px", md: "38px" }} fontWeight="extrabold">
            Shorten URLs.
          </Text>
          <Text fontSize={{ base: "30px", md: "38px" }} fontWeight="extrabold">
            Generate QR Codes.
          </Text>

          <Text mt="8" fontSize="17px">
            Get Started
          </Text>
          <Flex
            w="100%"
            alignItems="center"
            gap="5"
            mt="2"
            flexDirection={{ base: "column", md: "row", lg: "row" }}
          >
            <Box w="100%">
              <Link to="/shortner">
                <Button
                  w="100%"
                  bg="#2a5bd7"
                  gap="2"
                  color="white"
                  _hover={{ bg: "#7aa3ff" }}
                  fontWeight="normal"
                  size="lg"
                  fontSize="16px"
                >
                  Url Shortner <i className="fa-solid fa-link"></i>{" "}
                </Button>
              </Link>
            </Box>

            <Box w="100%">
              <Link to="/qrcode">
                <Button
                  w="100%"
                  bg="#2a5bd7"
                  gap="2"
                  color="white"
                  _hover={{ bg: "#7aa3ff" }}
                  fontWeight="normal"
                  size="lg"
                  fontSize="16px"
                >
                  QR Code Generator<i className="fa-solid fa-qrcode"></i>
                </Button>
              </Link>
            </Box>
          </Flex>
        </Box>
        <Box w="100%">
          <Img src={amico} alt="amico" />
        </Box>
      </Flex>
    </>
  );
};

export default Home;
