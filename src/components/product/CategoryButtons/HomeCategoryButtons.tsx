'use client'
import React from "react";
import { Grid, GridItem, Button, Icon } from "@chakra-ui/react";
import { FaMountain, FaLandmark, FaPaw, FaCity, FaWineGlass } from "react-icons/fa";

const HomeCategoryButtons = () => {
  return (

      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)' }}
        gap={6}
        justifyContent="center"
        alignItems="center"
        p={4}
        className="max-w-7xl mx-auto"
      >
        {/* Adventure Tours Button */}
        <GridItem w="100%">
          <Button
            leftIcon={<Icon as={FaMountain} className="mr-2" />}
            colorScheme="teal"
            size="lg"
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
            size="lg"
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
            size="lg"
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
            size="lg"
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
            size="lg"
            variant="solid"
            w="full"
            className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            _hover={{ bg: 'red.600' }}
          >
            Food & Wine Tours
          </Button>
        </GridItem>
      </Grid>
   
  );
};

export default HomeCategoryButtons;