# 盧勁宇 - 個人履歷網站

這是一個使用 GitHub Pages 部署的個人履歷網站專案。

## �‍💻 關於我

- 🏥 前開刀房專科護理師（9 年經驗）
- 💻 資深軟體工程師（2 年經驗）
- 🎯 專注於醫療資訊系統開發
- 🚀 全端開發者（Vue.js, React, ASP.NET Core）

## �🚀 功能特色

- ✨ 現代化響應式設計
- 📱 支援行動裝置瀏覽
- 🎨 簡潔優雅的介面
- 🔄 自動部署到 GitHub Pages
- 🌐 支援中文內容

## 📂 專案結構

```
Myprofile/
├── index.html          # 主要 HTML 檔案
├── style.css           # 樣式表
├── script.js           # JavaScript 功能
├── assets/             # 資源檔案夾
│   └── profile.jpg     # 個人照片（請自行添加）
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions 自動部署設定
└── README.md           # 專案說明
```

## 🛠️ 使用方法

### 1. 建立 GitHub 儲存庫

1. 登入 GitHub
2. 建立新儲存庫，命名為 `luchnwu.github.io`（或您的 GitHub 使用者名稱）
3. 設定為 Public

### 2. 上傳專案檔案

```bash
# 初始化 Git
git init

# 添加所有檔案
git add .

# 提交變更
git commit -m "Initial commit: Personal resume website"

# 連結遠端儲存庫
git remote add origin https://github.com/yourusername/yourname.github.io.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 3. 啟用 GitHub Pages

1. 進入儲存庫的 **Settings**
2. 點選左側選單的 **Pages**
3. 在 **Source** 下選擇：
   - Source: **GitHub Actions**
4. 等待幾分鐘，網站就會自動部署

### 4. 訪問您的網站

- 網址：`https://luchnwu.github.io`（或您的使用者名稱）
- 或自訂網域

## 📋 網站內容

### 已包含真實資訊

✅ **個人資訊**
- 姓名：盧勁宇 (Lu Chin Wu)
- GitHub: [luchnwu](https://github.com/luchnwu)
- 104 履歷連結

✅ **工作經驗**
- 資深軟體工程師（2024/12 - 現在）
- 程式設計師 - 馬雅資訊（2023/01 - 2024/12）
- 護理師 - 振興醫院（2013/08 - 2022/12）

✅ **學歷**
- 高雄醫學大學 護理學系（2008-2012）
- 達內教育 Java 企業級應用課程（2022）

✅ **專案成就**
- 護理資訊軟體開發（Vue 3 + ASP.NET Core）
- TaskManagement Side Project
- 護理資訊軟體開發（React + ASP.NET Core）
- 護理資訊軟體維護與模組開發

✅ **技能**
- 前端：Vue.js, React, TypeScript, JavaScript
- 後端：ASP.NET Core, C#, Spring Boot, Java
- 資料庫：PostgreSQL, MySQL, MS SQL, Oracle SQL
- 工具：Git, Entity Framework Core

## ✏️ 自訂內容

### 修改個人資訊

編輯 `index.html` 檔案中的以下區塊：

1. **個人資料**：更新姓名、職稱、聯絡方式
2. **關於我**：撰寫個人簡介
3. **工作經驗**：添加工作經歷
4. **學歷**：更新教育背景
5. **技能**：列出專業技能
6. **專案**：展示個人作品

### 添加個人照片

1. 將照片放入 `assets/` 資料夾
2. 命名為 `profile.jpg`
3. 或在 `index.html` 中更新圖片路徑

### 自訂樣式

編輯 `style.css` 檔案中的 CSS 變數：

```css
:root {
    --primary-color: #2563eb;    /* 主色調 */
    --secondary-color: #1e40af;  /* 次要色調 */
    --text-dark: #1f2937;        /* 深色文字 */
    --text-light: #6b7280;       /* 淺色文字 */
}
```

## 🔄 自動部署流程

每次推送到 `main` 分支時，GitHub Actions 會自動：

1. ✅ 檢出最新程式碼
2. 📦 建置網站
3. 🚀 部署到 GitHub Pages
4. ✨ 網站自動更新

### 手動觸發部署

1. 進入儲存庫的 **Actions** 頁面
2. 選擇 **Deploy to GitHub Pages** workflow
3. 點擊 **Run workflow**

## 📝 更新網站內容

```bash
# 1. 修改檔案（例如 index.html）

# 2. 提交變更
git add .
git commit -m "Update work experience"

# 3. 推送到 GitHub（自動觸發部署）
git push
```

## 🎨 自訂主題色彩

在 `style.css` 中修改：

```css
:root {
    --primary-color: #your-color;     /* 更改為您喜歡的顏色 */
    --secondary-color: #your-color;   /* 次要顏色 */
}
```

## 📱 響應式設計

網站已針對以下裝置優化：
- 💻 桌面電腦
- 💻 平板電腦
- 📱 手機

## 🌐 自訂網域（選用）

1. 購買網域（例如：yourname.com）
2. 在儲存庫根目錄建立 `CNAME` 檔案
3. 檔案內容填入您的網域名稱
4. 在網域供應商設定 DNS：
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   ```

## 🔧 常見問題

### 網站沒有顯示？

1. 確認 GitHub Pages 已啟用
2. 檢查 Actions 頁面的部署狀態
3. 等待 5-10 分鐘讓變更生效

### 如何查看部署狀態？

1. 進入儲存庫的 **Actions** 頁面
2. 查看最新的 workflow 執行結果
3. 綠色勾號表示成功，紅色叉號表示失敗

## 📄 授權

此專案為個人履歷網站模板，可自由使用和修改。

## 👨‍💻 作者

盧勁宇 (Lu Chin Wu)

- GitHub: [@luchnwu](https://github.com/luchnwu)
- 104 履歷: [查看履歷](https://pda.104.com.tw/profile/share/gx81eReaUEyCrYaHbvbPvjeDXiOtfIaG)

---

**轉職故事**：從護理師到軟體工程師
- 💉 9 年護理經驗 → 💻 2 年軟體開發經驗
- 🏥 醫療專業 + 💻 技術能力 = 醫療資訊系統專家
- "勇於嘗試，永遠不要輕易說不，將不可能化為可能"

---

**提示**：此網站會在每次推送到 main 分支時自動更新部署！
