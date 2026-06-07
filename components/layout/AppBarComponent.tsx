import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
export const AppBarComponent = () =>{
    return (
        <AppBar
            position="fixed"
            sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    AML Compliance Dashboard
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
