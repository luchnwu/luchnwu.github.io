# GitHub Pages 部署指南

## 🚀 快速部署步驟

### 步驟 1：初始化 Git 儲存庫

在 PowerShell 中執行以下命令：

```powershell
cd "c:\Users\Eric.Lu\OneDrive\文件\profiles\Myprofile"
git init
git add .
git commit -m "Initial commit: 盧勁宇個人履歷網站"
```

### 步驟 2：建立 GitHub 儲存庫

1. 前往 [GitHub](https://github.com)
2. 點擊右上角的 "+" → "New repository"
3. 儲存庫名稱：`luchnwu.github.io`（或您的使用者名稱）
4. 設定為 **Public**
5. **不要**勾選任何初始化選項（README, .gitignore, license）
6. 點擊 "Create repository"

### 步驟 3：連結並推送到 GitHub

```powershell
# 將 luchnwu 替換為您的 GitHub 使用者名稱
git remote add origin https://github.com/luchnwu/luchnwu.github.io.git
git branch -M main
git push -u origin main
```

如果推送時要求登入：
- 使用者名稱：您的 GitHub 使用者名稱
- 密碼：使用 Personal Access Token（不是密碼）

### 步驟 4：設定 GitHub Pages

1. 進入您的儲存庫頁面
2. 點擊 **Settings**（設定）
3. 左側選單點擊 **Pages**
4. 在 "Build and deployment" 下：
   - Source: 選擇 **GitHub Actions**
5. 儲存設定

### 步驟 5：等待部署完成

1. 進入儲存庫的 **Actions** 頁面
2. 查看 "Deploy to GitHub Pages" workflow
3. 等待綠色勾號（表示部署成功）
4. 通常需要 2-5 分鐘

### 步驟 6：訪問您的網站

網址：`https://luchnwu.github.io`

## 🔄 更新網站內容

每次修改網站內容後，執行以下命令：

```powershell
git add .
git commit -m "更新履歷內容"
git push
```

推送後，GitHub Actions 會自動重新部署網站。

## 📝 創建 Personal Access Token

如果推送時需要 Token：

1. 前往 GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. 點擊 "Generate new token" → "Generate new token (classic)"
3. 設定：
   - Note: `Resume Website Deploy`
   - Expiration: 選擇過期時間
   - 勾選：`repo`（完整的 repository 存取權限）
4. 點擊 "Generate token"
5. **複製 token**（只會顯示一次！）
6. 使用此 token 作為密碼

## ✅ 檢查部署狀態

### 方法 1：Actions 頁面
1. 進入儲存庫
2. 點擊 "Actions" 標籤
3. 查看最新的 workflow run
4. 綠色勾號 = 成功，紅色叉號 = 失敗

### 方法 2：查看網站
直接訪問 `https://luchnwu.github.io`

## 🛠️ 常見問題

### Q: 推送後網站沒有更新？
A: 
1. 檢查 Actions 是否成功執行
2. 清除瀏覽器快取（Ctrl + F5）
3. 等待 5-10 分鐘

### Q: Actions 執行失敗？
A:
1. 檢查 `.github/workflows/deploy.yml` 檔案是否存在
2. 確認 Pages 設定為 "GitHub Actions"
3. 查看 Actions 頁面的錯誤訊息

### Q: 404 Not Found？
A:
1. 確認儲存庫名稱為 `使用者名稱.github.io`
2. 確認檔案已成功推送
3. 等待幾分鐘讓部署完成

### Q: 如何使用自訂網域？
A:
1. 購買網域（如 luchnwu.com）
2. 在儲存庫根目錄建立 `CNAME` 檔案
3. 內容填入您的網域：`luchnwu.com`
4. 在網域供應商設定 DNS：
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
          185.199.109.153
          185.199.110.153
          185.199.111.153
   ```
5. 在 GitHub Pages 設定中填入自訂網域

## 📱 本地預覽

使用 VS Code 的 Live Server 擴充功能：

1. 安裝 "Live Server" 擴充功能
2. 右鍵點擊 `index.html`
3. 選擇 "Open with Live Server"

或使用 Python：

```powershell
# Python 3
python -m http.server 8000

# 開啟瀏覽器訪問
# http://localhost:8000
```

## 🎯 部署完成後的檢查清單

- [ ] 網站可以正常訪問
- [ ] 所有連結都正常運作
- [ ] 個人照片正確顯示（如果有上傳）
- [ ] 手機版顯示正常
- [ ] GitHub、104 履歷等外部連結正確
- [ ] 所有資訊都已更新為最新版本

## 📞 需要協助？

- GitHub Pages 文件: https://docs.github.com/pages
- GitHub Actions 文件: https://docs.github.com/actions
- 問題回報: 在儲存庫建立 Issue

---

祝您部署順利！🎉
