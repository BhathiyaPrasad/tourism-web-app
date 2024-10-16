'use client'
import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box, VStack, HStack, Text, Input, Textarea, Button, FormControl, FormLabel, Heading, Select, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Flex, extendTheme, keyframes, } from "@chakra-ui/react";
import logo from '../../../public/assets/jagathlogo4.png'
import Image from 'next/image'
import TawkToChat from '@/components/common/chat/chat'
import { collection, where, query, getDocs, doc, addDoc , setDoc } from 'firebase/firestore'
import { db } from '../../lib/firebase';


const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const theme = extendTheme({
  colors: {
    brand: {
      50: '#e6fffa',
      100: '#b2f5ea',
      200: '#81e6d9',
      300: '#4fd1c5',
      400: '#38b2ac',
      500: '#319795',
      600: '#2c7a7b',
      700: '#285e61',
      800: '#234e52',
      900: '#1d4044',
      1000: 'rgb(41, 76, 192)'
    },
  },
  components: {
    Input: {
      baseStyle: {
        field: {
          borderRadius: 'md',
        },
      },
    },
    Select: {
      baseStyle: {
        field: {
          borderRadius: 'md',
        },
      },
    },
    Textarea: {
      baseStyle: {
        borderRadius: 'md',
      },
    },
  },
});

type Package = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
};

const TourBookingForm = () => {
  const OrganizationID = 'packages'
  const [formData, setFormData] = useState({
    id:'',
    name: '',
    email: '',
    number:0,
    country: '',
    arrivalDate: '',
    departureDate: '',
    adults: 1,
    children: 0,
    tourType: '',
    accommodation: '',
    additionalRequirements: '',
  });
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const packageRef = collection(db, OrganizationID);
        const itemsQuery = query(
          packageRef,
          where("hide", "==", false),
        );
        const querySnapshot = await getDocs(itemsQuery);
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Package));
        setPackages(data);
        console.log(data);  // Use 'data' here instead of 'packages' to avoid stale state issues
      } catch (error) {
        console.error('Error fetching Package Details', error);
      }
    };

    fetchData();
  }, []);  // Empty dependency array to ensure it only runs once




  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNumberInputChange = (name: string, value: number) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inquiry submitted:', formData);
    
    try {
      // Sending email (if needed)
      const response = await fetch('api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = response.json();
      if (response.ok) {
        alert('Email sent successfully');
      } else {
        alert('Error Sending Email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  
    try {
      // Saving form data to Firestore
      const orgDocId = 'orders';  
      const ordersRef = collection(db, orgDocId);

      const data = {
        name: formData.name,
        email: formData.email,
        number: formData.number,
        country: formData.country,
        arrivalDate: formData.arrivalDate,
        departureDate: formData.departureDate,
        adults: formData.adults,
        children: formData.children,
        tourType: formData.tourType,
        accommodation: formData.accommodation,
        additionalRequirements: formData.additionalRequirements,
        createdAt: new Date(),
      }
      const docRef =  await addDoc(ordersRef, data);
      const docId = docRef.id;
      
      await setDoc(docRef, {
        ...data,
        id:docId
      })
  
      console.log('Order saved to Firestore successfully.');
      alert('Booking information saved successfully!');
      
      // Reset form (optional)
      setFormData({
        id:'',
        name: '',
        email: '',
        number:0,
        country: '',
        arrivalDate: '',
        departureDate: '',
        adults: 1,
        children: 0,
        tourType: '',
        accommodation: '',
        additionalRequirements: '',
      });
    } catch (error) {
      console.error('Error saving items to Firestore:', error);
      alert('Error saving booking information.');
    }
  };
    return (
    <>
      <ChakraProvider theme={theme}>
        <Box
          maxWidth="800px"
          margin="auto"
          padding={8}
          borderRadius="xl"
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
          bg="white"
          animation={`${fadeIn} 0.5s ease-out`}
        >
          <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" mb={8}>
            <Box
              display={{ base: 'block', md: 'none' }} // Show logo on mobile only
              mb={4} // Margin for spacing on mobile
              textAlign="center"
            >
              <Image
                src={logo}
                alt="Sri Lanka"
                height={100}
                width={100}
                style={{
                  height: 'auto',
                  width: 'auto',
                  maxWidth: '100%',
                }}
                sizes="(max-width: 768px) 80px, 100px"
                quality={75}
              />
            </Box>

            <Box
              textAlign={{ base: 'center', md: 'left' }} // Center text on mobile, left-align on larger screens
              mb={{ base: 4, md: 0 }} // Margin for spacing on mobile
            >
              <Heading as="h1" size="xl" color="brand.600" mb={2}>
                Tour Inquiry
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Plan your perfect Sri Lanka adventure
              </Text>
            </Box>

            <Box
              display={{ base: 'none', md: 'block' }} // Hide logo on mobile
              textAlign="right"
            >
              <Image
                src={logo}
                alt="Sri Lanka"
                height={100}
                width={100}
                style={{
                  height: 'auto',
                  width: 'auto',
                  maxWidth: '100%',
                }}
                sizes="(max-width: 768px) 80px, 100px"
                quality={75}
              />
            </Box>
          </Flex>
          <form onSubmit={handleSubmit}>
            <VStack spacing={6} align="stretch">
              <HStack spacing={4} flexWrap={{ base: 'wrap', md: 'nowrap' }}>
                <FormControl isRequired flex={1} minW={{ base: '100%', md: '40%' }}>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    focusBorderColor="brand.400"
                    _hover={{ borderColor: 'brand.300' }}
                    transition="all 0.2s"
                  />
                </FormControl>
                <FormControl isRequired flex={1} minW={{ base: '100%', md: '40%' }}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    focusBorderColor="brand.400"
                    _hover={{ borderColor: 'brand.300' }}
                    transition="all 0.2s"
                  />
                </FormControl>
               
              </HStack>
              <FormControl isRequired flex={1} minW={{ base: '100%', md: '40%' }}>
                  <FormLabel htmlFor="number">Mobile Number</FormLabel>
                  <Input
                    id="number"
                    name="number"
                    type="number"
                    value={formData.number}
                    onChange={handleInputChange}
                    focusBorderColor="brand.400"
                    _hover={{ borderColor: 'brand.300' }}
                    transition="all 0.2s"
                  />
                </FormControl>
              <FormControl>
                <FormLabel htmlFor="country">Country</FormLabel>
                <Input
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  focusBorderColor="brand.400"
                  _hover={{ borderColor: 'brand.300' }}
                  transition="all 0.2s"
                />
              </FormControl>

              <HStack spacing={4} flexWrap={{ base: 'wrap', md: 'nowrap' }}>
                <FormControl isRequired flex={1} minW={{ base: '100%', md: '40%' }}>
                  <FormLabel htmlFor="arrivalDate">Arrival Date</FormLabel>
                  <Input
                    id="arrivalDate"
                    name="arrivalDate"
                    type="date"
                    value={formData.arrivalDate}
                    onChange={handleInputChange}
                    focusBorderColor="brand.400"
                    _hover={{ borderColor: 'brand.300' }}
                    transition="all 0.2s"
                  />
                </FormControl>
                <FormControl isRequired flex={1} minW={{ base: '100%', md: '40%' }}>
                  <FormLabel htmlFor="departureDate">Departure Date</FormLabel>
                  <Input
                    id="departureDate"
                    name="departureDate"
                    type="date"
                    value={formData.departureDate}
                    onChange={handleInputChange}
                    focusBorderColor="brand.400"
                    _hover={{ borderColor: 'brand.300' }}
                    transition="all 0.2s"
                  />
                </FormControl>
              </HStack>

              <HStack spacing={4} flexWrap={{ base: 'wrap', md: 'nowrap' }}>
                <FormControl flex={1} minW={{ base: '100%', md: '40%' }}>
                  <FormLabel htmlFor="adults">Adults</FormLabel>
                  <NumberInput
                    id="adults"
                    name="adults"
                    value={formData.adults}
                    onChange={(_, value) => handleNumberInputChange('adults', value)}
                    min={1}
                    max={20}
                  >
                    <NumberInputField borderColor="brand.500" />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                <FormControl flex={1} minW={{ base: '100%', md: '40%' }}>
                  <FormLabel htmlFor="children">Children</FormLabel>
                  <NumberInput
                    id="children"
                    name="children"
                    value={formData.children}
                    onChange={(_, value) => handleNumberInputChange('children', value)}
                    min={0}
                    max={10}
                  >
                    <NumberInputField borderColor="brand.500" _hover={{ borderColor: 'brand.300' }} transition="all 0.2s" />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              </HStack>

              <FormControl>
                <FormLabel htmlFor="tourType">Tour Type</FormLabel>
                <Select
                  id="tourType"
                  name="tourType"
                  value={formData.tourType}
                  onChange={handleInputChange}
                  focusBorderColor="brand.400"
                  _hover={{ borderColor: 'brand.300' }}
                  transition="all 0.2s"
                >
                  <option value="">Select tour type</option>
                  {packages.map((pkg) => {
                    return (
                      <option key={pkg.id} value={pkg.name}>
                        {pkg.name}
                      </option>
                    );
                  })}
                </Select>

              </FormControl>

              <FormControl>
                <FormLabel htmlFor="accommodation">Preferred Accommodation</FormLabel>
                <Select
                  id="accommodation"
                  name="accommodation"
                  value={formData.accommodation}
                  onChange={handleInputChange}
                  focusBorderColor="brand.400"
                  _hover={{ borderColor: 'brand.300' }}
                  transition="all 0.2s"
                >
                  <option value="">Select accommodation type</option>
                  <option value="budget">Budget</option>
                  <option value="standard">Standard</option>
                  <option value="luxury">Luxury</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="additionalRequirements">Additional Requirements</FormLabel>
                <Textarea
                  id="additionalRequirements"
                  name="additionalRequirements"
                  value={formData.additionalRequirements}
                  onChange={handleInputChange}
                  focusBorderColor="brand.400"
                  _hover={{ borderColor: 'brand.300' }}
                  transition="all 0.2s"
                  rows={4}
                />
              </FormControl>

              <Button
                type="submit"
                bg="brand.1000"
                color='white'
                size="lg"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                transition="all 0.2s"
              >
                Send Message
              </Button>
            </VStack>
          </form>
        </Box>
      </ChakraProvider>
      <TawkToChat />
    </>
  );
};
export default TourBookingForm;