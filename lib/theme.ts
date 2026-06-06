import { createTheme } from '@mui/material/styles';
import { blueGrey, lightBlue } from '@mui/material/colors';

export const appTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data',
    },
    colorSchemes: {
        light: {
            palette: {
                primary: { main: blueGrey[800] },
                secondary: { main: lightBlue[700] },
            },
        },
        dark: {
            palette: {
                primary: { main: blueGrey[300] },
                secondary: { main: lightBlue[300] },
            },
        },
    },
});