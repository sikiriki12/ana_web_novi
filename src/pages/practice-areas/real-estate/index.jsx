import { Link } from 'react-router-dom'
import { FaBalanceScale, FaArrowRight, FaHome } from 'react-icons/fa'
import PracticeAreasList from '../../../components/ui/PracticeAreasList'
import { useTranslations } from '../../../hooks/use-translations'

export default function RealEstate() {
  const { t } = useTranslations();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[300px] pt-16 pb-7 md:pt-24 md:pb-7 overflow-hidden bg-primary-800 text-white">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 bg-repeat" style={{ backgroundImage: 'url(/images/backgrounds/legal-pattern.svg)' }}></div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-white/5 rounded-tl-[100px]"></div>
        <div className="absolute top-20 right-20 w-20 h-20 rounded-full bg-primary-700 blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-primary-600/30 blur-xl"></div>
        
        <div className="container-custom relative z-10 my-auto pt-36 sm:pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center mb-6 text-primary-300">
              <Link to="/practice-areas" className="hover:text-white transition-colors">
                {t('realEstate.breadcrumb')}
              </Link>
              <span className="mx-3">/</span>
              <span>{t('realEstate.title')}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
              {t('realEstate.title')}
            </h1>
            
            <p className="text-xl text-primary-100 mb-8 animate-fade-in animate-delay-200 max-w-3xl mx-auto">
              {t('realEstate.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <div className="inline-flex items-center mb-4">
                  <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4">
                    <FaHome size={24} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-primary-800 m-0">
                    {t('realEstate.ourServices')}
                  </h2>
                </div>
                
                <p>
                  {t('realEstate.introText')}
                </p>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {t('realEstate.transactions.title')}
                </h3>
                
                <p>
                  {t('realEstate.transactions.description')}
                </p>
                
                <ul>
                  {t('realEstate.transactions.items').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {t('realEstate.civilLitigation.title')}
                </h3>
                
                <p>
                  {t('realEstate.civilLitigation.description')}
                </p>
                
                <ul>
                  {t('realEstate.civilLitigation.items').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {t('realEstate.damageClaims.title')}
                </h3>
                
                <p>
                  {t('realEstate.damageClaims.description')}
                </p>
                
                <ul>
                  {t('realEstate.damageClaims.items').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {t('realEstate.administrativeDisputes.title')}
                </h3>
                
                <p>
                  {t('realEstate.administrativeDisputes.description')}
                </p>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {t('realEstate.humanRights.title')}
                </h3>
                
                <p>
                  {t('realEstate.humanRights.description')}
                </p>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:col-span-1">
              <PracticeAreasList currentArea="real-estate" />
              
              <div className="bg-primary-800 text-white rounded-xl p-8">
                <h3 className="text-xl font-serif font-bold mb-4">
                  {t('realEstate.sidebar.title')}
                </h3>
                
                <p className="mb-6 text-primary-100">
                  {t('realEstate.sidebar.description')}
                </p>
                
                <Link to="/contact" className="btn bg-white text-primary-800 hover:bg-white/90 transition-all duration-300 w-full flex justify-center items-center">
                  {t('common.contactUs')}
                  <FaArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
