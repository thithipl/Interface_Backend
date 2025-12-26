"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInvoiceController = void 0;
const invoiceJson_service_1 = require("../../services/Invoice/invoiceJson_service");
const invoice_parser_1 = require("../../models/m_invoice/invoice_parser");
const service = new invoiceJson_service_1.InvoiceJsonService();
class InvoiceController {
    constructor() {
        this.getInvoiceConvert = async (req, res) => {
            try {
                const { invoiceCode } = req.params;
                if (!invoiceCode) {
                    res.status(400).json({ message: "Invoice Code is required." });
                    return;
                }
                const [rawDbData, rawItemData] = await Promise.all([
                    service.getInvoiceJson(invoiceCode),
                    service.getInvoiceItems(invoiceCode),
                ]);
                if (!rawDbData) {
                    res.status(404).json({ message: "Invoice data not found." });
                    return;
                }
                try {
                    const invoiceArray = [rawDbData];
                    const finalResult = (0, invoice_parser_1.createParsedInvoice)(invoiceArray, rawItemData);
                    const responseData = finalResult.detail;
                    res.json(responseData);
                }
                catch (parseError) {
                    console.error(`JSON Parse Error for Invoice: ${invoiceCode}`, parseError);
                    res.status(500).json({
                        message: "Failed to parse JSON content from database.",
                        error: parseError instanceof Error ? parseError.message : String(parseError)
                    });
                }
            }
            catch (error) {
                console.error("Error fetching invoice data:", error);
                res.status(500).json({
                    message: "Internal server error.",
                    error: error instanceof Error ? error.message : "An unknown error occurred"
                });
            }
        };
    }
}
exports.GetInvoiceController = new InvoiceController();
//# sourceMappingURL=GetInvoice_controller.js.map