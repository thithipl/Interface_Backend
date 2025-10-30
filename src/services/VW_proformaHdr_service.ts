import type { ProformaHdr } from "../models/m_VW_proformaHdr";
import { ProformaHdrModel } from "../models/m_VW_proformaHdr";

export class ProformaHdrService {
    async getProformaHdrByPFMCode(pfm_Code: string): Promise<ProformaHdr[]> {
        return ProformaHdrModel.getProformaHdr(pfm_Code);
    }
}