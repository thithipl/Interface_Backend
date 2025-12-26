import express from "express";
const cors = require("cors");
import dotenv from "dotenv";
import quotationRoutes from "./routes/Quotation/quotation.routes";
import quotationDtlRoutes from "./routes/Quotation/quotationDtl_routes";
import inquiryPFMNoRoutes from "./routes/inquiry/VW_inquiryPFMNo_routes";
import proformaDataRoutes from "./routes/Proforma/VW_proformaData_routes";
import inquiryDataRoutes from "./routes/inquiry/VW_inquiryData_routes";
import inquiryItemRoutes from "./routes/inquiry/VW_inquiryItem_routes";
import OnlyIqrRoutes from "./routes/inquiry/VW_onlyiqr.routes";
import inquiryReqRoutes from "./routes/inquiry/VW_inquiryReq_routes";
import inquiryAddRoutes from "./routes/inquiry/VW_inquiryAdd_routes";
import updatePFMRoutes from "./routes/Proforma/AS_updateDataPFM_Inquiry";
import inquiryDtlByPFMNoRoutes from "./routes/inquiry/VW_inquiryDtlByPFMNo_routes";
import proformaHdrRoutes from "./routes/Proforma/VW_proformaHdr_routes";
import proformaDtlRoutes from "./routes/Proforma/VW_proformaDtl_routes";
import invoiceRoutes from "./routes/invoice/invoice_routes";
import tokenRoutes from "./routes/token_routes";
import proformaPostRoutes from "./routes/Proforma/proformaPost_routes";
import get_ProductItemRoutes from "./routes/Product_Item/get_ProductItem_routes";
import getInvoiceRoutes from "./routes/invoice/invoiceOnly_routes";
import invoiceJsonRoutes from "./routes/invoice/invoiceJson_routes";


dotenv.config();
const app = express();

app.use(cors());
const API_PREFIX = process.env.API_PREFIX || "/api";
const PORT = process.env.PORT || 3030;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

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
app.use(`${API_PREFIX}/PFMNo`, inquiryDtlByPFMNoRoutes);
app.use(`${API_PREFIX}/proformaHdr`, proformaHdrRoutes);
app.use(`${API_PREFIX}/proformaDtl`, proformaDtlRoutes);
app.use(`${API_PREFIX}/invoice`, invoiceRoutes);
app.use(`${API_PREFIX}/login`, tokenRoutes);
app.use(`${API_PREFIX}/proforma`, proformaPostRoutes);
app.use(`${API_PREFIX}/getProductItem`, get_ProductItemRoutes);
app.use(`${API_PREFIX}/invoiceOnly`, getInvoiceRoutes);
app.use(`${API_PREFIX}/invoiceJson`, invoiceJsonRoutes);



app.use("/test", (req, res) => {
    console.log("Test route is working");
    res.send(`Test route is working`);
});

app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`✅ Server is running on http://0.0.0.0:${PORT}`);
});