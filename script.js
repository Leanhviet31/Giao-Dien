// Tính năng toggle menu cho màn hình mobile
document.addEventListener("DOMContentLoaded", function () {

    // --- CODE CUỘN TRANG CHO 2 NÚT ---
    const btnBatDau = document.getElementById("btn-bat-dau");
    const btnThayChau = document.getElementById("btn-thay-chau");
    const sectionNhuCau = document.getElementById("chon-theo-nhu-cau");

    // Hàm thực hiện cuộn
    function cuonXuongNhuCau() {
        if (sectionNhuCau) {
            sectionNhuCau.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Gắn sự kiện click cho 2 nút
    if (btnBatDau) {
        btnBatDau.addEventListener("click", cuonXuongNhuCau);
    }
    
    if (btnThayChau) {
        btnThayChau.addEventListener("click", cuonXuongNhuCau);
    }

    // --- CODE TẢI ẢNH LÊN ---
    const uploadBox = document.getElementById("upload-box");
    const fileUpload = document.getElementById("file-upload");
    const uploadText = document.getElementById("upload-text");

    if (uploadBox && fileUpload) {
        // 1. Khi click vào khung nét đứt -> tự động mở cửa sổ chọn file
        uploadBox.addEventListener("click", function() {
            fileUpload.click();
        });

        // 2. Khi người dùng đã chọn xong file -> Đổi chữ thành tên file đó
        fileUpload.addEventListener("change", function() {
            // Kiểm tra xem người dùng có chọn file chưa
            if (fileUpload.files && fileUpload.files.length > 0) {
                const fileName = fileUpload.files[0].name; // Lấy tên file
                
                // Hiển thị tên file ra màn hình
                uploadText.innerHTML = `Đã chọn ảnh:<br><strong style="color: #00796b;">${fileName}</strong>`;
                
                // Đổi nhẹ màu nền khung để báo hiệu thành công
                uploadBox.style.borderColor = "#00796b";
                uploadBox.style.backgroundColor = "#e0f2f5";
            } else {
                // Nếu người dùng ấn Hủy, trả lại trạng thái cũ
                uploadText.innerHTML = `Tải ảnh bếp vào đây<br>hoặc chọn ảnh`;
                uploadBox.style.borderColor = "#ccc";
                uploadBox.style.backgroundColor = "#fafafa";
            }
        });
    }

    // --- CODE CUỘN TRANG TỪ HEADER XUỐNG PHẦN SẢN PHẨM ---
    const btnTimChau = document.getElementById("btn-tim-chau");
    const sectionMauPhuHop = document.getElementById("mau-phu-hop");

    if (btnTimChau && sectionMauPhuHop) {
        btnTimChau.addEventListener("click", function() {
            // Cuộn mượt mà xuống phần 3 mẫu phù hợp
            sectionMauPhuHop.scrollIntoView({ behavior: "smooth" });
        });
    }

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