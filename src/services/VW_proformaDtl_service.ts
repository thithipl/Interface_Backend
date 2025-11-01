import type { ProformaDtl } from "../models/m_VW_proformaDtl";
import { ProformaDtlModel } from "../models/m_VW_proformaDtl";

export class ProformaDtlService {
    async getProformaDtlByPFMCode(pfm_Code: string): Promise<ProformaDtl[]> {
        return ProformaDtlModel.getProformaDtl(pfm_Code);
    }
}