'use client';

import React, { useState, useEffect } from 'react';
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  Box,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Flex,
  Tr,
  Th,
  Td,
  Button,
  ChakraProvider,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  VStack,
} from '@chakra-ui/react';
import { AddIcon, EditIcon } from '@chakra-ui/icons';
import Sidebar from '../sidebar/sidebar';

type Order = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  customer: string;
  status: 'Pending' | 'Processing';
};

const PackageManagement = () => {
  const [packages, setPackages] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedPackage, setSelectedPackage] = useState<Order | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const OrganizationID = 'packages';
        const itemsRef = collection(db, OrganizationID);
        const itemsQuery = query(itemsRef, where("id", "!=", ""));
        const querySnapshot = await getDocs(itemsQuery);
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Order));
        setPackages(data);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddPackage = (newPackage: Order) => {
    setPackages([...packages, { ...newPackage, id: `${packages.length + 1}` }]); // Assuming ID is a string
  };

  const handleEditPackage = (updatedPackage: Order) => {
    setPackages(packages.map(pkg => pkg.id === updatedPackage.id ? updatedPackage : pkg));
  };

  const openEditModal = (pkg: Order) => {
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
                  <Td>{pkg.category}</Td>
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

interface PackageFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Order) => void;
  initialData: Order | null;
  isEditing: boolean;
}

const PackageFormModal = ({ isOpen, onClose, onSubmit, initialData, isEditing }: PackageFormModalProps) => {
  const [formData, setFormData] = useState<Order>({
    id: initialData?.id || '',
    name: initialData?.name || '',
    category: initialData?.category || '',
    price: initialData?.price || 0,
    description: initialData?.description || '',
    customer: initialData?.customer || '',
    status: initialData?.status || 'Pending',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
