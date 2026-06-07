'use client'

import  Drawer from "@mui/material/Drawer";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {NavigationItems} from "@/components/layout/navigationConfig";
import Toolbar from "@mui/material/Toolbar";

const DRAWER_WIDTH = 240;

export const SideNav = () =>{
    const pathname = usePathname();
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: DRAWER_WIDTH,
                    boxSizing: 'border-box',
                },
            }}>
            <Toolbar/>
            <List>
                {NavigationItems.map(({ title, path, icon: Icon }) => (
                    <ListItem key={path} disablePadding>
                        <ListItemButton component={Link} href={path} selected={pathname === path}>
                            <ListItemIcon><Icon /></ListItemIcon>
                            <ListItemText primary={title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}