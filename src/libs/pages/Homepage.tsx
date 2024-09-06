import React from 'react';
import { Box, HStack, VStack} from 'panda';
import Image from 'next/image';
import { Block } from '../components/core/Block';
import Graph from '../components/features/Graph';
import Graph02 from '../components/features/Graph02';
import { SideBlock } from '../components/core/SideBlocks';
import LatestPosts from '../components/features/LatestPosts';
import UserProfileDD from '../components/features/UserProfileDD';



const HomePage = () => {
  return (
        <Box width= "100%"
        height={'98%'}
        bgColor={'#2A263E'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'start'}
        >

            <VStack 
            gap={50}>
                <Box
                display={'flex'}
                flexDir={'row'}
                gap={50}>
                    <Block color = {true}
                    title = "Followers"
                    info= "40k"
                    Pgrowth='40%'
                    Ngrowth='8k'
                    cirColor= {false}>

                    </Block>
                    <Block color = {true}
                    title = "Match Percentage"
                    info= "40k"
                    Pgrowth='40%'
                    Ngrowth='8k'
                    cirColor= {false}>

                    </Block>
                    <Block color = {true}
                    title = "Accounts Reached"
                    info= "40k"
                    Pgrowth='40%'
                    Ngrowth='8k'
                    cirColor= {false}>

                    </Block>
                </Box>
                <Box
                display={'flex'}
                flexDir={'row'}
                gap={50}>
                    <Block color = {false}
                    title = "Accounts Engagement"
                    info= "40k"
                    Pgrowth='40%'
                    Ngrowth='8k'
                    cirColor= {true}>

                    </Block>

                    <Block color = {false}
                    title = "Total Likes"
                    info= "40k"
                    Pgrowth='40%'
                    Ngrowth='8k'
                    cirColor= {true}>

                    </Block>

                    <Block color = {false}
                    title = "Total Views"
                    info= "40k"
                    Pgrowth='40%'
                    Ngrowth='8k'
                    cirColor= {true}>

                    </Block>
                </Box>
                <HStack>
                 <Graph02/>
                <VStack 
                paddingX={10}
                spaceY={25}>
                <SideBlock title= "Likes" info = "5k"/>
                <SideBlock title= "Comments" info = "5k"/>
                <SideBlock title= "Share" info = "5k"/>
                </VStack>

                </HStack>
                <Box
                bgColor={'#2A263E'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'start'}>
                <Box><LatestPosts/></Box>  
                </Box>
            </VStack>
        </Box>
        
    
);
}

export default HomePage;
