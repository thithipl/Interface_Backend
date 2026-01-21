import type { OnlyProforma, ProformaHdr } from "../../models/m_proforma/m_VW_proformaHdr";
import { ProformaHdrModel } from "../../models/m_proforma/m_VW_proformaHdr";

export class ProformaHdrService {
    async getProformaHdrByPFMCode(pfm_Code: string): Promise<ProformaHdr[]> {
        return ProformaHdrModel.getProformaHdr(pfm_Code);
    }

    async getOnlyProforma(): Promise<OnlyProforma[]> {
        return ProformaHdrModel.getonlyProforma();
    }
}