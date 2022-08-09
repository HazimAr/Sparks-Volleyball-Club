import { Hero, About, Programs, FAQ } from "@components/home";
import { Client } from "@notionhq/client";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

export default function Index({
  questions,
}: {
  questions: QueryDatabaseResponse;
}) {
  return (
    <>
      <Hero />
      <Programs />
      <About />
      <FAQ questions={questions} />
    </>
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
