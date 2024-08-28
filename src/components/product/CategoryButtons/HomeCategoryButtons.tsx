'use client'
import React from "react";
import { Grid, GridItem, Button, Icon ,VStack } from "@chakra-ui/react";
import { FaMountain, FaLandmark, FaPaw, FaCity, FaWineGlass, FaUmbrellaBeach } from "react-icons/fa";
import Title from "@/components/Title/Title";

const HomeCategoryButtons = () => {
  return (
<>
  <Title title="Trending Packages" />

    <Grid
      templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)' }}
      gap={{ base: 3, md: 4, lg: 6 }}
      justifyContent="center"
      alignItems="center"
      p={{ base: 2, md: 4 }}
      className="max-w-7xl mx-auto"
    >
      {/* Adventure Tours Button */}
      <GridItem w="100%">
        <Button
          leftIcon={<Icon as={FaMountain} className="mr-2" />}
          colorScheme="teal"
          size={{ base: "sm", md: "md", lg: "lg" }}
          variant="solid"
          w="full"
          className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          _hover={{ bg: 'teal.600' }}
        >
          Adventure Tours
        </Button>
      </GridItem>

      {/* Cultural Tours Button */}
      <GridItem w="100%">
        <Button
          leftIcon={<Icon as={FaLandmark} className="mr-2" />}
          colorScheme="purple"
          size={{ base: "sm", md: "md", lg: "lg" }}
          variant="solid"
          w="full"
          className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          _hover={{ bg: 'purple.600' }}
        >
          Cultural Tours
        </Button>
      </GridItem>

      {/* Wildlife Tours Button */}
      <GridItem w="100%">
        <Button
          leftIcon={<Icon as={FaPaw} className="mr-2" />}
          colorScheme="green"
          size={{ base: "sm", md: "md", lg: "lg" }}
          variant="solid"
          w="full"
          className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          _hover={{ bg: 'green.600' }}
        >
          Wildlife Tours
        </Button>
      </GridItem>

      {/* City Tours Button */}
      <GridItem w="100%">
        <Button
          leftIcon={<Icon as={FaCity} className="mr-2" />}
          colorScheme="blue"
          size={{ base: "sm", md: "md", lg: "lg" }}
          variant="solid"
          w="full"
          className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          _hover={{ bg: 'blue.600' }}
        >
          City Tours
        </Button>
      </GridItem>

      {/* Food & Wine Tours Button */}
      <GridItem w="100%">
        <Button
          leftIcon={<Icon as={FaWineGlass} className="mr-2" />}
          colorScheme="red"
          size={{ base: "sm", md: "md", lg: "lg" }}
          variant="solid"
          w="full"
          className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          _hover={{ bg: 'red.600' }}
        >
          Food & Wine Tours
        </Button>
      </GridItem>

      {/* Beach Tours Button */}
      <GridItem w="100%">
        <Button
          leftIcon={<Icon as={FaUmbrellaBeach} className="mr-2" />}
          colorScheme="orange"
          size={{ base: "sm", md: "md", lg: "lg" }}
          variant="solid"
          w="full"
          className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          _hover={{ bg: 'orange.600' }}
        >
          Beach Tours
        </Button>
      </GridItem>
    </Grid>
    </>
  );
};

export default HomeCategoryButtons;