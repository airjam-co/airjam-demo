import {
  Stack,
  Container,
  Box,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <>
      <Container maxW={"3xl"} id="contact">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
        </Stack>
      </Container>
    </>
  );
}

