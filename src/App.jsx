import { useState, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/about'
import PracticeAreas from './pages/practice-areas'
import Industry from './pages/industry'
import Contact from './pages/contact'
import { useTranslations } from './hooks/use-translations'
import NotFoundPage from './components/ui/NotFoundPage'

// Practice Area detail pages
import CommercialLaw from './pages/practice-areas/commercial-law/index.jsx'
import LaborLaw from './pages/practice-areas/labor-law/index.jsx'
import CorporateLaw from './pages/practice-areas/corporate-law/index.jsx'
import RealEstate from './pages/practice-areas/real-estate/index.jsx'
import ContractLaw from './pages/practice-areas/contract-law/index.jsx'
import DisputeResolution from './pages/practice-areas/dispute-resolution/index.jsx'

// Industry detail pages
import ConstructionIndustry from './pages/industry/construction/index.jsx'
import ITIndustry from './pages/industry/it/index.jsx'
import PharmaIndustry from './pages/industry/pharma/index.jsx'
import ManufacturingIndustry from './pages/industry/manufacturing/index.jsx'
import RealEstateIndustry from './pages/industry/real-estate/index.jsx'
import MediaIndustry from './pages/industry/media/index.jsx'

// Create language context to avoid prop drilling
export const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
})

function App() {
  const [language, setLanguage] = useState('hr')
  
  // Placeholder component for detail pages we haven't created yet
  const PlaceholderPage = ({ title }) => {
    const { t } = useTranslations();
    
    return (
      <div className="container-custom py-20">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-gray-700">
          {t('common.underConstruction')}
        </p>
      </div>
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Layout>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/practice-areas" element={<PracticeAreas />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Practice Areas Detail Pages */}
        <Route 
          path="/practice-areas/commercial-law" 
          element={<CommercialLaw />} 
        />
        <Route 
          path="/practice-areas/labor-law" 
          element={<LaborLaw />} 
        />
        <Route 
          path="/practice-areas/corporate-law" 
          element={<CorporateLaw />} 
        />
        <Route 
          path="/practice-areas/real-estate" 
          element={<RealEstate />} 
        />
        <Route 
          path="/practice-areas/contract-law" 
          element={<ContractLaw />} 
        />
        <Route 
          path="/practice-areas/dispute-resolution" 
          element={<DisputeResolution />} 
        />
        
        {/* Industry Detail Pages */}
        <Route 
          path="/industry/construction" 
          element={<ConstructionIndustry />} 
        />
        <Route 
          path="/industry/it" 
          element={<ITIndustry />} 
        />
        <Route 
          path="/industry/pharma" 
          element={<PharmaIndustry />} 
        />
        <Route 
          path="/industry/manufacturing" 
          element={<ManufacturingIndustry />} 
        />
        <Route 
          path="/industry/real-estate" 
          element={<RealEstateIndustry />} 
        />
        <Route 
          path="/industry/media" 
          element={<MediaIndustry />} 
        />
        
        {/* Legacy Experience Routes (redirects) */}
        <Route path="/experience" element={<Industry />} />
        <Route path="/experience/construction" element={<ConstructionIndustry />} />
        <Route path="/experience/it" element={<ITIndustry />} />
        <Route path="/experience/pharma" element={<PharmaIndustry />} />
        <Route path="/experience/manufacturing" element={<ManufacturingIndustry />} />
        <Route path="/experience/real-estate" element={<RealEstateIndustry />} />
        <Route path="/experience/media" element={<MediaIndustry />} />
        
        {/* 404 Page */}
        <Route 
          path="*" 
          element={
            <NotFoundPage />
          } 
        />
      </Routes>
      </Layout>
    </LanguageContext.Provider>
  )
}

export default App
