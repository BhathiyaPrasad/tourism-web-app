'use client';

import React, { useState, ChangeEvent } from 'react';
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Button,
  ChakraProvider,
  Input,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { AddIcon, EditIcon } from '@chakra-ui/icons';
import Sidebar from '../sidebar/sidebar';
import { db } from "@/lib/firebase";
// Define a type for the destination/package
interface Destination {
  id: number;
  name: string;
  category: string;
  description: string;
  price?: number; // Optional if price is not always used
}

interface PackageFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Destination) => void;
  initialData: Destination | null;
  isEditing: boolean;
}

const DestinationManagement = () => {
  const [destinations, setDestinations] = useState<Destination[]>([
    { id: 1, name: 'Pinnawala', category: "Animal", description: 'Essential features' },
    { id: 2, name: 'Kandy', category: "Ancient", description: 'Advanced features' },
  ]);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEditing, setIsEditing] = useState(false);

  const handleAddPackage = (newPackage: Destination) => {
    setDestinations([...destinations, { ...newPackage, id: destinations.length + 1 }]);
  };

  const handleEditPackage = (updatedPackage: Destination) => {
    setDestinations(destinations.map(pkg => pkg.id === updatedPackage.id ? updatedPackage : pkg));
  };

  const openEditModal = (pkg: Destination) => {
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
                <Th>Category</Th>
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

const PackageFormModal: React.FC<PackageFormModalProps> = ({ isOpen, onClose, onSubmit, initialData, isEditing }) => {
  const [formData, setFormData] = useState<Destination>(initialData || { id: 0, name: '', category: '', description: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
              name="category"
              placeholder="Category"
              value={formData.category}
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
