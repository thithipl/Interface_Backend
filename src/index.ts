import express from "express";
const cors = require("cors");
import dotenv from "dotenv";
import quotationRoutes from "./routes/quotation.routes";
import quotationDtlRoutes from "./routes/quotation_routes";
import inquiryPFMNoRoutes from "./routes/inquiryPFMNo_routes";

dotenv.config();
const app = express();

app.use(cors());
const API_PREFIX = process.env.API_PREFIX || "/api";

app.use(express.json());
console.log(`Mounting quotationRoutes at ${API_PREFIX}/quotations`);
app.use(`${API_PREFIX}/quotations`, quotationRoutes);
app.use(`${API_PREFIX}/quotationDtl`, quotationDtlRoutes);
app.use(`${API_PREFIX}/inquiryPFMNo`, inquiryPFMNoRoutes);


app.use("/test", (req, res) => {
    console.log("Test route is working");
    res.send("Test route is working");
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
