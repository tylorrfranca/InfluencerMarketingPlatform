import { Box } from 'panda';
import { ReactNode } from "react";
import { PinkBox } from '../core/PinkBlock';


export function AccountsReached() {
    return (
        <PinkBox>
        <Box 
        display="flex"
        alignItems="center"
        justifyContent="start"
        paddingLeft={10}
        paddingTop={15}
        fontSize={'larger'}>
        Accounts Reached
        </Box>

        <Box 
        display="flex"
        alignItems="center"
        justifyContent="start"
        paddingLeft={10}
        paddingTop={15}
        fontSize={'large'}>
        40K 
        {/* // need to connect this to user info. Once we gather user.followers we can display data.  */}
        </Box>  
        </PinkBox>
    );
}