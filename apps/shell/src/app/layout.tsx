import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import Providers from "@/components/Providers";
import StoreProvider from "@/store/StoreProvider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Finance",
  description: "Aplicação de gerenciamento financeiro",
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
            <Providers>{children}</Providers>
          </StoreProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
