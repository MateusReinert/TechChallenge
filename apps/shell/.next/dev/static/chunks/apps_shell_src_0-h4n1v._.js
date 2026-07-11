(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/shell/src/styles/buttonStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buttonStyles",
    ()=>buttonStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/tokens.ts [app-client] (ecmascript)");
;
const buttonStyles = {
    base: {
        height: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizes"].buttonHeight,
        px: "16px",
        py: "8px",
        borderRadius: "8px",
        fontSize: 14,
        fontWeight: 500,
        textTransform: "none"
    },
    primary: {
        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500],
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].background.default,
        "&:hover": {
            bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[600]
        }
    },
    outlined: {
        bgcolor: "transparent",
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500],
        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500]}`,
        "&:hover": {
            bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[100],
            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500]}`
        }
    },
    ghost: {
        bgcolor: "transparent",
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500],
        "&:hover": {
            bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[100]
        }
    },
    danger: {
        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].danger[500],
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].background.default,
        "&:hover": {
            bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].danger[700]
        }
    },
    dangerOutlined: {
        bgcolor: "transparent",
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].danger[500],
        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].danger[500]}`,
        "&:hover": {
            bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].error[100],
            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].danger[700]}`,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].danger[700]
        }
    },
    disabled: {
        "&.Mui-disabled": {
            bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[300],
            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[400],
            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[300]}`
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/components/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Button/Button.mjs [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$buttonStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/buttonStyles.ts [app-client] (ecmascript)");
;
;
;
function Button({ variantType = "primary", children, sx, disabled = false, type = "button", ...props }) {
    const muiVariant = variantType === "primary" || variantType === "danger" ? "contained" : variantType === "outlined" || variantType === "dangerOutlined" ? "outlined" : "text";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
        type: type,
        variant: muiVariant,
        disableElevation: true,
        disabled: disabled,
        sx: [
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$buttonStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonStyles"].base,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$buttonStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonStyles"][variantType],
            ...disabled ? [
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$buttonStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonStyles"].disabled
            ] : [],
            ...Array.isArray(sx) ? sx : sx ? [
                sx
            ] : []
        ],
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/shell/src/components/Button.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/styles/feedbackSnackbarStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "feedbackSnackbarStyles",
    ()=>feedbackSnackbarStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/tokens.ts [app-client] (ecmascript)");
;
const feedbackSnackbarStyles = {
    success: {
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].success[100],
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].success[700],
        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].success[300]}`
    },
    error: {
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].error[100],
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].error[700],
        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].error[300]}`
    },
    content: {
        width: "100%",
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].md,
        padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md} ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg}`,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].body,
        fontWeight: 600,
        boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadow"].lg
    },
    alertParts: {
        "& .MuiAlert-icon": {
            color: "inherit"
        },
        "& .MuiAlert-action": {
            color: "inherit"
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/components/FeedbackSnackbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeedbackSnackbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Snackbar$2f$Snackbar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snackbar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Snackbar/Snackbar.mjs [app-client] (ecmascript) <export default as Snackbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Alert$2f$Alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Alert/Alert.mjs [app-client] (ecmascript) <export default as Alert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$feedbackSnackbarStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/feedbackSnackbarStyles.ts [app-client] (ecmascript)");
"use client";
;
;
;
function FeedbackSnackbar({ open, message, type = "success", onClose }) {
    const variantStyle = type === "success" ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$feedbackSnackbarStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["feedbackSnackbarStyles"].success : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$feedbackSnackbarStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["feedbackSnackbarStyles"].error;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Snackbar$2f$Snackbar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snackbar$3e$__["Snackbar"], {
        open: open,
        autoHideDuration: 3000,
        onClose: onClose,
        anchorOrigin: {
            vertical: "top",
            horizontal: "right"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Alert$2f$Alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
            onClose: onClose,
            severity: type,
            variant: "filled",
            role: "alert",
            "aria-live": "assertive",
            sx: [
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$feedbackSnackbarStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["feedbackSnackbarStyles"].content,
                variantStyle,
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$feedbackSnackbarStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["feedbackSnackbarStyles"].alertParts
            ],
            children: message
        }, void 0, false, {
            fileName: "[project]/apps/shell/src/components/FeedbackSnackbar.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/shell/src/components/FeedbackSnackbar.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = FeedbackSnackbar;
var _c;
__turbopack_context__.k.register(_c, "FeedbackSnackbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/styles/inputStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "inputStyles",
    ()=>inputStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/tokens.ts [app-client] (ecmascript)");
;
const inputStyles = {
    root: {
        width: "100%"
    },
    field: {
        "& .MuiOutlinedInput-root": {
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].sm,
            height: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizes"].inputHeight,
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].background.default
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[300]
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500]
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500],
            borderWidth: "1px"
        },
        "& .MuiInputLabel-root": {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[400]
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500]
        },
        "& .MuiInputBase-input": {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].body,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[900]
        }
    },
    helperText: {
        "& .MuiFormHelperText-root": {
            marginLeft: 0,
            marginTop: "6px",
            fontSize: "12px",
            fontWeight: 500
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/components/Input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/TextField/TextField.mjs [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/inputStyles.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Input({ sx, error, helperText, id, label, ...props }) {
    const inputId = id || (typeof label === "string" ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
        id: inputId,
        variant: "outlined",
        fullWidth: true,
        error: error,
        helperText: helperText,
        label: label,
        "aria-invalid": error ? "true" : "false",
        ...props,
        sx: [
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputStyles"].root,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputStyles"].field,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputStyles"].helperText,
            ...Array.isArray(sx) ? sx : sx ? [
                sx
            ] : []
        ]
    }, void 0, false, {
        fileName: "[project]/apps/shell/src/components/Input.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = Input;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/styles/filterBarStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterBarStyles",
    ()=>filterBarStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/tokens.ts [app-client] (ecmascript)");
;
const filterBarStyles = {
    root: {
        display: "flex",
        alignItems: "center",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].sm,
        flexWrap: "wrap",
        width: "100%"
    },
    search: {
        width: {
            xs: "100%",
            lg: 280
        }
    },
    input: {
        "& .MuiOutlinedInput-root": {
            height: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizes"].buttonHeight,
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].full,
            bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].background.default
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[200]
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500]
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500],
            borderWidth: "1px"
        },
        "& .MuiInputBase-input": {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].body,
            fontWeight: 500,
            py: 0
        },
        "& .MuiInputAdornment-root .MuiSvgIcon-root": {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[500]
        }
    },
    filterButton: {
        height: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizes"].buttonHeight,
        px: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg,
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].full,
        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[200]}`,
        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].background.default,
        display: "inline-flex",
        alignItems: "center",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].sm,
        transition: "border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease",
        whiteSpace: "nowrap",
        "&:hover": {
            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500],
            bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[50]
        },
        "&:focus-visible": {
            outline: `2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500]}`,
            outlineOffset: "2px"
        }
    },
    filterButtonActive: {
        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500],
        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[100]
    },
    filterButtonText: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].body,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[900],
        fontWeight: 600
    },
    filterIcon: {
        fontSize: 18,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[500]
    },
    clearButton: {
        height: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizes"].buttonHeight,
        px: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg,
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].full,
        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500]}`,
        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].background.default,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[600],
        display: "inline-flex",
        alignItems: "center",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].sm,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].body,
        fontWeight: 700,
        transition: "border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease",
        "&:hover": {
            bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[100]
        },
        "&:focus-visible": {
            outline: `2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500]}`,
            outlineOffset: "2px"
        }
    },
    clearButtonDisabled: {
        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[200],
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[400],
        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[50],
        cursor: "not-allowed",
        "&:hover": {
            bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[50]
        }
    },
    clearIcon: {
        fontSize: 18
    },
    clearSearchButton: {
        width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizes"].icon,
        height: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizes"].icon,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[500]
    },
    menuPaper: {
        mt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].sm,
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].md,
        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[200]}`,
        boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadow"].md,
        minWidth: 180
    },
    menuItem: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].body,
        fontWeight: 600,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[600],
        "&.Mui-selected": {
            bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[100],
            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[600]
        },
        "&.Mui-selected:hover": {
            bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[100]
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/components/FilterBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FilterBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$ButtonBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ButtonBase$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/ButtonBase/ButtonBase.mjs [app-client] (ecmascript) <export default as ButtonBase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.mjs [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$InputAdornment$2f$InputAdornment$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/InputAdornment/InputAdornment.mjs [app-client] (ecmascript) <export default as InputAdornment>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Menu/Menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/MenuItem/MenuItem.mjs [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.mjs [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$SearchRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/SearchRounded.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$CloseRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/CloseRounded.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$TuneRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/TuneRounded.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$KeyboardArrowDownRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/KeyboardArrowDownRounded.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$filterBarStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/filterBarStyles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function FilterSelect({ filter, value, onChange }) {
    _s();
    const [anchorElement, setAnchorElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const open = Boolean(anchorElement);
    const selectedOption = filter.options.find((option)=>option.value === value);
    const displayValue = selectedOption?.label || filter.label;
    const isActive = Boolean(value);
    function handleOpen(event) {
        setAnchorElement(event.currentTarget);
    }
    function handleClose() {
        setAnchorElement(null);
    }
    function handleSelect(selectedValue) {
        onChange(selectedValue);
        handleClose();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$ButtonBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ButtonBase$3e$__["ButtonBase"], {
                type: "button",
                "aria-label": filter.ariaLabel,
                "aria-haspopup": "menu",
                "aria-expanded": open ? "true" : "false",
                onClick: handleOpen,
                sx: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$filterBarStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterBarStyles"].filterButton,
                    ...isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$filterBarStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterBarStyles"].filterButtonActive : {}
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$filterBarStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterBarStyles"].filterButtonText,
                        children: displayValue
                    }, void 0, false, {
                        fileName: "[project]/apps/shell/src/components/FilterBar.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$KeyboardArrowDownRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$filterBarStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterBarStyles"].filterIcon
                    }, void 0, false, {
                        fileName: "[project]/apps/shell/src/components/FilterBar.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/shell/src/components/FilterBar.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Menu$2f$Menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                anchorEl: anchorElement,
                open: open,
                onClose: handleClose,
                slotProps: {
                    paper: {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$filterBarStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterBarStyles"].menuPaper
                    }
                },
                children: filter.options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                        selected: option.value === value,
                        onClick: ()=>handleSelect(option.value),
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$filterBarStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterBarStyles"].menuItem,
                        children: option.label
                    }, `${filter.key}-${option.value || "all"}`, false, {
                        fileName: "[project]/apps/shell/src/components/FilterBar.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/components/FilterBar.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(FilterSelect, "n3USGL27CN0sc1Y0NEDixePGg2c=");
_c = FilterSelect;
function FilterBar({ value, filters, searchPlaceholder = "Buscar...", onChange, onClear }) {
    const hasActiveFilters = Object.values(value).some(Boolean);
    function updateFilter(field, fieldValue) {
        onChange({
            ...value,
            [field]: fieldValue
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$filterBarStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterBarStyles"].root,
        "aria-label": "Filtros",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$filterBarStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterBarStyles"].search,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    label: "",
                    placeholder: searchPlaceholder,
                    value: value.search,
                    onChange: (event)=>updateFilter("search", event.target.value),
                    slotProps: {
                        input: {
                            startAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$InputAdornment$2f$InputAdornment$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                                position: "start",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$SearchRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "small"
                                }, void 0, false, {
                                    fileName: "[project]/apps/shell/src/components/FilterBar.tsx",
                                    lineNumber: 163,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/FilterBar.tsx",
                                lineNumber: 162,
                                columnNumber: 17
                            }, this),
                            endAdornment: value.search ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$InputAdornment$2f$InputAdornment$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                                position: "end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                    type: "button",
                                    size: "small",
                                    "aria-label": "Limpar busca",
                                    onClick: ()=>updateFilter("search", ""),
                                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$filterBarStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterBarStyles"].clearSearchButton,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$CloseRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        fontSize: "small"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/shell/src/components/FilterBar.tsx",
                                        lineNumber: 175,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/shell/src/components/FilterBar.tsx",
                                    lineNumber: 168,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/FilterBar.tsx",
                                lineNumber: 167,
                                columnNumber: 17
                            }, this) : undefined
                        }
                    },
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$filterBarStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterBarStyles"].input
                }, void 0, false, {
                    fileName: "[project]/apps/shell/src/components/FilterBar.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/components/FilterBar.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            filters.map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSelect, {
                    filter: filter,
                    value: value[filter.key] || "",
                    onChange: (selectedValue)=>updateFilter(filter.key, selectedValue)
                }, filter.key, false, {
                    fileName: "[project]/apps/shell/src/components/FilterBar.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ButtonBase$2f$ButtonBase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ButtonBase$3e$__["ButtonBase"], {
                type: "button",
                "aria-label": "Limpar filtros",
                disabled: !hasActiveFilters,
                onClick: onClear,
                sx: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$filterBarStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterBarStyles"].clearButton,
                    ...!hasActiveFilters ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$filterBarStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterBarStyles"].clearButtonDisabled : {}
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$TuneRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$filterBarStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterBarStyles"].clearIcon
                    }, void 0, false, {
                        fileName: "[project]/apps/shell/src/components/FilterBar.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    "Limpar"
                ]
            }, void 0, true, {
                fileName: "[project]/apps/shell/src/components/FilterBar.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/shell/src/components/FilterBar.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
_c1 = FilterBar;
var _c, _c1;
__turbopack_context__.k.register(_c, "FilterSelect");
__turbopack_context__.k.register(_c1, "FilterBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/styles/loadingOverlayStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadingOverlayStyles",
    ()=>loadingOverlayStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/tokens.ts [app-client] (ecmascript)");
;
const loadingOverlayStyles = {
    backdrop: {
        zIndex: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zIndex"].overlay,
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].background.overlay,
        backdropFilter: "blur(2px)"
    },
    container: {
        width: "320px",
        maxWidth: "90vw",
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].background.default,
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].lg,
        padding: `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xxl} ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xl}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg,
        boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadow"].lg
    },
    spinner: {
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500]
    },
    title: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].body,
        fontWeight: 600,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[900],
        textAlign: "center"
    },
    subtitle: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].label,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[500],
        textAlign: "center"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/components/LoadingOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Backdrop$2f$Backdrop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Backdrop$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Backdrop/Backdrop.mjs [app-client] (ecmascript) <export default as Backdrop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/CircularProgress/CircularProgress.mjs [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.mjs [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$loadingOverlayStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/loadingOverlayStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/tokens.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function LoadingOverlay({ open, message = "Processando..." }) {
    const descriptionId = "loading-overlay-description";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Backdrop$2f$Backdrop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Backdrop$3e$__["Backdrop"], {
        open: open,
        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$loadingOverlayStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadingOverlayStyles"].backdrop,
        role: "status",
        "aria-live": "polite",
        "aria-busy": open,
        "aria-describedby": descriptionId,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$loadingOverlayStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadingOverlayStyles"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                    size: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizes"].spinner,
                    thickness: 4,
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$loadingOverlayStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadingOverlayStyles"].spinner,
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/apps/shell/src/components/LoadingOverlay.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$loadingOverlayStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadingOverlayStyles"].title,
                    children: message
                }, void 0, false, {
                    fileName: "[project]/apps/shell/src/components/LoadingOverlay.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    id: descriptionId,
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$loadingOverlayStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadingOverlayStyles"].subtitle,
                    children: "Aguarde só um instante."
                }, void 0, false, {
                    fileName: "[project]/apps/shell/src/components/LoadingOverlay.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/shell/src/components/LoadingOverlay.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/shell/src/components/LoadingOverlay.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = LoadingOverlay;
var _c;
__turbopack_context__.k.register(_c, "LoadingOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/styles/pageHeaderStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pageHeaderStyles",
    ()=>pageHeaderStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/tokens.ts [app-client] (ecmascript)");
;
const pageHeaderStyles = {
    root: {
        mb: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg
    },
    title: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].title,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[900],
        lineHeight: 1.2
    },
    breadcrumb: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].body,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[500],
        mt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xs,
        display: "flex",
        alignItems: "center",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xs
    },
    breadcrumbGroup: {
        display: "flex",
        alignItems: "center"
    },
    breadcrumbItem: {
        cursor: "default"
    },
    breadcrumbSeparator: {
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[400]
    },
    breadcrumbLast: {
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[900],
        fontWeight: 500
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/components/PageHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PageHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.mjs [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$pageHeaderStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/pageHeaderStyles.ts [app-client] (ecmascript)");
"use client";
;
;
;
function PageHeader({ title, breadcrumb }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$pageHeaderStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pageHeaderStyles"].root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$pageHeaderStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pageHeaderStyles"].title,
                children: title
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/components/PageHeader.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$pageHeaderStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pageHeaderStyles"].breadcrumb,
                children: breadcrumb.map((item, index)=>{
                    const isLast = index === breadcrumb.length - 1;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$pageHeaderStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pageHeaderStyles"].breadcrumbGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: isLast ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$pageHeaderStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pageHeaderStyles"].breadcrumbLast : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$pageHeaderStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pageHeaderStyles"].breadcrumbItem,
                                children: item
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/PageHeader.tsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, this),
                            !isLast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$pageHeaderStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pageHeaderStyles"].breadcrumbSeparator,
                                children: ">"
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/PageHeader.tsx",
                                lineNumber: 41,
                                columnNumber: 17
                            }, this)
                        ]
                    }, `${item}-${index}`, true, {
                        fileName: "[project]/apps/shell/src/components/PageHeader.tsx",
                        lineNumber: 26,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/components/PageHeader.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/shell/src/components/PageHeader.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = PageHeader;
var _c;
__turbopack_context__.k.register(_c, "PageHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/utils/fileUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "base64ToBlob",
    ()=>base64ToBlob,
    "createObjectUrlFromBase64",
    ()=>createObjectUrlFromBase64,
    "readFileAsBase64",
    ()=>readFileAsBase64
]);
function readFileAsBase64(file) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = ()=>{
            resolve(String(reader.result));
        };
        reader.onerror = ()=>{
            reject(new Error("Não foi possível ler o arquivo."));
        };
        reader.readAsDataURL(file);
    });
}
function base64ToBlob(base64, type) {
    const byteCharacters = atob(base64.split(",")[1]);
    const byteNumbers = Array.from(byteCharacters).map((character)=>character.charCodeAt(0));
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([
        byteArray
    ], {
        type
    });
}
function createObjectUrlFromBase64(base64, type) {
    const blob = base64ToBlob(base64, type);
    return URL.createObjectURL(blob);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/styles/attachmentPreviewModalStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attachmentPreviewModalStyles",
    ()=>attachmentPreviewModalStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/tokens.ts [app-client] (ecmascript)");
;
const attachmentPreviewModalStyles = {
    overlay: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        p: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xl
    },
    container: {
        width: {
            xs: "100%",
            md: "90%",
            lg: "80%"
        },
        maxWidth: 1100,
        height: {
            xs: "90%",
            md: "85%"
        },
        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].background.default,
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].lg,
        boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadow"].lg,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xl,
        py: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg,
        borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[200]}`
    },
    titleWrapper: {
        display: "flex",
        alignItems: "center",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].sm,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[900],
        minWidth: 0
    },
    title: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].subtitle,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    },
    content: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[100],
        overflow: "hidden",
        p: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg
    },
    footer: {
        display: "flex",
        justifyContent: "flex-end",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md,
        px: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xl,
        py: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg,
        borderTop: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[200]}`
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/components/AttachmentPreviewModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AttachmentPreviewModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.mjs [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Modal$2f$Modal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Modal/Modal.mjs [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.mjs [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$CloseRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/CloseRounded.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$PictureAsPdfRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/PictureAsPdfRounded.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertPhotoRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/InsertPhotoRounded.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$fileUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/utils/fileUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$attachmentPreviewModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/attachmentPreviewModalStyles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function AttachmentPreviewModal({ open, attachment, onClose }) {
    _s();
    const objectUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AttachmentPreviewModal.useMemo[objectUrl]": ()=>{
            if (!attachment) return "";
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$fileUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createObjectUrlFromBase64"])(attachment.base64, attachment.type);
        }
    }["AttachmentPreviewModal.useMemo[objectUrl]"], [
        attachment
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AttachmentPreviewModal.useEffect": ()=>{
            return ({
                "AttachmentPreviewModal.useEffect": ()=>{
                    if (objectUrl) {
                        URL.revokeObjectURL(objectUrl);
                    }
                }
            })["AttachmentPreviewModal.useEffect"];
        }
    }["AttachmentPreviewModal.useEffect"], [
        objectUrl
    ]);
    if (!attachment) return null;
    const currentAttachment = attachment;
    const isImage = currentAttachment.type.startsWith("image/");
    const isPdf = currentAttachment.type === "application/pdf";
    function handleDownload() {
        const link = document.createElement("a");
        link.href = objectUrl;
        link.download = currentAttachment.name;
        link.click();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Modal$2f$Modal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$attachmentPreviewModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachmentPreviewModalStyles"].overlay,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$attachmentPreviewModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachmentPreviewModalStyles"].container,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$attachmentPreviewModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachmentPreviewModalStyles"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$attachmentPreviewModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachmentPreviewModalStyles"].titleWrapper,
                                children: [
                                    isPdf ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$PictureAsPdfRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/apps/shell/src/components/AttachmentPreviewModal.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertPhotoRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/apps/shell/src/components/AttachmentPreviewModal.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$attachmentPreviewModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachmentPreviewModalStyles"].title,
                                        children: currentAttachment.name
                                    }, void 0, false, {
                                        fileName: "[project]/apps/shell/src/components/AttachmentPreviewModal.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/shell/src/components/AttachmentPreviewModal.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                type: "button",
                                onClick: onClose,
                                "aria-label": "Fechar visualização do comprovante",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$CloseRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/shell/src/components/AttachmentPreviewModal.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/AttachmentPreviewModal.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/shell/src/components/AttachmentPreviewModal.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$attachmentPreviewModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachmentPreviewModalStyles"].content,
                        children: [
                            isImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: objectUrl,
                                alt: currentAttachment.name,
                                style: {
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    objectFit: "contain"
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/AttachmentPreviewModal.tsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, this),
                            isPdf && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                src: objectUrl,
                                title: currentAttachment.name,
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    border: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/AttachmentPreviewModal.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/shell/src/components/AttachmentPreviewModal.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$attachmentPreviewModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachmentPreviewModalStyles"].footer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                variantType: "outlined",
                                onClick: onClose,
                                children: "Fechar"
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/AttachmentPreviewModal.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                variantType: "primary",
                                onClick: handleDownload,
                                children: "Baixar"
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/AttachmentPreviewModal.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/shell/src/components/AttachmentPreviewModal.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/shell/src/components/AttachmentPreviewModal.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/shell/src/components/AttachmentPreviewModal.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/shell/src/components/AttachmentPreviewModal.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(AttachmentPreviewModal, "Idr3gSCIbbrdXlB2K1/SaqPaCZo=");
_c = AttachmentPreviewModal;
var _c;
__turbopack_context__.k.register(_c, "AttachmentPreviewModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/styles/confirmationModalStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "confirmationModalContainerStyle",
    ()=>confirmationModalContainerStyle,
    "confirmationModalDangerButtonStyle",
    ()=>confirmationModalDangerButtonStyle,
    "confirmationModalDescriptionStyle",
    ()=>confirmationModalDescriptionStyle,
    "confirmationModalFooterStyle",
    ()=>confirmationModalFooterStyle,
    "confirmationModalHeaderStyle",
    ()=>confirmationModalHeaderStyle,
    "confirmationModalOverlayStyle",
    ()=>confirmationModalOverlayStyle,
    "confirmationModalTitleStyle",
    ()=>confirmationModalTitleStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/tokens.ts [app-client] (ecmascript)");
;
const confirmationModalOverlayStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xl
};
const confirmationModalContainerStyle = {
    width: "100%",
    maxWidth: "440px",
    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].background.default,
    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].lg,
    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[200]}`,
    boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadow"].md,
    padding: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xl
};
const confirmationModalHeaderStyle = {
    display: "flex",
    flexDirection: "column",
    gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].sm,
    marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xl
};
const confirmationModalTitleStyle = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].title,
    lineHeight: 1.3,
    color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[900]
};
const confirmationModalDescriptionStyle = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].body,
    lineHeight: 1.5,
    color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[500]
};
const confirmationModalFooterStyle = {
    display: "flex",
    justifyContent: "flex-end",
    gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md,
    flexWrap: "wrap"
};
const confirmationModalDangerButtonStyle = {
    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].danger[500],
    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].danger[500],
    color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].background.default,
    "&:hover": {
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].danger[700],
        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].danger[700]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/components/ConfirmationModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConfirmationModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Modal$2f$Modal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Modal/Modal.mjs [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.mjs [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$confirmationModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/confirmationModalStyles.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function ConfirmationModal({ open, title, description, confirmLabel = "Confirmar", cancelLabel = "Cancelar", danger = false, loading = false, onClose, onConfirm }) {
    const titleId = "confirmation-modal-title";
    const descriptionId = "confirmation-modal-description";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Modal$2f$Modal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
        open: open,
        onClose: onClose,
        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$confirmationModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["confirmationModalOverlayStyle"],
        "aria-labelledby": titleId,
        "aria-describedby": descriptionId,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": titleId,
            "aria-describedby": descriptionId,
            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$confirmationModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["confirmationModalContainerStyle"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$confirmationModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["confirmationModalHeaderStyle"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            id: titleId,
                            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$confirmationModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["confirmationModalTitleStyle"],
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/ConfirmationModal.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            id: descriptionId,
                            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$confirmationModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["confirmationModalDescriptionStyle"],
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/ConfirmationModal.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/shell/src/components/ConfirmationModal.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$confirmationModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["confirmationModalFooterStyle"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            variantType: "ghost",
                            onClick: onClose,
                            disabled: loading,
                            "aria-label": cancelLabel,
                            children: cancelLabel
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/ConfirmationModal.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            variantType: danger ? "danger" : "primary",
                            onClick: onConfirm,
                            disabled: loading,
                            "aria-label": confirmLabel,
                            children: loading ? "Processando..." : confirmLabel
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/ConfirmationModal.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/shell/src/components/ConfirmationModal.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/shell/src/components/ConfirmationModal.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/shell/src/components/ConfirmationModal.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = ConfirmationModal;
var _c;
__turbopack_context__.k.register(_c, "ConfirmationModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/styles/statusTagStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "statusTagStyles",
    ()=>statusTagStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/tokens.ts [app-client] (ecmascript)");
;
const statusTagStyles = {
    base: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        px: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].sm,
        py: "2px",
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].full,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].label,
        fontSize: "12px",
        fontWeight: 500,
        whiteSpace: "nowrap"
    },
    success: {
        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].success[100],
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].success[700]
    },
    error: {
        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].error[100],
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].error[700]
    },
    pending: {
        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[100],
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[600]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/constants/transaction.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TRANSACTION_ACCOUNT_OPTIONS",
    ()=>TRANSACTION_ACCOUNT_OPTIONS,
    "TRANSACTION_ATTACHMENT_ACCEPT",
    ()=>TRANSACTION_ATTACHMENT_ACCEPT,
    "TRANSACTION_ATTACHMENT_MAX_SIZE",
    ()=>TRANSACTION_ATTACHMENT_MAX_SIZE,
    "TRANSACTION_ATTACHMENT_MAX_SIZE_LABEL",
    ()=>TRANSACTION_ATTACHMENT_MAX_SIZE_LABEL,
    "TRANSACTION_BREADCRUMB",
    ()=>TRANSACTION_BREADCRUMB,
    "TRANSACTION_CATEGORY_OPTIONS",
    ()=>TRANSACTION_CATEGORY_OPTIONS,
    "TRANSACTION_ITEMS_PER_PAGE",
    ()=>TRANSACTION_ITEMS_PER_PAGE,
    "TRANSACTION_MODAL_ACCOUNT_OPTIONS",
    ()=>TRANSACTION_MODAL_ACCOUNT_OPTIONS,
    "TRANSACTION_MODAL_CATEGORY_OPTIONS",
    ()=>TRANSACTION_MODAL_CATEGORY_OPTIONS,
    "TRANSACTION_MODAL_OPERATION_OPTIONS",
    ()=>TRANSACTION_MODAL_OPERATION_OPTIONS,
    "TRANSACTION_MODAL_TYPE_OPTIONS",
    ()=>TRANSACTION_MODAL_TYPE_OPTIONS,
    "TRANSACTION_OPERATION_LABEL",
    ()=>TRANSACTION_OPERATION_LABEL,
    "TRANSACTION_OPERATION_OPTIONS",
    ()=>TRANSACTION_OPERATION_OPTIONS,
    "TRANSACTION_SEARCH_PLACEHOLDER",
    ()=>TRANSACTION_SEARCH_PLACEHOLDER,
    "TRANSACTION_STATUS_LABEL",
    ()=>TRANSACTION_STATUS_LABEL,
    "TRANSACTION_STATUS_OPTIONS",
    ()=>TRANSACTION_STATUS_OPTIONS,
    "TRANSACTION_TYPE_LABEL",
    ()=>TRANSACTION_TYPE_LABEL,
    "TRANSACTION_TYPE_OPTIONS",
    ()=>TRANSACTION_TYPE_OPTIONS
]);
const TRANSACTION_STATUS_LABEL = {
    success: "Sucesso",
    error: "Falha",
    pending: "Pendente"
};
const TRANSACTION_TYPE_LABEL = {
    income: "Entrada",
    expense: "Saída"
};
const TRANSACTION_TYPE_OPTIONS = [
    {
        label: "Todas as naturezas",
        value: ""
    },
    {
        label: "Entrada",
        value: "income"
    },
    {
        label: "Saída",
        value: "expense"
    }
];
const TRANSACTION_OPERATION_LABEL = {
    deposit: "Depósito",
    transfer: "Transferência",
    payment: "Pagamento",
    purchase: "Compra",
    receipt: "Recebimento"
};
const TRANSACTION_OPERATION_OPTIONS = [
    {
        label: "Todos os tipos",
        value: ""
    },
    {
        label: "Depósito",
        value: "deposit"
    },
    {
        label: "Transferência",
        value: "transfer"
    },
    {
        label: "Pagamento",
        value: "payment"
    },
    {
        label: "Compra",
        value: "purchase"
    },
    {
        label: "Recebimento",
        value: "receipt"
    }
];
const TRANSACTION_STATUS_OPTIONS = [
    {
        label: "Todos os status",
        value: ""
    },
    {
        label: "Sucesso",
        value: "success"
    },
    {
        label: "Falha",
        value: "error"
    },
    {
        label: "Pendente",
        value: "pending"
    }
];
const TRANSACTION_CATEGORY_OPTIONS = [
    {
        label: "Todas as categorias",
        value: ""
    },
    {
        label: "Alimentação",
        value: "Alimentação"
    },
    {
        label: "Transporte",
        value: "Transporte"
    },
    {
        label: "Salário",
        value: "Salário"
    },
    {
        label: "Lazer",
        value: "Lazer"
    },
    {
        label: "Moradia",
        value: "Moradia"
    },
    {
        label: "Saúde",
        value: "Saúde"
    },
    {
        label: "Investimentos",
        value: "Investimentos"
    },
    {
        label: "Extra",
        value: "Extra"
    },
    {
        label: "Venda",
        value: "Venda"
    },
    {
        label: "Benefício",
        value: "Benefício"
    }
];
const TRANSACTION_ACCOUNT_OPTIONS = [
    {
        label: "Todas as contas",
        value: ""
    },
    {
        label: "Conta corrente",
        value: "Conta corrente"
    },
    {
        label: "Cartão de crédito",
        value: "Cartão de crédito"
    },
    {
        label: "Carteira",
        value: "Carteira"
    },
    {
        label: "Investimentos",
        value: "Investimentos"
    }
];
const TRANSACTION_MODAL_TYPE_OPTIONS = TRANSACTION_TYPE_OPTIONS.filter(_c = (option)=>option.value !== "");
_c1 = TRANSACTION_MODAL_TYPE_OPTIONS;
const TRANSACTION_MODAL_OPERATION_OPTIONS = TRANSACTION_OPERATION_OPTIONS.filter(_c2 = (option)=>option.value !== "");
_c3 = TRANSACTION_MODAL_OPERATION_OPTIONS;
const TRANSACTION_MODAL_CATEGORY_OPTIONS = TRANSACTION_CATEGORY_OPTIONS.filter(_c4 = (option)=>option.value !== "");
_c5 = TRANSACTION_MODAL_CATEGORY_OPTIONS;
const TRANSACTION_MODAL_ACCOUNT_OPTIONS = TRANSACTION_ACCOUNT_OPTIONS.filter(_c6 = (option)=>option.value !== "");
_c7 = TRANSACTION_MODAL_ACCOUNT_OPTIONS;
const TRANSACTION_ITEMS_PER_PAGE = 10;
const TRANSACTION_BREADCRUMB = [
    "Movimentações",
    "Transações"
];
const TRANSACTION_SEARCH_PLACEHOLDER = "Buscar transação";
const TRANSACTION_ATTACHMENT_ACCEPT = ".pdf,.png,.jpg,.jpeg";
const TRANSACTION_ATTACHMENT_MAX_SIZE = 5 * 1024 * 1024;
const TRANSACTION_ATTACHMENT_MAX_SIZE_LABEL = "5 MB";
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "TRANSACTION_MODAL_TYPE_OPTIONS$TRANSACTION_TYPE_OPTIONS.filter");
__turbopack_context__.k.register(_c1, "TRANSACTION_MODAL_TYPE_OPTIONS");
__turbopack_context__.k.register(_c2, "TRANSACTION_MODAL_OPERATION_OPTIONS$TRANSACTION_OPERATION_OPTIONS.filter");
__turbopack_context__.k.register(_c3, "TRANSACTION_MODAL_OPERATION_OPTIONS");
__turbopack_context__.k.register(_c4, "TRANSACTION_MODAL_CATEGORY_OPTIONS$TRANSACTION_CATEGORY_OPTIONS.filter");
__turbopack_context__.k.register(_c5, "TRANSACTION_MODAL_CATEGORY_OPTIONS");
__turbopack_context__.k.register(_c6, "TRANSACTION_MODAL_ACCOUNT_OPTIONS$TRANSACTION_ACCOUNT_OPTIONS.filter");
__turbopack_context__.k.register(_c7, "TRANSACTION_MODAL_ACCOUNT_OPTIONS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/components/StatusTag.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatusTag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$statusTagStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/statusTagStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/constants/transaction.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function StatusTag({ status, label }) {
    const displayLabel = label ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_STATUS_LABEL"][status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        component: "span",
        role: "status",
        "aria-label": `Status: ${displayLabel}`,
        sx: [
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$statusTagStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusTagStyles"].base,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$statusTagStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusTagStyles"][status]
        ],
        children: displayLabel
    }, void 0, false, {
        fileName: "[project]/apps/shell/src/components/StatusTag.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = StatusTag;
var _c;
__turbopack_context__.k.register(_c, "StatusTag");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/styles/transactionDetailsStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transactionDetailsStyles",
    ()=>transactionDetailsStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/tokens.ts [app-client] (ecmascript)");
;
const transactionDetailsStyles = {
    root: {
        width: {
            xs: "100%",
            lg: 320
        },
        minWidth: {
            xs: "100%",
            lg: 320
        },
        minHeight: {
            xs: "auto",
            lg: "100vh"
        },
        p: {
            xs: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg,
            md: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xl
        },
        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].background.default,
        borderLeft: {
            xs: "none",
            lg: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[200]}`
        },
        borderTop: {
            xs: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[200]}`,
            lg: "none"
        },
        display: "flex",
        flexDirection: "column",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xl
    },
    summary: {
        display: "flex",
        flexDirection: "column",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg
    },
    title: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].subtitle,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[600]
    },
    content: {
        display: "flex",
        flexDirection: "column",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md
    },
    meta: {
        display: "flex",
        alignItems: "center",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].sm,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].body,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[400],
        flexWrap: "wrap"
    },
    amount: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].title,
        fontWeight: 600,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[900],
        wordBreak: "break-word"
    },
    detailsList: {
        display: "flex",
        flexDirection: "column",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xl
    },
    detailsItem: {
        display: "flex",
        flexDirection: "column",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xs,
        minWidth: 0
    },
    label: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].label,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[400]
    },
    value: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].body,
        fontWeight: 500,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[900],
        wordBreak: "break-word"
    },
    valueRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].sm,
        minWidth: 0
    },
    copyButton: {
        width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizes"].icon,
        height: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizes"].icon,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[500],
        flexShrink: 0,
        "&:hover": {
            bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[100],
            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500]
        },
        "&:focus-visible": {
            outline: `2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500]}`,
            outlineOffset: "2px"
        }
    },
    copyIcon: {
        fontSize: 16
    },
    copyFeedback: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].label,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].success[700],
        ml: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xs
    },
    attachmentCard: {
        display: "flex",
        flexDirection: "column",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md,
        p: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md,
        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[200]}`,
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].md,
        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[50]
    },
    attachmentHeader: {
        display: "flex",
        alignItems: "flex-start",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md,
        minWidth: 0
    },
    attachmentIconWrapper: {
        width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizes"].icon,
        height: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizes"].icon,
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].md,
        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[100],
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
    },
    attachmentIcon: {
        fontSize: 18
    },
    attachmentInfo: {
        display: "flex",
        flexDirection: "column",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xs,
        minWidth: 0
    },
    attachmentTitle: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].label,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[500]
    },
    attachmentName: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].body,
        fontWeight: 600,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[900],
        wordBreak: "break-word"
    },
    attachmentMeta: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].label,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[400]
    },
    attachmentActions: {
        display: "flex",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].sm,
        flexDirection: {
            xs: "column",
            sm: "row",
            lg: "column"
        }
    },
    actions: {
        display: "flex",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].sm,
        mt: "auto",
        flexDirection: {
            xs: "column",
            sm: "row",
            lg: "row"
        }
    },
    emptyText: {
        mt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].body,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[600],
        lineHeight: 1.5
    },
    attachmentsSection: {
        display: "flex",
        flexDirection: "column",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/components/TransactionAttachmentCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TransactionAttachmentCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.mjs [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AttachFileRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/AttachFileRounded.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/transactionDetailsStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$fileUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/utils/fileUtils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function formatFileSize(size) {
    if (size < 1024) {
        return `${size} B`;
    }
    if (size < 1024 * 1024) {
        return `${(size / 1024).toFixed(1)} KB`;
    }
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}
function TransactionAttachmentCard({ attachment, onView }) {
    function handleDownload() {
        const objectUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$fileUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createObjectUrlFromBase64"])(attachment.base64, attachment.type);
        const link = document.createElement("a");
        link.href = objectUrl;
        link.download = attachment.name;
        link.click();
        window.setTimeout(()=>{
            URL.revokeObjectURL(objectUrl);
        }, 1000);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].attachmentCard,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].attachmentHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].attachmentIconWrapper,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AttachFileRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].attachmentIcon
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/TransactionAttachmentCard.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/shell/src/components/TransactionAttachmentCard.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].attachmentInfo,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].attachmentName,
                                children: attachment.name
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/TransactionAttachmentCard.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].attachmentMeta,
                                children: formatFileSize(attachment.size)
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/TransactionAttachmentCard.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/shell/src/components/TransactionAttachmentCard.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/shell/src/components/TransactionAttachmentCard.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].attachmentActions,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variantType: "outlined",
                        fullWidth: true,
                        onClick: ()=>onView(attachment),
                        children: "Visualizar"
                    }, void 0, false, {
                        fileName: "[project]/apps/shell/src/components/TransactionAttachmentCard.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variantType: "primary",
                        fullWidth: true,
                        onClick: handleDownload,
                        children: "Baixar"
                    }, void 0, false, {
                        fileName: "[project]/apps/shell/src/components/TransactionAttachmentCard.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/shell/src/components/TransactionAttachmentCard.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/shell/src/components/TransactionAttachmentCard.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c = TransactionAttachmentCard;
var _c;
__turbopack_context__.k.register(_c, "TransactionAttachmentCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/components/TransactionDetailItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TransactionDetailItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.mjs [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.mjs [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$ContentCopy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/ContentCopy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/transactionDetailsStyles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function TransactionDetailItem({ label, value, copyable = false }) {
    _s();
    const [wasCopied, setWasCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const displayValue = value || "-";
    async function handleCopy() {
        if (!value) return;
        await navigator.clipboard.writeText(value);
        setWasCopied(true);
        window.setTimeout(()=>{
            setWasCopied(false);
        }, 1500);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].detailsItem,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].label,
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/components/TransactionDetailItem.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            copyable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].valueRow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].value,
                        children: displayValue
                    }, void 0, false, {
                        fileName: "[project]/apps/shell/src/components/TransactionDetailItem.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                        type: "button",
                        size: "small",
                        onClick: handleCopy,
                        disabled: !value,
                        "aria-label": `Copiar ${label}`,
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].copyButton,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$ContentCopy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].copyIcon
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/TransactionDetailItem.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/shell/src/components/TransactionDetailItem.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    wasCopied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        component: "span",
                        "aria-live": "polite",
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].copyFeedback,
                        children: "Copiado"
                    }, void 0, false, {
                        fileName: "[project]/apps/shell/src/components/TransactionDetailItem.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/shell/src/components/TransactionDetailItem.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].value,
                children: displayValue
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/components/TransactionDetailItem.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/shell/src/components/TransactionDetailItem.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(TransactionDetailItem, "AvuEAMN5CiCCN7GuQaEmwk4s4As=");
_c = TransactionDetailItem;
var _c;
__turbopack_context__.k.register(_c, "TransactionDetailItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/components/TransactionDetails.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TransactionDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.mjs [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$AttachmentPreviewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/AttachmentPreviewModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$ConfirmationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/ConfirmationModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$StatusTag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/StatusTag.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$TransactionAttachmentCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/TransactionAttachmentCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$TransactionDetailItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/TransactionDetailItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/constants/transaction.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/transactionDetailsStyles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function formatCurrency(value, type) {
    const formattedValue = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
    return `${type === "income" ? "+ " : "- "}${formattedValue}`;
}
function TransactionDetails({ transaction, onEdit, onDelete }) {
    _s();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedAttachment, setSelectedAttachment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    function handleConfirmDelete() {
        if (!transaction) return;
        onDelete?.(transaction.id);
        setIsDeleteModalOpen(false);
    }
    if (!transaction) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            component: "aside",
            "aria-label": "Detalhes da transação",
            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].root,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].title,
                    children: "Detalhes da transação"
                }, void 0, false, {
                    fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].emptyText,
                    children: "Selecione uma transação para ver os detalhes."
                }, void 0, false, {
                    fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this);
    }
    const transactionTypeLabel = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_TYPE_LABEL"][transaction.type];
    const transactionOperationLabel = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_OPERATION_LABEL"][transaction.operation];
    const formattedAmount = formatCurrency(transaction.amount, transaction.type);
    const attachments = transaction.attachments || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                component: "aside",
                "aria-label": `Detalhes da transação ${transaction.description}`,
                onClick: (event)=>event.stopPropagation(),
                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].root,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].summary,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].title,
                                children: "Detalhes da transação"
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].content,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].meta,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: transactionTypeLabel
                                            }, void 0, false, {
                                                fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: transactionOperationLabel
                                            }, void 0, false, {
                                                fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].amount,
                                        children: formattedAmount
                                    }, void 0, false, {
                                        fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$StatusTag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        status: transaction.status || "pending"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].detailsList,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$TransactionDetailItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "ID",
                                value: transaction.id,
                                copyable: true
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$TransactionDetailItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Descrição",
                                value: transaction.description
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$TransactionDetailItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Data",
                                value: transaction.date
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$TransactionDetailItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Natureza da transação",
                                value: transactionTypeLabel
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$TransactionDetailItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Tipo de transação",
                                value: transactionOperationLabel
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$TransactionDetailItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Categoria",
                                value: transaction.category
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$TransactionDetailItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Conta",
                                value: transaction.account
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$TransactionDetailItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Observação",
                                value: transaction.note
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    attachments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].attachmentsSection,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].attachmentTitle,
                                children: "Comprovantes"
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this),
                            attachments.map((attachment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$TransactionAttachmentCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    attachment: attachment,
                                    onView: setSelectedAttachment
                                }, attachment.id, false, {
                                    fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionDetailsStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionDetailsStyles"].actions,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                variantType: "outlined",
                                fullWidth: true,
                                "aria-label": `Editar transação ${transaction.description}`,
                                onClick: ()=>onEdit?.(transaction),
                                children: "Editar"
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                variantType: "dangerOutlined",
                                fullWidth: true,
                                "aria-label": `Excluir transação ${transaction.description}`,
                                onClick: ()=>setIsDeleteModalOpen(true),
                                children: "Excluir"
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$AttachmentPreviewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: Boolean(selectedAttachment),
                attachment: selectedAttachment,
                onClose: ()=>setSelectedAttachment(null)
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$ConfirmationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: isDeleteModalOpen,
                title: "Excluir transação?",
                description: "Essa ação não poderá ser desfeita. Tem certeza que deseja excluir esta transação?",
                confirmLabel: "Excluir",
                cancelLabel: "Cancelar",
                danger: true,
                onClose: ()=>setIsDeleteModalOpen(false),
                onConfirm: handleConfirmDelete
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/components/TransactionDetails.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(TransactionDetails, "kYsQixAyvhGUt3cuYi38CtzJKvg=");
_c = TransactionDetails;
var _c;
__turbopack_context__.k.register(_c, "TransactionDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/components/CurrencyInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CurrencyInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/Input.tsx [app-client] (ecmascript)");
"use client";
;
;
function formatCurrency(value) {
    const onlyNumbers = value.replace(/\D/g, "");
    if (!onlyNumbers) {
        return "";
    }
    return (Number(onlyNumbers) / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}
function CurrencyInput({ value = "", onChange, placeholder = "R$ 0,00", label = "Valor", id = "currency-input", ...props }) {
    function handleChange(rawValue) {
        const formattedValue = formatCurrency(rawValue);
        onChange?.(formattedValue);
    }
    function handlePaste(event) {
        event.preventDefault();
        const pastedValue = event.clipboardData.getData("text");
        handleChange(pastedValue);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...props,
        id: id,
        label: label,
        value: value,
        placeholder: placeholder,
        inputMode: "numeric",
        onPaste: handlePaste,
        onChange: (event)=>handleChange(event.target.value),
        slotProps: {
            htmlInput: {
                "aria-label": typeof label === "string" ? label : "Valor"
            }
        }
    }, void 0, false, {
        fileName: "[project]/apps/shell/src/components/CurrencyInput.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_c = CurrencyInput;
var _c;
__turbopack_context__.k.register(_c, "CurrencyInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/utils/dateUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDateInput",
    ()=>formatDateInput,
    "isValidDateBR",
    ()=>isValidDateBR,
    "parseDateBR",
    ()=>parseDateBR
]);
function formatDateInput(value) {
    const onlyNumbers = value.replace(/\D/g, "").slice(0, 8);
    if (onlyNumbers.length <= 2) {
        return onlyNumbers;
    }
    if (onlyNumbers.length <= 4) {
        return `${onlyNumbers.slice(0, 2)}/${onlyNumbers.slice(2)}`;
    }
    return `${onlyNumbers.slice(0, 2)}/${onlyNumbers.slice(2, 4)}/${onlyNumbers.slice(4)}`;
}
function isValidDateBR(value) {
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = value.match(regex);
    if (!match) {
        return false;
    }
    const day = Number(match[1]);
    const month = Number(match[2]);
    const year = Number(match[3]);
    if (year < 1900 || year > 2100) {
        return false;
    }
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}
function parseDateBR(value) {
    if (!isValidDateBR(value)) {
        return null;
    }
    const [day, month, year] = value.split("/").map(Number);
    return new Date(year, month - 1, day);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/components/DateInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DateInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.mjs [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$InputAdornment$2f$InputAdornment$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/InputAdornment/InputAdornment.mjs [app-client] (ecmascript) <export default as InputAdornment>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$CalendarMonthOutlined$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/CalendarMonthOutlined.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/utils/dateUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/tokens.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function formatToISO(date) {
    const [day, month, year] = date.split("/");
    if (!day || !month || !year || year.length !== 4) {
        return "";
    }
    return `${year}-${month}-${day}`;
}
function formatFromISO(date) {
    const [year, month, day] = date.split("-");
    if (!day || !month || !year) {
        return "";
    }
    return `${day}/${month}/${year}`;
}
function DateInput({ label, value, onChange, error = false, helperText }) {
    _s();
    const calendarInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    function handleChange(rawValue) {
        onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateInput"])(rawValue));
    }
    function handlePaste(event) {
        event.preventDefault();
        const pastedValue = event.clipboardData.getData("text");
        handleChange(pastedValue);
    }
    function openCalendar() {
        const calendarInput = calendarInputRef.current;
        if (!calendarInput) return;
        if (typeof calendarInput.showPicker === "function") {
            calendarInput.showPicker();
        } else {
            calendarInput.click();
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            position: "relative",
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: label,
                value: value,
                placeholder: "dd/mm/aaaa",
                inputMode: "numeric",
                onPaste: handlePaste,
                onChange: (event)=>handleChange(event.target.value),
                error: error,
                helperText: helperText,
                slotProps: {
                    htmlInput: {
                        maxLength: 10,
                        "aria-label": label
                    },
                    input: {
                        endAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$InputAdornment$2f$InputAdornment$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                            position: "end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                type: "button",
                                edge: "end",
                                "aria-label": "Abrir calendário",
                                onClick: openCalendar,
                                sx: {
                                    width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizes"].icon,
                                    height: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizes"].icon
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$CalendarMonthOutlined$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "small"
                                }, void 0, false, {
                                    fileName: "[project]/apps/shell/src/components/DateInput.tsx",
                                    lineNumber: 103,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/DateInput.tsx",
                                lineNumber: 93,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/DateInput.tsx",
                            lineNumber: 92,
                            columnNumber: 15
                        }, this)
                    }
                }
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/components/DateInput.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: calendarInputRef,
                type: "date",
                value: formatToISO(value),
                onChange: (event)=>{
                    const formattedDate = formatFromISO(event.target.value);
                    if (formattedDate) {
                        onChange(formattedDate);
                    }
                },
                tabIndex: -1,
                "aria-hidden": "true",
                style: {
                    position: "absolute",
                    right: 8,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizes"].icon,
                    height: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizes"].icon,
                    opacity: 0
                }
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/components/DateInput.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/shell/src/components/DateInput.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s(DateInput, "j3Fcf81okr2tMDtszctnmZojC9I=");
_c = DateInput;
var _c;
__turbopack_context__.k.register(_c, "DateInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/styles/fileDropZoneStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fileDropzoneStyles",
    ()=>fileDropzoneStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/tokens.ts [app-client] (ecmascript)");
;
const fileDropzoneStyles = {
    root: {
        display: "flex",
        flexDirection: "column",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md
    },
    fileList: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxHeight: 220,
        overflowY: "auto",
        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[200]}`,
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].md,
        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].background.default
    },
    fileItem: {
        display: "grid",
        gridTemplateColumns: "32px 1fr 32px",
        alignItems: "center",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md,
        width: "100%",
        padding: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md,
        borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[200]}`,
        "&:last-of-type": {
            borderBottom: "none"
        }
    },
    dropzone: {
        minHeight: 96,
        border: `2px dashed ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[300]}`,
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].lg,
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].background.default,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md,
        padding: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg,
        cursor: "pointer",
        transition: "all .2s ease",
        "&:hover": {
            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500],
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[100]
        },
        "&:focus-visible": {
            outline: `2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500]}`,
            outlineOffset: 2
        }
    },
    dropzoneActive: {
        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500],
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[100],
        boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadow"].md
    },
    dropzoneError: {
        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].error[500],
        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].error[100]
    },
    uploadIcon: {
        fontSize: 32,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500],
        flexShrink: 0
    },
    dropzoneText: {
        display: "flex",
        flexDirection: "column",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xs,
        minWidth: 0
    },
    title: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].body,
        fontWeight: 600,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[900]
    },
    subtitle: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].body,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[600],
        textAlign: "center"
    },
    info: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].label,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[500]
    },
    fileContainer: {
        display: "flex",
        flexDirection: "column",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].sm,
        width: "100%"
    },
    fileIcon: {
        fontSize: 28,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500],
        flexShrink: 0
    },
    fileInfo: {
        display: "flex",
        flexDirection: "column",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xs,
        minWidth: 0
    },
    fileName: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].body,
        fontWeight: 600,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[900],
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    },
    fileSize: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].label,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[500]
    },
    fileActions: {
        display: "flex",
        alignItems: "center",
        flexShrink: 0
    },
    removeButton: {
        width: 32,
        height: 32,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].error[500],
        "&:hover": {
            bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].error[100]
        },
        "&:focus-visible": {
            outline: `2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].error[500]}`,
            outlineOffset: 2
        }
    },
    removeIcon: {
        fontSize: 18
    },
    helperText: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].label,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].error[500],
        marginLeft: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xs
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/components/FileDropzone.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FileDropzone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.mjs [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.mjs [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$UploadFileRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/UploadFileRounded.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertDriveFileRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/InsertDriveFileRounded.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$DeleteOutlineRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/DeleteOutlineRounded.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/constants/transaction.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$fileDropZoneStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/fileDropZoneStyles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function formatFileSize(size) {
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) {
        return `${(size / 1024).toFixed(1)} KB`;
    }
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}
function FileDropzone({ files = [], attachments = [], onAddFiles, onRemoveFile, onRemoveAttachment, error = false, helperText }) {
    _s();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [localError, setLocalError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const hasFiles = files.length > 0 || attachments.length > 0;
    const hasError = error || Boolean(localError);
    function validateFile(file) {
        const acceptedTypes = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_ATTACHMENT_ACCEPT"].split(",");
        const extension = `.${file.name.split(".").pop()?.toLowerCase()}`;
        if (!acceptedTypes.includes(extension)) {
            setLocalError("Um ou mais arquivos possuem formato não permitido.");
            return false;
        }
        if (file.size > __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_ATTACHMENT_MAX_SIZE"]) {
            setLocalError(`Cada arquivo deve possuir no máximo ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_ATTACHMENT_MAX_SIZE_LABEL"]}.`);
            return false;
        }
        return true;
    }
    function handleFiles(fileList) {
        if (!fileList) return;
        const selectedFiles = Array.from(fileList);
        const validFiles = selectedFiles.filter(validateFile);
        if (validFiles.length === 0) return;
        setLocalError("");
        onAddFiles?.(validFiles);
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    }
    function handleInputChange(event) {
        handleFiles(event.target.files);
    }
    function handleDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        setIsDragging(false);
        handleFiles(event.dataTransfer.files);
    }
    function handleKeyDown(event) {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        openPicker();
    }
    function handleDragOver(event) {
        event.preventDefault();
        setIsDragging(true);
    }
    function openPicker() {
        inputRef.current?.click();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$fileDropZoneStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileDropzoneStyles"].root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                hidden: true,
                multiple: true,
                ref: inputRef,
                type: "file",
                accept: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_ATTACHMENT_ACCEPT"],
                onChange: handleInputChange
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/components/FileDropzone.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            hasFiles && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$fileDropZoneStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileDropzoneStyles"].fileList,
                children: [
                    attachments.map((attachment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$fileDropZoneStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileDropzoneStyles"].fileItem,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertDriveFileRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$fileDropZoneStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileDropzoneStyles"].fileIcon
                                }, void 0, false, {
                                    fileName: "[project]/apps/shell/src/components/FileDropzone.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$fileDropZoneStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileDropzoneStyles"].fileInfo,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$fileDropZoneStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileDropzoneStyles"].fileName,
                                            children: attachment.name
                                        }, void 0, false, {
                                            fileName: "[project]/apps/shell/src/components/FileDropzone.tsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$fileDropZoneStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileDropzoneStyles"].fileSize,
                                            children: formatFileSize(attachment.size)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/shell/src/components/FileDropzone.tsx",
                                            lineNumber: 153,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/shell/src/components/FileDropzone.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                    type: "button",
                                    onClick: ()=>onRemoveAttachment?.(attachment.id),
                                    "aria-label": `Remover comprovante ${attachment.name}`,
                                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$fileDropZoneStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileDropzoneStyles"].removeButton,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$DeleteOutlineRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$fileDropZoneStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileDropzoneStyles"].removeIcon
                                    }, void 0, false, {
                                        fileName: "[project]/apps/shell/src/components/FileDropzone.tsx",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/shell/src/components/FileDropzone.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, attachment.id, true, {
                            fileName: "[project]/apps/shell/src/components/FileDropzone.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this)),
                    files.map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$fileDropZoneStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileDropzoneStyles"].fileItem,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertDriveFileRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$fileDropZoneStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileDropzoneStyles"].fileIcon
                                }, void 0, false, {
                                    fileName: "[project]/apps/shell/src/components/FileDropzone.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$fileDropZoneStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileDropzoneStyles"].fileInfo,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$fileDropZoneStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileDropzoneStyles"].fileName,
                                            children: file.name
                                        }, void 0, false, {
                                            fileName: "[project]/apps/shell/src/components/FileDropzone.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$fileDropZoneStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileDropzoneStyles"].fileSize,
                                            children: formatFileSize(file.size)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/shell/src/components/FileDropzone.tsx",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/shell/src/components/FileDropzone.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                    type: "button",
                                    onClick: ()=>onRemoveFile?.(index),
                                    "aria-label": `Remover comprovante ${file.name}`,
                                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$fileDropZoneStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileDropzoneStyles"].removeButton,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$DeleteOutlineRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$fileDropZoneStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileDropzoneStyles"].removeIcon
                                    }, void 0, false, {
                                        fileName: "[project]/apps/shell/src/components/FileDropzone.tsx",
                                        lineNumber: 198,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/shell/src/components/FileDropzone.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, `${file.name}-${file.size}-${index}`, true, {
                            fileName: "[project]/apps/shell/src/components/FileDropzone.tsx",
                            lineNumber: 174,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/shell/src/components/FileDropzone.tsx",
                lineNumber: 138,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                role: "button",
                tabIndex: 0,
                onClick: openPicker,
                onKeyDown: handleKeyDown,
                onDragOver: handleDragOver,
                onDragLeave: ()=>setIsDragging(false),
                onDrop: handleDrop,
                sx: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$fileDropZoneStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileDropzoneStyles"].dropzone,
                    ...isDragging ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$fileDropZoneStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileDropzoneStyles"].dropzoneActive : {},
                    ...hasError ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$fileDropZoneStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileDropzoneStyles"].dropzoneError : {}
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$UploadFileRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$fileDropZoneStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileDropzoneStyles"].uploadIcon
                    }, void 0, false, {
                        fileName: "[project]/apps/shell/src/components/FileDropzone.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$fileDropZoneStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileDropzoneStyles"].dropzoneText,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$fileDropZoneStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileDropzoneStyles"].title,
                                children: "Arraste comprovantes aqui"
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/FileDropzone.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$fileDropZoneStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileDropzoneStyles"].info,
                                children: [
                                    "ou selecione arquivos • PDF, PNG ou JPG • Máximo",
                                    " ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_ATTACHMENT_MAX_SIZE_LABEL"],
                                    " por arquivo"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/shell/src/components/FileDropzone.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/shell/src/components/FileDropzone.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/shell/src/components/FileDropzone.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            (hasError || helperText) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$fileDropZoneStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileDropzoneStyles"].helperText,
                children: localError || helperText
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/components/FileDropzone.tsx",
                lineNumber: 242,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/shell/src/components/FileDropzone.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
_s(FileDropzone, "Z4ujnqZTxTL2woJBmPKUw0703wI=");
_c = FileDropzone;
var _c;
__turbopack_context__.k.register(_c, "FileDropzone");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/styles/lookupStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lookupStyles",
    ()=>lookupStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/tokens.ts [app-client] (ecmascript)");
;
const lookupStyles = {
    root: {
        width: "100%"
    },
    label: {
        mb: "6px",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].label,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[600]
    },
    labelError: {
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].error[500]
    },
    textField: {
        "& .MuiOutlinedInput-root": {
            height: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizes"].inputHeight,
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].sm,
            bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].background.default,
            "& fieldset": {
                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[300]
            },
            "&:hover fieldset": {
                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500]
            },
            "&.Mui-focused fieldset": {
                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500],
                borderWidth: "1px"
            }
        },
        "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].body,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[900]
        },
        "& .MuiSvgIcon-root": {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[500]
        }
    },
    helperText: {
        "& .MuiFormHelperText-root": {
            marginLeft: 0,
            marginTop: "6px",
            fontSize: "12px",
            fontWeight: 500
        }
    },
    placeholderText: {
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[400]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/components/Lookup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Lookup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/MenuItem/MenuItem.mjs [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/TextField/TextField.mjs [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.mjs [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$KeyboardArrowDownRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/KeyboardArrowDownRounded.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$lookupStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/lookupStyles.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function createIdFromLabel(label) {
    return label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
}
function Lookup({ label, value = "", placeholder = "Selecione", options, onChange, error = false, helperText, id }) {
    const inputId = id || `lookup-${createIdFromLabel(label)}`;
    const labelId = `${inputId}-label`;
    const helperTextId = helperText ? `${inputId}-helper-text` : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$lookupStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookupStyles"].root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                id: labelId,
                component: "label",
                htmlFor: inputId,
                sx: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$lookupStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookupStyles"].label,
                    error && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$lookupStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookupStyles"].labelError
                ],
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/components/Lookup.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                id: inputId,
                select: true,
                fullWidth: true,
                error: error,
                helperText: helperText,
                value: value,
                onChange: (event)=>onChange?.(event.target.value),
                "aria-labelledby": labelId,
                "aria-describedby": helperTextId,
                sx: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$lookupStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookupStyles"].textField,
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$lookupStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookupStyles"].helperText
                ],
                slotProps: {
                    formHelperText: {
                        id: helperTextId
                    },
                    select: {
                        displayEmpty: true,
                        IconComponent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$KeyboardArrowDownRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                        renderValue: (selected)=>{
                            const selectedOption = options.find((option)=>option.value === selected);
                            if (!selectedOption) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$lookupStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lookupStyles"].placeholderText,
                                    children: placeholder
                                }, void 0, false, {
                                    fileName: "[project]/apps/shell/src/components/Lookup.tsx",
                                    lineNumber: 82,
                                    columnNumber: 19
                                }, this);
                            }
                            return selectedOption.label;
                        }
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                        value: "",
                        disabled: true,
                        children: placeholder
                    }, void 0, false, {
                        fileName: "[project]/apps/shell/src/components/Lookup.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                            value: option.value,
                            children: option.label
                        }, option.value, false, {
                            fileName: "[project]/apps/shell/src/components/Lookup.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/shell/src/components/Lookup.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/shell/src/components/Lookup.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_c = Lookup;
var _c;
__turbopack_context__.k.register(_c, "Lookup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/styles/transactionModalStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "modalActionsGroupStyle",
    ()=>modalActionsGroupStyle,
    "modalCloseButtonStyle",
    ()=>modalCloseButtonStyle,
    "modalContainerStyle",
    ()=>modalContainerStyle,
    "modalContentStyle",
    ()=>modalContentStyle,
    "modalDescriptionStyle",
    ()=>modalDescriptionStyle,
    "modalFooterEditingStyle",
    ()=>modalFooterEditingStyle,
    "modalFooterStyle",
    ()=>modalFooterStyle,
    "modalFormGridStyle",
    ()=>modalFormGridStyle,
    "modalHeaderStyle",
    ()=>modalHeaderStyle,
    "modalOverlayStyle",
    ()=>modalOverlayStyle,
    "modalTitleStyle",
    ()=>modalTitleStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/tokens.ts [app-client] (ecmascript)");
;
const modalOverlayStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xl
};
const modalContainerStyle = {
    width: "100%",
    maxWidth: "560px",
    bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].background.default,
    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].lg,
    boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadow"].lg,
    p: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xl,
    outline: "none"
};
const modalHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg,
    mb: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xl
};
const modalTitleStyle = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].title,
    color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[900]
};
const modalDescriptionStyle = {
    mt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xs,
    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].body,
    color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[500]
};
const modalCloseButtonStyle = {
    color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[500],
    "&:hover": {
        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[100]
    },
    "&:focus-visible": {
        outline: `2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500]}`,
        outlineOffset: "2px",
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].sm
    }
};
const modalContentStyle = {
    display: "flex",
    flexDirection: "column",
    gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg
};
const modalFormGridStyle = {
    display: "grid",
    gridTemplateColumns: {
        xs: "1fr",
        md: "1fr 1fr"
    },
    gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg
};
const modalFooterStyle = {
    mt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xl,
    display: "flex",
    justifyContent: "flex-end",
    gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md
};
const modalFooterEditingStyle = {
    mt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xl,
    display: "flex",
    justifyContent: "space-between",
    gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md
};
const modalActionsGroupStyle = {
    display: "flex",
    gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/utils/transactionFormUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatTransactionCurrency",
    ()=>formatTransactionCurrency,
    "getInitialTransactionForm",
    ()=>getInitialTransactionForm,
    "parseTransactionCurrency",
    ()=>parseTransactionCurrency,
    "validateTransactionForm",
    ()=>validateTransactionForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/utils/dateUtils.ts [app-client] (ecmascript)");
;
function formatTransactionCurrency(value) {
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}
function parseTransactionCurrency(value) {
    const onlyNumbers = value.replace(/\D/g, "");
    if (!onlyNumbers) return 0;
    return Number(onlyNumbers) / 100;
}
function getInitialTransactionForm(transaction) {
    if (!transaction) {
        return {
            description: "",
            amount: "",
            date: "",
            type: "",
            operation: "",
            category: "",
            account: "",
            note: "",
            files: [],
            existingAttachments: []
        };
    }
    return {
        description: transaction.description,
        amount: formatTransactionCurrency(transaction.amount),
        date: transaction.date,
        type: transaction.type,
        operation: transaction.operation,
        category: transaction.category,
        account: transaction.account,
        note: transaction.note || "",
        files: [],
        existingAttachments: transaction.attachments || []
    };
}
function validateTransactionForm(form) {
    const errors = {};
    if (!form.description.trim()) {
        errors.description = "Informe a descrição.";
    }
    if (parseTransactionCurrency(form.amount) <= 0) {
        errors.amount = "Informe um valor maior que zero.";
    }
    if (!form.date.trim()) {
        errors.date = "Informe a data.";
    } else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidDateBR"])(form.date)) {
        errors.date = "Informe uma data válida.";
    }
    if (!form.type.trim()) {
        errors.type = "Selecione a natureza.";
    }
    if (!form.operation.trim()) {
        errors.operation = "Selecione o tipo de transação.";
    }
    if (!form.category.trim()) {
        errors.category = "Selecione a categoria.";
    }
    if (!form.account.trim()) {
        errors.account = "Selecione a conta.";
    }
    return errors;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/components/TransactionModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransactionModal",
    ()=>TransactionModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.mjs [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Modal$2f$Modal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Modal/Modal.mjs [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.mjs [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Close.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$ConfirmationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/ConfirmationModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$CurrencyInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/CurrencyInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$DateInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/DateInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$FileDropzone$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/FileDropzone.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Lookup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/Lookup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/constants/transaction.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/transactionModalStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$fileUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/utils/fileUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$transactionFormUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/utils/transactionFormUtils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function TransactionModalContent({ initialData, transaction, isEditing, onClose, onSave, onDelete }) {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isDeleteModalOpen, setIsDeleteModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function updateForm(field, value) {
        setForm((currentForm)=>({
                ...currentForm,
                [field]: value
            }));
        setErrors((currentErrors)=>({
                ...currentErrors,
                [field]: undefined
            }));
    }
    function addFiles(files) {
        setForm((currentForm)=>({
                ...currentForm,
                files: [
                    ...currentForm.files,
                    ...files
                ]
            }));
    }
    function removeFile(index) {
        setForm((currentForm)=>({
                ...currentForm,
                files: currentForm.files.filter((_, fileIndex)=>fileIndex !== index)
            }));
    }
    function removeExistingAttachment(attachmentId) {
        setForm((currentForm)=>({
                ...currentForm,
                existingAttachments: currentForm.existingAttachments.filter((attachment)=>attachment.id !== attachmentId)
            }));
    }
    async function getAttachmentsToSave() {
        const newAttachments = await Promise.all(form.files.map(async (file)=>({
                id: crypto.randomUUID(),
                name: file.name,
                type: file.type,
                size: file.size,
                base64: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$fileUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readFileAsBase64"])(file)
            })));
        return [
            ...form.existingAttachments,
            ...newAttachments
        ];
    }
    async function handleSave() {
        const validationErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$transactionFormUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateTransactionForm"])(form);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        const attachments = await getAttachmentsToSave();
        const savedTransaction = {
            id: transaction?.id || "",
            description: form.description.trim(),
            amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$transactionFormUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseTransactionCurrency"])(form.amount),
            date: form.date,
            type: form.type,
            operation: form.operation,
            category: form.category,
            account: form.account,
            status: transaction?.status || "success",
            note: form.note.trim(),
            attachments
        };
        onSave?.(savedTransaction);
    }
    function confirmDelete() {
        if (!transaction) return;
        onDelete?.(transaction.id);
        setIsDeleteModalOpen(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modalContainerStyle"],
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "transaction-modal-title",
                "aria-describedby": "transaction-modal-description",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modalHeaderStyle"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        id: "transaction-modal-title",
                                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modalTitleStyle"],
                                        children: isEditing ? "Editar transação" : "Nova transação"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        id: "transaction-modal-description",
                                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modalDescriptionStyle"],
                                        children: isEditing ? "Altere os dados abaixo para atualizar a movimentação." : "Preencha os dados abaixo para cadastrar uma nova movimentação."
                                    }, void 0, false, {
                                        fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                type: "button",
                                onClick: onClose,
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modalCloseButtonStyle"],
                                "aria-label": "Fechar modal de transação",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "small"
                                }, void 0, false, {
                                    fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        component: "form",
                        noValidate: true,
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modalContentStyle"],
                        onSubmit: (event)=>{
                            event.preventDefault();
                            handleSave();
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Descrição",
                                placeholder: "Ex: Compra no mercado",
                                value: form.description,
                                error: Boolean(errors.description),
                                helperText: errors.description,
                                onChange: (event)=>updateForm("description", event.target.value)
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modalFormGridStyle"],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$CurrencyInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Valor",
                                        value: form.amount,
                                        onChange: (value)=>updateForm("amount", value),
                                        error: Boolean(errors.amount),
                                        helperText: errors.amount
                                    }, void 0, false, {
                                        fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$DateInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Data",
                                        value: form.date,
                                        onChange: (value)=>updateForm("date", value),
                                        error: Boolean(errors.date),
                                        helperText: errors.date
                                    }, void 0, false, {
                                        fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modalFormGridStyle"],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Lookup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Natureza",
                                        value: form.type,
                                        onChange: (value)=>updateForm("type", value),
                                        error: Boolean(errors.type),
                                        helperText: errors.type,
                                        options: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_MODAL_TYPE_OPTIONS"]
                                    }, void 0, false, {
                                        fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Lookup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Tipo de transação",
                                        value: form.operation,
                                        onChange: (value)=>updateForm("operation", value),
                                        error: Boolean(errors.operation),
                                        helperText: errors.operation,
                                        options: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_MODAL_OPERATION_OPTIONS"]
                                    }, void 0, false, {
                                        fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modalFormGridStyle"],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Lookup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Categoria",
                                        value: form.category,
                                        onChange: (value)=>updateForm("category", value),
                                        error: Boolean(errors.category),
                                        helperText: errors.category,
                                        options: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_MODAL_CATEGORY_OPTIONS"]
                                    }, void 0, false, {
                                        fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Lookup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Conta",
                                        value: form.account,
                                        onChange: (value)=>updateForm("account", value),
                                        error: Boolean(errors.account),
                                        helperText: errors.account,
                                        options: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_MODAL_ACCOUNT_OPTIONS"]
                                    }, void 0, false, {
                                        fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Observação",
                                value: form.note,
                                onChange: (event)=>updateForm("note", event.target.value)
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$FileDropzone$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                files: form.files,
                                attachments: form.existingAttachments,
                                onAddFiles: addFiles,
                                onRemoveFile: removeFile,
                                onRemoveAttachment: removeExistingAttachment
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: isEditing ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modalFooterEditingStyle"] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modalFooterStyle"],
                        children: [
                            isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                variantType: "dangerOutlined",
                                onClick: ()=>setIsDeleteModalOpen(true),
                                children: "Excluir"
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modalActionsGroupStyle"],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        variantType: "outlined",
                                        onClick: onClose,
                                        children: "Cancelar"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                                        lineNumber: 312,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        variantType: "primary",
                                        onClick: handleSave,
                                        children: isEditing ? "Salvar alterações" : "Salvar transação"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$ConfirmationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: isDeleteModalOpen,
                title: "Excluir transação?",
                description: "Essa ação não poderá ser desfeita. Tem certeza que deseja excluir esta transação?",
                confirmLabel: "Excluir",
                cancelLabel: "Cancelar",
                danger: true,
                onClose: ()=>setIsDeleteModalOpen(false),
                onConfirm: confirmDelete
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
                lineNumber: 331,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(TransactionModalContent, "HFVQepjIhOky2CoZ+Zqm7v/zKB4=");
_c = TransactionModalContent;
function TransactionModal({ open, onClose, transaction, onSave, onDelete }) {
    const isEditing = Boolean(transaction);
    const initialData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$transactionFormUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitialTransactionForm"])(transaction);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Modal$2f$Modal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
        open: open,
        onClose: onClose,
        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionModalStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modalOverlayStyle"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TransactionModalContent, {
            initialData: initialData,
            transaction: transaction,
            isEditing: isEditing,
            onClose: onClose,
            onSave: onSave,
            onDelete: onDelete
        }, transaction?.id || "new", false, {
            fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
            lineNumber: 361,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/shell/src/components/TransactionModal.tsx",
        lineNumber: 356,
        columnNumber: 5
    }, this);
}
_c1 = TransactionModal;
var _c, _c1;
__turbopack_context__.k.register(_c, "TransactionModalContent");
__turbopack_context__.k.register(_c1, "TransactionModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/styles/emptyStateStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "emptyStateActionStyle",
    ()=>emptyStateActionStyle,
    "emptyStateContainerStyle",
    ()=>emptyStateContainerStyle,
    "emptyStateDescriptionStyle",
    ()=>emptyStateDescriptionStyle,
    "emptyStateIconStyle",
    ()=>emptyStateIconStyle,
    "emptyStateIconWrapperStyle",
    ()=>emptyStateIconWrapperStyle,
    "emptyStateRootStyle",
    ()=>emptyStateRootStyle,
    "emptyStateTitleStyle",
    ()=>emptyStateTitleStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/tokens.ts [app-client] (ecmascript)");
;
const emptyStateRootStyle = {
    width: "100%",
    minHeight: "320px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xxl
};
const emptyStateContainerStyle = {
    width: "100%",
    maxWidth: "420px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
};
const emptyStateIconWrapperStyle = {
    width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizes"].emptyStateIcon,
    height: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizes"].emptyStateIcon,
    borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].full,
    bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[100],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mb: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg
};
const emptyStateIconStyle = {
    fontSize: 28,
    color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500]
};
const emptyStateTitleStyle = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].title,
    lineHeight: 1.3,
    color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[900],
    mb: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].sm
};
const emptyStateDescriptionStyle = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].body,
    lineHeight: 1.5,
    color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[500],
    mb: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xl
};
const emptyStateActionStyle = {
    display: "flex",
    justifyContent: "center"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/components/EmptyState.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.mjs [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertChartOutlined$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/InsertChartOutlined.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$emptyStateStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/emptyStateStyles.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function EmptyState({ title, description, actionLabel, onAction, icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$emptyStateStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyStateRootStyle"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$emptyStateStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyStateContainerStyle"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$emptyStateStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyStateIconWrapperStyle"],
                    children: icon || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertChartOutlined$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$emptyStateStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyStateIconStyle"]
                    }, void 0, false, {
                        fileName: "[project]/apps/shell/src/components/EmptyState.tsx",
                        lineNumber: 38,
                        columnNumber: 20
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/shell/src/components/EmptyState.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$emptyStateStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyStateTitleStyle"],
                    children: title
                }, void 0, false, {
                    fileName: "[project]/apps/shell/src/components/EmptyState.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$emptyStateStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyStateDescriptionStyle"],
                    children: description
                }, void 0, false, {
                    fileName: "[project]/apps/shell/src/components/EmptyState.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                actionLabel && onAction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$emptyStateStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyStateActionStyle"],
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variantType: "primary",
                        onClick: onAction,
                        children: actionLabel
                    }, void 0, false, {
                        fileName: "[project]/apps/shell/src/components/EmptyState.tsx",
                        lineNumber: 49,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/shell/src/components/EmptyState.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/shell/src/components/EmptyState.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/shell/src/components/EmptyState.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = EmptyState;
var _c;
__turbopack_context__.k.register(_c, "EmptyState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/styles/transactionTableStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transactionTableStyles",
    ()=>transactionTableStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/tokens.ts [app-client] (ecmascript)");
;
const transactionTableStyles = {
    root: {
        width: "100%",
        minWidth: {
            xs: "1120px",
            lg: "100%"
        },
        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].background.default,
        overflow: "hidden"
    },
    header: {
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr 1fr 120px",
        px: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md,
        py: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].sm,
        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[50],
        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[100]}`,
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].md,
        mb: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].sm
    },
    sortableHeader: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].label,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[500],
        whiteSpace: "nowrap",
        cursor: "pointer",
        userSelect: "none",
        border: 0,
        p: 0,
        background: "transparent",
        textAlign: "left",
        fontFamily: "inherit",
        fontWeight: 800,
        "&:focus-visible": {
            outline: `2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500]}`,
            outlineOffset: "2px",
            borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].sm
        }
    },
    sortableHeaderActive: {
        fontWeight: 900,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[600]
    },
    row: {
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr 1fr 120px",
        alignItems: "center",
        px: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md,
        py: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md,
        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[100]}`,
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].md,
        cursor: "pointer",
        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].background.default,
        transition: "background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
        mb: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].sm,
        "&:last-child": {
            mb: 0
        },
        "&:hover": {
            bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[50],
            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[200],
            boxShadow: "0 8px 24px rgba(17, 24, 39, 0.06)",
            transform: "translateY(-1px)"
        },
        "&:focus-visible": {
            outline: `2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500]}`,
            outlineOffset: "2px",
            bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[50]
        }
    },
    rowSelected: {
        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[100],
        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500]
    },
    descriptionCell: {
        display: "flex",
        alignItems: "center",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md,
        minWidth: 0
    },
    iconWrapper: {
        width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizes"].summaryIcon,
        height: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizes"].summaryIcon,
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].md,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
    },
    icon: {
        fontSize: 18
    },
    incomeIcon: {
        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].success[100],
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].success[500]
    },
    expenseIcon: {
        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].error[100],
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].error[500]
    },
    descriptionContent: {
        display: "flex",
        flexDirection: "column",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xs,
        minWidth: 0
    },
    description: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].body,
        fontWeight: 800,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[900],
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    },
    attachmentIndicator: {
        display: "inline-flex",
        alignItems: "center",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xs,
        width: "fit-content",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].label,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[600],
        px: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].sm,
        py: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xs,
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].full,
        bgcolor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[100]
    },
    attachmentIndicatorIcon: {
        fontSize: 14,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[500]
    },
    attachmentIndicatorText: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].label,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].primary[600],
        fontWeight: 700
    },
    cellText: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].body,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[600],
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        pr: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].sm
    },
    amount: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].body,
        fontWeight: 800,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[900],
        whiteSpace: "nowrap"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/components/TransactionTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TransactionTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.mjs [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$NorthEastRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/NorthEastRounded.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$SouthEastRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/SouthEastRounded.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AttachFileRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/AttachFileRounded.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$StatusTag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/StatusTag.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/EmptyState.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/transactionTableStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/constants/transaction.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function TransactionTable({ transactions = [], selectedTransactionId, onSelectTransaction, sortField = null, sortDirection = null, onSort, emptyTitle = "Nenhuma transação encontrada", emptyDescription = "Quando houver movimentações, elas aparecerão aqui.", emptyActionLabel, onEmptyAction }) {
    function getAriaSort(field) {
        if (sortField !== field || !sortDirection) return "none";
        return sortDirection === "asc" ? "ascending" : "descending";
    }
    function renderHeader(label, field) {
        const isActive = sortField === field;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            role: "columnheader",
            "aria-sort": getAriaSort(field),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                component: "button",
                type: "button",
                onClick: ()=>onSort?.(field),
                "aria-label": `Ordenar por ${label}`,
                sx: isActive ? [
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].sortableHeader,
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].sortableHeaderActive
                ] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].sortableHeader,
                children: [
                    label,
                    " ",
                    isActive ? sortDirection === "asc" ? "↑" : "↓" : ""
                ]
            }, void 0, true, {
                fileName: "[project]/apps/shell/src/components/TransactionTable.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/shell/src/components/TransactionTable.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this);
    }
    function handleSelectTransaction(transaction, event) {
        event?.stopPropagation();
        onSelectTransaction?.(transaction);
    }
    function handleRowKeyDown(event, transaction) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onSelectTransaction?.(transaction);
        }
    }
    if (transactions.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].root,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: emptyTitle,
                description: emptyDescription,
                actionLabel: emptyActionLabel,
                onAction: onEmptyAction
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/components/TransactionTable.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/shell/src/components/TransactionTable.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].root,
        role: "table",
        "aria-label": "Tabela de transações",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].header,
                role: "row",
                children: [
                    renderHeader("Descrição", "description"),
                    renderHeader("Categoria", "category"),
                    renderHeader("Natureza", "type"),
                    renderHeader("Tipo", "operation"),
                    renderHeader("Conta", "account"),
                    renderHeader("Data", "date"),
                    renderHeader("Valor", "amount"),
                    renderHeader("Status", "status")
                ]
            }, void 0, true, {
                fileName: "[project]/apps/shell/src/components/TransactionTable.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            transactions.map((transaction)=>{
                const isSelected = selectedTransactionId === transaction.id;
                const isPositive = transaction.type === "income";
                const transactionStatus = transaction.status || "pending";
                const attachmentsCount = transaction.attachments?.length || 0;
                const formattedAmount = transaction.amount.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                });
                const transactionTypeLabel = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_TYPE_LABEL"][transaction.type];
                const transactionOperationLabel = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_OPERATION_LABEL"][transaction.operation];
                const transactionLabel = `${transaction.description}, ${transactionTypeLabel}, ${transactionOperationLabel}, valor ${formattedAmount}, data ${transaction.date}, status ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_STATUS_LABEL"][transactionStatus]}`;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    role: "button",
                    tabIndex: 0,
                    "aria-label": `Selecionar transação: ${transactionLabel}${isSelected ? ". Transação selecionada" : ""}`,
                    "aria-pressed": isSelected,
                    onClick: (event)=>handleSelectTransaction(transaction, event),
                    onKeyDown: (event)=>handleRowKeyDown(event, transaction),
                    sx: isSelected ? [
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].row,
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].rowSelected
                    ] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].row,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].descriptionCell,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    "aria-hidden": "true",
                                    sx: isPositive ? [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].iconWrapper,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].incomeIcon
                                    ] : [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].iconWrapper,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].expenseIcon
                                    ],
                                    children: isPositive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$NorthEastRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].icon
                                    }, void 0, false, {
                                        fileName: "[project]/apps/shell/src/components/TransactionTable.tsx",
                                        lineNumber: 186,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$SouthEastRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].icon
                                    }, void 0, false, {
                                        fileName: "[project]/apps/shell/src/components/TransactionTable.tsx",
                                        lineNumber: 188,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/shell/src/components/TransactionTable.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].descriptionContent,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].description,
                                            children: transaction.description
                                        }, void 0, false, {
                                            fileName: "[project]/apps/shell/src/components/TransactionTable.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this),
                                        attachmentsCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].attachmentIndicator,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AttachFileRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].attachmentIndicatorIcon
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/shell/src/components/TransactionTable.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    component: "span",
                                                    sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].attachmentIndicatorText,
                                                    children: [
                                                        attachmentsCount,
                                                        " ",
                                                        attachmentsCount > 1 ? "comprovantes" : "comprovante"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/shell/src/components/TransactionTable.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/shell/src/components/TransactionTable.tsx",
                                            lineNumber: 198,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/shell/src/components/TransactionTable.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/shell/src/components/TransactionTable.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].cellText,
                            children: transaction.category
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/TransactionTable.tsx",
                            lineNumber: 217,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].cellText,
                            children: transactionTypeLabel
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/TransactionTable.tsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].cellText,
                            children: transactionOperationLabel
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/TransactionTable.tsx",
                            lineNumber: 225,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].cellText,
                            children: transaction.account
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/TransactionTable.tsx",
                            lineNumber: 229,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].cellText,
                            children: transaction.date
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/TransactionTable.tsx",
                            lineNumber: 233,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionTableStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionTableStyles"].amount,
                            children: [
                                isPositive ? "+ " : "- ",
                                formattedAmount
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/shell/src/components/TransactionTable.tsx",
                            lineNumber: 237,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$StatusTag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            status: transactionStatus,
                            label: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_STATUS_LABEL"][transactionStatus]
                        }, void 0, false, {
                            fileName: "[project]/apps/shell/src/components/TransactionTable.tsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, this)
                    ]
                }, transaction.id, true, {
                    fileName: "[project]/apps/shell/src/components/TransactionTable.tsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/apps/shell/src/components/TransactionTable.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
_c = TransactionTable;
var _c;
__turbopack_context__.k.register(_c, "TransactionTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/hooks/useFeedback.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFeedback",
    ()=>useFeedback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const initialFeedback = {
    open: false,
    message: "",
    type: "success"
};
function useFeedback() {
    _s();
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialFeedback);
    function showFeedback(message, type = "success") {
        setFeedback({
            open: true,
            message,
            type
        });
    }
    function closeFeedback() {
        setFeedback((currentFeedback)=>({
                ...currentFeedback,
                open: false
            }));
    }
    return {
        feedback,
        showFeedback,
        closeFeedback
    };
}
_s(useFeedback, "Mp2qyCW52u2dAMJmU6mS96vYDic=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/hooks/useLoadingAction.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLoadingAction",
    ()=>useLoadingAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const MIN_LOADING_TIME = 700;
function wait(milliseconds) {
    return new Promise((resolve)=>setTimeout(resolve, milliseconds));
}
function useLoadingAction() {
    _s();
    const [loadingMessage, setLoadingMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const isLoading = Boolean(loadingMessage);
    async function runWithLoading(message, action) {
        if (loadingMessage) return;
        setLoadingMessage(message);
        const startTime = Date.now();
        try {
            await action();
        } finally{
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(MIN_LOADING_TIME - elapsedTime, 0);
            if (remainingTime > 0) {
                await wait(remainingTime);
            }
            setLoadingMessage("");
        }
    }
    return {
        loadingMessage,
        isLoading,
        runWithLoading
    };
}
_s(useLoadingAction, "ivhPTXoGAVDsvJv0DbGNiprsajY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/actions/data:c65eaf [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteTransactionAction",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"401f79340336e56a2709341ad9484b5e21425725f5":{"name":"deleteTransactionAction"}},"apps/shell/src/actions/transactionActions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("401f79340336e56a2709341ad9484b5e21425725f5", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteTransactionAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/actions/data:fb861e [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "saveTransactionAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4043fe94a62cebdef6bb9a5f84ce9410e1a494154b":{"name":"saveTransactionAction"}},"apps/shell/src/actions/transactionActions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4043fe94a62cebdef6bb9a5f84ce9410e1a494154b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "saveTransactionAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/store/hooks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppDispatch",
    ()=>useAppDispatch,
    "useAppSelector",
    ()=>useAppSelector,
    "useAppStore",
    ()=>useAppStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
"use client";
;
const useAppDispatch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"].withTypes();
const useAppSelector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"].withTypes();
const useAppStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].withTypes();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/hooks/useTransactionCrud.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTransactionCrud",
    ()=>useTransactionCrud
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$actions$2f$data$3a$c65eaf__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/shell/src/actions/data:c65eaf [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$actions$2f$data$3a$fb861e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/shell/src/actions/data:fb861e [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/store/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$store$2f$features$2f$transactions$2f$transactionsSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/store/features/transactions/transactionsSlice.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function getErrorMessage(error, fallbackMessage) {
    if (error instanceof Error && error.message) {
        return error.message;
    }
    return fallbackMessage;
}
function useTransactionCrud({ transactions, isLoading, startTransition, runWithLoading, showFeedback, setSelectedTransaction, clearSelectedTransactionImmediately, closeTransactionModalImmediately, refresh, onTransactionCreated, onTransactionDeleted }) {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    function handleSaveTransaction(savedTransaction) {
        if (isLoading) return;
        const isEditing = Boolean(savedTransaction.id);
        const loadingMessage = isEditing ? "Atualizando transação..." : "Criando transação...";
        const errorMessage = isEditing ? "Não foi possível atualizar a transação. Tente novamente." : "Não foi possível criar a transação. Tente novamente.";
        startTransition(async ()=>{
            await runWithLoading(loadingMessage, async ()=>{
                try {
                    const saved = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$actions$2f$data$3a$fb861e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveTransactionAction"])(savedTransaction);
                    const transactionExists = transactions.some((transaction)=>transaction.id === saved.id);
                    if (transactionExists) {
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$store$2f$features$2f$transactions$2f$transactionsSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateTransaction"])(saved));
                        showFeedback("Transação atualizada com sucesso.");
                    } else {
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$store$2f$features$2f$transactions$2f$transactionsSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addTransaction"])(saved));
                        onTransactionCreated?.(saved);
                        showFeedback("Transação criada com sucesso.");
                    }
                    setSelectedTransaction(saved);
                    closeTransactionModalImmediately();
                    refresh();
                } catch (error) {
                    showFeedback(getErrorMessage(error, errorMessage), "error");
                }
            });
        });
    }
    function handleDeleteTransaction(transactionId) {
        if (isLoading) return;
        if (!transactionId) {
            showFeedback("Não foi possível identificar a transação.", "error");
            return;
        }
        startTransition(async ()=>{
            await runWithLoading("Excluindo transação...", async ()=>{
                try {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$actions$2f$data$3a$c65eaf__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteTransactionAction"])(transactionId);
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$store$2f$features$2f$transactions$2f$transactionsSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeTransaction"])(transactionId));
                    clearSelectedTransactionImmediately();
                    closeTransactionModalImmediately();
                    onTransactionDeleted?.(transactionId);
                    showFeedback("Transação excluída com sucesso.");
                    refresh();
                } catch (error) {
                    showFeedback(getErrorMessage(error, "Não foi possível excluir a transação. Tente novamente."), "error");
                }
            });
        });
    }
    return {
        handleSaveTransaction,
        handleDeleteTransaction
    };
}
_s(useTransactionCrud, "BJQ1DUn/XFEl2NsQ3DWyHAXfnkY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/constants/dashboardFilterOptions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DASHBOARD_AMOUNT_RANGE_OPTIONS",
    ()=>DASHBOARD_AMOUNT_RANGE_OPTIONS,
    "DASHBOARD_DATE_RANGE_OPTIONS",
    ()=>DASHBOARD_DATE_RANGE_OPTIONS,
    "DASHBOARD_STATUS_OPTIONS",
    ()=>DASHBOARD_STATUS_OPTIONS,
    "DASHBOARD_TYPE_OPTIONS",
    ()=>DASHBOARD_TYPE_OPTIONS
]);
const DASHBOARD_TYPE_OPTIONS = [
    {
        label: "Todas",
        value: ""
    },
    {
        label: "Entradas",
        value: "income"
    },
    {
        label: "Saídas",
        value: "expense"
    }
];
const DASHBOARD_STATUS_OPTIONS = [
    {
        label: "Todos",
        value: ""
    },
    {
        label: "Sucesso",
        value: "success"
    },
    {
        label: "Pendente",
        value: "pending"
    },
    {
        label: "Falha",
        value: "error"
    }
];
const DASHBOARD_DATE_RANGE_OPTIONS = [
    {
        label: "Todos",
        value: ""
    },
    {
        label: "Hoje",
        value: "today"
    },
    {
        label: "Este mês",
        value: "currentMonth"
    },
    {
        label: "Últimos 30 dias",
        value: "last30Days"
    }
];
const DASHBOARD_AMOUNT_RANGE_OPTIONS = [
    {
        label: "Todos",
        value: ""
    },
    {
        label: "Até R$ 100",
        value: "upTo100"
    },
    {
        label: "R$ 100 a R$ 500",
        value: "between100And500"
    },
    {
        label: "Acima de R$ 500",
        value: "above500"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/utils/dashboardFiltersUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterDashboardTransactions",
    ()=>filterDashboardTransactions,
    "getUniqueOptions",
    ()=>getUniqueOptions
]);
function getUniqueOptions(values) {
    return Array.from(new Set(values.filter(Boolean))).sort((firstValue, secondValue)=>firstValue.localeCompare(secondValue)).map((value)=>({
            label: value,
            value
        }));
}
function normalizeText(value) {
    return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function isSameDay(firstDate, secondDate) {
    return firstDate.getDate() === secondDate.getDate() && firstDate.getMonth() === secondDate.getMonth() && firstDate.getFullYear() === secondDate.getFullYear();
}
function parseTransactionDate(date) {
    const [day, month, year] = date.split("/").map(Number);
    return new Date(year, month - 1, day);
}
function filterDashboardTransactions(transactions, filters) {
    const search = normalizeText(filters.search.trim());
    return transactions.filter((transaction)=>{
        const transactionStatus = transaction.status || "pending";
        const transactionDate = parseTransactionDate(transaction.date);
        const today = new Date();
        const matchesSearch = !search || normalizeText([
            transaction.description,
            transaction.category,
            transaction.account,
            transaction.date
        ].join(" ")).includes(search);
        const matchesCategory = !filters.category || transaction.category === filters.category;
        const matchesType = !filters.type || transaction.type === filters.type;
        const matchesAccount = !filters.account || transaction.account === filters.account;
        const matchesStatus = !filters.status || transactionStatus === filters.status;
        const matchesDateRange = !filters.dateRange || filters.dateRange === "today" && isSameDay(transactionDate, today) || filters.dateRange === "currentMonth" && transactionDate.getMonth() === today.getMonth() && transactionDate.getFullYear() === today.getFullYear() || filters.dateRange === "last30Days" && transactionDate >= new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
        const matchesAmountRange = !filters.amountRange || filters.amountRange === "upTo100" && transaction.amount <= 100 || filters.amountRange === "between100And500" && transaction.amount >= 100 && transaction.amount <= 500 || filters.amountRange === "above500" && transaction.amount > 500;
        return matchesSearch && matchesCategory && matchesType && matchesAccount && matchesStatus && matchesDateRange && matchesAmountRange;
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/hooks/useTransactionFilterItems.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTransactionFilterItems",
    ()=>useTransactionFilterItems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$dashboardFilterOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/constants/dashboardFilterOptions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$dashboardFiltersUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/utils/dashboardFiltersUtils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useTransactionFilterItems(transactions) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useTransactionFilterItems.useMemo": ()=>{
            const categoryOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$dashboardFiltersUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUniqueOptions"])(transactions.map({
                "useTransactionFilterItems.useMemo.categoryOptions": (transaction)=>transaction.category
            }["useTransactionFilterItems.useMemo.categoryOptions"]));
            const accountOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$dashboardFiltersUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUniqueOptions"])(transactions.map({
                "useTransactionFilterItems.useMemo.accountOptions": (transaction)=>transaction.account
            }["useTransactionFilterItems.useMemo.accountOptions"]));
            return [
                {
                    key: "category",
                    label: "Categoria",
                    ariaLabel: "Filtrar por categoria",
                    options: [
                        {
                            label: "Todas",
                            value: ""
                        },
                        ...categoryOptions
                    ]
                },
                {
                    key: "type",
                    label: "Natureza",
                    ariaLabel: "Filtrar por natureza",
                    options: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$dashboardFilterOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_TYPE_OPTIONS"]
                },
                {
                    key: "account",
                    label: "Conta",
                    ariaLabel: "Filtrar por conta",
                    options: [
                        {
                            label: "Todas",
                            value: ""
                        },
                        ...accountOptions
                    ]
                },
                {
                    key: "status",
                    label: "Status",
                    ariaLabel: "Filtrar por status",
                    options: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$dashboardFilterOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_STATUS_OPTIONS"]
                },
                {
                    key: "dateRange",
                    label: "Período",
                    ariaLabel: "Filtrar por período",
                    options: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$dashboardFilterOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_DATE_RANGE_OPTIONS"]
                },
                {
                    key: "amountRange",
                    label: "Valor",
                    ariaLabel: "Filtrar por valor",
                    options: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$dashboardFilterOptions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DASHBOARD_AMOUNT_RANGE_OPTIONS"]
                }
            ];
        }
    }["useTransactionFilterItems.useMemo"], [
        transactions
    ]);
}
_s(useTransactionFilterItems, "nwk+m61qLgjDVUp4IGV/072DDN4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/hooks/useTransactionModal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTransactionModal",
    ()=>useTransactionModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useTransactionModal(isLoading) {
    _s();
    const [selectedTransaction, setSelectedTransaction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isTransactionModalOpen, setIsTransactionModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function selectTransaction(transaction) {
        if (isLoading) return;
        setSelectedTransaction(transaction);
    }
    function clearSelectedTransaction() {
        if (isLoading) return;
        setSelectedTransaction(null);
    }
    function openNewTransactionModal() {
        if (isLoading) return;
        setSelectedTransaction(null);
        setIsTransactionModalOpen(true);
    }
    function openEditTransactionModal(transaction) {
        if (isLoading) return;
        setSelectedTransaction(transaction);
        setIsTransactionModalOpen(true);
    }
    function closeTransactionModal() {
        if (isLoading) return;
        setIsTransactionModalOpen(false);
    }
    function closeTransactionModalImmediately() {
        setIsTransactionModalOpen(false);
    }
    function clearSelectedTransactionImmediately() {
        setSelectedTransaction(null);
    }
    return {
        selectedTransaction,
        setSelectedTransaction,
        isTransactionModalOpen,
        selectTransaction,
        clearSelectedTransaction,
        openNewTransactionModal,
        openEditTransactionModal,
        closeTransactionModal,
        closeTransactionModalImmediately,
        clearSelectedTransactionImmediately
    };
}
_s(useTransactionModal, "A6Gc60unHIx/SHsDv10dtX8n/y4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/styles/transactionsClientStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transactionsClientStyles",
    ()=>transactionsClientStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/tokens.ts [app-client] (ecmascript)");
;
const transactionsClientStyles = {
    layout: {
        minHeight: "100vh",
        display: "grid",
        overflow: "hidden"
    },
    content: {
        p: {
            xs: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg,
            md: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xl,
            lg: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xxl
        },
        display: "flex",
        flexDirection: "column",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].xl,
        overflow: "auto"
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: {
            xs: "stretch",
            md: "center"
        },
        flexDirection: {
            xs: "column",
            md: "row"
        },
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].lg
    },
    searchWrapper: {
        width: {
            xs: "100%",
            md: "320px"
        }
    },
    tableWrapper: {
        overflowX: "auto"
    },
    pagination: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: {
            xs: "flex-start",
            md: "center"
        },
        flexDirection: {
            xs: "column",
            md: "row"
        },
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md,
        mt: "-8px"
    },
    paginationText: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typography"].label,
        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[500]
    },
    paginationActions: {
        display: "flex",
        alignItems: "center",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].md,
        flexWrap: "wrap"
    },
    paginationButtons: {
        display: "flex",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].sm
    },
    paginationButton: {
        width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizes"].icon,
        height: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizes"].icon,
        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colors"].gray[300]}`,
        borderRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["radius"].sm
    },
    buttonContent: {
        display: "flex",
        alignItems: "center",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spacing"].sm,
        whiteSpace: "nowrap"
    },
    newTransactionButton: {
        flexShrink: 0,
        whiteSpace: "nowrap"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/utils/paginate.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "paginate",
    ()=>paginate
]);
function paginate(items, currentPage, itemsPerPage) {
    return items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/utils/getPaginatedTransactions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPaginatedTransactions",
    ()=>getPaginatedTransactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$paginate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/utils/paginate.ts [app-client] (ecmascript)");
;
function getPaginatedTransactions({ transactions, currentPage, itemsPerPage }) {
    const totalPages = Math.ceil(transactions.length / itemsPerPage);
    const paginatedTransactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$paginate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paginate"])(transactions, currentPage, itemsPerPage);
    return {
        totalPages,
        paginatedTransactions
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/utils/transactionSort.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sortTransactions",
    ()=>sortTransactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/constants/transaction.ts [app-client] (ecmascript)");
;
function getTransactionSortValue(transaction, field) {
    if (field === "type") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_TYPE_LABEL"][transaction.type];
    }
    if (field === "operation") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_OPERATION_LABEL"][transaction.operation];
    }
    if (field === "status") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_STATUS_LABEL"][transaction.status || "pending"];
    }
    return transaction[field] || "";
}
function sortTransactions(transactions, sortField, sortDirection) {
    if (!sortField || !sortDirection) {
        return transactions;
    }
    return [
        ...transactions
    ].sort((firstTransaction, secondTransaction)=>{
        const firstValue = getTransactionSortValue(firstTransaction, sortField);
        const secondValue = getTransactionSortValue(secondTransaction, sortField);
        if (typeof firstValue === "number" && typeof secondValue === "number") {
            return sortDirection === "asc" ? firstValue - secondValue : secondValue - firstValue;
        }
        return sortDirection === "asc" ? String(firstValue).localeCompare(String(secondValue), "pt-BR", {
            numeric: true
        }) : String(secondValue).localeCompare(String(firstValue), "pt-BR", {
            numeric: true
        });
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/shell/src/app/(app)/transactions/TransactionsClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TransactionsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.mjs [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.mjs [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.mjs [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AddRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/AddRounded.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$KeyboardArrowLeft$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/KeyboardArrowLeft.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$KeyboardArrowRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/KeyboardArrowRight.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$FeedbackSnackbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/FeedbackSnackbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$FilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/FilterBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$LoadingOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/LoadingOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$PageHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/PageHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$TransactionDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/TransactionDetails.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$TransactionModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/TransactionModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$TransactionTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/components/TransactionTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$useFeedback$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/hooks/useFeedback.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$useLoadingAction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/hooks/useLoadingAction.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$useTransactionCrud$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/hooks/useTransactionCrud.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$useTransactionFilterItems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/hooks/useTransactionFilterItems.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$useTransactionModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/hooks/useTransactionModal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/store/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$store$2f$features$2f$transactions$2f$transactionsSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/store/features/transactions/transactionsSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/constants/transaction.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionsClientStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/styles/transactionsClientStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$dashboardFiltersUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/utils/dashboardFiltersUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$getPaginatedTransactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/utils/getPaginatedTransactions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$transactionSort$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/utils/transactionSort.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const INITIAL_FILTERS = {
    search: "",
    category: "",
    type: "",
    account: "",
    status: "",
    dateRange: "",
    amountRange: ""
};
function TransactionsClient({ initialTransactions }) {
    _s();
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_FILTERS);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [sortField, setSortField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sortDirection, setSortDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const storedTransactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "TransactionsClient.useAppSelector[storedTransactions]": (state)=>state.transactions.items
    }["TransactionsClient.useAppSelector[storedTransactions]"]);
    const transactionsInitialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "TransactionsClient.useAppSelector[transactionsInitialized]": (state)=>state.transactions.initialized
    }["TransactionsClient.useAppSelector[transactionsInitialized]"]);
    const transactions = transactionsInitialized ? storedTransactions : initialTransactions;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TransactionsClient.useEffect": ()=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$store$2f$features$2f$transactions$2f$transactionsSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeTransactions"])(initialTransactions));
        }
    }["TransactionsClient.useEffect"], [
        dispatch,
        initialTransactions
    ]);
    const { loadingMessage, isLoading: isLoadingAction, runWithLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$useLoadingAction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoadingAction"])();
    const { feedback, showFeedback, closeFeedback } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$useFeedback$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFeedback"])();
    const isLoading = isLoadingAction || isPending;
    const { selectedTransaction, setSelectedTransaction, isTransactionModalOpen, selectTransaction, clearSelectedTransaction, openNewTransactionModal, openEditTransactionModal, closeTransactionModal, closeTransactionModalImmediately, clearSelectedTransactionImmediately } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$useTransactionModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactionModal"])(isLoading);
    const filteredTransactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TransactionsClient.useMemo[filteredTransactions]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$dashboardFiltersUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterDashboardTransactions"])(transactions, filters)
    }["TransactionsClient.useMemo[filteredTransactions]"], [
        transactions,
        filters
    ]);
    const filterItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$useTransactionFilterItems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactionFilterItems"])(transactions);
    const sortedTransactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$transactionSort$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortTransactions"])(filteredTransactions, sortField, sortDirection);
    const { totalPages, paginatedTransactions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$utils$2f$getPaginatedTransactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaginatedTransactions"])({
        transactions: sortedTransactions,
        currentPage,
        itemsPerPage: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_ITEMS_PER_PAGE"]
    });
    const { handleSaveTransaction, handleDeleteTransaction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$useTransactionCrud$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactionCrud"])({
        transactions,
        isLoading,
        startTransition,
        runWithLoading,
        showFeedback,
        setSelectedTransaction,
        clearSelectedTransactionImmediately,
        closeTransactionModalImmediately,
        refresh: router.refresh,
        onTransactionCreated: {
            "TransactionsClient.useTransactionCrud": ()=>{
                setCurrentPage(1);
            }
        }["TransactionsClient.useTransactionCrud"],
        onTransactionDeleted: {
            "TransactionsClient.useTransactionCrud": ()=>{
                const remainingTransactions = filteredTransactions.length - 1;
                const newTotalPages = Math.ceil(remainingTransactions / __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_ITEMS_PER_PAGE"]);
                if (currentPage > newTotalPages && currentPage > 1) {
                    setCurrentPage({
                        "TransactionsClient.useTransactionCrud": (currentValue)=>currentValue - 1
                    }["TransactionsClient.useTransactionCrud"]);
                }
            }
        }["TransactionsClient.useTransactionCrud"]
    });
    function handleFiltersChange(nextFilters) {
        setFilters(nextFilters);
        setCurrentPage(1);
        clearSelectedTransaction();
    }
    function handleClearFilters() {
        setFilters(INITIAL_FILTERS);
        setCurrentPage(1);
        clearSelectedTransaction();
    }
    function handleSort(field) {
        if (isLoading) return;
        if (sortField !== field) {
            setSortField(field);
            setSortDirection("asc");
        } else if (sortDirection === "asc") {
            setSortDirection("desc");
        } else {
            setSortField(null);
            setSortDirection(null);
        }
        setCurrentPage(1);
        clearSelectedTransaction();
    }
    function handlePreviousPage() {
        if (isLoading || currentPage <= 1) return;
        setCurrentPage((currentValue)=>currentValue - 1);
        clearSelectedTransaction();
    }
    function handleNextPage() {
        if (isLoading || currentPage >= totalPages) {
            return;
        }
        setCurrentPage((currentValue)=>currentValue + 1);
        clearSelectedTransaction();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                onClick: ()=>{
                    if (!isLoading) {
                        clearSelectedTransaction();
                    }
                },
                sx: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionsClientStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionsClientStyles"].layout,
                    gridTemplateColumns: {
                        xs: "1fr",
                        lg: selectedTransaction ? "1fr 320px" : "1fr"
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionsClientStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionsClientStyles"].content,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$PageHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                title: "Transações",
                                breadcrumb: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$constants$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSACTION_BREADCRUMB"]
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/app/(app)/transactions/TransactionsClient.tsx",
                                lineNumber: 281,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionsClientStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionsClientStyles"].toolbar,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$FilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        value: filters,
                                        filters: filterItems,
                                        searchPlaceholder: "Buscar transações...",
                                        onChange: handleFiltersChange,
                                        onClear: handleClearFilters
                                    }, void 0, false, {
                                        fileName: "[project]/apps/shell/src/app/(app)/transactions/TransactionsClient.tsx",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        variantType: "primary",
                                        onClick: openNewTransactionModal,
                                        disabled: isLoading,
                                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionsClientStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionsClientStyles"].newTransactionButton,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionsClientStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionsClientStyles"].buttonContent,
                                            children: [
                                                "Nova transação",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AddRounded$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    fontSize: "small"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/shell/src/app/(app)/transactions/TransactionsClient.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/shell/src/app/(app)/transactions/TransactionsClient.tsx",
                                            lineNumber: 303,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/shell/src/app/(app)/transactions/TransactionsClient.tsx",
                                        lineNumber: 295,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/shell/src/app/(app)/transactions/TransactionsClient.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionsClientStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionsClientStyles"].tableWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$TransactionTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    transactions: paginatedTransactions,
                                    selectedTransactionId: selectedTransaction?.id,
                                    onSelectTransaction: isLoading ? undefined : selectTransaction,
                                    sortField: sortField,
                                    sortDirection: sortDirection,
                                    onSort: handleSort,
                                    emptyTitle: transactions.length === 0 ? "Cadastre sua primeira transação" : "Nenhuma transação encontrada",
                                    emptyDescription: transactions.length === 0 ? "Comece adicionando entradas e saídas para acompanhar seu saldo." : "Ajuste os filtros para encontrar outras movimentações.",
                                    emptyActionLabel: transactions.length === 0 ? "Nova transação" : undefined,
                                    onEmptyAction: transactions.length === 0 ? openNewTransactionModal : undefined
                                }, void 0, false, {
                                    fileName: "[project]/apps/shell/src/app/(app)/transactions/TransactionsClient.tsx",
                                    lineNumber: 319,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/shell/src/app/(app)/transactions/TransactionsClient.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionsClientStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionsClientStyles"].pagination,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionsClientStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionsClientStyles"].paginationText,
                                        children: [
                                            sortedTransactions.length,
                                            " registros encontrados"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/shell/src/app/(app)/transactions/TransactionsClient.tsx",
                                        lineNumber: 358,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionsClientStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionsClientStyles"].paginationActions,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionsClientStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionsClientStyles"].paginationText,
                                                children: [
                                                    "Página ",
                                                    currentPage,
                                                    " de",
                                                    " ",
                                                    totalPages || 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/shell/src/app/(app)/transactions/TransactionsClient.tsx",
                                                lineNumber: 372,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionsClientStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionsClientStyles"].paginationButtons,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                                        size: "small",
                                                        onClick: handlePreviousPage,
                                                        disabled: currentPage === 1 || isLoading,
                                                        "aria-label": "Página anterior",
                                                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionsClientStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionsClientStyles"].paginationButton,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$KeyboardArrowLeft$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            fontSize: "small"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/shell/src/app/(app)/transactions/TransactionsClient.tsx",
                                                            lineNumber: 397,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/shell/src/app/(app)/transactions/TransactionsClient.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                                        size: "small",
                                                        onClick: handleNextPage,
                                                        disabled: currentPage === totalPages || totalPages === 0 || isLoading,
                                                        "aria-label": "Próxima página",
                                                        sx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$styles$2f$transactionsClientStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transactionsClientStyles"].paginationButton,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$KeyboardArrowRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            fontSize: "small"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/shell/src/app/(app)/transactions/TransactionsClient.tsx",
                                                            lineNumber: 413,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/shell/src/app/(app)/transactions/TransactionsClient.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/shell/src/app/(app)/transactions/TransactionsClient.tsx",
                                                lineNumber: 381,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/shell/src/app/(app)/transactions/TransactionsClient.tsx",
                                        lineNumber: 367,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/shell/src/app/(app)/transactions/TransactionsClient.tsx",
                                lineNumber: 355,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/shell/src/app/(app)/transactions/TransactionsClient.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    selectedTransaction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$TransactionDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        transaction: selectedTransaction,
                        onEdit: openEditTransactionModal,
                        onDelete: handleDeleteTransaction
                    }, void 0, false, {
                        fileName: "[project]/apps/shell/src/app/(app)/transactions/TransactionsClient.tsx",
                        lineNumber: 421,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/shell/src/app/(app)/transactions/TransactionsClient.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$TransactionModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionModal"], {
                open: isTransactionModalOpen,
                onClose: closeTransactionModal,
                transaction: selectedTransaction,
                onSave: handleSaveTransaction,
                onDelete: handleDeleteTransaction
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/app/(app)/transactions/TransactionsClient.tsx",
                lineNumber: 429,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$LoadingOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: Boolean(loadingMessage),
                message: loadingMessage
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/app/(app)/transactions/TransactionsClient.tsx",
                lineNumber: 437,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$components$2f$FeedbackSnackbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: feedback.open,
                message: feedback.message,
                type: feedback.type,
                onClose: closeFeedback
            }, void 0, false, {
                fileName: "[project]/apps/shell/src/app/(app)/transactions/TransactionsClient.tsx",
                lineNumber: 442,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(TransactionsClient, "HX08ezaMpkWWwdiwA+OE0WsIHrE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$store$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$useLoadingAction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoadingAction"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$useFeedback$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFeedback"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$useTransactionModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactionModal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$useTransactionFilterItems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactionFilterItems"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$hooks$2f$useTransactionCrud$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactionCrud"]
    ];
});
_c = TransactionsClient;
var _c;
__turbopack_context__.k.register(_c, "TransactionsClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_shell_src_0-h4n1v._.js.map