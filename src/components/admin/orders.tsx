'use client';
import React, { useState } from 'react';
import {
  Box, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, Select, Flex, Button,
  ChakraProvider, Badge, useColorModeValue, Menu, MenuButton, MenuList, MenuItem
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Sidebar from '../../components/admin/sidebar/sidebar';

// Define order types
interface Order {
  id: number;
  customer: string;
  total: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered';
}

const mockOrders: Order[] = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  customer: `Customer ${i + 1}`,
  total: Math.floor(Math.random() * 1000) + 50,
  status: ['Pending', 'Processing', 'Shipped', 'Delivered'][Math.floor(Math.random() * 4)] as Order['status'],
}));

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
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [ordersPerPage] = useState<number>(10);
  const [sortField, setSortField] = useState<keyof Order>('id');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

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

  const handleStatusChange = (orderId: number, newStatus: Order['status']) => {
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

  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <ChakraProvider>
      <Flex>
        <Sidebar />
        <Box flex={1} p={8}>
          <Heading as="h1" size="xl" mb={6} color="blue.600">Tour Bookings</Heading>
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
                </Tr>
              </Thead>
              <Tbody>
                {currentOrders.map((order) => (
                  <Tr key={order.id}>
                    <Td fontWeight="medium">#{order.id}</Td>
                    <Td>{order.customer}</Td>
                    <Td>${order.total.toFixed(2)}</Td>
                    <Td><StatusBadge status={order.status} /></Td>
                    <Td>
                      <Select
                        size="sm"
                        value={order.status}
                        onChange={(e) => handleStatusChange(order.id, e.target.value as Order['status'])}
                        width="150px"
                      >
                        {['Pending', 'Processing', 'Shipped', 'Delivered'].map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </Select>
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
    </ChakraProvider>
  );
};

export default Orders;
