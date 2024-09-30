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

const PackageManagement = () => {
  const [packages, setPackages] = useState([
    { id: 1, name: 'Basic Package', price: 9.99, description: 'Essential features' },
    { id: 2, name: 'Pro Package', price: 19.99, description: 'Advanced features' },
  ]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEditing, setIsEditing] = useState(false);

  const handleAddPackage = (newPackage) => {
    setPackages([...packages, { ...newPackage, id: packages.length + 1 }]);
  };

  const handleEditPackage = (updatedPackage) => {
    setPackages(packages.map(pkg => pkg.id === updatedPackage.id ? updatedPackage : pkg));
  };

  const openEditModal = (pkg) => {
    setSelectedPackage(pkg);
    setIsEditing(true);
    onOpen();
  };

  const openAddModal = () => {
    setSelectedPackage(null);
    setIsEditing(false);
    onOpen();
  };

  return (
    <ChakraProvider>
      <Flex>
        <Sidebar />
        <Box flex={1} p={8}>
          <Heading mb={6}>Manage Your Packages</Heading>
          <Button leftIcon={<AddIcon />} colorScheme="blue" onClick={openAddModal} mb={4}>
            Add New Package
          </Button>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Price</Th>
                <Th>Description</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {packages.map((pkg) => (
                <Tr key={pkg.id}>
                  <Td>{pkg.name}</Td>
                  <Td>${pkg.price}</Td>
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
            initialData={selectedPackage}
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

export default PackageManagement;