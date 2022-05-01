import {
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
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
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={10}>
        {staffMembers.results.length &&
          staffMembers.results.map((member) => (
            <StaffCard
              key={member.id}
              // @ts-ignore
              name={member.properties.Name?.title?.[0]?.plain_text}
              // @ts-ignore
              title={member.properties.Title?.rich_text?.[0]?.plain_text}
              // @ts-ignore
              img={member.properties.Image?.files?.[0]?.file?.url}
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

  let staffMembers = await notion.databases.query({
    database_id: "3a400e5f2550422498cb82b3b6579641",
  });
  staffMembers.results = staffMembers.results.sort((a, b) =>
    // @ts-ignore
    a.properties.Order.number < b.properties.Order.number ? -1 : 1
  );

  return {
    props: { staffMembers },
  };
}

function StaffCard({ name, title, img }) {
  return (
    <NextChakraLink href={`/staff/${name.split(" ").join("_")}`}>
      <Stack
        w="200px"
        transition="all ease .2s"
        _hover={{ transform: "scale(1.05)" }}
      >
        <Image
          src={img ?? "/default.png"}
          borderRadius="3xl"
          alt={`${name}'s face`}
          objectFit="cover"
          h="200px"
        />
        <Stack>
          <Heading size="md">{name}</Heading>
          <Text fontSize="sm">{title}</Text>
        </Stack>
      </Stack>
    </NextChakraLink>
  );
}
