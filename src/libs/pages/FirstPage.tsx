'use client'
import { Box } from "panda";
import Image from "next/image";
import { Button } from "@mui/material";
import { useRouter } from 'next/navigation';


export function FirstPage(){

    const router = useRouter();
    const handleLogin = () => {
        router.push('/loginpage');
      };
    
      const handleSignUp = () => {
        router.push('/signuppage');
      };

    return (
    <Box width= "100%"
    height={'100vh'}
    bgColor={'#2A263E'}
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}
    paddingBottom={200}
    flexDir={'column'}
    >

        <Image src= '/logo2.png'
        alt = 'BrandSync'
        width={400}
        height={400}>
        </Image>
        <Box fontSize={'xxx-large'}
        fontWeight={'bold'}
        css={{
            background: 'linear-gradient(90deg, #F1755F, #F15F9A)',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text', // For other browsers
            color: 'transparent',
          }}
            paddingBottom={80}>
        BrandSync
        </Box>
        <Box
        display={'flex'}
        flexDir={'row'}
        gap={20}>
      <Button
        onClick={handleLogin}
        sx={{
            background: 'linear-gradient(90deg, #F1755F, #F15F9A)',
            color: 'white',
            width: '100px',
            transition: 'all 0.3s ease',
            '&:hover': {
                width: '110px'
                

          },
        }}
      >   
        Log in
        </Button>
        <Button
        onClick={handleSignUp}
            sx={{
            background: 'rgba(128, 128, 128, 0.2)', // Transparent grey background
            color: 'white',
            width: '100px',
            transition: 'all 0.3s ease',
            '&:hover': {
                background: 'rgba(128, 128, 128, 0.4)',
                width: '110px'
            },
            }}
        >
        Sign Up
      </Button>
        </Box>

    </Box>
    );
}