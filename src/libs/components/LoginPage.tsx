import { InfoBox } from '@react-google-maps/api';

import { Button, Flex } from 'antd';

import { HStack } from '../../../styled-system/jsx/hstack';
import { Box } from '../../../styled-system/jsx/box';

interface LoginPageProps {}

export function LoginPage(props: LoginPageProps ) {
    return (
        <Box
        width="100vw"
        height="80vh"
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
        alignItems={'center'}
        >
        
          
          <Box width={'600px'}
          height = {"100px"}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          color={'black'}
          fontWeight={'bold'}
          fontFamily={'monospace'}
          fontSize={{
            base: "45px",
            md: "60px",
            lg:"75px"
            }}
    
          >
            Kitchen AI<sup>&reg;</sup>
           
  
          </Box>

          </Box>
        
    );
}