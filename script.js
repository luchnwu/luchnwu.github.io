// 設定最後更新日期
document.addEventListener('DOMContentLoaded', function() {
    const lastUpdateElement = document.getElementById('lastUpdate');
    if (lastUpdateElement) {
        const today = new Date();
        const formattedDate = today.toLocaleDateString('zh-TW', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        lastUpdateElement.textContent = formattedDate;
    }

    // 個人照片錯誤處理
    const profileImg = document.getElementById('profileImg');
    if (profileImg) {
        profileImg.onerror = function() {
            // 如果圖片載入失敗，使用預設圖片或隱藏
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="150" height="150"%3E%3Crect fill="%232563eb" width="150" height="150"/%3E%3Ctext fill="white" font-size="60" font-family="Arial" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E盧%3C/text%3E%3C/svg%3E';
        };
    }

    // 平滑滾動效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 區塊進入視窗時的動畫效果
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
});

// 列印功能
function printResume() {
    window.print();
}

// 匯出為 PDF (使用瀏覽器列印功能)
function exportToPDF() {
    window.print();
}
