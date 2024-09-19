'use client';
import React, { useState } from 'react';
import { VStack, Heading, Button, Icon, Box, useColorModeValue, Flex, Text } from '@chakra-ui/react';
import { FiPackage, FiMapPin, FiList, FiMenu, FiX } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { IoCloseSharp } from "react-icons/io5";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State to toggle sidebar visibility
  const router = useRouter();

  const sidebarBg = useColorModeValue('gray.100', 'gray.700');
  const buttonBg = useColorModeValue('blue.500', 'blue.300');
  const buttonColor = useColorModeValue('white', 'gray.900');

  // Responsive width for sidebar
  const sidebarWidth = isOpen ? '200px' : '60px';

  return (
    <Box position="relative" display="flex">
      {/* Sidebar with Slide-In Animation */}
      <Box
        as="nav"
        bg={sidebarBg}
        height="100vh"
        width={sidebarWidth}
        position="fixed"
        top="0"
        left="0"
        transition="width 0.4s ease"
        boxShadow="md"
        zIndex="999"
        pt={2}
        pr={1}
      >
        {/* Toggle button inside the sidebar */}
        <Flex justify="space-between" align="center" mb={6} p={2}>
         
          <Button
            aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
            onClick={() => setIsOpen(!isOpen)}
            // bg={buttonBg}
            // color={buttonColor}
            borderRadius="md"
            size="sm"
            // _hover={{ bg: useColorModeValue('blue.600', 'blue.400') }}
            transition="all 0.3s ease-in-out"
            p={2}
          > <Heading size="md" ml={isOpen ? 2 : 0}>
          {isOpen ? <> Dashboard  <Icon as={IoCloseSharp} ml={8} /> </> : <FiMenu />} {/* Show icon when closed */}
        </Heading>
            {/* <Icon as={isOpen ? FiX : FiMenu} /> */}
          </Button>
        </Flex>

        {/* Navigation Buttons */}
        <VStack spacing={4} align="stretch">
          <Button
            aria-label="Orders"
            leftIcon={<Icon as={FiList} />}
            justifyContent={isOpen ? 'flex-start' : 'center'}
            width="100%"
            variant="ghost"
            onClick={() => router.push('/admin/orders')}
            px={isOpen ? 4 : 2}
          >
            {isOpen && <Text>Orders</Text>}
          </Button>

          <Button
            aria-label="Packages"
            leftIcon={<Icon as={FiPackage} />}
            justifyContent={isOpen ? 'flex-start' : 'center'}
            width="100%"
            variant="ghost"
            onClick={() => router.push('/admin/addPackages')}
            px={isOpen ? 4 : 2}
          >
            {isOpen && <Text>Packages</Text>}
          </Button>

          <Button
            aria-label="Destinations"
            leftIcon={<Icon as={FiMapPin} />}
            justifyContent={isOpen ? 'flex-start' : 'center'}
            width="100%"
            variant="ghost"
            onClick={() => router.push('/admin/addDestinations')}
            px={isOpen ? 4 : 2}
          >
            {isOpen && <Text>Destinations</Text>}
          </Button>
        </VStack>
      </Box>

      {/* Main Content with Sidebar Toggle */}
      <Flex
        ml={sidebarWidth} // Adjust margin based on sidebar width
        transition="margin-left 0.4s ease"
        width="100%"
        pt={6}
        alignItems="center"
        justifyContent="flex-start"
      >
       
      </Flex>
    </Box>
  );
};

export default Sidebar;
