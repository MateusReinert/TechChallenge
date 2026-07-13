import { Box } from "@mui/material";

import { Sidebar } from "@finance/ui";
import { colors } from "@finance/ui";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        height: "100dvh",
        bgcolor: colors.background.default,
        display: "flex",
        overflow: "hidden",
      }}
    >
      <Sidebar
        currentZone="shell"
        currentPath="/dashboard"
        basePath="/dashboard"
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
  );
}