import React from 'react';
import { Box, HStack, VStack} from 'panda';
import Image from 'next/image';
import { Block } from '../core/Block';
import { PinkBox } from '../core/PinkBlock';
import { BlueBox } from '../core/BlueBlock';
import { Followers } from '../sections/Followers';
import { MatchPercentage } from '../sections/MatchPercentage';
import { AccountsReached } from '../sections/AccountsReached';
import { AvatarBox } from '../sections/AvatarBox';
import { AccountEngangement } from '../sections/AcountEngangement';


const HomePage = () => {
  return (
        <Box width= "100vw"
        height={'100vh'}
        bgColor={'#2A263E'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'start'}
        gap={50}
        paddingTop={50}
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
                    <Block color = {false}
                    title = "Accounts Engagement"
                    info= "40k"
                    Pgrowth='40%'
                    Ngrowth='8k'
                    cirColor= {true}>

                    </Block>
                </Box>
                <Box
                display={'flex'}
                flexDir={'row'}
                gap={50}>
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
            </VStack>
        </Box>
        
    
);
}

export default HomePage;
