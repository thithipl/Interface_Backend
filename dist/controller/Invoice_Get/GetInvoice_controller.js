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
                const invoiceCode = req.params.invoiceCode;
                const rawDbData = await service.getInvoiceJson(invoiceCode);
                if (!rawDbData || rawDbData.length === 0) {
                    res.status(404).json({ message: "Invoice data not found." });
                    return;
                }
                const firstRecord = rawDbData[0];
                console.log("🔑 Keys received from DB:", Object.keys(firstRecord));
                const rawSource = this.extractRawSource(firstRecord);
                if (!rawSource) {
                    console.error("❌ Data structure mismatch. Record:", firstRecord);
                    res.status(500).json({
                        message: "Database returned a record, but could not find JsonDetail or JSONOutput column.",
                        availableKeys: Object.keys(firstRecord)
                    });
                    return;
                }
                try {
                    const rawJsonObject = this.parseInvoiceSource(rawSource);
                    const finalResult = (0, invoice_parser_1.createParsedInvoice)(rawJsonObject);
                    res.json(finalResult);
                }
                catch (parseError) {
                    console.error("JSON Parse Error:", parseError);
                    res.status(500).json({
                        message: "Failed to parse JSON string",
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
    extractRawSource(record) {
        return record.JSONOutput;
    }
    parseInvoiceSource(source) {
        let jsonObject;
        if (typeof source === 'object' && source !== null) {
            const nestedString = source.JSONOutput || source.jsonOutput || source.jsonoutput;
            if (nestedString) {
                jsonObject = this.safeJsonParse(nestedString);
            }
            else {
                jsonObject = source;
            }
        }
        else if (typeof source === 'string') {
            jsonObject = this.safeJsonParse(source);
        }
        else {
            throw new Error("Unknown data type for source column");
        }
        if (jsonObject && jsonObject.JSONOutput && typeof jsonObject.JSONOutput === 'string') {
            return JSON.parse(jsonObject.JSONOutput);
        }
        return jsonObject;
    }
    safeJsonParse(targetString) {
        if (!targetString)
            return {};
        const trimmed = targetString.trim();
        if (!trimmed.startsWith('{') && !trimmed.startsWith('[')) {
            throw new Error("Data is not a valid JSON string");
        }
        return JSON.parse(targetString);
    }
}
exports.GetInvoiceController = new InvoiceController();
//# sourceMappingURL=GetInvoice_controller.js.map