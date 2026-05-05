import { SxProps, Theme } from "@mui/material";

type SummaryCardVariant = "positive" | "negative" | "neutral";

type SummaryCardStyles = Record<string, SxProps<Theme>> & {
  iconVariants: Record<SummaryCardVariant, SxProps<Theme>>;
  trendVariants: Record<SummaryCardVariant, SxProps<Theme>>;
};

export const summaryCardStyles = {
  root: {
    width: "100%",
    minHeight: "152px",
    bgcolor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "16px",
    p: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    boxShadow: "0px 8px 24px rgba(15, 23, 42, 0.04)",
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerContent: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    width: "100%",
  },

  icon: {
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,

    "& svg": {
      fontSize: 24,
    },
  },

  iconVariants: {
    positive: {
      bgcolor: "#ECFDF3",
      color: "#16A34A",
    },

    negative: {
      bgcolor: "#FEF2F2",
      color: "#EF4444",
    },

    neutral: {
      bgcolor: "#F5F3FF",
      color: "#7C3AED",
    },
  },

  labelWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "8px",
  },

  label: {
    fontSize: "15px",
    fontWeight: 700,
    color: "#374151",
  },

  action: {
    display: "flex",
    alignItems: "center",
  },

  value: {
    fontSize: {
      xs: "26px",
      md: "30px",
    },
    fontWeight: 700,
    color: "#111827",
    lineHeight: 1.1,
  },

  trend: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "13px",
    fontWeight: 600,

    "& svg": {
      fontSize: 18,
    },

    "& span": {
      fontWeight: 500,
    },
  },

  trendVariants: {
    positive: {
      color: "#16A34A",
    },

    negative: {
      color: "#EF4444",
    },

    neutral: {
      color: "#6B7280",
    },
  },
} satisfies SummaryCardStyles;