'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { ThemeProvider, CssBaseline } from '@mui/material';
import {IChildren} from "@/lib/interfaces";
import {appTheme} from "@/lib/theme";
import {QueryClientProvider} from "@tanstack/react-query";
import {makeQueryClient} from "@/lib/queryClient";
import {useState} from "react";
import {SnackbarProvider} from "notistack";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

export function Providers({ children }: IChildren) {
    const [queryClient] = useState(makeQueryClient);

    return (
        <AppRouterCacheProvider options={{ key: 'mui' }}>
            <ThemeProvider theme={appTheme} defaultMode="dark">
                <CssBaseline />
                <QueryClientProvider client={queryClient}>
                    <SnackbarProvider maxSnack={3}>
                        {children}
                    </SnackbarProvider>
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}