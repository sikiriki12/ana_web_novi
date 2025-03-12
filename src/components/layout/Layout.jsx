import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { LanguageContext } from '../../App'
import PixelTrail from '../ui/PixelTrail'
import { useScreenSize } from '../../hooks/use-screen-size'

export default function Layout({ children }) {
  const { language, setLanguage } = useContext(LanguageContext)
  const screenSize = useScreenSize()
  const location = useLocation()
  
  // Scroll to top when the route changes (disabling smooth scrolling temporarily)
  useEffect(() => {
    // Save the current scroll behavior
    const originalScrollBehavior = document.documentElement.style.scrollBehavior;
    
    // Disable smooth scrolling temporarily
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Perform the instant scroll
    window.scrollTo(0, 0);
    
    // Restore the original scroll behavior after a small delay
    const timeoutId = setTimeout(() => {
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
    }, 100);
    
    // Clean up the timeout on unmount or route change
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);
  
  return (
    <div className="flex flex-col min-h-screen bg-offwhite">
      <Header language={language} setLanguage={setLanguage} />
      <main className="flex-grow relative">
        <div className="relative z-10 pointer-events-none">
          <div className="pointer-events-auto">
            {children}
          </div>
          <PixelTrail
            pixelSize={screenSize.lessThan('md') ? 40 : 60}
            pixelClassName="rounded-full bg-blue-200/40"
            fadeDuration={100}
            delay={100}
          />
        </div>
      </main>
      <Footer language={language} />
    </div>
  )
}
