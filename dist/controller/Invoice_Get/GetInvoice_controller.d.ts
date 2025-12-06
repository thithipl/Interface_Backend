import type { Request, Response } from "express";
declare class InvoiceController {
    getInvoiceConvert: (req: Request, res: Response) => Promise<void>;
    private extractRawSource;
    private parseInvoiceSource;
    private safeJsonParse;
}
export declare const GetInvoiceController: InvoiceController;
export {};
//# sourceMappingURL=GetInvoice_controller.d.ts.map