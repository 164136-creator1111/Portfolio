// เพิ่ม JavaScript สำหรับการโต้ตอบกับผู้ใช้ (Optional)
document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio SOMCHAI พร้อมแล้ว!");
    
    // โค้ดเพิ่มเติมสำหรับแสดงปีปัจจุบันใน Footer อัตโนมัติ (ตาม id="year" ใน HTML)
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
