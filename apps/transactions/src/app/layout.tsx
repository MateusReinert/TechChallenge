import type { Metadata } from "next";
import { Box } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import Providers from "@/components/Providers";
import { Sidebar } from "@finance/ui";
import StoreProvider from "@/store/StoreProvider";
import { colors } from "@finance/ui";

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
                  height: "100dvh",
                  bgcolor: colors.background.default,
                  display: "flex",
                  overflow: "hidden",
                }}
              >
                <Sidebar
                  currentZone="transactions"
                  currentPath="/transactions"
                  basePath="/"
                />

                <Box
                  component="main"
                  sx={{
                    flex: 1,
                    minWidth: 0,
                    width: "100%",
                    height: "100dvh",
                    overflowY: "auto",
                    overflowX: "hidden",
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