import type { Metadata } from "next";
import { Box } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import Providers from "@/components/Providers";
import Sidebar from "@/components/Sidebar";
import StoreProvider from "@/store/StoreProvider";
import { colors } from "@/styles/tokens";

import "./globals.css";

export const metadata: Metadata = {
  title: "Finance | Transações",
  description: "Gerenciamento de transações financeiras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <AppRouterCacheProvider>
          <StoreProvider>
            <Providers>
              <Box
                sx={{
                  minHeight: "100vh",
                  bgcolor: colors.background.default,
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    md: "row",
                  },
                }}
              >
                <Sidebar currentZone="transactions" />

                <Box
                  component="main"
                  sx={{
                    flex: 1,
                    minWidth: 0,
                    width: "100%",
                  }}
                >
                  {children}
                </Box>
              </Box>
            </Providers>
          </StoreProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}