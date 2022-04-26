import {
  Circle,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { FAQ } from "@components/home";
import { Client } from "@notionhq/client";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { FaEnvelope, FaMapPin, FaPhoneAlt } from "react-icons/fa";

export default function Contact({
  questions,
}: {
  questions: QueryDatabaseResponse;
}) {
  return (
    <Container>
      <ContainerInside>
        <Stack spacing={10}>
          {/* <Text>Add Interactive Map Here</Text> */}
          <Heading as="h1" size="2xl" textAlign="center">
            Contact Us
          </Heading>
          <Flex
            gap={10}
            justify="center"
            align="center"
            flexDir={{ base: "column", lg: "row" }}
          >
            <ContactInfo
              icon={<FaPhoneAlt />}
              href="tel:702-502-9462"
              title="Give us a call"
              info="(702) 502-9462"
            />
            <ContactInfo
              icon={<FaEnvelope />}
              href="mailto:sparksvolleyballclub@gmail.com?subject=Contacted From Website"
              title="Send us an email"
              info="SparksVolleyballClub@gmail.com"
            />
            <ContactInfo
              icon={<FaMapPin />}
              href="https://www.google.com/maps/dir/36.2180943,-115.249782/sparks+volleyball+club/@36.2178527,-115.2545354,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x80c8c1a7459214d1:0xbbbbae1da4ca6fcb!2m2!1d-115.1901779!2d36.2189483"
              title="Come see us"
              info="3778 W. Cheyenne Ave STE 120"
            />
          </Flex>
          <FAQ questions={questions} />
        </Stack>
      </ContainerInside>
    </Container>
  );
}

function ContactInfo({ icon, title, info, href }) {
  return (
    <HStack>
      <Circle fontSize={40} p={3} color="primary">
        {icon}
      </Circle>
      <Stack>
        <Text fontSize="md">{title}</Text>
        <Link href={href} isExternal>
          <Text fontSize="sm">{info}</Text>
        </Link>
      </Stack>
    </HStack>
  );
}

export async function getStaticProps() {
  const notion = new Client({
    auth: process.env.NOTION,
  });

  let questions = await notion.databases.query({
    database_id: "ca1735cb9077455097a2428193be0429",
  });
  questions.results = questions.results.sort((a, b) =>
    // @ts-ignore
    a.properties.Order.number < b.properties.Order.number ? -1 : 1
  );

  return {
    props: { questions },
    revalidate: 60,
  };
}
