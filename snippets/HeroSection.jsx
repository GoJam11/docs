import React from 'react';

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
              体验全新的AI驱动桌面管理工具，提升您的工作效率，简化日常任务
            </p>
            
            {/* 下载按钮 */}
            <div className="download-section">
              <div className="download-buttons">
                <button className="download-btn windows-btn">
                  <div className="btn-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.351"/>
                    </svg>
                  </div>
                  <div className="btn-text">
                    <span className="btn-title">下载 Windows 版</span>
                    <span className="btn-subtitle">支持 Windows 10/11</span>
                  </div>
                </button>
                
                <button className="download-btn mac-btn">
                  <div className="btn-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <div className="btn-text">
                    <span className="btn-title">下载 Mac 版</span>
                    <span className="btn-subtitle">支持 macOS 12+</span>
                  </div>
                </button>
              </div>
              
              <div className="version-info">
                <span>最新版本 v2.1.0</span>
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
                      您好！我是 Fluent Desk AI，准备为您提供智能桌面管理服务
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 特性预览 */}
      <section className="features-preview">
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
      </section>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .app {
          min-height: 100vh;
          background: #000000;
          color-scheme: dark;
          color: #ffffff;
          position: relative;
          overflow-x: hidden;
        }

        /* 背景装饰 */
        .background-gradient {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
                     radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
          z-index: -2;
        }

        .glass-orbs {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.05) 0%, 
            rgba(255, 255, 255, 0.02) 100%);
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: float 8s ease-in-out infinite;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          top: 10%;
          left: -10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 200px;
          height: 200px;
          top: 70%;
          right: -5%;
          animation-delay: 2s;
        }

        .orb-3 {
          width: 150px;
          height: 150px;
          top: 40%;
          left: 70%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(5deg);
          }
        }

        /* 主要内容 */
        .hero-section {
          padding: 0 2rem 4rem;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-content {
          z-index: 10;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .gradient-text {
          background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: #e0e0e0;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .hero-description {
          font-size: 1.1rem;
          color: #b0b0b0;
          line-height: 1.6;
          margin-bottom: 3rem;
        }

        /* 下载按钮 */
        .download-section {
          text-align: left;
        }

        .download-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .download-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          color: #ffffff;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
          min-width: 200px;
        }

        .download-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .btn-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.9;
        }

        .btn-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .btn-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .btn-subtitle {
          font-size: 0.875rem;
          opacity: 0.8;
        }

        .version-info {
          color: #888888;
          font-size: 0.9rem;
        }

        /* 产品预览 */
        .hero-preview {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .preview-window {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          overflow: hidden;
          width: 100%;
          max-width: 500px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        .window-header {
          background: rgba(255, 255, 255, 0.05);
          padding: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .window-controls {
          display: flex;
          gap: 0.5rem;
        }

        .control {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .control.close {
          background: #ff5f57;
        }

        .control.minimize {
          background: #ffbd2e;
        }

        .control.maximize {
          background: #28ca42;
        }

        .window-content {
          padding: 2rem;
          min-height: 200px;
        }

        .ai-interface {
          display: flex;
          flex-direction: column;
        }

        .ai-message {
          display: flex;
          justify-content: flex-start;
        }

        .message-bubble {
          background: rgba(255, 255, 255, 0.1);
          color: #e0e0e0;
          padding: 1rem;
          border-radius: 12px;
          max-width: 80%;
          font-size: 0.9rem;
          line-height: 1.4;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* 特性预览 */
        .features-preview {
          padding: 4rem 2rem;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
        }

        .features-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .feature-icon {
          color: #ffffff;
          margin-bottom: 1rem;
          display: flex;
          justify-content: center;
        }

        .feature-card h3 {
          color: #ffffff;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .feature-card p {
          color: #b0b0b0;
          line-height: 1.5;
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .download-buttons {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .download-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .download-btn {
            width: 100%;
            max-width: 300px;
          }
          
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};