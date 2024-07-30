import Image from "next/image";
import { VStack } from "panda";
import { Heading } from "@radix-ui/themes";
import { LoginHeader } from "@/libs/components/LoginHeader";
import { LoginPage } from "@/libs/components/LoginPage";
import { Box } from "panda";


export default function Home() {
    return (
        <Box>
        <LoginHeader/>
        <LoginPage/>
        </Box>

       
    );
}
