module.exports = [
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[project]/apps/shell/src/services/transactionService.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTransaction",
    ()=>createTransaction,
    "deleteTransaction",
    ()=>deleteTransaction,
    "getTransactionById",
    ()=>getTransactionById,
    "getTransactions",
    ()=>getTransactions,
    "updateTransaction",
    ()=>updateTransaction
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "src", "data", "transactions.json");
async function readTransactions() {
    try {
        const file = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(filePath, "utf-8");
        const parsed = JSON.parse(file);
        if (!Array.isArray(parsed)) {
            throw new Error();
        }
        return parsed;
    } catch  {
        throw new Error("Não foi possível carregar as transações.");
    }
}
async function writeTransactions(transactions) {
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(filePath, JSON.stringify(transactions, null, 2), "utf-8");
    } catch  {
        throw new Error("Não foi possível salvar os dados das transações.");
    }
}
async function getTransactions() {
    return await readTransactions();
}
async function getTransactionById(id) {
    const transactions = await readTransactions();
    return transactions.find((transaction)=>transaction.id === id);
}
async function createTransaction(transaction) {
    const transactions = await readTransactions();
    const updatedTransactions = [
        transaction,
        ...transactions
    ];
    await writeTransactions(updatedTransactions);
    return transaction;
}
async function updateTransaction(transaction) {
    const transactions = await readTransactions();
    const exists = transactions.some((item)=>item.id === transaction.id);
    if (!exists) {
        throw new Error("Transação não encontrada.");
    }
    const updatedTransactions = transactions.map((item)=>item.id === transaction.id ? transaction : item);
    await writeTransactions(updatedTransactions);
    return transaction;
}
async function deleteTransaction(id) {
    const transactions = await readTransactions();
    const exists = transactions.some((item)=>item.id === id);
    if (!exists) {
        throw new Error("Transação não encontrada.");
    }
    const updatedTransactions = transactions.filter((item)=>item.id !== id);
    await writeTransactions(updatedTransactions);
}
}),
"[project]/apps/shell/src/actions/transactionActions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"401f79340336e56a2709341ad9484b5e21425725f5":{"name":"deleteTransactionAction"},"4043fe94a62cebdef6bb9a5f84ce9410e1a494154b":{"name":"saveTransactionAction"}},"apps/shell/src/actions/transactionActions.ts",""] */ __turbopack_context__.s([
    "deleteTransactionAction",
    ()=>deleteTransactionAction,
    "saveTransactionAction",
    ()=>saveTransactionAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$services$2f$transactionService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/services/transactionService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
function validateTransaction(transaction) {
    if (!transaction.description?.trim()) {
        throw new Error("Informe a descrição da transação.");
    }
    if (!transaction.amount || transaction.amount <= 0) {
        throw new Error("Informe um valor válido para a transação.");
    }
    if (!transaction.date?.trim()) {
        throw new Error("Informe a data da transação.");
    }
    if (!transaction.type) {
        throw new Error("Selecione a natureza da transação.");
    }
    if (!transaction.operation) {
        throw new Error("Selecione o tipo da transação.");
    }
    if (!transaction.category?.trim()) {
        throw new Error("Selecione a categoria da transação.");
    }
    if (!transaction.account?.trim()) {
        throw new Error("Selecione a conta da transação.");
    }
}
async function saveTransactionAction(transaction) {
    try {
        validateTransaction(transaction);
        const transactionToSave = {
            ...transaction,
            id: transaction.id || crypto.randomUUID()
        };
        const savedTransaction = transaction.id ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$services$2f$transactionService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateTransaction"])(transactionToSave) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$services$2f$transactionService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTransaction"])(transactionToSave);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/dashboard");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/transactions");
        return savedTransaction;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("Não foi possível salvar a transação.");
    }
}
async function deleteTransactionAction(transactionId) {
    try {
        if (!transactionId) {
            throw new Error("Transação não encontrada para exclusão.");
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$services$2f$transactionService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteTransaction"])(transactionId);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/dashboard");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/transactions");
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("Não foi possível excluir a transação.");
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    saveTransactionAction,
    deleteTransactionAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveTransactionAction, "4043fe94a62cebdef6bb9a5f84ce9410e1a494154b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteTransactionAction, "401f79340336e56a2709341ad9484b5e21425725f5", null);
}),
"[project]/apps/shell/.next-internal/server/app/(app)/transactions/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/shell/src/actions/transactionActions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$actions$2f$transactionActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/actions/transactionActions.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/apps/shell/.next-internal/server/app/(app)/transactions/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/shell/src/actions/transactionActions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "401f79340336e56a2709341ad9484b5e21425725f5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$actions$2f$transactionActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteTransactionAction"],
    "4043fe94a62cebdef6bb9a5f84ce9410e1a494154b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$actions$2f$transactionActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveTransactionAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$transactions$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$shell$2f$src$2f$actions$2f$transactionActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/shell/.next-internal/server/app/(app)/transactions/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/shell/src/actions/transactionActions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$shell$2f$src$2f$actions$2f$transactionActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/shell/src/actions/transactionActions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0wek._c._.js.map