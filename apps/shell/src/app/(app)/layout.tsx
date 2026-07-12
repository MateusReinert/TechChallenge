import { Box } from "@mui/material";

import Sidebar from "@/components/Sidebar";
import { colors } from "@/styles/tokens";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
      <Sidebar currentZone="shell" />

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
  );
}