// 履歷互動
document.addEventListener('DOMContentLoaded', function() {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    // 主題切換：sky(晨光) / night(墨綠金)
    const root = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const themeNames = { sky: '晨光', night: '夜幕' };
    function renderThemeToggle() {
        const next = root.getAttribute('data-theme') === 'night' ? 'sky' : 'night';
        themeToggle.querySelector('.theme-toggle-label').textContent = themeNames[next];
        themeToggle.setAttribute('aria-label', '切換為' + themeNames[next] + '主題');
    }
    if (themeToggle) {
        renderThemeToggle();
        themeToggle.addEventListener('click', function() {
            const next = root.getAttribute('data-theme') === 'night' ? 'sky' : 'night';
            root.setAttribute('data-theme', next);
            window.resumeTheme.choose(next);
            renderThemeToggle();
        });
        themeToggle.title = '依台北日出、日落自動切換；手動選擇維持至下一次日出或日落';
        function syncTheme() {
            root.setAttribute('data-theme', window.resumeTheme.current());
            renderThemeToggle();
        }
        setInterval(syncTheme, 15000);
        document.addEventListener('visibilitychange', function () {
            if (!document.hidden) syncTheme();
        });
    }

    // 個人照片錯誤處理
    const profileImg = document.getElementById('profileImg');
    if (profileImg) {
        profileImg.onerror = function() {
            this.onerror = null;
            // 如果圖片載入失敗，使用預設圖片或隱藏
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="150" height="150"%3E%3Crect fill="%232563eb" width="150" height="150"/%3E%3Ctext fill="white" font-size="60" font-family="Arial" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E盧%3C/text%3E%3C/svg%3E';
        };
    }

    // 平滑滾動效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.getElementById(this.hash.slice(1));
            if (target) {
                e.preventDefault();
                history.pushState(null, '', this.hash);
                target.scrollIntoView({
                    behavior: reducedMotion.matches ? 'instant' : 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 章節導覽：標示目前閱讀中的區塊
    const tocLinks = document.querySelectorAll('.toc a');
    const spy = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                tocLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
                });
            }
        });
    }, { rootMargin: '-35% 0px -60% 0px' });
    tocLinks.forEach(link => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) spy.observe(target);
    });

    // 列印時展開所有專案細節，並顯示尚未捲到的區塊
    let printDetails = [];
    window.addEventListener('beforeprint', function() {
        printDetails = Array.from(document.querySelectorAll('details'), d => [d, d.open]);
        document.querySelectorAll('details').forEach(d => { d.open = true; });
        document.querySelectorAll('.section').forEach(section => {
            section.style.opacity = '1';
            section.style.transform = 'none';
        });
    });
    window.addEventListener('afterprint', function() {
        printDetails.forEach(([detail, open]) => { detail.open = open; });
        printDetails = [];
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
