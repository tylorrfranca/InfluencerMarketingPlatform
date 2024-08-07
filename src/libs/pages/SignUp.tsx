'use client'
import React, { useState } from 'react';
import { ChakraProvider, Box, Heading, Input, Button, FormControl, FormLabel, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {auth} from './../firebase/config';

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const router = useRouter();


  //waits for email and pass word to be inputed and then updates firebase
  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
      //pushes user to main page 
      router.push('/');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ChakraProvider>
      <Box
        width={'100vw'}
        height={'90vh'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        flexDirection={'column'}
        marginTop={20}
        gap={5}
      >
        <Heading as="h1" size="lg" textAlign="center">Sign Up for Scavenger Hunt Ai</Heading>
        
        <Box
          p={6}
          maxWidth="400px"
          borderWidth={1}
          borderRadius="lg"
          boxShadow="lg"
          bg="white"
        >
          <VStack spacing={4} align="stretch">
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                bg="gray.100"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                bg="gray.100"
              />
            </FormControl>
            <Button colorScheme="teal" onClick={handleSignUp}>Sign Up</Button>
          </VStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default SignUpPage;