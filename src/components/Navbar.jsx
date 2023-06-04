import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Box
        bg="gray.100"
        position="sticky"
        top="0"
        px={{ base: "5", md: "12" }}
      >
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box>
            <Link to="/">
              <Text
                fontFamily="Pacifico, cursive"
                fontSize="25px"
                color="#ed1b41"
              >
                Shortlify
              </Text>
            </Link>
          </Box>

          <Flex alignItems="center" gap="5">
            <Link to="/signup">Sign up</Link>
            <Link to="/login">Login</Link>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
