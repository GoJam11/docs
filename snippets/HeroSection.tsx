import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="glass-card">
        <h1 className="hero-title">Fluent Desk AI</h1>
        <p className="hero-subtitle">支持跨模型、多模态的AI助手</p>
        <p className="hero-description">
          让AI对话更加流畅自然。支持多种主流AI模型，提供流畅的多模态交互体验。
          无论您是开发者、创作者还是知识工作者，Fluent Desk AI 都能成为您最得力的AI助手。
        </p>
        
        <div className="download-container">
          <a href="#" className="download-btn windows">
            <span className="btn-icon">🪟</span>
            下载 Windows 版
          </a>
          <a href="#" className="download-btn mac">
            <span className="btn-icon">🍎</span>
            下载 Mac 版
          </a>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🤖</span>
            <h3 className="feature-title">跨模型支持</h3>
            <p className="feature-desc">支持 OpenAI、Claude、Gemini、DeepSeek 等主流AI模型</p>
          </div>
          
          <div className="feature-card">
            <span className="feature-icon">🎯</span>
            <h3 className="feature-title">多模态交互</h3>
            <p className="feature-desc">支持文本、图片、语音等多种输入方式</p>
          </div>
          
          <div className="feature-card">
            <span className="feature-icon">⚡</span>
            <h3 className="feature-title">快捷操作</h3>
            <p className="feature-desc">丰富的快捷prompt模板，提高工作效率</p>
          </div>
          
          <div className="feature-card">
            <span className="feature-icon">🔒</span>
            <h3 className="feature-title">隐私安全</h3>
            <p className="feature-desc">本地运行，保护您的数据安全</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;