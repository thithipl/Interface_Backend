"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const dotenv_1 = __importDefault(require("dotenv"));
const quotation_routes_1 = __importDefault(require("./routes/quotation.routes"));
const quotationDtl_routes_1 = __importDefault(require("./routes/quotationDtl_routes"));
const VW_inquiryPFMNo_routes_1 = __importDefault(require("./routes/VW_inquiryPFMNo_routes"));
const VW_proformaData_routes_1 = __importDefault(require("./routes/VW_proformaData_routes"));
const VW_inquiryData_routes_1 = __importDefault(require("./routes/VW_inquiryData_routes"));
const VW_inquiryItem_routes_1 = __importDefault(require("./routes/VW_inquiryItem_routes"));
const VW_onlyiqr_routes_1 = __importDefault(require("./routes/VW_onlyiqr.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(cors());
const API_PREFIX = process.env.API_PREFIX || "/api";
const PORT = process.env.PORT || 3030;
app.use(express_1.default.json());
app.use(`${API_PREFIX}/quotations`, quotation_routes_1.default);
app.use(`${API_PREFIX}/quotationDtl`, quotationDtl_routes_1.default);
app.use(`${API_PREFIX}/inquiryPFMNo`, VW_inquiryPFMNo_routes_1.default);
app.use(`${API_PREFIX}/proformaData`, VW_proformaData_routes_1.default);
app.use(`${API_PREFIX}/inquiryData`, VW_inquiryData_routes_1.default);
app.use(`${API_PREFIX}/inquiryItem`, VW_inquiryItem_routes_1.default);
app.use(`${API_PREFIX}/onlyIqr`, VW_onlyiqr_routes_1.default);
app.use("/test", (req, res) => {
    console.log("Test route is working");
    res.send(`Test route is working`);
});
app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`✅ Server is running on http://0.0.0.0:${PORT}`);
});
//# sourceMappingURL=index.js.map