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

// --- CODE CUỘN LÊN FORM TỪ BANNER DƯỚI CÙNG ---
    const btnThuNgay = document.getElementById("btn-thu-ngay");
    const sectionHero = document.getElementById("hero-section");

    if (btnThuNgay && sectionHero) {
        btnThuNgay.addEventListener("click", function() {
            // Cuộn mượt mà ngược lên phần Hero (chứa form AI)
            sectionHero.scrollIntoView({ behavior: "smooth" });
            
            // Tùy chọn thêm: Tự động nhấp nháy nhẹ viền khung tải ảnh để thu hút sự chú ý
            const uploadBox = document.getElementById("upload-box");
            if (uploadBox) {
                setTimeout(() => {
                    uploadBox.style.borderColor = "#f26522";
                    setTimeout(() => uploadBox.style.borderColor = "#ccc", 800);
                }, 500); // Đợi cuộn lên 0.5s rồi mới nhấp nháy
            }
        });
    }


    const mobileToggle = document.getElementById("mobile-menu-toggle");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const mobileOverlay = document.getElementById("mobile-drawer-overlay");
    const closeDrawer = document.getElementById("close-drawer");

    function openDrawer() {
        if (mobileDrawer && mobileOverlay) {
            mobileDrawer.classList.add("active");
            mobileOverlay.classList.add("active");
            // Prevent body scroll when drawer is open
            document.body.style.overflow = "hidden";
        }
    }

    function hideDrawer() {
        if (mobileDrawer && mobileOverlay) {
            mobileDrawer.classList.remove("active");
            mobileOverlay.classList.remove("active");
            // Restore body scroll
            document.body.style.overflow = "auto";
        }
    }

    if (mobileToggle) mobileToggle.addEventListener("click", openDrawer);
    if (closeDrawer) closeDrawer.addEventListener("click", hideDrawer);
    if (mobileOverlay) mobileOverlay.addEventListener("click", hideDrawer);

    // Bắt sự kiện khi click vào nút xem gợi ý form AI
    const btnSubmit = document.getElementById("btn-submit-form");
    if (btnSubmit) {
        btnSubmit.addEventListener("click", function() {
            alert("CRB FitMatch đang xử lý thông tin để đưa ra gợi ý phù hợp nhất cho bạn!");
        });
    }

// --- CODE XỬ LÝ BOX RADIO (VIỀN CAM) ---
    const radioPills = document.querySelectorAll('.radio-pill input[type="radio"]');
    
    function updateRadioPills() {
        // Xóa class active ở tất cả các box trước
        document.querySelectorAll('.radio-pill').forEach(pill => {
            pill.classList.remove('active');
        });
        
        // Kiểm tra xem nút nào đang được chọn (checked) thì thêm class active vào box chứa nó
        radioPills.forEach(radio => {
            if (radio.checked) {
                radio.closest('.radio-pill').classList.add('active');
            }
        });
    }

    // Lắng nghe sự kiện mỗi khi người dùng click đổi lựa chọn
    radioPills.forEach(radio => {
        radio.addEventListener('change', updateRadioPills);
    });
    
    // Gọi hàm 1 lần ngay khi tải trang để tô màu cam cho nút mặc định
    if(radioPills.length > 0) {
        updateRadioPills();
    }

});