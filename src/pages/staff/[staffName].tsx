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

export async function getStaticProps(ctx: GetServerSidePropsContext) {
  const staffMember = (
    await notion.databases.query({
      database_id: "199a36871ce14867a02c7f43182b5051",
      filter: {
        property: "Name",
        rich_text: {
          equals: (ctx.params.staffName as string).split("_").join(" "),
        },
      },
    })
  ).results[0];

  return {
    props: { staffMember },
    revalidate: 300,
  };
}

export async function getStaticPaths() {
  const staff = await notion.databases.query({
    database_id: "199a36871ce14867a02c7f43182b5051",
  });
  return {
    paths: staff.results.map((staffMember) => ({
      params: {
        // @ts-ignore
        staffName: staffMember.properties.Name.title[0]?.plain_text
          .split(" ")
          .join("_"),
      },
    })),
    fallback: false, // false or 'blocking'
  };
}

const notion = new Client({
  auth: process.env.NOTION,
});