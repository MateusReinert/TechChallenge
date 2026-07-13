module.exports = [
"[project]/apps/shell/src/constants/sidebar.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SIDEBAR_APP_NAME",
    ()=>SIDEBAR_APP_NAME,
    "SIDEBAR_MENU_ITEMS",
    ()=>SIDEBAR_MENU_ITEMS,
    "SIDEBAR_USER",
    ()=>SIDEBAR_USER
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Dashboard$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Dashboard.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$SwapHoriz$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/SwapHoriz.mjs [app-ssr] (ecmascript)");
;
;
const SIDEBAR_APP_NAME = "Finance";
const SIDEBAR_USER = {
    shortName: "FIAP",
    fullName: "FIAP Tech Challenge",
    email: "FIAP@email.com"
};
const SIDEBAR_MENU_ITEMS = [
    {
        group: "Visão geral",
        label: "Dashboard",
        href: "/dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Dashboard$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        zone: "shell"
    },
    {
        group: "Movimentações",
        label: "Transações",
        href: "/transactions",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$SwapHoriz$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        zone: "transactions"
    }
];
}),
"[project]/apps/shell/src/styles/tokens.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "colors",
    ()=>colors,
    "radius",
    ()=>radius,
    "shadow",
    ()=>shadow,
    "sizes",
    ()=>sizes,
    "spacing",
    ()=>spacing,
    "typography",
    ()=>typography,
    "zIndex",
    ()=>zIndex
]);
const colors = {
    primary: {
        100: "#E6EDFB",
        500: "#315CC3",
        600: "#2A4DA8"
    },
    gray: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        900: "#111827"
    },
    success: {
        100: "#ECFDF3",
        300: "#ABEFC6",
        500: "#16A34A",
        700: "#027A48"
    },
    error: {
        100: "#FEF2F2",
        300: "#FECDCA",
        500: "#EF4444",
        700: "#B42318"
    },
    danger: {
        500: "#DC2626",
        700: "#B91C1C"
    },
    background: {
        default: "#FFFFFF",
        page: "#F9FAFB",
        overlay: "rgba(17, 24, 39, 0.35)"
    },
    neutral: {
        100: "#F5F3FF",
        500: "#7C3AED"
    }
};
const spacing = {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    xxl: "32px"
};
const radius = {
    sm: "8px",
    md: "12px",
    lg: "16px",
    full: "999px"
};
const shadow = {
    sm: "0px 8px 24px rgba(15, 23, 42, 0.04)",
    md: "0px 20px 40px rgba(15, 23, 42, 0.12)",
    lg: "0 20px 25px -5px rgba(0,0,0,0.08), 0 10px 10px -5px rgba(0,0,0,0.04)"
};
const typography = {
    title: {
        fontSize: "20px",
        fontWeight: 700
    },
    subtitle: {
        fontSize: "18px",
        fontWeight: 600
    },
    body: {
        fontSize: "14px",
        fontWeight: 400
    },
    label: {
        fontSize: "13px",
        fontWeight: 500
    }
};
const sizes = {
    buttonHeight: "40px",
    inputHeight: "48px",
    emptyStateIcon: "64px",
    icon: "32px",
    spinner: "42px",
    summaryIcon: "36px"
};
const zIndex = {
    sidebar: 20,
    overlay: 9999
};
}),
"[project]/apps/shell/src/styles/sidebarStyles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sidebarStyles",
    ()=>sidebarStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/tokens.ts [app-ssr] (ecmascript)");
;
const sidebarStyles = {
    root: {
        width: {
            xs: "100%",
            md: 280
        },
        minWidth: {
            xs: "100%",
            md: 280
        },
        height: {
            xs: "auto",
            md: "100dvh"
        },
        maxHeight: {
            xs: "none",
            md: "100dvh"
        },
        flexShrink: 0,
        p: {
            xs: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].lg,
            md: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].xl
        },
        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].background.default,
        borderRight: {
            xs: "none",
            md: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].gray[200]}`
        },
        borderBottom: {
            xs: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].gray[200]}`,
            md: "none"
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: {
            xs: "sticky",
            md: "relative"
        },
        top: 0,
        overflow: {
            xs: "visible",
            md: "hidden"
        },
        zIndex: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zIndex"].sidebar
    },
    topContent: {
        display: "flex",
        flexDirection: "column",
        gap: {
            xs: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].lg,
            md: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].xl
        },
        minHeight: 0
    },
    logo: {
        display: "flex",
        alignItems: "center",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].md
    },
    logoText: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].subtitle,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].primary[500]
    },
    greeting: {
        display: {
            xs: "none",
            md: "flex"
        },
        flexDirection: "column",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].xs
    },
    greetingTitle: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].subtitle,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].gray[900]
    },
    greetingDate: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].body,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].gray[600]
    },
    nav: {
        display: "flex",
        flexDirection: {
            xs: "row",
            md: "column"
        },
        gap: {
            xs: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].md,
            md: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].xl
        },
        overflowX: {
            xs: "auto",
            md: "visible"
        },
        overflowY: {
            xs: "visible",
            md: "auto"
        },
        pb: {
            xs: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].xs,
            md: 0
        }
    },
    navGroup: {
        display: "flex",
        flexDirection: "column",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].md,
        minWidth: {
            xs: "fit-content",
            md: "auto"
        }
    },
    groupTitle: {
        display: {
            xs: "none",
            md: "block"
        },
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].label,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].gray[400]
    },
    item: {
        height: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizes"].buttonHeight,
        px: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].md,
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["radius"].sm,
        display: "flex",
        alignItems: "center",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"].sm,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].body,
        fontWeight: 500,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].gray[600],
        textDecoration: "none",
        whiteSpace: "nowrap",
        "&:hover": {
            bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].primary[100],
            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].primary[500]
        },
        "&:focus-visible": {
            outline: `2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].primary[500]}`,
            outlineOffset: "2px"
        }
    },
    itemActive: {
        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].primary[500],
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].background.default,
        "&:hover": {
            bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].primary[600],
            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].background.default
        },
        "&:focus-visible": {
            outline: `2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].gray[900]}`,
            outlineOffset: "2px"
        }
    },
    profile: {
        display: {
            xs: "none",
            md: "flex"
        },
        flexDirection: "column",
        gap: "2px",
        flexShrink: 0
    },
    profileName: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].body,
        fontWeight: 500,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].gray[900]
    },
    profileEmail: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].label,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].gray[400]
    },
    logoIcon: {
        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizes"].icon,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"].primary[500]
    },
    itemIcon: {
        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sizes"].icon
    }
};
}),
"[project]/apps/shell/src/components/Sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.mjs [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.mjs [app-ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AccountBalanceWallet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/AccountBalanceWallet.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$sidebar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/constants/sidebar.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$sidebarStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/sidebarStyles.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
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
        year: "numeric"
    });
}
function Sidebar({ currentZone, currentPath, onNavigate }) {
    const pathnameFromRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const pathname = currentPath ?? pathnameFromRouter;
    console.log("SIDEBAR PATH", pathname);
    const greeting = getGreeting();
    const currentDate = getCurrentDate();
    function handleNavigation(event, path) {
        if (!onNavigate) return;
        event.preventDefault();
        onNavigate(path);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        component: "aside",
        "aria-label": "Menu lateral",
        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$sidebarStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sidebarStyles"].root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$sidebarStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sidebarStyles"].topContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$sidebarStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sidebarStyles"].logo,
                        "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$sidebar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDEBAR_APP_NAME"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AccountBalanceWallet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$sidebarStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sidebarStyles"].logoIcon,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/Sidebar.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$sidebarStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sidebarStyles"].logoText,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$sidebar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDEBAR_APP_NAME"]
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/Sidebar.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/shell/src/components/Sidebar.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$sidebarStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sidebarStyles"].greeting,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$sidebarStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sidebarStyles"].greetingTitle,
                                children: [
                                    greeting,
                                    ", ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$sidebar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDEBAR_USER"].shortName,
                                    "!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/shell/src/components/Sidebar.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$sidebarStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sidebarStyles"].greetingDate,
                                children: currentDate
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/Sidebar.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/shell/src/components/Sidebar.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        component: "nav",
                        "aria-label": "Navegação principal",
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$sidebarStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sidebarStyles"].nav,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$sidebar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDEBAR_MENU_ITEMS"].map((item)=>{
                            const isActive = pathname.startsWith(item.href);
                            const isSameZone = item.zone === currentZone;
                            const Icon = item.icon;
                            const itemSx = [
                                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$sidebarStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sidebarStyles"].item,
                                ...isActive ? [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$sidebarStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sidebarStyles"].itemActive
                                ] : []
                            ];
                            const ariaLabel = `${item.label}${isActive ? " página atual" : ""}`;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$sidebarStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sidebarStyles"].navGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$sidebarStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sidebarStyles"].groupTitle,
                                        children: item.group
                                    }, void 0, false, {
                                        fileName: "[project]/apps/shell/src/components/Sidebar.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this),
                                    isSameZone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                                        href: item.href,
                                        "aria-current": isActive ? "page" : undefined,
                                        "aria-label": ariaLabel,
                                        sx: itemSx,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$sidebarStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sidebarStyles"].itemIcon,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/shell/src/components/Sidebar.tsx",
                                                lineNumber: 125,
                                                columnNumber: 21
                                            }, this),
                                            item.label
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/shell/src/components/Sidebar.tsx",
                                        lineNumber: 118,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        component: "a",
                                        href: item.href,
                                        "aria-current": isActive ? "page" : undefined,
                                        "aria-label": ariaLabel,
                                        onClick: (event)=>handleNavigation(event, item.href),
                                        sx: itemSx,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$sidebarStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sidebarStyles"].itemIcon,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/shell/src/components/Sidebar.tsx",
                                                lineNumber: 143,
                                                columnNumber: 21
                                            }, this),
                                            item.label
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/shell/src/components/Sidebar.tsx",
                                        lineNumber: 133,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, item.href, true, {
                                fileName: "[project]/apps/shell/src/components/Sidebar.tsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/shell/src/components/Sidebar.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/shell/src/components/Sidebar.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$sidebarStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sidebarStyles"].profile,
                "aria-label": "Perfil do usuário",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$sidebarStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sidebarStyles"].profileName,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$sidebar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDEBAR_USER"].fullName
                    }, void 0, false, {
                        fileName: "[project]/apps/shell/src/components/Sidebar.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$sidebarStyles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sidebarStyles"].profileEmail,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$sidebar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIDEBAR_USER"].email
                    }, void 0, false, {
                        fileName: "[project]/apps/shell/src/components/Sidebar.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/shell/src/components/Sidebar.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/shell/src/components/Sidebar.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=apps_shell_src_033x8ln._.js.map