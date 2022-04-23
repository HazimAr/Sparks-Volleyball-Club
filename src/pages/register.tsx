import {
  Button,
  Heading,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { Client } from "@notionhq/client";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { useState } from "react";

export default function Register({ forms }: { forms: QueryDatabaseResponse }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, setImage] = useState("");
  return (
    <>
      <Container>
        <ContainerInside>
          <VStack>
            <Heading as="h1" mb={20}>
              Register
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={10}>
              {forms.results.length &&
                forms.results.map(
                  (form) =>
                    // @ts-ignore
                    form.properties.Name?.title?.[0]?.plain_text &&
                    // @ts-ignore
                    form.properties.Form?.url &&
                    // @ts-ignore
                    form.properties.Description?.rich_text[0]?.plain_text &&
                    // @ts-ignore
                    form.properties.Image.files[0]?.file?.url && (
                      <Form
                        key={form.id}
                        // @ts-ignore
                        name={form.properties.Name.title[0].plain_text}
                        // @ts-ignore
                        form={form.properties.Form.url}
                        // @ts-ignore
                        img={form.properties.Image.files[0].file.url}
                        onClick={() => {
                          // @ts-ignore
                          setImage(form.properties.Image.files[0].file.url);
                          onOpen();
                        }}
                      />
                    )
                )}
            </SimpleGrid>
          </VStack>
        </ContainerInside>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent bg="transparent">
          <ModalBody>
            <VStack>
              <Image src={image} rounded="3xl" h="80vh" />
              <Button mr={3} onClick={onClose}>
                Close
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export async function getStaticProps() {
  const notion = new Client({
    auth: process.env.NOTION,
  });

  let forms = await notion.databases.query({
    database_id: "309e8f22df49471ea80d8b9af61fdc75",
  });

  forms.results = forms.results.sort((a, b) =>
    // @ts-ignore
    a.properties.Order.number < b.properties.Order.number ? -1 : 1
  );

  return {
    props: { forms },
    revalidate: 300,
  };
}

function Form({ name, form, img, ...props }) {
  return (
    <VStack
      maxW="350px"
      transition="transform ease .2s"
      _hover={{
        transform: "scale(1.1)",
        cursor: "pointer",
      }}
      {...props}
    >
      <Image src={img} borderRadius="3xl" alt={`${name} banner`} />
      <VStack textAlign="center">
        <Link href={form} isExternal>
          <Button>Register</Button>
        </Link>
      </VStack>
    </VStack>
  );
}
