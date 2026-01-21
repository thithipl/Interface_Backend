export declare class AuthService {
    private readonly saleUserModel;
    private encryptLegacy;
    login(username: string, passwordInput: string): Promise<{
        token: string;
        user: {
            user_name: string;
            emp_id: string;
            name_thai: string;
            name_eng: string;
            departmentcode: string;
            department: string;
            IsActive?: number;
        };
    }>;
}
//# sourceMappingURL=userAuth_Service.d.ts.map