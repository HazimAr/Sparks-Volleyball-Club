import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { Client } from "@notionhq/client";
import { GetServerSidePropsContext } from "next";

export default function StaffMember({ staffMember }) {
  return (
    <Container>
      <ContainerInside>
        <VStack>
          <Image
            src={
              staffMember.properties.Image.files[0]?.file?.url ?? "/default.png"
            }
            alt={`${staffMember.properties.Name.title[0]?.plain_text}'s face`}
            h="300px"
            borderRadius="3xl"
          />
          <Heading as="h1" textAlign="center">
            {staffMember.properties.Name.title[0]?.plain_text}
          </Heading>
          <Heading size="md" textAlign="center">
            {staffMember.properties.Title.rich_text[0]?.plain_text}
          </Heading>
          <Text>
            {staffMember.properties.Bio.rich_text[0]?.plain_text ??
              "No Biography Provided"}
          </Text>
        </VStack>
      </ContainerInside>
    </Container>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const staffMember = (
    await notion.databases.query({
      database_id: "3a400e5f2550422498cb82b3b6579641",
      filter: {
        property: "Name",
        rich_text: {
          equals: (ctx.params.staffName as string).split("_").join(" "),
        },
      },
    })
  ).results[0] ?? {
    properties: {
      Name: {
        title: [{ plain_text: "No Name" }],
      },
      Title: {
        rich_text: [{ plain_text: "No Title" }],
      },
      Bio: {
        rich_text: [{ plain_text: "No Bio" }],
      },
      Image: {
        files: [{ file: { url: "/default.png" } }],
      },
    },
  };

  return {
    props: { staffMember },
  };
}

const notion = new Client({
  auth: process.env.NOTION,
});
