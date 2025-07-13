import React from 'react';
import './HeroSection.css';

export const HeroSection = () => {
  return (
    <div className="app">
      {/* 背景装饰 */}
      <div className="background-gradient"></div>
      <div className="glass-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* 主要内容 */}
      <main className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="gradient-text">Fluent Desk AI</span>
            </h1>
            <p className="hero-subtitle">
              智能桌面助手，让工作更高效
            </p>
            <p className="hero-description">
              体验全新的AI会话管理工具，提升您的工作效率，简化日常任务
            </p>
            
            {/* 下载按钮 */}
            <div className="download-section">
              <div className="download-buttons">
                <a href="https://dist.guohere.com/release/FluentDesk_latest_x64_en-US.msi" className="download-btn windows-btn" download>
                  <div className="btn-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.351"/>
                    </svg>
                  </div>
                  <div className="btn-text">
                    <span className="btn-title">下载 Windows 版</span>
                    <span className="btn-subtitle">支持 Windows 10/11</span>
                  </div>
                </a>
                
                <a href="https://dist.guohere.com/release/FluentDesk_latest_aarch64.dmg" className="download-btn mac-btn" download>
                  <div className="btn-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <div className="btn-text">
                    <span className="btn-title">下载 Mac 版</span>
                    <span className="btn-subtitle">支持 macOS 12+</span>
                  </div>
                </a>
              </div>
              
              <div className="version-info">
                <span>最新版本 v1.0.0</span>
              </div>
            </div>
          </div>
          
          {/* 产品预览 */}
          <div className="hero-preview">
            <div className="preview-window">
              <div className="window-header">
                <div className="window-controls">
                  <span className="control close"></span>
                  <span className="control minimize"></span>
                  <span className="control maximize"></span>
                </div>
              </div>
              <div className="window-content">
                <div className="ai-interface">
                  <div className="ai-message">
                    <div className="message-bubble">
                      您好！我是 Fluent Desk AI，准备为您提供智能桌面会话管理服务
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 特性预览 */}
      {/* <section className="features-preview">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2h-5zM11 4h2v1h-2V4z"/>
                <path d="M6 7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7zm2 0v10h8V7H8z"/>
                <path d="M10 9h4v2h-4V9zm0 3h4v2h-4v-2z"/>
              </svg>
            </div>
            <h3>智能自动化</h3>
            <p>AI驱动的任务自动化</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 3h18v18H3V3zm2 2v14h14V5H5z"/>
                <path d="M7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h6v2H7v-2z"/>
              </svg>
            </div>
            <h3>高效管理</h3>
            <p>桌面文件智能整理</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L13.5 8.5L20 7L14.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9.5 12L4 7L10.5 8.5L12 2z"/>
              </svg>
            </div>
            <h3>极速响应</h3>
            <p>毫秒级操作响应</p>
          </div>
        </div>
      </section> */}
      <section style={{ textAlign: 'center', color: '#666', marginTop: '2rem', fontSize: '14px' }}>
        <p>FluentDeskAI 2025</p>
      </section>

    </div>
  );
};