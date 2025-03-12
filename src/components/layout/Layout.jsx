import { useContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import { LanguageContext } from '../../App'
import PixelTrail from '../ui/PixelTrail'
import { useScreenSize } from '../../hooks/use-screen-size'

export default function Layout({ children }) {
  const { language, setLanguage } = useContext(LanguageContext)
  const screenSize = useScreenSize()
  
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
