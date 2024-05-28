import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    image: "smartphone.jpg",
    price: "$699",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for work and play",
    image: "laptop.jpg",
    price: "$999",
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    image: "headphones.jpg",
    price: "$199",
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/products">Products</Link>
          <Link as={RouterLink} to="/about">About Us</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
        </HStack>
      </Flex>

      <VStack spacing={8} mt={8} alignItems="center">
        <Heading>Welcome to ElectroShop</Heading>
        <Text fontSize="xl">Your one-stop shop for the latest electronics</Text>
      </VStack>

      <Box mt={8} mb={4}>
        <Input
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

      <Box mt={4} mb={8}>
        <HStack spacing={4}>
          <Button onClick={() => handleCategoryChange("")} colorScheme={selectedCategory === "" ? "blue" : "gray"}>All</Button>
          <Button onClick={() => handleCategoryChange("Smartphones")} colorScheme={selectedCategory === "Smartphones" ? "blue" : "gray"}>Smartphones</Button>
          <Button onClick={() => handleCategoryChange("Laptops")} colorScheme={selectedCategory === "Laptops" ? "blue" : "gray"}>Laptops</Button>
          <Button onClick={() => handleCategoryChange("Headphones")} colorScheme={selectedCategory === "Headphones" ? "blue" : "gray"}>Headphones</Button>
        </HStack>
      </Box>

      <Heading size="lg" mt={12} mb={6}>Featured Products</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {filteredProducts.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={6}>
              <Heading size="md">{product.name}</Heading>
              <Text mt={4}>{product.description}</Text>
              <Text mt={4} fontWeight="bold">{product.price}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;