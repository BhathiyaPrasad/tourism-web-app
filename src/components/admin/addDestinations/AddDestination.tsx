'use client';

import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Select,
  Flex,
  Button,
  ChakraProvider,
  Badge,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  VStack,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { ChevronDownIcon, AddIcon, EditIcon } from '@chakra-ui/icons';
import Sidebar from '../sidebar/sidebar';

const DestinationManagement = () => {
  const [destinations, setDestinations] = useState([
    { id: 1, name: 'Pinnawala', category: "Animal", description: 'Essential features' },
    { id: 2, name: 'Kandy', category: "Ancient", description: 'Advanced features' },
  ]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEditing, setIsEditing] = useState(false);

  const handleAddPackage = (newPackage) => {
    setDestinations([...destinations, { ...newPackage, id: destinations.length + 1 }]);
  };

  const handleEditPackage = (updatedPackage) => {
    setDestinations(destinations.map(pkg => pkg.id === updatedPackage.id ? updatedPackage : pkg));
  };

  const openEditModal = (pkg) => {
    setSelectedDestination(pkg);
    setIsEditing(true);
    onOpen();
  };

  const openAddModal = () => {
    setSelectedDestination(null);
    setIsEditing(false);
    onOpen();
  };

  return (
    <ChakraProvider>
      <Flex>
        <Sidebar />
        <Box flex={1} p={8}>
          <Heading mb={6}>Manage Your Destinations</Heading>
          <Button leftIcon={<AddIcon />} colorScheme="blue" onClick={openAddModal} mb={4}>
            Add New Destination
          </Button>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>category</Th>
                <Th>Description</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {destinations.map((pkg) => (
                <Tr key={pkg.id}>
                  <Td>{pkg.name}</Td>
                  <Td>{pkg.category}</Td>
                  <Td>{pkg.description}</Td>
                  <Td>
                    <Button size="sm" leftIcon={<EditIcon />} onClick={() => openEditModal(pkg)}>
                      Edit
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <PackageFormModal
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={isEditing ? handleEditPackage : handleAddPackage}
            initialData={selectedDestination}
            isEditing={isEditing}
          />
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

const PackageFormModal = ({ isOpen, onClose, onSubmit, initialData, isEditing }) => {
  const [formData, setFormData] = useState(initialData || { name: '', price: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{isEditing ? 'Edit Package' : 'Add New Package'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <Input
              name="name"
              placeholder="Package Name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              name="price"
              placeholder="Price"
              type="number"
              value={formData.price}
              onChange={handleChange}
            />
            <Input
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
            />
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            {isEditing ? 'Update' : 'Add'}
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DestinationManagement;