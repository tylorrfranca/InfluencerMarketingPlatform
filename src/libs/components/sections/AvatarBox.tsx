import { Box } from 'panda';
import { ReactNode } from "react";
import { BlueBox } from '../core/BlueBlock';


export function AvatarBox() {
    return (
        <BlueBox>
        <Box>

        </Box>
        <Box 
        display="flex"
        alignItems="center"
        justifyContent="start"
        paddingLeft={10}
        paddingTop={15}
        fontSize={'larger'}>
        Name of User
        </Box>

        <Box 
        display="flex"
        alignItems="center"
        justifyContent="start"
        paddingLeft={10}
        paddingTop={15}
        fontSize={'small'}>
        Admin 
        {/* // need to connect this to user info. Once we gather user.followers we can display data.  */}
        </Box>  
        </BlueBox>
    );
}