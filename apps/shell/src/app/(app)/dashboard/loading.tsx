import { Box, Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          lg: "1fr 320px",
        },
        bgcolor: "#F9FAFB",
      }}
    >
      <Box
        sx={{
          p: {
            xs: "16px",
            md: "24px",
            lg: "32px",
          },
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <Box>
          <Skeleton variant="text" width={120} height={18} sx={{ mb: 1 }} />

          <Skeleton variant="text" width={220} height={36} />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              xl: "repeat(4, 1fr)",
            },
            gap: "16px",
          }}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <Box
              key={index}
              sx={{
                p: "16px",
                borderRadius: "8px",
                bgcolor: "#FFFFFF",
                border: "1px solid #E5E7EB",
              }}
            >
              <Skeleton variant="text" width="60%" height={22} sx={{ mb: 1 }} />

              <Skeleton variant="text" width="80%" height={38} sx={{ mb: 1 }} />

              <Skeleton variant="text" width="70%" height={18} />
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <Skeleton variant="text" width={180} height={30} />

          <Box sx={{ display: "flex", gap: "12px" }}>
            <Skeleton variant="rounded" width={110} height={40} />

            <Skeleton variant="rounded" width={150} height={40} />
          </Box>
        </Box>

        <Box
          sx={{
            bgcolor: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr",
              gap: "16px",
              px: "16px",
              py: "14px",
              borderBottom: "1px solid #E5E7EB",
            }}
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} variant="text" width="80%" height={20} />
            ))}
          </Box>

          {Array.from({ length: 6 }).map((_, row) => (
            <Box
              key={row}
              sx={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr",
                gap: "16px",
                px: "16px",
                py: "18px",
                borderBottom: row !== 5 ? "1px solid #F3F4F6" : "none",
              }}
            >
              {Array.from({ length: 6 }).map((_, col) => (
                <Skeleton key={col} variant="text" width="85%" height={20} />
              ))}
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: {
            xs: "none",
            lg: "block",
          },
          borderLeft: "1px solid #E5E7EB",
          bgcolor: "#FFFFFF",
          p: "24px",
        }}
      >
        <Skeleton variant="text" width={160} height={32} sx={{ mb: 3 }} />

        <Skeleton variant="rounded" width="100%" height={120} sx={{ mb: 2 }} />

        <Skeleton variant="rounded" width="100%" height={120} />
      </Box>
    </Box>
  );
}
