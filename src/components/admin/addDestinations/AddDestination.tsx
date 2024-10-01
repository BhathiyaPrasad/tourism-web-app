'use client';

import React, { useState, ChangeEvent, useEffect } from 'react';
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
import { collection, getDocs, query, where, addDoc, doc, updateDoc } from 'firebase/firestore';

// Define a type for the destination/package
interface Destination {
  id: string; // Assuming the ID from Firestore is a string
  name: string;
  category: string;
  description: string;
  price?: number; // Optional if price is not always used
}

interface PackageFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Destination) => Promise<void>; // Ensure onSubmit is a Promise
  initialData: Destination | null;
  isEditing: boolean;
}

const DestinationManagement = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const OrganizationID = 'gallery';
        const itemsRef = collection(db, OrganizationID);
        const itemsQuery = query(itemsRef, where("id", "!=", ""));
        const querySnapshot = await getDocs(itemsQuery);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as Destination) })); // Ensure to cast to Destination
        setDestinations(data);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddDestination = async (newDestination: Destination) => {
    const docRef = await addDoc(collection(db, 'gallery'), newDestination);
    setDestinations([...destinations, { ...newDestination, id: docRef.id }]); // Add the Firestore ID
  };

  const handleEditDestination = async (updatedDestination: Destination) => {
    const docRef = doc(db, 'gallery', updatedDestination.id);
    await updateDoc(docRef, updatedDestination);
    setDestinations(destinations.map(pkg => (pkg.id === updatedDestination.id ? updatedDestination : pkg)));
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
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Location</Th>
                <Th>Description</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {destinations.map(pkg => (
                <Tr key={pkg.id}>
                  <Td>{pkg.id}</Td> 
                  <Td>{pkg.place}</Td> {/* Use pkg.name instead of pkg.place */}
                  <Td>{pkg.location}</Td>
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
            onSubmit={isEditing ? handleEditDestination : handleAddDestination}
            initialData={selectedDestination}
            isEditing={isEditing}
          />
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

const PackageFormModal: React.FC<PackageFormModalProps> = ({ isOpen, onClose, onSubmit, initialData, isEditing }) => {
  const [formData, setFormData] = useState<Destination>(initialData || { id: '', name: '', category: '', description: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    await onSubmit(formData);
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
