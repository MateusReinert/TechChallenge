import DashboardIcon from "@mui/icons-material/Dashboard";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

export type ApplicationZone = "shell" | "transactions";

export const SIDEBAR_APP_NAME = "Finance";

export const SIDEBAR_USER = {
  shortName: "FIAP",
  fullName: "FIAP Tech Challenge",
  email: "FIAP@email.com",
};

export const SIDEBAR_MENU_ITEMS = [
  {
    group: "Visão geral",
    label: "Dashboard",
    href: "/dashboard",
    icon: DashboardIcon,
    zone: "shell" as const,
  },
  {
    group: "Movimentações",
    label: "Transações",
    href: "/transactions",
    icon: SwapHorizIcon,
    zone: "transactions" as const,
  },
];