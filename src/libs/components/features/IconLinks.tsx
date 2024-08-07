
import { Box } from 'panda';

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