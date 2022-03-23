import {
  Heading,
  Image,
  SimpleGrid,
  Stack,
  VStack,
} from "@chakra-ui/react";
import NextChakraLink from "@components/nextChakraLink";
import { Client } from "@notionhq/client";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

export default function Staff({
  staffMembers,
}: {
  staffMembers: QueryDatabaseResponse;
}) {
  console.log(staffMembers);
  return (
    <VStack>
      <Heading as="h1">Staff</Heading>
      <SimpleGrid columns={3} gap={10}>
        {staffMembers.results.length &&
          staffMembers.results.map((member) => (
            <StaffCard
              key={member.id}
              // @ts-ignore
              name={member.properties.Name.title[0]?.plain_text}
              // @ts-ignore
              title={member.properties.Title.rich_text[0]?.plain_text}
              // @ts-ignore
              img={member.properties.Image.files[0]?.file?.url}
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

  const staffMembers = await notion.databases.query({
    database_id: "199a36871ce14867a02c7f43182b5051",
  });

  return {
    props: { staffMembers },
  };
}

function StaffCard({ name, title, img}) {
  return (
    <NextChakraLink href={`/staff/${name.split(" ").join("_")}`}>
      <Stack
        w="200px"
        transition="all ease .3s"
        _hover={{ transform: "scale(1.05)" }}
      >
        <Image
          src={img ?? "/default.png"}
          borderRadius="3xl"
          alt={`${name}'s face`}
        />
        <Stack>
          <Heading size="md">{name}</Heading>
          <Heading size="sm">{title}</Heading>
        </Stack>
      </Stack>
    </NextChakraLink>
  );
}
