/* =========================================
   الملف البرمجي الأساسي (Core Script) - موقع الأدوات الذكية
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    // رسالة ترحيبية أنيقة في موجه الأوامر (Console) للمطورين
    console.log(
        "%c🛠️ موقع الأدوات الذكية يعمل بكفاءة عالية!", 
        "color: #2563eb; font-size: 16px; font-weight: bold; background: #eff6ff; padding: 10px; border-radius: 8px;"
    );
});

/* =========================================
   دوال عامة (يمكنك استخدامها في كل الأدوات)
   ========================================= */

/**
 * دالة لنسخ أي نص إلى الحافظة بسهولة
 * مفيدة جداً في أداة (توليد كلمات المرور) أو (منتقي الألوان)
 * @param {string} text - النص المراد نسخه
 */
function copyToClipboard(text) {
    if (!text) return; // إذا كان النص فارغاً لا تفعل شيئاً

    navigator.clipboard.writeText(text).then(() => {
        showNotification("تم النسخ بنجاح! ✅");
    }).catch(err => {
        console.error("خطأ في النسخ: ", err);
        showNotification("حدث خطأ أثناء النسخ ❌", true);
    });
}

/**
 * دالة لعرض إشعارات منبثقة (Toast) بتصميم جميل وعصري
 * تغنيك عن استخدام alert() التقليدية
 * @param {string} message - النص الذي سيظهر في الإشعار
 * @param {boolean} isError - إذا كان صحيحاً (true) سيظهر الإشعار بلون أحمر للخطأ
 */
function showNotification(message, isError = false) {
    // 1. إنشاء عنصر الإشعار
    const notification = document.createElement("div");
    notification.textContent = message;
    
    // 2. تصميم الإشعار برمجياً (لكي لا تحتاج لتعديل ملف CSS)
    Object.assign(notification.style, {
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%) translateY(20px)",
        backgroundColor: isError ? "#ef4444" : "#10b981", // أحمر للخطأ، أخضر للنجاح
        color: "white",
        padding: "12px 24px",
        borderRadius: "8px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
        fontFamily: "'Cairo', sans-serif",
        fontSize: "15px",
        fontWeight: "bold",
        zIndex: "9999",
        opacity: "0",
        transition: "all 0.4s ease"
    });

    // 3. إضافة الإشعار للصفحة
    document.body.appendChild(notification);

    // 4. إظهار الإشعار بحركة سلسة
    setTimeout(() => {
        notification.style.opacity = "1";
        notification.style.transform = "translateX(-50%) translateY(0)";
    }, 10);

    // 5. إخفاء الإشعار ومسحه بعد 3 ثوانٍ
    setTimeout(() => {
        notification.style.opacity = "0";
        notification.style.transform = "translateX(-50%) translateY(20px)";
        setTimeout(() => notification.remove(), 400); // حذفه تماماً من الكود بعد انتهاء الحركة
    }, 3000);
}
