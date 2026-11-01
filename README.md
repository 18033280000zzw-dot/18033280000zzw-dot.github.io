# Lexy的BLOGS ✦ Y2K Glitter 个人博客

一个纯静态、无需构建、闪闪发光的千禧年 Y2K 风格个人博客。

## 文件结构

```
lexy-blog/
├── index.html       # 主页面（在这编辑文字内容）
├── css/style.css    # 样式（配色 / 闪光 / 布局）
├── js/main.js       # 交互（粒子 / 时钟 / 计数器 / 留言板）
└── README.md
```

## 怎么改内容

- **名字 / 自我介绍**：打开 `index.html`，搜“在这里编辑”的注释，替换文字即可。
- **相册照片**：把 `<div class="photo ph-1">🌸</div>` 里的 emoji 换成
  `<img src="你的图片地址" alt="">`（图片放仓库里或任意图床）。
- **友链**：找到 `class="badge"` 的 `<a>`，改 `href` 和文字。
- **配色**：在 `css/style.css` 顶部的 `:root` 里改颜色变量。

## 部署到 GitHub Pages（免费）

你的用户名是 `18033280000zzw-dot`，下面按这个来。

### 方式 A（推荐）：用户主页，地址最短

1. 登录 GitHub → 右上角 **+** → **New repository**。
2. 仓库名填：**`18033280000zzw-dot.github.io`**（必须一模一样），选 **Public**，点 **Create repository**。
3. 把本文件夹里的 `index.html`、`css`、`js` 上传到仓库根目录
   （网页里直接拖进去即可，或用下面的 git 命令）。
4. 等 1~3 分钟，访问 👉 **https://18033280000zzw-dot.github.io/** 就能看到你的博客。

### 方式 B：任意仓库名

1. 新建仓库（例如叫 `my-blog`），Public，上传文件。
2. 打开仓库 **Settings → Pages**，Source 选 **Deploy from a branch**，分支选 **main**、目录选 **/ (root)**，保存。
3. 访问 👉 **https://18033280000zzw-dot.github.io/my-blog/**。

### 用 git 命令行上传

```bash
cd lexy-blog
git init
git add .
git commit -m "init: Lexy's Y2K glitter blog"
git branch -M main
git remote add origin https://github.com/18033280000zzw-dot/18033280000zzw-dot.github.io.git
git push -u origin main
```

## 换成免费二级域名 lexyblog.is-a.dev

> is-a.dev 是给开发者提供的免费二级域名服务，通过向官方仓库提 PR 申请。

### 前提：博客已经部署在 GitHub Pages
先确认 `https://18033280000zzw-dot.github.io/` 能正常打开。

### 第 1 步：在博客仓库加 CNAME 文件
仓库根目录新建 `CNAME`（无后缀），内容只有一行：

```
lexyblog.is-a.dev
```

本文件夹里已经帮你放好了一个 `CNAME`，上传时一起传上去即可。

### 第 2 步：申请 is-a.dev 子域名
1. 打开 <https://github.com/is-a-dev/register>，点 **Fork**。
2. 在你的 fork 里新建文件 `domains/lexyblog.json`，内容用本文件夹 `is-a-dev/lexyblog.json`
   里的（**记得把 `email` 改成你自己的邮箱**）。
3. 提交后回到原仓库点 **New pull request**。
4. 等维护者审核合并（通常几天内），通过后 DNS 就会生效。

> 如果官方格式有更新，以 `is-a-dev/register` 仓库 README 里的最新示例为准。

### 第 3 步：GitHub Pages 绑定域名
仓库 **Settings → Pages → Custom domain** 填 `lexyblog.is-a.dev` → Save，
等 DNS 检查通过后勾选 **Enforce HTTPS**。

最终访问 👉 **https://lexyblog.is-a.dev/**

## 说明

- 本站不依赖任何后端，留言板与访客计数用浏览器 `localStorage` 保存（仅本机可见）。
  如果想要“所有人都能看到留言”，需要接第三方服务（如 giscus / Disqus），以后可以再加。
- 字体来自 Google Fonts（Monoton / Bungee / Press Start 2P / VT323），联网即可显示。
