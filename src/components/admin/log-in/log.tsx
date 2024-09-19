'use client'
import React, { useState } from 'react';
import logo from '../../../../public/assets/jagathlogo4.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    router.push('/admin/orders');

    // Simulating an API call
    setTimeout(() => {
      setIsLoading(false);
      if (email === 'bhathiyainterithm@gmail.com' && password === 'bhathiya1234') {
        toast({
          title: 'Login Successful',
          description: "You've been successfully logged in!",
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'Login Failed',
          description: "Invalid email or password. Please try again.",
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    }, 1500);
  };

  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const cardBgColor = useColorModeValue('white', 'gray.700');

  return (
    <Box bg={bgColor} minH="100vh" py={10} px={4}>
      <Container maxW="lg">
        <Box
          bg={cardBgColor}
          p={8}
          borderRadius="xl"
          boxShadow="2xl"
          border="1px solid"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
        >
          <VStack spacing={8} align="stretch">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image src={logo} width={150} height={150} alt='logo' />
            </div>
            <Heading textAlign="center" size="xl" fontWeight="extrabold">
              Welcome Back
            </Heading>
            <Text fontSize="lg" color="gray.600" textAlign="center">
              Log in to Access Admin Panel
            </Text>
            <form onSubmit={handleSubmit}>
              <VStack spacing={5}>
                <FormControl isRequired>
                  <FormLabel>Email Address</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    size="lg"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="lg">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                    />
                    <InputRightElement width="4.5rem">
                      <IconButton
                        h="1.75rem"
                        size="sm"
                        onClick={() => setShowPassword(!showPassword)}
                        icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Box w="100%">
                  <Checkbox colorScheme="blue">Remember me</Checkbox>
                </Box>
                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  fontSize="md"
                  isLoading={isLoading}
                  loadingText="Signing In"
                  w="100%"
                >
                  Sign In
                </Button>
              </VStack>
            </form>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
