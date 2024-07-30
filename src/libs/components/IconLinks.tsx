import { InfoBox } from '@react-google-maps/api';

import { Button, Flex } from 'antd';

import { HStack } from '../../../styled-system/jsx/hstack';
import { Box } from '../../../styled-system/jsx/box';
import { InstagramOutlined, FacebookOutlined, XOutlined } from '@ant-design/icons';
import { ReactNode } from "react";

import Link from "next/link";
interface IconLinksProps {
    href: string;
    children?: ReactNode;
    newTab?: boolean;
}

export function IconLinks({ href, children, newTab }: IconLinksProps) {
    return (
        <Box
        color='black'
        _hover={{ color: 'blue' }}>
            <Link
            href={href}
            target={newTab ? "_blank" : undefined}>
            {children}
            </Link>
        </Box>
    );
}