
import { Box, HStack, VStack } from 'panda';
import { ReactNode } from "react";


import Link from "next/link";
import ProgressBar from '../features/ProgressBar';
interface SideBlockProps {
    title: string; 
    info: string; 

}

export function SideBlock({title, info}: SideBlockProps) {
    return (
        <HStack
        width={'400px'}
        height={'120px'}
        color='white'
        borderRadius={10}
        bg= {"#2F2B43"}
        display="flex"
        justifyContent="space-between">
            
        <Box bg={"linear-gradient(90deg, #F1755F, #F15F9A)"}
        borderRadius={100}
        width={'50px'}
        height={'50px'}
        marginLeft={20}>

        </Box>
        <VStack 
        display="flex"
        justifyContent="start"
        alignItems={'start'}
        paddingLeft={10}
        fontSize={'medium'}
        gap={15}
        width={'200px'}
        >
        <Box fontSize={'larger'}>{title}</Box>
        <Box>{info} </Box>
        </VStack>

        <Box 
        width={'full'}
        display={'flex'}
        justifyContent={'end'}
        alignItems={'end'}
        >
        <ProgressBar/>
        </Box>


        <Box 
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        paddingX={10}
        paddingTop={0}
        fontSize={'medium'}>
        <VStack
        display={'flex'}
        alignItems={'start'}>
        </VStack>

        </Box> 
        </HStack>
    );
}