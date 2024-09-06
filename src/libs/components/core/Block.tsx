
import { Box, VStack } from 'panda';
import { ReactNode } from "react";

import Link from "next/link";
interface BlockProps {
    color: boolean; 
    title: string; 
    info: string; 
    Pgrowth: string;
    Ngrowth:string;
    cirColor:boolean;

}

export function Block({color, title, info, Pgrowth, Ngrowth, cirColor}: BlockProps) {
    return (
        <Box
        width={'260px'}
        height={'120px'}
        textAlign={'center'}
        color='white'
        borderRadius={10}
        bg= {color ? "linear-gradient(90deg, #F1755F, #F15F9A)" : "#2F2B43"}>
        <Box 
        display="flex"
        alignItems="center"
        justifyContent="start"
        paddingLeft={10}
        paddingTop={15}
        fontSize={'medium'}>
        <Box width= "35px"
        height={'35px'}
        borderRadius={50}
        bg={cirColor ? 'linear-gradient(90deg, #F1755F, #F15F9A)' : 'rgba(200, 200, 200, 0.5)'}
        marginX={10}>

        </Box>
        {title}
        </Box>

        <Box 
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        paddingX={10}
        paddingTop={15}
        fontSize={'medium'}>
        <VStack
        display={'flex'}
        alignItems={'start'}>

        <Box>{info} </Box>
        <Box
        fontSize={'small'}> +{Ngrowth} this week</Box>
        </VStack>

        <Box 
        bgColor =  "rgba(200, 200, 200, 0.5)"
        paddingY={3}
        paddingX={10}
        borderRadius={20}
        fontSize={'smaller'}>
            +{Pgrowth}
        </Box>
        </Box> 
        </Box>
    );
}