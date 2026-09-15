// Tính năng toggle menu cho màn hình mobile
document.addEventListener("DOMContentLoaded", function () {
    const mobileToggle = document.getElementById("mobile-menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    mobileToggle.addEventListener("click", function () {
        if (navMenu.style.display === "flex") {
            navMenu.style.display = "none";
        } else {
            navMenu.style.display = "flex";
            navMenu.style.flexDirection = "column";
            navMenu.style.position = "absolute";
            navMenu.style.top = "70px";
            navMenu.style.left = "0";
            navMenu.style.width = "100%";
            navMenu.style.backgroundColor = "#fff";
            navMenu.style.padding = "20px";
            navMenu.style.boxShadow = "0 5px 10px rgba(0,0,0,0.1)";
            navMenu.style.zIndex = "1000";
        }
    });

    // Bắt sự kiện khi click vào nút xem gợi ý form AI
    const btnSubmit = document.getElementById("btn-submit-form");
    if (btnSubmit) {
        btnSubmit.addEventListener("click", function() {
            alert("CRB FitMatch đang xử lý thông tin để đưa ra gợi ý phù hợp nhất cho bạn!");
        });
    }
});