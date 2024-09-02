'use client';
import React from "react";
import { useMediaQuery, Grid, GridItem, Button, Icon, Box, chakra, Menu, MenuButton, MenuList, MenuItem, ButtonProps } from "@chakra-ui/react";
import { FaMountain, FaLandmark, FaPaw, FaCity, FaWineGlass, FaUmbrellaBeach } from "react-icons/fa";
import Title from "@/components/Title/Title";

const HomeCategoryButtons = () => {
  const [isDesktop] = useMediaQuery("(min-width: 48em)"); // 48em is roughly 768px

  return (
    <div data-theme='light'>
      <Title title="Trending Packages" />

      {isDesktop ? (
        <Grid
          templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)' }}
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
              Food & Wine Tours
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
      ) : (
        <Box
        p={{ base: 4, md: 6 }}
        borderRadius="md"
        boxShadow="lg"
        bg="white"
        _hover={{ boxShadow: "xl" }}
        transition="all 0.3s ease"
        maxW="sm"  // Limit the width for smaller devices
        mx="auto"  // Center align the box on mobile
      >
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<Icon as={FaMountain} />}
            w="full"  // Make the button take the full width
            size="lg"  // Larger button size for better touch experience
            colorScheme="teal"  // Consistent color scheme
            variant="outline"  // Outline style for a modern look
          >
            Select a Tour Category
          </MenuButton>
          <MenuList
            minW="100%"  // Make sure the list is full width
            boxShadow="md"  // Enhance the dropdown shadow for depth
            p={0}  // Remove extra padding for a clean look
          >
            <MenuItem icon={<Icon as={FaWineGlass} />} value="food-wine">
              Food & Wine Tours
            </MenuItem>
            <MenuItem icon={<Icon as={FaLandmark} />} value="cultural">
              Cultural Tours
            </MenuItem>
            <MenuItem icon={<Icon as={FaPaw} />} value="wildlife">
              Wildlife Tours
            </MenuItem>
            <MenuItem icon={<Icon as={FaCity} />} value="city">
              City Tours
            </MenuItem>
            <MenuItem icon={<Icon as={FaUmbrellaBeach} />} value="beach">
              Beach Tours
            </MenuItem>
            <MenuItem icon={<Icon as={FaMountain} />} value="adventure">
              Adventure Tours
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      )}
    </div>
  );
};

export default HomeCategoryButtons;
