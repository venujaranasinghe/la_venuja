import RootLayout from "@/components/RootLayout";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://la-venuja.vercel.app/'), // Replace with your actual domain
  title: {
    template: "%s | Venuja Ranasinghe - Full Stack Developer",
    default: "Venuja Ranasinghe",
  },
  description: "Venuja Ranasinghe is an undergraduate Computer Science student at SLIIT specializing in full-stack development, machine learning, and innovative web solutions. Explore my portfolio of projects and get in touch for collaborations.",
  keywords: ["Venuja Ranasinghe", "Full Stack Developer", "Computer Science", "SLIIT", "Web Development", "Machine Learning", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Venuja Ranasinghe" }],
  creator: "Venuja Ranasinghe",
  publisher: "Venuja Ranasinghe",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://la-venuja.vercel.app/',
    title: 'Venuja Ranasinghe',
    description: 'Explore the portfolio of Venuja Ranasinghe, a Computer Science student at SLIIT specializing in full-stack development and machine learning.',
    siteName: 'Venuja Ranasinghe Portfolio',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Venuja Ranasinghe - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Venuja Ranasinghe - Full Stack Developer & Computer Science Student',
    description: 'Explore the portfolio of Venuja Ranasinghe, a Computer Science student specializing in full-stack development and machine learning.',
    images: ['/profile.jpg'],
  },
  alternates: {
    canonical: 'https://la-venuja.vercel.app/',
  },
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    >
      <head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="oDw36Oa6W_II-VHZc_qLi2S_7bDBdr7xte1tQfSZ-d0" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Venuja Ranasinghe",
              "jobTitle": "Computer Science Student & Full Stack Developer",
              "description": "Undergraduate Computer Science student at SLIIT with expertise in full-stack development, machine learning, and innovative web solutions.",
              "url": "https://la-venuja.vercel.app/",
              "image": "https://la-venuja.vercel.app/profile.jpg",
              "sameAs": [
                "https://github.com/venujaranasinghe",
                "https://www.linkedin.com/in/venuja-ranasinghe/"
              ],
              "knowsAbout": ["Web Development", "Machine Learning", "React", "Next.js", "Python", "Java", "JavaScript", "Full Stack Development"],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Sri Lanka Institute of Information Technology (SLIIT)"
              },
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Full Stack Developer",
                "occupationLocation": {
                  "@type": "Country",
                  "name": "Sri Lanka"
                }
              }
            })
          }}
        />
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