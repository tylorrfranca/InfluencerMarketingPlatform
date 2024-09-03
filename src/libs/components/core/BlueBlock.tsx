import { Box } from 'panda';
import { ReactNode } from "react";

import Link from "next/link";
interface BlueBoxProps {
    children?: ReactNode;

}

export function BlueBox({ children}: BlueBoxProps) {
    return (
        <Box
        width={'200px'}
        height={'100px'}
        textAlign={'center'}
        color='white'
        borderRadius={10}
        bg="#2F2B43">
            {children}
        </Box>
    );
}