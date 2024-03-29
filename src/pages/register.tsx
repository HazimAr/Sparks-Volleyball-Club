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
  useBreakpointValue,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { Client } from "@notionhq/client";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { useState } from "react";

export default function Register({ forms }: { forms: QueryDatabaseResponse }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, setImage] = useState({ url: "/default.png", alt: "default" });
  const mobile = useBreakpointValue({ base: true, md: false });
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
                    form.properties.Image.files[0]?.file?.url && (
                      <Form
                        key={form.id}
                        // @ts-ignore
                        name={form.properties.Name.title[0].plain_text}
                        buttonText={
                          // @ts-ignore
                          form.properties.Button?.rich_text?.[0]?.plain_text
                        }
                        // @ts-ignore
                        form={form.properties.Form.url}
                        // @ts-ignore
                        img={form.properties.Image.files[0].file.url}
                        onClick={() => {
                          setImage({
                            // @ts-ignore
                            url: form.properties.Image.files[0].file.url,
                            // @ts-ignore
                            alt: form.properties.Name.title[0].plain_text,
                          });
                          if (!mobile) onOpen();
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
        <ModalContent bg="transparent" shadow="none">
          <ModalBody>
            <VStack>
              <Image
                src={image.url}
                rounded="3xl"
                h="80vh"
                alt={image.alt + " banner"}
              />
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

export async function getServerSideProps() {
  const notion = new Client({
    auth: process.env.NOTION,
  });

  let forms = await notion.databases.query({
    database_id: "082e5df759df4be7aa9187ff7395e0f0",
  });

  forms.results = forms.results.sort((a, b) =>
    // @ts-ignore
    a.properties.Order.number < b.properties.Order.number ? -1 : 1
  );

  return {
    props: { forms },
  };
}

function Form({ name, form, img, buttonText = "Register", ...props }) {
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
          <Button as={form ? Link : Button} isExternal={form ? true : undefined}>
            {buttonText}
          </Button>
        </Link>
      </VStack>
    </VStack>
  );
}
