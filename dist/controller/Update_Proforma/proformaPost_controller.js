"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostProforma = void 0;
const proformaPost_service_1 = require("../../services/Proforma/proformaPost_service");
const PostProforma = async (req, res) => {
    try {
        // 1. Log ดู Header และ Token (เช็ค Basic)
        const token = req.headers.authorization?.replace("Bearer ", "");
        if (!token) {
            return res.status(401).json({ message: "Missing Bearer Token" });
        }
        // 2. [สำคัญมาก] Log ดู Body ที่ส่งมาจาก Frontend
        // เพื่อพิสูจน์ว่า Frontend ส่งมาแบบ { header: {...} } หรือมาแบบก้อนเดียว
        console.log("---------------------------------------------");
        console.log("📥 Controller Received Body:");
        console.log(JSON.stringify(req.body, null, 2));
        console.log("---------------------------------------------");
        // 3. Validation: เช็คว่า Body ว่างหรือไม่?
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                success: false,
                message: "Request Body is empty!"
            });
        }
        // 4. (Optional) เช็คเบื้องต้นว่ามี key 'header' หรือไม่?
        // ถ้า Model บังคับว่าต้องมี header แต่ Frontend ไม่ส่งมา ให้แจ้ง Error เลย
        if (!req.body.header && !req.body.proforma_Code) {
            // เช็คดักไว้ก่อน Service พัง
            console.warn("⚠️ Warning: Body might be missing 'header' or 'proforma_Code'");
        }
        const data = req.body;
        // 5. เรียก Service
        console.log("🔄 Calling Service...");
        const result = await proformaPost_service_1.proformaPostService.postProforma(data, token);
        // 6. Log ผลลัพธ์ก่อนส่งกลับ
        console.log("✅ Service Result:", result);
        res.json(result);
    }
    catch (error) {
        console.error("❌ Controller Error:", error);
        // ส่ง Error กลับไปให้ชัดเจนขึ้น
        res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error",
            // stack: error.stack // เปิดบรรทัดนี้ถ้าอยากเห็น Stack Trace ใน Network Tab
        });
    }
};
exports.PostProforma = PostProforma;
//# sourceMappingURL=proformaPost_controller.js.map