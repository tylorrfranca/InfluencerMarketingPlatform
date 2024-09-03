import { Box } from 'panda';
import { ReactNode } from "react";

import Link from "next/link";
interface PinkBoxProps {
    children?: ReactNode;


}

export function PinkBox({ children}: PinkBoxProps) {
    return (
        <Box
        width={'200px'}
        height={'100px'}
        color='white'
        borderRadius={10}
        bg="linear-gradient(90deg, #F1755F, #F15F9A)"
        p={4}
        flexDirection={'column'}>
            {children}
        </Box>
    );
}