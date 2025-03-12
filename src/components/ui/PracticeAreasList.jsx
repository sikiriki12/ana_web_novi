import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaGavel, FaUserTie, FaBuilding, FaBalanceScale, FaFileContract, FaHandshake } from 'react-icons/fa'
import { LanguageContext } from '../../App'

/**
 * PracticeAreasList - A reusable component that displays links to all practice areas
 * @param {string} currentArea - The current practice area (to exclude from the list or style differently)
 */
export default function PracticeAreasList({ currentArea }) {
  const { language } = useContext(LanguageContext);

  // All practice areas data
  const allPracticeAreas = [
    {
      id: 'commercial-law',
      icon: <FaGavel className="mr-2 text-primary-500" size={16} />,
      titleEn: 'Commercial Law',
      titleHr: 'Trgovačko pravo',
      link: '/practice-areas/commercial-law'
    },
    {
      id: 'labor-law',
      icon: <FaUserTie className="mr-2 text-primary-500" size={16} />,
      titleEn: 'Labor Law',
      titleHr: 'Radno pravo',
      link: '/practice-areas/labor-law'
    },
    {
      id: 'corporate-law',
      icon: <FaBuilding className="mr-2 text-primary-500" size={16} />,
      titleEn: 'Corporate Law',
      titleHr: 'Pravo trgovačkih društava',
      link: '/practice-areas/corporate-law'
    },
    {
      id: 'real-estate',
      icon: <FaBalanceScale className="mr-2 text-primary-500" size={16} />,
      titleEn: 'Real Estate & Civil Law',
      titleHr: 'Nekretnine i Građansko pravo',
      link: '/practice-areas/real-estate'
    },
    {
      id: 'contract-law',
      icon: <FaFileContract className="mr-2 text-primary-500" size={16} />,
      titleEn: 'Contract Law',
      titleHr: 'Ugovorno pravo',
      link: '/practice-areas/contract-law'
    },
    {
      id: 'dispute-resolution',
      icon: <FaHandshake className="mr-2 text-primary-500" size={16} />,
      titleEn: 'Dispute Resolution',
      titleHr: 'Rješavanje sporova',
      link: '/practice-areas/dispute-resolution'
    }
  ];

  return (
    <div className="bg-primary-50 rounded-xl p-8 mb-8">
      <h3 className="text-xl font-serif font-bold text-primary-800 mb-4 flex items-center">
        <FaBalanceScale className="mr-3 text-primary-600" />
        {language === 'en' ? 'Practice Areas' : 'Područja prakse'}
      </h3>
      
      <ul className="space-y-3">
        {allPracticeAreas
          .filter(area => area.id !== currentArea)
          .map((area, index) => (
            <li key={index}>
              <Link to={area.link} className="flex items-center text-primary-700 hover:text-primary-900 hover:underline transition-colors">
                {area.icon}
                {language === 'en' ? area.titleEn : area.titleHr}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
