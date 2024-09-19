'use client';
import React, { useState } from 'react';
import {  Box, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, Select, Flex, Button, ChakraProvider, Badge, useColorModeValue, Menu, MenuButton, MenuList, MenuItem
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Sidebar from '../sidebar/sidebar'


const AddDestination = () => {

    return (
        <ChakraProvider>
          <Flex>
            <Sidebar />
              <Box flex={1} p={8}>
          
              </Box>
          </Flex>
        </ChakraProvider>
        
                )
        }

export default AddDestination;
