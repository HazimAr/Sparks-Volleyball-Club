import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Heading,
  VStack,
  Text,
  chakra,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { motion, Variants } from "framer-motion";

const ChakraFramer = chakra(motion.div);

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    x: -50,

  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function ({ questions }: { questions: QueryDatabaseResponse }) {
  return (
    <Container id="faq">
      <ContainerInside>
        <VStack>
          <Heading as="h1" size="2xl" textAlign="center">
            FAQ
          </Heading>
          <Accordion allowToggle id="faq" w="100%">
            {questions.results.map((question) => (
              <ChakraFramer
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                key={question.id}
              >
                <AccordionItem>
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
              </ChakraFramer>
            ))}
          </Accordion>
        </VStack>
      </ContainerInside>
    </Container>
  );
}
