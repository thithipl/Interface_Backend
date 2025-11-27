import type { ProformaData } from "../../models/m_proforma/m_VW_proformaData";
import { ProformaDataModel } from "../../models/m_proforma/m_VW_proformaData";

export class ProformaDataService {
    async getAllProformaData(): Promise<ProformaData[]> {
        return ProformaDataModel.getAll();
    }

    async getProformaDataByPFMNo(pfmNo: string): Promise<ProformaData[]> {
        return ProformaDataModel.getByPFMNo(pfmNo);
    }
};