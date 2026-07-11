import DashboardIcon from "@mui/icons-material/Dashboard";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

export const SIDEBAR_APP_NAME = "Finance";

export const SIDEBAR_USER = {
  greeting: "Bom dia",
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
  },
  {
    group: "Movimentações",
    label: "Transações",
    href: "/transactions",
    icon: SwapHorizIcon,
  },
];