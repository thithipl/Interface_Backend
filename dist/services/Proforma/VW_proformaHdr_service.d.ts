import type { OnlyProforma, ProformaHdr } from "../../models/m_proforma/m_VW_proformaHdr";
export declare class ProformaHdrService {
    getProformaHdrByPFMCode(pfm_Code: string): Promise<ProformaHdr[]>;
    getOnlyProforma(): Promise<OnlyProforma[]>;
}
//# sourceMappingURL=VW_proformaHdr_service.d.ts.map