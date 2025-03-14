import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaGavel, FaUserTie, FaBalanceScale, FaBuilding, FaHandshake, FaFileContract } from 'react-icons/fa'
import { useTranslations } from '../../hooks/use-translations'

const PracticeArea = ({ icon, title, description, index, link }) => {
  const { t } = useTranslations();
  
  return (
    <Link to={link} className="fade-in-section hover-lift">
      <div className="bg-white rounded-xl shadow-elegant hover:shadow-elegant-lg p-8 h-full border-t-4 border-transparent hover:border-primary-600 transition-all duration-300 flex flex-col">
        <div className="mb-6 flex items-center justify-between">
          <div className="bg-primary-50 text-primary-700 p-4 rounded-lg">
            {icon}
          </div>
          <span className="text-4xl font-serif text-primary-200 font-bold">#{String(index).padStart(2, '0')}</span>
        </div>
        
        <h3 className="text-2xl font-serif font-bold text-primary-800 mb-4">{title}</h3>
        <p className="text-secondary-700 flex-grow">{description}</p>
        
        {/* Learn more link */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-primary-600 font-medium underline inline-flex items-center">
            {t('common.learnMore')}
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default function PracticeAreas() {
  const { t } = useTranslations();
  
  // Animation for sections on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  // Practice areas data
  const practiceAreas = [
    {
      icon: <FaGavel size={28} />,
      title: t('practiceAreas.areas.commercialLaw.title'),
      description: t('practiceAreas.areas.commercialLaw.description'),
      link: '/practice-areas/commercial-law'
    },
    {
      icon: <FaUserTie size={28} />,
      title: t('practiceAreas.areas.laborLaw.title'),
      description: t('practiceAreas.areas.laborLaw.description'),
      link: '/practice-areas/labor-law'
    },
    {
      icon: <FaBuilding size={28} />,
      title: t('practiceAreas.areas.corporateLaw.title'),
      description: t('practiceAreas.areas.corporateLaw.description'),
      link: '/practice-areas/corporate-law'
    },
    {
      icon: <FaBalanceScale size={28} />,
      title: t('practiceAreas.areas.realEstate.title'),
      description: t('practiceAreas.areas.realEstate.description'),
      link: '/practice-areas/real-estate'
    },
    {
      icon: <FaFileContract size={28} />,
      title: t('practiceAreas.areas.contractLaw.title'),
      description: t('practiceAreas.areas.contractLaw.description'),
      link: '/practice-areas/contract-law'
    },
    {
      icon: <FaHandshake size={28} />,
      title: t('practiceAreas.areas.disputeResolution.title'),
      description: t('practiceAreas.areas.disputeResolution.description'),
      link: '/practice-areas/dispute-resolution'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[300px] pt-16 pb-7 md:pt-24 md:pb-7 overflow-hidden bg-primary-800 text-white">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 bg-repeat" style={{ backgroundImage: 'url(/images/backgrounds/legal-pattern.svg)' }}></div>
        
        
        <div className="container-custom relative z-10 my-auto pt-36 sm:pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
              {t('practiceAreas.title')}
            </h1>
            
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto animate-fade-in animate-delay-200">
              {t('practiceAreas.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 bg-offwhite">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <PracticeArea 
                key={index}
                icon={area.icon}
                title={area.title}
                description={area.description}
                index={index + 1}
                link={area.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Legal Approach Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5 bg-repeat" style={{ backgroundImage: 'url(/images/backgrounds/legal-pattern.svg)' }}></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary-50/50 z-0"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="fade-in-section">
              <div className="inline-flex items-center mb-4">
                <span className="h-px w-6 bg-primary-600"></span>
                <span className="mx-2 text-primary-600 font-medium uppercase tracking-wider text-sm">
                  {t('practiceAreas.methodology.title')}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-6">
                {t('practiceAreas.methodology.legalApproach')}
              </h2>
              
              <p className="text-lg text-secondary-700 mb-6">
                {t('practiceAreas.methodology.description')}
              </p>
              
              <div className="space-y-6 mt-8">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="min-w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-serif font-bold text-lg">1</div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">
                      {t('practiceAreas.methodology.steps.consultation.title')}
                    </h3>
                    <p className="text-secondary-700">
                      {t('practiceAreas.methodology.steps.consultation.description')}
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="min-w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-serif font-bold text-lg">2</div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">
                      {t('practiceAreas.methodology.steps.planning.title')}
                    </h3>
                    <p className="text-secondary-700">
                      {t('practiceAreas.methodology.steps.planning.description')}
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="min-w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-serif font-bold text-lg">3</div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">
                      {t('practiceAreas.methodology.steps.execution.title')}
                    </h3>
                    <p className="text-secondary-700">
                      {t('practiceAreas.methodology.steps.execution.description')}
                    </p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="min-w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-serif font-bold text-lg">4</div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">
                      {t('practiceAreas.methodology.steps.support.title')}
                    </h3>
                    <p className="text-secondary-700">
                      {t('practiceAreas.methodology.steps.support.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative fade-in-section">
              <div className="relative rounded-xl overflow-hidden shadow-elegant-lg">
                {/* Background shape */}
                <div className="absolute inset-0 bg-primary-800 z-10"></div>
                
                {/* Content */}
                <div className="relative p-10 z-20 text-white">
                  <h3 className="text-2xl font-serif font-bold text-white mb-6">
                    {t('practiceAreas.methodology.philosophy.title')}
                  </h3>
                  
                  <p className="mb-6">
                    {t('practiceAreas.methodology.philosophy.description1')}
                  </p>
                  
                  <p>
                    {t('practiceAreas.methodology.philosophy.description2')}
                  </p>
                  
                  <div className="mt-8 flex justify-center">
                    <FaBalanceScale size={60} className="text-white/30" />
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-1/2 h-1/2 bg-primary-100 rounded-br-xl"></div>
              <div className="absolute -z-10 -top-6 -left-6 w-1/2 h-1/2 bg-secondary-100 rounded-tl-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-secondary-900/10 rounded-tr-full"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-accent-600/20 blur-2xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              {t('practiceAreas.cta.title')}
            </h2>
            
            <p className="text-xl text-primary-100 mb-8">
              {t('practiceAreas.cta.description')}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="btn bg-white text-primary-800 hover:bg-white/90 transition-all duration-300 shadow-elegant hover:shadow-elegant-lg hover:-translate-y-1">
                {t('common.scheduleConsultation')}
              </Link>
              
              <Link to="/about" className="btn bg-transparent border border-white text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                {t('common.learnAboutOurFirm')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
