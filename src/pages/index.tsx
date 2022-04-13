import { Hero, About, Register, FAQ } from "@components/home";
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
      <Register />
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
    database_id: "a06ae4178b694c9997a3bab036559543",
  });
  questions.results = questions.results.sort((a, b) =>
    // @ts-ignore
    a.properties.Order.number < b.properties.Order.number ? -1 : 1
  );

  return {
    props: { questions },
  };
}
