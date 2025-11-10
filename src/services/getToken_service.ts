import axios from 'axios';
import qs from 'qs';
import { Token, TokenResponse } from '../models/m_gettoken';

export class GetTokenService {
    private readonly baseUrl = process.env.FPI_URL || 'https://www.fortuneparts.net';

    async login(data: Token): Promise<TokenResponse> {
        const payload = qs.stringify({
            email: data.email,
            password: data.password,
        });

        const response = await axios.post<TokenResponse>(
            `${this.baseUrl}/api/login`,
            payload,
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );

        return response.data;
    }
}
