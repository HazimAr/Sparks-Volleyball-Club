import {
  Heading,
  Image,
  SimpleGrid,
  Stack,
  // Text,
  VStack,
} from "@chakra-ui/react";
import { Client } from "@notionhq/client";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

export default function Register({ forms }: { forms: QueryDatabaseResponse }) {
  console.log(forms);
  return (
    <VStack>
      <Heading as="h1">Register</Heading>
      <SimpleGrid columns={3} gap={10}>
        {forms.results.length &&
          forms.results.map((member) => (
            <Form
              // @ts-ignore
              name={member.properties.Name.title[0].plain_text}
              // @ts-ignore
              title={member.properties.Title.rich_text[0].plain_text}
              // @ts-ignore
              bio={member.properties.Bio.rich_text[0].plain_text}
              // @ts-ignore
              img={member.properties.Image.files[0].file.url}
            />
          ))}
      </SimpleGrid>
    </VStack>
  );
}

export async function getServerSideProps() {
  const notion = new Client({
    auth: process.env.NOTION,
  });

  const forms = await notion.databases.query({
    database_id: "199a36871ce14867a02c7f43182b5051",
  });

  return {
    props: { forms },
  };
}

function Form({ name, title, img /* bio */ }) {
  return (
    <Stack
      w="200px"
      transition="all ease .3s"
      // _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
    >
      <Image src={img} borderRadius="3xl" />
      <Stack>
        <Heading size="md">{name}</Heading>
        <Heading size="sm">{title}</Heading>
        {/* <Text>{bio}</Text> */}
      </Stack>
    </Stack>
  );
}
