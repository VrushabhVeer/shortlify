import {
  Box,
  Container,
  Stack,
  Text
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg="#37474f"
      color="gray.200"
      mt="40"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Box>
          <Text
            fontFamily="Pacifico, cursive"
            fontSize="25px"
            color="#ed1b41"
          >
            Shortlify
          </Text>
        </Box>
        <Text>© 2023 Shortlify, Made by Vrushabh Veer</Text>
        <Stack direction={"row"} spacing={6} fontSize="20" cursor="pointer">
          <i className="fa-brands fa-facebook" />
          <i className="fa-brands fa-twitter" />
          <i className="fa-brands fa-linkedin-in" />
          <i className="fa-brands fa-youtube" />
        </Stack>
      </Container>
    </Box>
  );
}
