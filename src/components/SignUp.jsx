import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Text mt="20" textAlign="center" fontSize="35px" fontWeight="bold">
        Sign up
      </Text>
      <Text textAlign="center">to enjoy all of our cool features ✌️</Text>
      <Box
        w={{ base: "90%", md: "60%", lg: "32%" }}
        m="auto"
        mt="8"
        p="8"
        boxShadow="rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px"
        borderRadius="10"
        _hover={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        }}
      >
        <Stack spacing={4}>
          <FormControl id="name">
            <FormLabel>Full name*</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address*</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password" isRequired pb="5">
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input type={showPassword ? "text" : "password"} />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  _hover={{ variant: "ghost" }}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button
            bg="#2a5bd7"
            color="white"
            _hover={{ bg: "#7aa3ff" }}
            fontWeight="normal"
            size="lg"
            fontSize="16px"
          >
            Sign up
          </Button>
        </Stack>

        <Text textAlign="center" mt="3">
          Already user go to{" "}
          <Link colorScheme="red" to="/login">
            login
          </Link>
        </Text>
      </Box>
    </>
  );
};

export default SignUp;
