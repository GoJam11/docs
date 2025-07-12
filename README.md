# FluentDeskAI 官网

FluentDeskAI 的官方文档网站，基于 Mintlify 构建。

## 关于 FluentDeskAI

FluentAI 是一款支持跨模型、多模态的桌面 AI 对话工具，提供流畅自然的 AI 交互体验。

### 主要特性

- 🤖 **多模型支持** - 支持 OpenAI、Claude、Gemini、DeepSeek 等主流 AI 模型
- 🎯 **多模态交互** - 支持文本、图片、语音等多种输入方式
- ⚡ **快捷操作** - 丰富的 Prompt 模板和快捷键支持
- 🛠️ **易于配置** - 简单的 API 配置流程
- 🔒 **隐私安全** - 本地存储，支持离线模型

## 开发

### 本地预览

安装 [Mintlify CLI](https://www.npmjs.com/package/mintlify) 来本地预览文档：

```bash
npm i -g mintlify
```

在项目根目录运行：

```bash
mintlify dev
```

### 项目结构

```
/
├── docs.json          # 网站配置
├── index.mdx          # 首页
├── quickstart.mdx     # 快速开始
├── features.mdx       # 功能特性
├── guide/             # 使用指南
│   ├── setup.mdx      # 设置指南
│   ├── api-config.mdx # API配置
│   ├── models.mdx     # 模型管理
│   └── chat.mdx       # 对话功能
├── images/            # 图片资源
└── logo/              # Logo 文件
```

### 发布

使用 Mintlify 的 GitHub 应用来自动部署。推送到主分支后会自动发布到生产环境。

## 贡献

欢迎提交 Issue 和 Pull Request 来改进文档。

## 许可证

本项目采用 MIT 许可证。
