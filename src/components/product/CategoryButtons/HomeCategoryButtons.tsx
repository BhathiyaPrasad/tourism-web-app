'use client'
import React from "react";
import { Grid, GridItem, Button, Icon, useMediaQuery } from "@chakra-ui/react";
import { FaMountain, FaLandmark, FaPaw, FaCity, FaWineGlass, FaUmbrellaBeach } from "react-icons/fa";
import Title from "@/components/Title/Title";

const HomeCategoryButtons = () => {
  const [isDesktop] = useMediaQuery("(min-width: 48em)"); // 48em is roughly 768px

  return (
    <div data-theme='light'>
      <Title title="Trending Packages" />

      <Grid
        templateColumns={{
          base: '1fr', // mobile view: 1 column
          md: 'repeat(6, 1fr)', // desktop view: 5 columns
        }}
        gap={{ base: 3, md: 4, lg: 6 }}
        justifyContent="center"
        alignItems="center"
        p={{ base: 8, md: 8, lg: 8 }}
        m={{ base: 1, md: 1, lg: 1 }}
        className="max-w-7xl mx-auto"
      >
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
            Food Tours
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
      </Grid>
    </div>
  );
};

export default HomeCategoryButtons;