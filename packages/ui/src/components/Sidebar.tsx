"use client";

import { useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import {
  SIDEBAR_APP_NAME,
  SIDEBAR_MENU_ITEMS,
  SIDEBAR_USER,
  type ApplicationZone,
} from "../constants/sidebar";

import { sidebarStyles } from "../styles/sidebarStyles";

type SidebarProps = {
  currentZone: ApplicationZone;
  currentPath?: string;
  basePath?: string;
  onNavigate?: (path: string) => void;
};

const SIDEBAR_COLLAPSED_STORAGE_KEY = "finance-sidebar-collapsed";

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return "Bom dia";
  if (hour < 18) return "Boa tarde";

  return "Boa noite";
}

function getCurrentDates() {
  const currentDate = new Date();

  return {
    compact: currentDate.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    full: currentDate.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  };
}

export default function Sidebar({
  currentZone,
  currentPath,
  basePath,
  onNavigate,
}: SidebarProps) {
  const pathnameFromRouter = usePathname();
  const pathname = currentPath ?? pathnameFromRouter;

  const greeting = getGreeting();
  const currentDates = getCurrentDates();

  const [collapsed, setCollapsed] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return (
      window.localStorage.getItem(SIDEBAR_COLLAPSED_STORAGE_KEY) === "true"
    );
  });

  function handleToggleCollapsed() {
    setCollapsed((currentValue) => {
      const nextValue = !currentValue;

      window.localStorage.setItem(
        SIDEBAR_COLLAPSED_STORAGE_KEY,
        String(nextValue)
      );

      return nextValue;
    });
  }

  function handleNavigation(
    event: MouseEvent<HTMLAnchorElement>,
    path: string
  ) {
    if (!onNavigate) return;

    event.preventDefault();
    onNavigate(path);
  }

  return (
    <Box
      component="aside"
      aria-label="Menu lateral"
      sx={[
        sidebarStyles.root,
        collapsed && {
          width: {
            xs: "100%",
            md: 72,
          },
          minWidth: {
            xs: "100%",
            md: 72,
          },
          p: {
            xs: 2,
            md: 1.5,
          },
        },
      ]}
    >
      <Box sx={sidebarStyles.topContent}>
        <Box
          sx={[
            sidebarStyles.logo,
            collapsed && {
              justifyContent: {
                md: "center",
              },
              gap: {
                md: 0,
              },
            },
          ]}
          aria-label={SIDEBAR_APP_NAME}
        >
          {!collapsed && (
            <>
              <AccountBalanceWalletIcon
                sx={sidebarStyles.logoIcon}
                aria-hidden="true"
              />

              <Typography sx={sidebarStyles.logoText}>
                {SIDEBAR_APP_NAME}
              </Typography>
            </>
          )}

          <Tooltip
            title={collapsed ? "Expandir menu" : "Recolher menu"}
            placement="right"
          >
            <IconButton
              type="button"
              size="small"
              aria-label={
                collapsed ? "Expandir menu lateral" : "Recolher menu lateral"
              }
              aria-expanded={!collapsed}
              onClick={handleToggleCollapsed}
              sx={{
                ml: collapsed ? 0 : "auto",
                color: "inherit",
              }}
            >
              {collapsed ? (
                <MenuRoundedIcon fontSize="small" />
              ) : (
                <MenuOpenRoundedIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Box>

        {!collapsed && (
          <Box sx={sidebarStyles.greeting}>
            <Typography sx={sidebarStyles.greetingTitle}>
              {greeting}, {SIDEBAR_USER.shortName}!
            </Typography>

            <Typography
              sx={[
                sidebarStyles.greetingDate,
                sidebarStyles.greetingDateCompact,
              ]}
            >
              {currentDates.compact}
            </Typography>

            <Typography
              sx={[sidebarStyles.greetingDate, sidebarStyles.greetingDateFull]}
            >
              {currentDates.full}
            </Typography>
          </Box>
        )}

        <Box
          component="nav"
          aria-label="Navegação principal"
          sx={sidebarStyles.nav}
        >
          {SIDEBAR_MENU_ITEMS.map((item) => {
            const isActive = pathname.startsWith(item.href);
            const isInternalNavigation = item.href === basePath;
            const Icon = item.icon;

            const itemSx = [
              sidebarStyles.item,
              ...(isActive ? [sidebarStyles.itemActive] : []),
              ...(collapsed
                ? [
                    {
                      justifyContent: {
                        md: "center",
                      },
                      width: {
                        md: "100%",
                      },
                      px: {
                        md: 0,
                      },
                      gap: {
                        md: 0,
                      },
                    },
                  ]
                : []),
            ];

            const ariaLabel = `${item.label}${isActive ? " página atual" : ""}`;

            const navigationItem = isInternalNavigation ? (
              <Box
                component={Link}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                aria-label={ariaLabel}
                sx={itemSx}
              >
                <Icon sx={sidebarStyles.itemIcon} aria-hidden="true" />

                {!collapsed && item.label}
              </Box>
            ) : (
              <Box
                component="a"
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                aria-label={ariaLabel}
                onClick={(event) => handleNavigation(event, item.href)}
                sx={itemSx}
              >
                <Icon sx={sidebarStyles.itemIcon} aria-hidden="true" />

                {!collapsed && item.label}
              </Box>
            );

            return (
              <Box
                key={item.href}
                sx={[
                  sidebarStyles.navGroup,
                  collapsed && {
                    gap: {
                      md: 1,
                    },
                  },
                ]}
              >
                {!collapsed && (
                  <Typography sx={sidebarStyles.groupTitle}>
                    {item.group}
                  </Typography>
                )}

                {collapsed ? (
                  <Tooltip title={item.label} placement="right">
                    {navigationItem}
                  </Tooltip>
                ) : (
                  navigationItem
                )}
              </Box>
            );
          })}
        </Box>
      </Box>

      {!collapsed && (
        <Box sx={sidebarStyles.profile} aria-label="Perfil do usuário">
          <Typography sx={sidebarStyles.profileName}>
            {SIDEBAR_USER.fullName}
          </Typography>

          <Typography sx={sidebarStyles.profileEmail}>
            {SIDEBAR_USER.email}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
