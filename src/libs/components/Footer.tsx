import { InfoBox } from '@react-google-maps/api';

import { Button, Flex } from 'antd';

import { HStack } from '../../../styled-system/jsx/hstack';
import { Box } from '../../../styled-system/jsx/box';
import { InstagramOutlined, FacebookOutlined, XOutlined } from '@ant-design/icons';
import { IconLinks } from './IconLinks';
interface FooterProps {}

export function Footer(props: FooterProps) {
    return (
  
    
    <HStack
        position="absolute"
        bottom="0"
        right="0"
        width="full"
        display="flex"
        justifyContent="end"
        alignContent="start"
        gap="12"
        marginRight="24"
        marginBottom={"12"}
    >
        <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            color={'black'}
            _hover={{ color: 'red' }}
            gap={10}
        >

        
        <IconLinks
            newTab
            href="#">
            <FacebookOutlined style={{ fontSize: '30px'}}/>
        </IconLinks>
        
        <IconLinks
            newTab
            href="#">
            <InstagramOutlined style={{ fontSize: '30px'}}/>
        </IconLinks>

        <IconLinks
            newTab
            href="#">
            <XOutlined style={{ fontSize: '30px' }}/>
        </IconLinks>
    

        </Box>


        </HStack>

    );
}