import express from "express";
const cors = require("cors");
import dotenv from "dotenv";
import quotationRoutes from "./routes/quotation.routes";
import quotationDtlRoutes from "./routes/quotationDtl_routes";
import inquiryPFMNoRoutes from "./routes/VW_inquiryPFMNo_routes";
import proformaDataRoutes from "./routes/VW_proformaData_routes";
import inquiryDataRoutes from "./routes/VW_inquiryData_routes";
import inquiryItemRoutes from "./routes/VW_inquiryItem_routes";
import OnlyIqrRoutes from "./routes/VW_onlyiqr.routes";
import inquiryReqRoutes from "./routes/VW_inquiryReq_routes";
import inquiryAddRoutes from "./routes/VW_inquiryAdd_routes";
import updatePFMRoutes from "./routes/AS_updateDataPFM_Inquiry";
import inquiryDtlByPFMNoRoutes from "./routes/VW_inquiryDtlByPFMNo_routes";
import proformaHdrRoutes from "./routes/VW_proformaHdr_routes";
import proformaDtlRoutes from "./routes/VW_proformaDtl_routes";

dotenv.config();
const app = express();

app.use(cors());
const API_PREFIX = process.env.API_PREFIX || "/api";
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(`${API_PREFIX}/quotations`, quotationRoutes);
app.use(`${API_PREFIX}/quotationDtl`, quotationDtlRoutes);
app.use(`${API_PREFIX}/inquiryPFMNo`, inquiryPFMNoRoutes);
app.use(`${API_PREFIX}/proformaData`, proformaDataRoutes);
app.use(`${API_PREFIX}/inquiryData`, inquiryDataRoutes);
app.use(`${API_PREFIX}/inquiryItem`, inquiryItemRoutes);
app.use(`${API_PREFIX}/onlyIqr`, OnlyIqrRoutes);
app.use(`${API_PREFIX}/inquiryReq`, inquiryReqRoutes);
app.use(`${API_PREFIX}/inquiryAdd`, inquiryAddRoutes);
app.use(`${API_PREFIX}/updatePFM`, updatePFMRoutes);
app.use(`${API_PREFIX}/inquiryDtlByPFMNo`, inquiryDtlByPFMNoRoutes);
app.use(`${API_PREFIX}/proformaHdr`, proformaHdrRoutes);
app.use(`${API_PREFIX}/proformaDtl`, proformaDtlRoutes);


app.use("/test", (req, res) => {
    console.log("Test route is working");
    res.send(`Test route is working`);
});

app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`✅ Server is running on http://0.0.0.0:${PORT}`);
});