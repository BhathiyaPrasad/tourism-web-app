'use client'
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import {
  Box,
  Button,
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
  useToast,
  Flex,
  ScaleFade,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import logo from '../../../../public/assets/jagathlogo4.png';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    setIsLoading(false);

    if (result?.error) {
      toast({
        title: "Login Failed",
        description: result.error,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Login Successful",
        description: "Welcome back!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      router.push("/admin");
    }
  };

  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box bg={bgColor} minH="100vh" py={16} px={4}>
      <Container maxW="md">
        <ScaleFade initialScale={0.9} in={true}>
          <Box
            bg={cardBgColor}
            p={8}
            borderRadius="xl"
            boxShadow="2xl"
            border="1px solid"
            borderColor={borderColor}
          >
            <VStack spacing={8} align="stretch">
              <Flex justifyContent="center">
                <Image src={logo} width={120} height={120} alt='logo' />
              </Flex>
              <VStack spacing={2}>
                <Heading textAlign="center" size="xl" fontWeight="extrabold">
                  Welcome Back
                </Heading>
                <Text fontSize="md" color={textColor} textAlign="center">
                  Log in to Access Admin Panel
                </Text>
              </VStack>
              <form onSubmit={handleSubmit}>
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input
                      type="name"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter your username"
                      size="lg"
                      borderRadius="md"
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup size="lg">
                      <Input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        borderRadius="md"
                      />
                      <InputRightElement width="4.5rem">
                        <Button
                          h="1.75rem"
                          size="sm"
                          onClick={() => setShowPassword(!showPassword)}
                          bg="transparent"
                          _hover={{ bg: 'transparent' }}
                        >
                          {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Button
                    type="submit"
                    colorScheme="blue"
                    size="lg"
                    fontSize="md"
                    isLoading={isLoading}
                    loadingText="Signing In"
                    w="100%"
                    borderRadius="md"
                    boxShadow="md"
                    _hover={{ boxShadow: 'lg' }}
                  >
                    Sign In
                  </Button>
                </VStack>
              </form>
            </VStack>
          </Box>
        </ScaleFade>
      </Container>
    </Box>
  );
};

export default LoginPage;