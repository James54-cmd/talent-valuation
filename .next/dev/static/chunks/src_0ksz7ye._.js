(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/constants/app-config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appConfig",
    ()=>appConfig
]);
const appConfig = {
    name: "Paygrade",
    tagline: "Talent valuation studio",
    navigation: [
        {
            label: "Explore",
            href: "#valuation-workbench"
        },
        {
            label: "Benchmarks",
            href: "#valuation-workbench"
        },
        {
            label: "Companies",
            href: "#valuation-workbench"
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils/cn.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/page-container.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageContainer",
    ()=>PageContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/cn.ts [app-client] (ecmascript)");
;
;
function PageContainer({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/layout/page-container.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
_c = PageContainer;
var _c;
__turbopack_context__.k.register(_c, "PageContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/site-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$app$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/app-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$page$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/page-container.tsx [app-client] (ecmascript)");
;
;
;
function SiteHeader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$page$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageContainer"], {
            className: "flex items-center justify-between py-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-sm font-semibold text-primary-foreground shadow-soft",
                            children: "PV"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/site-header.tsx",
                            lineNumber: 9,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-display text-xl tracking-[-0.04em] text-foreground",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$app$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appConfig"].name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/site-header.tsx",
                                    lineNumber: 13,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs uppercase tracking-[0.24em] text-foreground/45",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$app$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appConfig"].tagline
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/site-header.tsx",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/site-header.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/site-header.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden items-center gap-8 lg:flex",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$app$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appConfig"].navigation.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: item.href,
                            className: "text-sm font-medium text-foreground/65 transition hover:text-foreground",
                            children: item.label
                        }, item.label, false, {
                            fileName: "[project]/src/components/layout/site-header.tsx",
                            lineNumber: 20,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/site-header.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#valuation-workbench",
                    className: "inline-flex items-center rounded-full border border-foreground/10 bg-panel px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/30 hover:text-primary",
                    children: "Open workbench"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/site-header.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/site-header.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/site-header.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = SiteHeader;
var _c;
__turbopack_context__.k.register(_c, "SiteHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/common/section-heading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionHeading",
    ()=>SectionHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SectionHeading({ eyebrow, title, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center rounded-full border border-primary/15 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-primary",
                children: eyebrow
            }, void 0, false, {
                fileName: "[project]/src/components/common/section-heading.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/section-heading.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/section-heading.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/section-heading.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/section-heading.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = SectionHeading;
var _c;
__turbopack_context__.k.register(_c, "SectionHeading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/salary-estimator/components/estimator-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EstimatorForm",
    ()=>EstimatorForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/section-heading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$page$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/page-container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/cn.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const EstimatorForm = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ activeTab, fields, form, onCalculate, onChangeTab, onChangeField, onToggleSkill, skillOptions, tabs }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        id: "valuation-workbench",
        className: "py-16 sm:py-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$page$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageContainer"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-8 rounded-[2rem] border border-border/60 bg-panel p-6 shadow-soft sm:p-8 lg:p-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                        eyebrow: "01 / Workbench",
                        title: "Tell the model what kind of market you are in.",
                        description: "Each input now lives in feature-owned state instead of being hard-coded inside a giant page component. That makes this easier to reason about and much easier to extend."
                    }, void 0, false, {
                        fileName: "[project]/src/features/salary-estimator/components/estimator-form.tsx",
                        lineNumber: 26,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex flex-wrap gap-2 rounded-full border border-border/60 bg-background p-1",
                        children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onChangeTab(tab.id),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full px-4 py-2 text-sm font-medium transition", activeTab === tab.id ? "bg-foreground text-background shadow-soft" : "text-foreground/60 hover:text-foreground"),
                                children: tab.label
                            }, tab.id, false, {
                                fileName: "[project]/src/features/salary-estimator/components/estimator-form.tsx",
                                lineNumber: 34,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/features/salary-estimator/components/estimator-form.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
                        children: fields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "space-y-3 rounded-[1.5rem] border border-border/60 bg-background px-4 py-4 transition hover:border-primary/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground/45",
                                        children: field.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/salary-estimator/components/estimator-form.tsx",
                                        lineNumber: 53,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: form[field.id],
                                        onChange: (event)=>onChangeField(field.id, event.target.value),
                                        className: "w-full border-none bg-transparent text-base font-medium text-foreground outline-none",
                                        children: field.options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: option.value,
                                                children: option.label
                                            }, option.value, false, {
                                                fileName: "[project]/src/features/salary-estimator/components/estimator-form.tsx",
                                                lineNumber: 60,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/salary-estimator/components/estimator-form.tsx",
                                        lineNumber: 54,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, field.id, true, {
                                fileName: "[project]/src/features/salary-estimator/components/estimator-form.tsx",
                                lineNumber: 49,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/features/salary-estimator/components/estimator-form.tsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-[1.5rem] border border-border/60 bg-background p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground/45",
                                        children: "Primary skills"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/salary-estimator/components/estimator-form.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm leading-6 text-foreground/65",
                                        children: "Skills now behave like real state, not static decorative chips."
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/salary-estimator/components/estimator-form.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/salary-estimator/components/estimator-form.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex flex-wrap gap-2",
                                children: skillOptions.map((skill)=>{
                                    const isSelected = form.skills.includes(skill.value);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onToggleSkill(skill.value),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full border px-4 py-2 text-sm font-medium transition", isSelected ? "border-foreground bg-foreground text-background" : "border-border bg-panel text-foreground/70 hover:border-primary/25 hover:text-foreground"),
                                        children: skill.label
                                    }, skill.value, false, {
                                        fileName: "[project]/src/features/salary-estimator/components/estimator-form.tsx",
                                        lineNumber: 84,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/features/salary-estimator/components/estimator-form.tsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/salary-estimator/components/estimator-form.tsx",
                        lineNumber: 69,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onCalculate,
                        className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-95",
                        children: [
                            "Calculate salary",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/features/salary-estimator/components/estimator-form.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/salary-estimator/components/estimator-form.tsx",
                        lineNumber: 101,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/salary-estimator/components/estimator-form.tsx",
                lineNumber: 25,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/features/salary-estimator/components/estimator-form.tsx",
            lineNumber: 24,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/features/salary-estimator/components/estimator-form.tsx",
        lineNumber: 23,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = EstimatorForm;
EstimatorForm.displayName = "EstimatorForm";
var _c, _c1;
__turbopack_context__.k.register(_c, "EstimatorForm$forwardRef");
__turbopack_context__.k.register(_c1, "EstimatorForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils/format-currency.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatCurrency",
    ()=>formatCurrency
]);
function formatCurrency(value) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    }).format(value);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/salary-estimator/components/estimator-results.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EstimatorResults",
    ()=>EstimatorResults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/section-heading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$page$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/page-container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/format-currency.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/cn.ts [app-client] (ecmascript)");
;
;
;
;
;
function EstimatorResults({ estimate }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "animate-rise py-16 sm:py-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$page$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageContainer"], {
            className: "space-y-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                    eyebrow: "02 / Readout",
                    title: "A cleaner decision surface for the result.",
                    description: "The output is now driven from typed feature data rather than hard-coded sections. Same demo behavior, much saner internals."
                }, void 0, false, {
                    fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-5 lg:grid-cols-[1.35fr_0.95fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[2rem] border border-border/60 bg-panel p-6 shadow-soft sm:p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col justify-between gap-5 border-b border-border/60 pb-8 md:flex-row md:items-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground/45",
                                                    children: "Predicted base salary"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                                    lineNumber: 25,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-4 font-display text-5xl tracking-[-0.05em] text-foreground sm:text-6xl",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(estimate.baseSalary)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 text-sm text-foreground/65",
                                                    children: estimate.summary
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex h-fit rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-700",
                                            children: [
                                                estimate.confidence,
                                                "% confidence"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-7 rounded-full bg-background p-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-3 rounded-full bg-gradient-to-r from-primary/20 via-primary/55 to-gold/70",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-panel bg-foreground shadow-soft"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex items-center justify-between font-mono text-xs text-foreground/55",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(estimate.lowerBound)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(estimate.baseSalary),
                                                " midpoint"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(estimate.upperBound)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 grid gap-3 sm:grid-cols-3",
                                    children: [
                                        {
                                            label: "25th percentile",
                                            value: estimate.percentile25,
                                            highlight: false
                                        },
                                        {
                                            label: "Median",
                                            value: estimate.medianSalary,
                                            highlight: true
                                        },
                                        {
                                            label: "75th percentile",
                                            value: estimate.percentile75,
                                            highlight: false
                                        }
                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-[1.5rem] border border-border/60 bg-background p-4 text-center", item.highlight && "border-primary/25 shadow-soft"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/45",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-3 font-display text-3xl tracking-[-0.04em]", item.highlight ? "text-primary" : "text-foreground"),
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(item.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, item.label, true, {
                                            fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[2rem] border border-border/60 bg-panel p-6 shadow-soft",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-foreground",
                                            children: "What moved the estimate"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-5 space-y-4",
                                            children: estimate.drivers.map((driver)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-[1fr_92px_42px] items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-foreground/65",
                                                            children: driver.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-2 rounded-full bg-background",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-2 rounded-full", driver.tone === "primary" && "bg-primary", driver.tone === "accent" && "bg-gold", driver.tone === "muted" && "bg-foreground/20"),
                                                                style: {
                                                                    width: `${driver.strength}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                                                lineNumber: 81,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                                            lineNumber: 80,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-xs text-foreground/55",
                                                            children: driver.impactLabel
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, driver.label, true, {
                                                    fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[2rem] bg-foreground p-6 text-background shadow-soft",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-background/85",
                                            children: "Total compensation"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-5 space-y-4",
                                            children: estimate.compensation.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between border-b border-white/10 pb-4 last:border-none last:pb-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-background/60",
                                                            children: line.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono text-sm",
                                                                    children: line.amount
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                                                    lineNumber: 104,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full px-2 py-1 text-[11px] font-semibold", line.direction === "up" ? "bg-emerald-500/15 text-emerald-300" : "bg-rose-500/15 text-rose-300"),
                                                                    children: line.deltaLabel
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                                                    lineNumber: 105,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, line.label, true, {
                                                    fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-5 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-background/70",
                                                    children: "Estimated total"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-lg text-gold",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(estimate.totalCompensation)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6 border-t border-border/60 pt-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                            eyebrow: "03 / Market context",
                            title: "Similar roles hiring right now.",
                            description: "This block is feature data too, so swapping mock data for live API data later becomes a straightforward boundary change."
                        }, void 0, false, {
                            fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 md:grid-cols-3",
                            children: estimate.peerRoles.map((role)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "rounded-[1.5rem] border border-border/60 bg-panel p-5 shadow-soft transition hover:-translate-y-1 hover:border-primary/25",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-foreground",
                                            children: role.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-foreground/60",
                                            children: role.company
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 font-mono text-base text-primary",
                                            children: role.compensation
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, `${role.title}-${role.company}`, true, {
                                    fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/salary-estimator/components/estimator-results.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = EstimatorResults;
var _c;
__turbopack_context__.k.register(_c, "EstimatorResults");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/salary-estimator/components/hero-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroPanel",
    ()=>HeroPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$page$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/page-container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/format-currency.ts [app-client] (ecmascript)");
;
;
;
;
const benchmarkRows = [
    {
        label: "Base",
        weight: 78,
        tone: "bg-primary"
    },
    {
        label: "Equity",
        weight: 62,
        tone: "bg-gold"
    },
    {
        label: "Bonus",
        weight: 41,
        tone: "bg-foreground/30"
    }
];
function HeroPanel({ estimate, summary, onOpenWorkbench, onShowPreview }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden py-16 sm:py-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top_left,rgba(179,89,50,0.14),transparent_42%),radial-gradient(circle_at_75%_25%,rgba(39,50,47,0.14),transparent_30%)]"
            }, void 0, false, {
                fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$page$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageContainer"], {
                className: "relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                        lineNumber: 26,
                                        columnNumber: 13
                                    }, this),
                                    "Compensation intelligence for modern talent teams"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "max-w-3xl font-display text-5xl leading-[0.95] tracking-[-0.06em] text-foreground sm:text-6xl lg:text-7xl",
                                        children: "A salary estimator that looks like a product, not a prompt."
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "max-w-xl text-base leading-8 text-foreground/70 sm:text-lg",
                                        children: "We turned the generic starter into a sharper valuation workspace: clearer structure, stronger typography, and feature-owned logic that can actually scale."
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onOpenWorkbench,
                                        className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-95",
                                        children: [
                                            "Open valuation workbench",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                                lineNumber: 45,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onShowPreview,
                                        className: "inline-flex items-center rounded-full border border-foreground/10 bg-panel px-6 py-3.5 text-sm font-medium text-foreground transition hover:border-primary/30 hover:text-primary",
                                        children: "See live benchmark"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                className: "grid gap-5 sm:grid-cols-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: "text-xs uppercase tracking-[0.24em] text-foreground/45",
                                                children: "Live role"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "mt-2 text-lg font-medium text-foreground",
                                                children: summary
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                                lineNumber: 58,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: "text-xs uppercase tracking-[0.24em] text-foreground/45",
                                                children: "Current midpoint"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "mt-2 text-lg font-medium text-foreground",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(estimate.baseSalary)
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: "text-xs uppercase tracking-[0.24em] text-foreground/45",
                                                children: "Confidence band"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "mt-2 text-lg font-medium text-foreground",
                                                children: [
                                                    estimate.confidence,
                                                    "% certainty"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-4 left-6 rounded-full border border-border/70 bg-background px-4 py-2 text-xs font-medium text-foreground shadow-soft",
                                children: "Live market signal"
                            }, void 0, false, {
                                fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-[2rem] border border-border/60 bg-panel p-7 shadow-soft",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] uppercase tracking-[0.28em] text-foreground/45",
                                                        children: "Snapshot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "mt-2 text-xl font-semibold text-foreground",
                                                        children: summary
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700",
                                                children: [
                                                    estimate.confidence,
                                                    "% confidence"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 rounded-[1.5rem] border border-border/60 bg-background px-6 py-7 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs uppercase tracking-[0.24em] text-foreground/45",
                                                children: "Predicted base salary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 font-display text-5xl tracking-[-0.05em] text-foreground",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(estimate.baseSalary)
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 font-mono text-sm text-foreground/55",
                                                children: [
                                                    "Range ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(estimate.lowerBound),
                                                    " to ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(estimate.upperBound)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                                lineNumber: 91,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-7 space-y-4",
                                        children: benchmarkRows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-[72px_1fr_42px] items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-foreground/60",
                                                        children: row.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-2 rounded-full bg-background",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `h-2 rounded-full ${row.tone}`,
                                                            style: {
                                                                width: `${row.weight}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-xs text-foreground/55",
                                                        children: [
                                                            row.weight,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, row.label, true, {
                                                fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-4 right-5 rounded-full border border-border/70 bg-background px-4 py-2 text-xs font-medium text-foreground shadow-soft",
                                children: "Updated with current inputs"
                            }, void 0, false, {
                                fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/salary-estimator/components/hero-panel.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = HeroPanel;
var _c;
__turbopack_context__.k.register(_c, "HeroPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/salary-estimator/lib/salary-estimator-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSalaryEstimate",
    ()=>createSalaryEstimate,
    "defaultFormState",
    ()=>defaultFormState,
    "estimatorFields",
    ()=>estimatorFields,
    "estimatorTabs",
    ()=>estimatorTabs,
    "formatUsd",
    ()=>formatUsd,
    "getActiveRoleTitle",
    ()=>getActiveRoleTitle,
    "getSkillOptions",
    ()=>getSkillOptions,
    "salarySignals",
    ()=>salarySignals
]);
const skillOptions = [
    {
        value: "typescript",
        label: "TypeScript"
    },
    {
        value: "react",
        label: "React"
    },
    {
        value: "python",
        label: "Python"
    },
    {
        value: "nodejs",
        label: "Node.js"
    },
    {
        value: "aws",
        label: "AWS"
    },
    {
        value: "kubernetes",
        label: "Kubernetes"
    },
    {
        value: "postgresql",
        label: "PostgreSQL"
    },
    {
        value: "graphql",
        label: "GraphQL"
    },
    {
        value: "rust",
        label: "Rust"
    },
    {
        value: "go",
        label: "Go"
    },
    {
        value: "machine-learning",
        label: "Machine Learning"
    },
    {
        value: "system-design",
        label: "System Design"
    }
];
const estimatorTabs = [
    {
        id: "predict",
        label: "Predict salary"
    },
    {
        id: "compare",
        label: "Compare roles"
    },
    {
        id: "trends",
        label: "Market trends"
    }
];
const estimatorFields = [
    {
        id: "title",
        label: "Job title",
        options: [
            {
                value: "senior-software-engineer",
                label: "Senior Software Engineer"
            },
            {
                value: "staff-engineer",
                label: "Staff Engineer"
            },
            {
                value: "engineering-manager",
                label: "Engineering Manager"
            },
            {
                value: "product-manager",
                label: "Product Manager"
            },
            {
                value: "data-scientist",
                label: "Data Scientist"
            },
            {
                value: "ml-engineer",
                label: "ML Engineer"
            },
            {
                value: "frontend-engineer",
                label: "Frontend Engineer"
            },
            {
                value: "backend-engineer",
                label: "Backend Engineer"
            },
            {
                value: "platform-engineer",
                label: "Platform Engineer"
            },
            {
                value: "product-designer",
                label: "Product Designer"
            }
        ]
    },
    {
        id: "experience",
        label: "Experience",
        options: [
            {
                value: "1-2",
                label: "1-2 years"
            },
            {
                value: "3-4",
                label: "3-4 years"
            },
            {
                value: "5-7",
                label: "5-7 years"
            },
            {
                value: "8-10",
                label: "8-10 years"
            },
            {
                value: "10-plus",
                label: "10+ years"
            }
        ]
    },
    {
        id: "location",
        label: "Location",
        options: [
            {
                value: "san-francisco",
                label: "San Francisco, CA"
            },
            {
                value: "new-york",
                label: "New York, NY"
            },
            {
                value: "seattle",
                label: "Seattle, WA"
            },
            {
                value: "austin",
                label: "Austin, TX"
            },
            {
                value: "remote-us",
                label: "Remote (US)"
            },
            {
                value: "london",
                label: "London, UK"
            },
            {
                value: "berlin",
                label: "Berlin, DE"
            },
            {
                value: "singapore",
                label: "Singapore"
            }
        ]
    },
    {
        id: "industry",
        label: "Industry",
        options: [
            {
                value: "faang",
                label: "Big Tech (FAANG+)"
            },
            {
                value: "series-b-d",
                label: "Series B-D Startup"
            },
            {
                value: "early-startup",
                label: "Early-stage Startup"
            },
            {
                value: "fintech",
                label: "Finance / Fintech"
            },
            {
                value: "healthcare",
                label: "Healthcare / Biotech"
            },
            {
                value: "enterprise-saas",
                label: "Enterprise SaaS"
            },
            {
                value: "public-sector",
                label: "Government / Non-profit"
            }
        ]
    },
    {
        id: "education",
        label: "Education",
        options: [
            {
                value: "self-taught",
                label: "No degree / Self-taught"
            },
            {
                value: "bootcamp",
                label: "Bootcamp"
            },
            {
                value: "bs-cs",
                label: "B.S. Computer Science"
            },
            {
                value: "ms-cs",
                label: "M.S. Computer Science"
            },
            {
                value: "phd",
                label: "PhD"
            },
            {
                value: "mba",
                label: "MBA"
            }
        ]
    },
    {
        id: "companySize",
        label: "Company size",
        options: [
            {
                value: "1-10",
                label: "1-10 people"
            },
            {
                value: "11-50",
                label: "11-50 people"
            },
            {
                value: "51-200",
                label: "51-200 people"
            },
            {
                value: "201-1000",
                label: "201-1,000 people"
            },
            {
                value: "1001-5000",
                label: "1,001-5,000 people"
            },
            {
                value: "5000-plus",
                label: "5,000+ people"
            }
        ]
    }
];
const salarySignals = [
    {
        value: "124,890",
        label: "salary data points indexed"
    },
    {
        value: "$142K",
        label: "average senior engineer in the US"
    },
    {
        value: "92%",
        label: "prediction confidence on validated roles"
    },
    {
        value: "38",
        label: "countries in the benchmark graph"
    },
    {
        value: "$210K",
        label: "median staff engineer in New York"
    },
    {
        value: "+8.3%",
        label: "YoY growth for ML compensation bands"
    }
];
const defaultFormState = {
    title: "senior-software-engineer",
    experience: "5-7",
    location: "san-francisco",
    industry: "series-b-d",
    education: "bs-cs",
    companySize: "201-1000",
    skills: [
        "typescript",
        "react",
        "nodejs",
        "postgresql"
    ]
};
const roleProfiles = {
    "senior-software-engineer": {
        title: "Senior Software Engineer",
        baseSalary: 154000,
        benchmarkRange: [
            142000,
            186000
        ]
    },
    "staff-engineer": {
        title: "Staff Engineer",
        baseSalary: 192000,
        benchmarkRange: [
            178000,
            240000
        ]
    },
    "engineering-manager": {
        title: "Engineering Manager",
        baseSalary: 181000,
        benchmarkRange: [
            168000,
            225000
        ]
    },
    "product-manager": {
        title: "Product Manager",
        baseSalary: 165000,
        benchmarkRange: [
            149000,
            202000
        ]
    },
    "data-scientist": {
        title: "Data Scientist",
        baseSalary: 161000,
        benchmarkRange: [
            145000,
            198000
        ]
    },
    "ml-engineer": {
        title: "ML Engineer",
        baseSalary: 176000,
        benchmarkRange: [
            162000,
            218000
        ]
    },
    "frontend-engineer": {
        title: "Frontend Engineer",
        baseSalary: 149000,
        benchmarkRange: [
            136000,
            181000
        ]
    },
    "backend-engineer": {
        title: "Backend Engineer",
        baseSalary: 156000,
        benchmarkRange: [
            143000,
            190000
        ]
    },
    "platform-engineer": {
        title: "Platform Engineer",
        baseSalary: 171000,
        benchmarkRange: [
            156000,
            208000
        ]
    },
    "product-designer": {
        title: "Product Designer",
        baseSalary: 143000,
        benchmarkRange: [
            129000,
            176000
        ]
    }
};
const experienceModifiers = {
    "1-2": -34000,
    "3-4": -18000,
    "5-7": 0,
    "8-10": 22000,
    "10-plus": 36000
};
const locationModifiers = {
    "san-francisco": 24000,
    "new-york": 18000,
    seattle: 12000,
    austin: 4000,
    "remote-us": 9000,
    london: -12000,
    berlin: -26000,
    singapore: -9000
};
const industryModifiers = {
    faang: 26000,
    "series-b-d": 12000,
    "early-startup": -8000,
    fintech: 15000,
    healthcare: 5000,
    "enterprise-saas": 7000,
    "public-sector": -18000
};
const educationModifiers = {
    "self-taught": -4000,
    bootcamp: -2000,
    "bs-cs": 0,
    "ms-cs": 4500,
    phd: 9000,
    mba: 6500
};
const companySizeModifiers = {
    "1-10": -18000,
    "11-50": -11000,
    "51-200": -3000,
    "201-1000": 5000,
    "1001-5000": 9000,
    "5000-plus": 14000
};
const peerRoleSets = {
    "senior-software-engineer": [
        {
            title: "Senior Software Engineer",
            company: "Stripe · San Francisco",
            compensation: "$165K - $195K"
        },
        {
            title: "Senior Full-Stack Engineer",
            company: "Linear · Remote (US)",
            compensation: "$155K - $185K"
        },
        {
            title: "Software Engineer L5",
            company: "Google · Mountain View",
            compensation: "$178K - $220K"
        }
    ],
    "staff-engineer": [
        {
            title: "Staff Engineer",
            company: "Figma · New York",
            compensation: "$210K - $255K"
        },
        {
            title: "Principal Platform Engineer",
            company: "Datadog · Remote (US)",
            compensation: "$205K - $248K"
        },
        {
            title: "Staff Software Engineer",
            company: "Airbnb · San Francisco",
            compensation: "$215K - $268K"
        }
    ],
    "engineering-manager": [
        {
            title: "Engineering Manager",
            company: "Notion · San Francisco",
            compensation: "$190K - $230K"
        },
        {
            title: "Senior Engineering Manager",
            company: "Canva · Remote",
            compensation: "$205K - $248K"
        },
        {
            title: "Product Engineering Lead",
            company: "Ramp · New York",
            compensation: "$198K - $240K"
        }
    ]
};
function roundToNearestHundred(value) {
    return Math.round(value / 100) * 100;
}
function formatDelta(value) {
    if (value === 0) {
        return "0%";
    }
    const prefix = value > 0 ? "+" : "";
    return `${prefix}${Math.round(value / 1000 * 1.7)}%`;
}
function getToneFromImpact(value) {
    if (value >= 15000) {
        return "primary";
    }
    if (value >= 5000 || value <= -5000) {
        return "accent";
    }
    return "muted";
}
function getFieldLabel(fieldId, value) {
    const field = estimatorFields.find((item)=>item.id === fieldId);
    return field?.options.find((option)=>option.value === value)?.label ?? value;
}
function getSkillOptions() {
    return skillOptions;
}
function getActiveRoleTitle(value) {
    return roleProfiles[value]?.title ?? "Compensation benchmark";
}
function formatUsd(value) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    }).format(value);
}
function createSalaryEstimate(form) {
    const role = roleProfiles[form.title] ?? roleProfiles["senior-software-engineer"];
    const skillImpact = Math.max(0, form.skills.length - 2) * 3200;
    const educationImpact = educationModifiers[form.education] ?? 0;
    const companyImpact = companySizeModifiers[form.companySize] ?? 0;
    const experienceImpact = experienceModifiers[form.experience] ?? 0;
    const locationImpact = locationModifiers[form.location] ?? 0;
    const industryImpact = industryModifiers[form.industry] ?? 0;
    const baseSalary = roundToNearestHundred(role.baseSalary + skillImpact + educationImpact + companyImpact + experienceImpact + locationImpact + industryImpact);
    const lowerBound = roundToNearestHundred(baseSalary * 0.89);
    const upperBound = roundToNearestHundred(baseSalary * 1.13);
    const bonus = roundToNearestHundred(baseSalary * 0.11);
    const equity = roundToNearestHundred(baseSalary * (companyImpact >= 9000 ? 0.28 : 0.18));
    const confidence = Math.min(96, 78 + form.skills.length + (experienceImpact > 0 ? 4 : 2));
    const peerRoles = peerRoleSets[form.title] ?? peerRoleSets["senior-software-engineer"];
    const drivers = [
        {
            label: `Location (${getFieldLabel("location", form.location)})`,
            value: locationImpact
        },
        {
            label: `Experience (${getFieldLabel("experience", form.experience)})`,
            value: experienceImpact
        },
        {
            label: `Skills stack (${form.skills.length} selected)`,
            value: skillImpact
        },
        {
            label: `Company size (${getFieldLabel("companySize", form.companySize)})`,
            value: companyImpact
        },
        {
            label: `Industry (${getFieldLabel("industry", form.industry)})`,
            value: industryImpact
        }
    ].map((driver)=>({
            label: driver.label,
            impactLabel: formatDelta(driver.value),
            strength: Math.max(18, Math.min(95, Math.round(Math.abs(driver.value) / 350))),
            tone: getToneFromImpact(Math.abs(driver.value))
        }));
    const compensation = [
        {
            label: "Base salary",
            amount: formatUsd(baseSalary),
            deltaLabel: "+8%",
            direction: "up"
        },
        {
            label: "Annual bonus",
            amount: formatUsd(bonus),
            deltaLabel: "+5%",
            direction: "up"
        },
        {
            label: "Equity (estimated)",
            amount: formatUsd(equity),
            deltaLabel: companyImpact >= 9000 ? "+11%" : "-2%",
            direction: companyImpact >= 9000 ? "up" : "down"
        }
    ];
    return {
        confidence,
        baseSalary,
        lowerBound,
        upperBound,
        medianSalary: baseSalary,
        percentile25: lowerBound,
        percentile75: upperBound,
        totalCompensation: baseSalary + bonus + equity,
        summary: `${role.title} in ${getFieldLabel("location", form.location)} with ${getFieldLabel("experience", form.experience).toLowerCase()}`,
        drivers,
        compensation,
        peerRoles
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/salary-estimator/components/market-stats-strip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarketStatsStrip",
    ()=>MarketStatsStrip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$salary$2d$estimator$2f$lib$2f$salary$2d$estimator$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/salary-estimator/lib/salary-estimator-data.ts [app-client] (ecmascript)");
;
;
function MarketStatsStrip() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "overflow-hidden border-y border-border/60 bg-foreground py-3 text-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-ticker flex min-w-max items-center gap-14 whitespace-nowrap pr-14",
            children: [
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$salary$2d$estimator$2f$lib$2f$salary$2d$estimator$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salarySignals"],
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$salary$2d$estimator$2f$lib$2f$salary$2d$estimator$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salarySignals"]
            ].map((signal, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-baseline gap-2 text-sm text-background/80",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            className: "font-mono text-sm font-medium text-gold",
                            children: signal.value
                        }, void 0, false, {
                            fileName: "[project]/src/features/salary-estimator/components/market-stats-strip.tsx",
                            lineNumber: 9,
                            columnNumber: 13
                        }, this),
                        signal.label
                    ]
                }, `${signal.label}-${index}`, true, {
                    fileName: "[project]/src/features/salary-estimator/components/market-stats-strip.tsx",
                    lineNumber: 8,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/features/salary-estimator/components/market-stats-strip.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/salary-estimator/components/market-stats-strip.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = MarketStatsStrip;
var _c;
__turbopack_context__.k.register(_c, "MarketStatsStrip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/salary-estimator/hooks/use-salary-estimator.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSalaryEstimator",
    ()=>useSalaryEstimator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$salary$2d$estimator$2f$lib$2f$salary$2d$estimator$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/salary-estimator/lib/salary-estimator-data.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useSalaryEstimator() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("predict");
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$salary$2d$estimator$2f$lib$2f$salary$2d$estimator$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultFormState"]);
    const [hasCalculated, setHasCalculated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const estimate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$salary$2d$estimator$2f$lib$2f$salary$2d$estimator$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSalaryEstimate"])(form);
    function updateField(field, value) {
        setForm((current)=>({
                ...current,
                [field]: value
            }));
    }
    function toggleSkill(skill) {
        setForm((current)=>{
            const nextSkills = current.skills.includes(skill) ? current.skills.filter((item)=>item !== skill) : [
                ...current.skills,
                skill
            ];
            return {
                ...current,
                skills: nextSkills
            };
        });
    }
    function calculate() {
        setHasCalculated(true);
    }
    return {
        activeTab,
        calculate,
        estimatorFields: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$salary$2d$estimator$2f$lib$2f$salary$2d$estimator$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimatorFields"],
        estimate,
        form,
        hasCalculated,
        setActiveTab,
        skillOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$salary$2d$estimator$2f$lib$2f$salary$2d$estimator$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSkillOptions"])(),
        tabs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$salary$2d$estimator$2f$lib$2f$salary$2d$estimator$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimatorTabs"],
        toggleSkill,
        updateField
    };
}
_s(useSalaryEstimator, "vUsD/U5EO++4wpI5440VWAXZkAw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/salary-estimator/components/salary-estimator-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SalaryEstimatorPage",
    ()=>SalaryEstimatorPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$site$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/site-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$salary$2d$estimator$2f$components$2f$estimator$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/salary-estimator/components/estimator-form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$salary$2d$estimator$2f$components$2f$estimator$2d$results$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/salary-estimator/components/estimator-results.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$salary$2d$estimator$2f$components$2f$hero$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/salary-estimator/components/hero-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$salary$2d$estimator$2f$components$2f$market$2d$stats$2d$strip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/salary-estimator/components/market-stats-strip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$salary$2d$estimator$2f$lib$2f$salary$2d$estimator$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/salary-estimator/lib/salary-estimator-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$salary$2d$estimator$2f$hooks$2f$use$2d$salary$2d$estimator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/salary-estimator/hooks/use-salary-estimator.ts [app-client] (ecmascript)");
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
function SalaryEstimatorPage() {
    _s();
    const workbenchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const resultsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { activeTab, calculate, estimatorFields, estimate, form, hasCalculated, setActiveTab, skillOptions, tabs, toggleSkill, updateField } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$salary$2d$estimator$2f$hooks$2f$use$2d$salary$2d$estimator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryEstimator"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SalaryEstimatorPage.useEffect": ()=>{
            if (!hasCalculated) {
                return;
            }
            const timeoutId = window.setTimeout({
                "SalaryEstimatorPage.useEffect.timeoutId": ()=>{
                    resultsRef.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }["SalaryEstimatorPage.useEffect.timeoutId"], 80);
            return ({
                "SalaryEstimatorPage.useEffect": ()=>window.clearTimeout(timeoutId)
            })["SalaryEstimatorPage.useEffect"];
        }
    }["SalaryEstimatorPage.useEffect"], [
        estimate.baseSalary,
        hasCalculated
    ]);
    function scrollToWorkbench() {
        workbenchRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
    function revealResults() {
        calculate();
    }
    const summary = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$salary$2d$estimator$2f$lib$2f$salary$2d$estimator$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveRoleTitle"])(form.title)} · ${estimate.summary}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background text-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "sr-only",
                children: "Talent Valuation salary estimator"
            }, void 0, false, {
                fileName: "[project]/src/features/salary-estimator/components/salary-estimator-page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$site$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteHeader"], {}, void 0, false, {
                fileName: "[project]/src/features/salary-estimator/components/salary-estimator-page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$salary$2d$estimator$2f$components$2f$market$2d$stats$2d$strip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarketStatsStrip"], {}, void 0, false, {
                fileName: "[project]/src/features/salary-estimator/components/salary-estimator-page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$salary$2d$estimator$2f$components$2f$hero$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroPanel"], {
                estimate: estimate,
                summary: summary,
                onOpenWorkbench: scrollToWorkbench,
                onShowPreview: revealResults
            }, void 0, false, {
                fileName: "[project]/src/features/salary-estimator/components/salary-estimator-page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$salary$2d$estimator$2f$components$2f$estimator$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EstimatorForm"], {
                ref: workbenchRef,
                activeTab: activeTab,
                fields: estimatorFields,
                form: form,
                onCalculate: revealResults,
                onChangeField: updateField,
                onChangeTab: setActiveTab,
                onToggleSkill: toggleSkill,
                skillOptions: skillOptions,
                tabs: tabs
            }, void 0, false, {
                fileName: "[project]/src/features/salary-estimator/components/salary-estimator-page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            hasCalculated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: resultsRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$salary$2d$estimator$2f$components$2f$estimator$2d$results$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EstimatorResults"], {
                    estimate: estimate
                }, void 0, false, {
                    fileName: "[project]/src/features/salary-estimator/components/salary-estimator-page.tsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/salary-estimator/components/salary-estimator-page.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/salary-estimator/components/salary-estimator-page.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(SalaryEstimatorPage, "bktdYnTnBjE6y3hwbCac6DrhG7o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$salary$2d$estimator$2f$hooks$2f$use$2d$salary$2d$estimator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryEstimator"]
    ];
});
_c = SalaryEstimatorPage;
var _c;
__turbopack_context__.k.register(_c, "SalaryEstimatorPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0ksz7ye._.js.map