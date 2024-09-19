'use client';
import React from 'react';
import { VStack, Heading, Button, Icon, useColorModeValue } from '@chakra-ui/react';
import { FiPackage, FiImage, FiList } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter(); // Use Next.js router for navigation

  return (
    <VStack align="stretch" width="200px" p={4} bg={useColorModeValue('gray.100', 'gray.700')} height="100vh">
      <Heading size="md" mb={6}>Admin Panel</Heading>
      <Button
        leftIcon={<Icon as={FiList} />}
        justifyContent="flex-start"
        variant="ghost"
        onClick={() => router.push('/admin/orders')}
      >
        Orders
      </Button>
      <Button
        leftIcon={<Icon as={FiPackage} />}
        justifyContent="flex-start"
        variant="ghost"
        onClick={() => router.push('/admin/packages')}
      >
        Packages
      </Button>
      <Button
        leftIcon={<Icon as={FiImage} />}
        justifyContent="flex-start"
        variant="ghost"
        onClick={() => router.push('/admin/photos')}
      >
        Photos
      </Button>
    </VStack>
  );
};

export default Sidebar;
