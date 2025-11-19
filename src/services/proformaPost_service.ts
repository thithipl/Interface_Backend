import axios from "axios";
import { ProformaModelPost } from "../models/m_proforma/m_proformaPost";

export class ProformaPostService {
    private readonly apiUrl = "https://www.fortuneparts.net/api/proforma/update";

    async postProforma(data: ProformaModelPost, token: string) {
        try {
            const headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            };
            const response = await axios.post(this.apiUrl, data, { headers });
            return response.data;
        } catch (error: any) {
            console.error("ProformaPostService.postProforma error:", error.message);
            throw new Error("Failed to update invoice: " + error.message);
        }
    }
}

export const proformaPostService = new ProformaPostService();