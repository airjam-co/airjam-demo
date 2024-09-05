import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";
import { ViewType, Calendar } from '@airjam/react-calendar';

import '@airjam/react-calendar/dist/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header({ color }) {
  const profile = ProfileArray();
  return (
    <>
      <Heading>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Heading>

      <Container maxW={"3xl"} id="hero">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
          pt={{ base: 36, md: 52 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            {profile.headerName} <br />
            <Text as={"span"} color={`${color}.400`}>
              {profile.headerRole}
            </Text>
          </Heading>
          <Text
            color={"gray.500"}
            fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
          >
            {profile.headerDesc}
          </Text>
        </Stack>
        <div className="calendar-container">
            <Calendar id="6Cn7nJn1" viewAs={ViewType.CalendarBook} />
        </div>
      </Container>
    </>
  );
}
