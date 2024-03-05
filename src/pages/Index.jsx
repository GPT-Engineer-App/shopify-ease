import React from "react";
import { Box, Container, SimpleGrid, Heading, Text, Button, Image, Flex, Spacer, Stack, useColorModeValue, Icon } from "@chakra-ui/react";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "R20.00",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0fGVufDB8fHx8MTcwOTYyNTQyMnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Product 2",
    price: "R30.00",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwcm9kdWN0fGVufDB8fHx8MTcwOTYyNTQyMnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  // Add more products as needed
];

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex py={4} alignItems="center">
        <Heading size="md">My Ecommerce Store</Heading>
        <Spacer />
        <Button leftIcon={<Icon as={FaShoppingCart} />} colorScheme="teal" variant="solid">
          Cart
        </Button>
      </Flex>

      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={10} my={10}>
        {products.map((product) => (
          <Box key={product.id} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bg={useColorModeValue("white", "gray.800")}>
            <Image src={product.imageUrl} alt={product.name} />

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Text color={useColorModeValue("gray.500", "gray.400")} fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
                  {product.name}
                </Text>
              </Box>

              <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                {product.name}
              </Box>

              <Box>
                {product.price.replace("$", "R")}
                <Box as="span" color={useColorModeValue("gray.600", "gray.400")} fontSize="sm">
                  / each
                </Box>
              </Box>

              <Flex mt="2" alignItems="center">
                <Box as={FaStar} color="yellow.400" />
                <Text ml="2" fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
                  4.84 (190)
                </Text>
              </Flex>

              <Stack direction="row" spacing={4} align="center" mt={4}>
                <Button
                  flex={1}
                  fontSize="sm"
                  rounded="full"
                  bg="teal.400"
                  color="white"
                  boxShadow="0px 1px 25px -5px rgb(0 128 128 / 48%)"
                  _hover={{
                    bg: "teal.500",
                  }}
                  _focus={{
                    bg: "teal.500",
                  }}
                >
                  Add to Cart
                </Button>
              </Stack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: "4", md: "8" }}>
        <Text align="center">© 2023 My Ecommerce Store. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;
