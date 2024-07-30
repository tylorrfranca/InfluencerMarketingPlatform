
import { InfoBox } from '@react-google-maps/api';

import { Button, Flex } from 'antd';

import { HStack } from '../../../styled-system/jsx/hstack';
import { Box } from '../../../styled-system/jsx/box';

interface LoginHeaderProps {}

export function LoginHeader(props: LoginHeaderProps) {
    return (
  
        <HStack
        width="full"
        display={'flex'}
        justifyContent={'end'}
        alignItems={'end'}
        gap='12'
        height='full'
        marginTop={'20'}
        marginRight={'24'}
        >
        
        <Box
            display={'flex'}
            justifyContent={'end'}
            alignItems={'end'}
            gap='12'
            >
            <Button type="primary">Log In</Button>
            <Button>Sign In</Button>


        </Box>
   
        


        </HStack>
            
        
    );
}