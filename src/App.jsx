import { useState, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/about'
import PracticeAreas from './pages/practice-areas'
import Experience from './pages/experience'
import Contact from './pages/contact'

// Create language context to avoid prop drilling
export const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
})

function App() {
  const [language, setLanguage] = useState('hr')
  
  // Placeholder component for detail pages we haven't created yet
  const PlaceholderPage = ({ title }) => (
    <div className="container-custom py-20">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-lg text-gray-700">
        {language === 'en' 
          ? "This page is under construction and will be available soon."
          : "Ova stranica je u izradi i bit će dostupna uskoro."}
      </p>
    </div>
  )

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Layout>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/practice-areas" element={<PracticeAreas />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Practice Areas Detail Pages */}
        <Route 
          path="/practice-areas/commercial-law" 
          element={<PlaceholderPage title={language === 'en' ? 'Commercial Law' : 'Trgovačko pravo'} />} 
        />
        <Route 
          path="/practice-areas/labor-law" 
          element={<PlaceholderPage title={language === 'en' ? 'Labor Law' : 'Radno pravo'} />} 
        />
        <Route 
          path="/practice-areas/corporate-law" 
          element={<PlaceholderPage title={language === 'en' ? 'Corporate Law' : 'Pravo trgovačkih društava'} />} 
        />
        <Route 
          path="/practice-areas/real-estate" 
          element={<PlaceholderPage title={language === 'en' ? 'Real Estate & Civil Law' : 'Nekretnine i Građansko pravo'} />} 
        />
        <Route 
          path="/practice-areas/contract-law" 
          element={<PlaceholderPage title={language === 'en' ? 'Contract Law' : 'Ugovorno pravo'} />} 
        />
        <Route 
          path="/practice-areas/dispute-resolution" 
          element={<PlaceholderPage title={language === 'en' ? 'Dispute Resolution' : 'Rješavanje sporova'} />} 
        />
        
        {/* Experience Detail Pages */}
        <Route 
          path="/experience/construction" 
          element={<PlaceholderPage title={language === 'en' ? 'Construction Industry' : 'Građevinska industrija'} />} 
        />
        <Route 
          path="/experience/it" 
          element={<PlaceholderPage title={language === 'en' ? 'IT Industry' : 'IT Industrija'} />} 
        />
        <Route 
          path="/experience/pharma" 
          element={<PlaceholderPage title={language === 'en' ? 'Pharma & Healthcare' : 'Pharma i zdravstvo'} />} 
        />
        <Route 
          path="/experience/manufacturing" 
          element={<PlaceholderPage title={language === 'en' ? 'Manufacturing & Services' : 'Proizvodnja i usluge'} />} 
        />
        <Route 
          path="/experience/education" 
          element={<PlaceholderPage title={language === 'en' ? 'Education' : 'Obrazovanje'} />} 
        />
        <Route 
          path="/experience/financial" 
          element={<PlaceholderPage title={language === 'en' ? 'Financial Services' : 'Financijske usluge'} />} 
        />
        
        {/* 404 Page */}
        <Route 
          path="*" 
          element={
            <div className="container-custom py-20 text-center">
              <h1 className="text-4xl font-bold mb-4">404</h1>
              <p className="text-xl mb-8">
                {language === 'en' ? 'Page not found' : 'Stranica nije pronađena'}
              </p>
              <a 
                href="/" 
                className="btn btn-primary"
              >
                {language === 'en' ? 'Go back to homepage' : 'Povratak na naslovnicu'}
              </a>
            </div>
          } 
        />
      </Routes>
      </Layout>
    </LanguageContext.Provider>
  )
}

export default App
