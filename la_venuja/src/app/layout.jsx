import RootLayout from "@/components/RootLayout";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

export const metadata = {
  title: {
    template: "la_venuja",
    default: "Venuja Ranasinghe",
  },
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    >
      <head>
        {/* Inline CSS for immediate loading screen */}
        <style dangerouslySetInnerHTML={{
          __html: `
            #initial-loader {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 999999;
              transition: opacity 0.5s ease-out;
            }
            
            .loader-content {
              text-align: center;
              color: white;
            }
            
            .spinner {
              width: 50px;
              height: 50px;
              border: 3px solid rgba(255, 255, 255, 0.1);
              border-top: 3px solid #4ecdc4;
              border-radius: 50%;
              animation: spin 1s linear infinite;
              margin: 0 auto 20px;
            }
            
            .loading-text {
              font-size: 14px;
              letter-spacing: 2px;
              opacity: 0.8;
              margin-bottom: 10px;
            }
            
            .progress-bar {
              width: 200px;
              height: 2px;
              background: rgba(255, 255, 255, 0.1);
              margin: 0 auto;
              border-radius: 1px;
              overflow: hidden;
            }
            
            .progress-fill {
              height: 100%;
              background: linear-gradient(90deg, #4ecdc4, #44a08d);
              width: 0%;
              transition: width 0.3s ease;
              animation: progressGrow 3s ease-out forwards;
            }
            
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            
            @keyframes progressGrow {
              0% { width: 0%; }
              100% { width: 100%; }
            }
            
            .dots {
              display: inline-block;
            }
            
            .dots::after {
              content: '';
              animation: dots 1.5s steps(4, end) infinite;
            }
            
            @keyframes dots {
              0%, 20% { content: ''; }
              40% { content: '.'; }
              60% { content: '..'; }
              80%, 100% { content: '...'; }
            }
          `
        }} />
      </head>
      <body className="flex min-h-full flex-col font-sf-pro">
        {/* Initial loading screen */}
        <div id="initial-loader">
          <div className="loader-content">
            <div className="spinner"></div>
            <div className="loading-text">
              LOADING<span className="dots"></span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>
        
        <RootLayout>{children}</RootLayout>
        <SpeedInsights />
      </body>
    </html>
  );
}