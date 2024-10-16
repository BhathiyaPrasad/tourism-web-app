'use client';
import React, { useState, useEffect } from 'react';
import {
  Box, Heading, Text, Table, Thead, Grid, Tbody, Tr, Th, Td, Select, Flex, Button,
  ChakraProvider, Badge, useColorModeValue, Menu, MenuButton, MenuList, MenuItem,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import { ChevronDownIcon, ViewIcon } from '@chakra-ui/icons';
import Sidebar from '../../components/admin/sidebar/sidebar';
import { db } from "@/lib/firebase";
import { getDocs, collection, query, where, limit } from "firebase/firestore";
// Define order types



type Order = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  customer: string;
  status: 'Pending' | 'Processing';
  accommodation: string;
  country:string;
  tourType:string;
  email:string;
  additionalRequirements:string;
  total:number;
  
};

interface StatusBadgeProps {
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const colorScheme = {
    Pending: 'yellow',
    Processing: 'blue',
    Shipped: 'orange',
    Delivered: 'green',
  }[status];

  return (
    <Badge colorScheme={colorScheme} borderRadius="full" px={2}>
      {status}
    </Badge>
  );
};

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [ordersPerPage] = useState<number>(10);
  const [sortField, setSortField] = useState<keyof Order>('id');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const OrganizationID = 'orders'
        const itemsRef = collection(db, OrganizationID);
        const itemsQuery = query(
          itemsRef,
          where("id", "!=", "")
         
        );
        const querySnapshot = await getDocs(itemsQuery);
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Order));
        setOrders(data);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(orders);
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;

  const sortedOrders = [...orders].sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const currentOrders = sortedOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalOrders = orders.length;
  const totalPages = Math.ceil(totalOrders / ordersPerPage);

  const handleStatusChange = (orderId: string, newStatus: Order['status']) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSort = (field: keyof Order) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleViewDetails = (order: Order) => {
    setSelectedOrder(order);
    onOpen();
  };

  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <ChakraProvider>
      <Flex>
        <Sidebar />
        <Box flex={1} p={8}>
        <Heading mb={6}>Manage Your Bookings</Heading>
          <Box bg={bg} borderRadius="lg" boxShadow="md" p={6} borderWidth={1} borderColor={borderColor}>
            <Text fontSize="lg" fontWeight="medium" mb={4}>Total Orders: {totalOrders}</Text>
            <Table variant="simple">
              <Thead>
                <Tr>
                  {['ID', 'Customer', 'Total', 'Status'].map((header) => (
                    <Th key={header}>
                      <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} size="sm" variant="ghost">
                          {header}
                        </MenuButton>
                        <MenuList>
                          <MenuItem onClick={() => handleSort(header.toLowerCase() as keyof Order)}>
                            Sort {sortDirection === 'asc' ? 'Descending' : 'Ascending'}
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </Th>
                  ))}
                  <Th>Action</Th>
                  <Th>Details</Th>
                </Tr>
              </Thead>
              <Tbody>
                {currentOrders.map((order) => (
                  <Tr key={order.id}>
                    <Td fontWeight="medium">#{order.id}</Td>
                    <Td>{order.name}</Td>
                    <Td></Td>
                    <Td><StatusBadge status={order.status} /></Td>
                    <Td>
                      <Select
                        size="sm"
                        value={order.status}
                        onChange={(e) => handleStatusChange(order.id, e.target.value as Order['status'])}
                        width="150px"
                      >
                        {['Pending', 'Processing'].map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </Select>
                    </Td>
                    <Td>
                      <Button
                        leftIcon={<ViewIcon />}
                        size="sm"
                        onClick={() => handleViewDetails(order)}
                        colorScheme="teal"
                      >
                        View Details
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <Flex justify="center" mt={6}>
              <Button
                onClick={() => handlePageChange(currentPage - 1)}
                isDisabled={currentPage === 1}
                mr={2}
                size="sm"
                colorScheme="blue"
              >
                Previous
              </Button>
              <Flex align="center" mx={4}>
                <Text fontWeight="medium">
                  Page {currentPage} of {totalPages}
                </Text>
              </Flex>
              <Button
                onClick={() => handlePageChange(currentPage + 1)}
                isDisabled={currentPage === totalPages}
                ml={2}
                size="sm"
                colorScheme="blue"
              >
                Next
              </Button>
            </Flex>
          </Box>
        </Box>
      </Flex>

      {/* Order Details Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedOrder && (
              <Box 
              p={6} 
              border="1px solid" 
              borderColor="gray.200" 
              borderRadius="md" 
              shadow="md"
              backgroundColor="white"
            >
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                Order Details
              </Text>
        
              <Grid templateColumns="1fr 2fr" gap={4} mb={4}>
                <Text fontWeight="semibold">Order ID:</Text>
                <Text>#{selectedOrder.id}</Text>
        
                <Text fontWeight="semibold">Customer:</Text>
                <Text>{selectedOrder.name}</Text>
        
                <Text fontWeight="semibold">Country:</Text>
                <Text>{selectedOrder.country}</Text>
        
                <Text fontWeight="semibold">Email:</Text>
                <Text>{selectedOrder.email}</Text>
        
                <Text fontWeight="semibold">Package:</Text>
                <Text>{selectedOrder.tourType}</Text>
        
                <Text fontWeight="semibold">Additional Req:</Text>
                <Text>{selectedOrder.additionalRequirements || "N/A"}</Text>
        
                <Text fontWeight="semibold">Accommodation:</Text>
                <Text>{selectedOrder.accommodation}</Text>
        
                <Text fontWeight="semibold">Total:</Text>
                <Text>${selectedOrder.total || "TBD"}</Text>
        
                <Text fontWeight="semibold">Status:</Text>
                <Flex align="center">
                  <StatusBadge status={selectedOrder.status} />
                </Flex>
              </Grid>
            </Box>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default Orders;