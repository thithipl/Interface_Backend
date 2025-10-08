"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const quotation_routes_1 = __importDefault(require("./routes/quotation.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
console.log("Mounting quotationRoutes at /api/quotations");
app.use("/api/quotations", quotation_routes_1.default);
app.use("/test", (req, res) => {
    console.log("Test route is working");
    res.send("Test route is working");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map