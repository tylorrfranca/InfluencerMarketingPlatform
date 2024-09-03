import { Box } from 'panda';
import { ReactNode } from "react";
import { BlueBox } from '../core/BlueBlock';


export function AccountEngangement() {
    return (
        <BlueBox>

        <Box 
        display="flex"
        alignItems="center"
        justifyContent="start"
        paddingLeft={10}
        paddingTop={15}
        fontSize={'medium'}>
        Account Engangement
        </Box>

        <Box 
        display="flex"
        alignItems="center"
        justifyContent="start"
        paddingLeft={10}
        paddingTop={15}
        fontSize={'medium'}>
        40K 
        {/* // need to connect this to user info. Once we gather user.followers we can display data.  */}
        </Box>  
        </BlueBox>
    );
}