import { Box } from "@mui/material";

import { Sidebar, colors } from "@finance/ui";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        height: {
          xs: "auto",
          md: "100dvh",
        },
        bgcolor: colors.background.default,
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        overflow: {
          xs: "visible",
          md: "hidden",
        },
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
          height: {
            xs: "auto",
            md: "100dvh",
          },
          overflowY: {
            xs: "visible",
            md: "auto",
          },
          overflowX: "hidden",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
