import { Box } from "@chakra-ui/react";

export default function ContainerInside({ children, ...props }) {
  return (
    <Box maxW="1200px" w="100%" p={10} {...props}>
      {children}
    </Box>
  );
}
