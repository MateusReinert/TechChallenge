"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Typography } from "@mui/material";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import {
  SIDEBAR_APP_NAME,
  SIDEBAR_MENU_ITEMS,
  SIDEBAR_USER,
} from "@/constants/sidebar";

import { sidebarStyles } from "@/styles/sidebarStyles";

type SidebarProps = {
  currentPath?: string;
  onNavigate?: (path: string) => void;
};

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return "Bom dia";
  if (hour < 18) return "Boa tarde";
  return "Boa noite";
}

function getCurrentDate() {
  return new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function Sidebar({ currentPath, onNavigate }: SidebarProps) {
  const pathnameFromRouter = usePathname();
  const pathname = currentPath ?? pathnameFromRouter;

  const greeting = getGreeting();
  const currentDate = getCurrentDate();

  return (
    <Box component="aside" aria-label="Menu lateral" sx={sidebarStyles.root}>
      <Box sx={sidebarStyles.topContent}>
        <Box sx={sidebarStyles.logo} aria-label={SIDEBAR_APP_NAME}>
          <AccountBalanceWalletIcon
            sx={sidebarStyles.logoIcon}
            aria-hidden="true"
          />

          <Typography sx={sidebarStyles.logoText}>
            {SIDEBAR_APP_NAME}
          </Typography>
        </Box>

        <Box sx={sidebarStyles.greeting}>
          <Typography sx={sidebarStyles.greetingTitle}>
            {greeting}, {SIDEBAR_USER.shortName}!
          </Typography>

          <Typography sx={sidebarStyles.greetingDate}>
            {currentDate}
          </Typography>
        </Box>

        <Box
          component="nav"
          aria-label="Navegação principal"
          sx={sidebarStyles.nav}
        >
          {SIDEBAR_MENU_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Box key={item.href} sx={sidebarStyles.navGroup}>
                <Typography sx={sidebarStyles.groupTitle}>
                  {item.group}
                </Typography>

                <Box
                  component={Link}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  aria-label={`${item.label}${isActive ? " página atual" : ""}`}
                  onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                    if (onNavigate) {
                      event.preventDefault();
                      onNavigate(item.href);
                    }
                  }}
                  sx={[
                    sidebarStyles.item,
                    ...(isActive ? [sidebarStyles.itemActive] : []),
                  ]}
                >
                  <Icon sx={sidebarStyles.itemIcon} aria-hidden="true" />
                  {item.label}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box sx={sidebarStyles.profile} aria-label="Perfil do usuário">
        <Typography sx={sidebarStyles.profileName}>
          {SIDEBAR_USER.fullName}
        </Typography>

        <Typography sx={sidebarStyles.profileEmail}>
          {SIDEBAR_USER.email}
        </Typography>
      </Box>
    </Box>
  );
}