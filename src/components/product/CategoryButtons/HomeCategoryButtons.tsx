'use client'
import React from "react";
import { Grid, GridItem, Button, Icon } from "@chakra-ui/react";
import { FaMountain, FaLandmark, FaPaw, FaCity, FaWineGlass } from "react-icons/fa"; // Import icons from react-icons

const HomeCategoryButtons = () => {
  return (
    <Grid
      templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }} // Adjust columns for different screen sizes
      gap={6}
      justifyContent="center"
      alignItems="center"
      p={4} // Add padding around the grid
    >
      {/* Adventure Tours Button */}
      <GridItem w="100%">
        <Button
          leftIcon={<Icon as={FaMountain} />} // Add icon
          colorScheme="teal"
          size="lg"
          variant="solid"
          w="full"
          _hover={{ bg: 'teal.600' }} // Hover effect
        >
          Adventure Tours
        </Button>
      </GridItem>

      {/* Cultural Tours Button */}
      <GridItem w="100%">
        <Button
          leftIcon={<Icon as={FaLandmark} />}
          colorScheme="purple"
          size="lg"
          variant="solid"
          w="full"
          _hover={{ bg: 'purple.600' }}
        >
          Cultural Tours
        </Button>
      </GridItem>

      {/* Wildlife Tours Button */}
      <GridItem w="100%">
        <Button
          leftIcon={<Icon as={FaPaw} />}
          colorScheme="green"
          size="lg"
          variant="solid"
          w="full"
          _hover={{ bg: 'green.600' }}
        >
          Wildlife Tours
        </Button>
      </GridItem>

      {/* City Tours Button */}
      <GridItem w="100%">
        <Button
          leftIcon={<Icon as={FaCity} />}
          colorScheme="blue"
          size="lg"
          variant="solid"
          w="full"
          _hover={{ bg: 'blue.600' }}
        >
          City Tours
        </Button>
      </GridItem>

      {/* Food & Wine Tours Button */}
      <GridItem w="100%">
        <Button
          leftIcon={<Icon as={FaWineGlass} />}
          colorScheme="red"
          size="lg"
          variant="solid"
          w="full"
          _hover={{ bg: 'red.600' }}
        >
          Food & Wine Tours
        </Button>
      </GridItem>
    </Grid>
  );
};

export default HomeCategoryButtons;
