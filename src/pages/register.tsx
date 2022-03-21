import {
  Button,
  Heading,
  Image,
  Link,
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
          forms.results.map((form) => (
            <Form
              key={form.id}
              // @ts-ignore
              name={form.properties.Name.title[0].plain_text}
              // @ts-ignore
              form={form.properties.Form.url}
              // @ts-ignore
              description={form.properties.Description.rich_text[0].plain_text}
              // @ts-ignore
              img={form.properties.Image.files[0].file.url}
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
    database_id: "309e8f22df49471ea80d8b9af61fdc75",
  });

  return {
    props: { forms },
  };
}

function Form({ name, form, img, description }) {
  console.log(description);
  return (
    <Link href={form} isExternal>
      <VStack
        w="200px"
        transition="all ease .3s"
        _hover={{ transform: "scale(1.05)" }}
      >
        <Image src={img} borderRadius="3xl" />
        <VStack>
          <Heading size="md">{name}</Heading>
          <Button>Register</Button>
        </VStack>
      </VStack>
    </Link>
  );
}
