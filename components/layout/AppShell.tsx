'use client'

import  Box from "@mui/material/Box";
import Toolbar from '@mui/material/Toolbar';
import {IChildren} from "@/lib/interfaces";
import {AppBarComponent} from "@/components/layout/AppBarComponent";
import {SideNav} from "@/components/layout/SideNav";





export const AppShell = ({children}: IChildren) =>{
    return (
        <Box sx={{display: 'flex'}}>
            <AppBarComponent/>
            <SideNav />
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <Toolbar/>
                {children}
            </Box>
        </Box>
    );
}

