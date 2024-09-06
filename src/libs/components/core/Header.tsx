'use client'
import { Box, HStack } from "panda"
import Image from "next/image"
import Link from "next/link"
import UserProfileDD from "../features/UserProfileDD";
export function Header(){
    return(

    
    <Box 
    bg={'#2A263E'}
    display={'flex'}
    flexDir={'row'}
    justifyContent={'space-between'}
    alignItems={'space-between'}
    paddingRight={100}>
        <Link href={'/'}>
            <Image src={'/logo.png'}
            alt="BrandSync"
            width={200}
            height={200}>
            </Image>
        </Link>
        <UserProfileDD/>
    </Box>
    );
} 