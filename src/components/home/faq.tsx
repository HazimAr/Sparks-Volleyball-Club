import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Heading,
  VStack,
  Text,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

export default function ({ questions }: { questions: QueryDatabaseResponse }) {
  return (
    <Container>
      <ContainerInside>
        <VStack>
          <Heading as="h1" fontSize="7xl" textAlign="center">
            FAQ
          </Heading>
          <Accordion allowToggle id="faq" w="100%">
            {questions.results.map((question) => (
              <AccordionItem key={question.id}>
                <AccordionButton>
                  <Text
                    fontSize="md"
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                  >
                    {/* @ts-ignore */}
                    {question.properties.Name.title[0]?.plain_text}
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  {/* @ts-ignore */}
                  {question.properties.Answer.rich_text[0]?.plain_text}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </VStack>
      </ContainerInside>
    </Container>
  );
}
