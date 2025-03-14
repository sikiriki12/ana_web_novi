import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBuilding, FaLaptopCode, FaPrescriptionBottleAlt, FaIndustry, FaHome, FaHospital } from 'react-icons/fa'
import { useTranslations } from '../../hooks/use-translations'

export default function Industry() {
  const { t } = useTranslations();
  
  // Define IndustryCard component inside the main component to access the t function
  const IndustryCard = ({ icon, title, description, count, link }) => (
    <div className="fade-in-section">
      <Link to={link} className="block h-full" style={{ cursor: 'pointer' }}>
        <div style={{ cursor: 'pointer' }} className="bg-white rounded-xl shadow-elegant hover:shadow-elegant-lg p-8 transition-all duration-300 border border-primary-100 hover:border-primary-300 h-full flex flex-col relative overflow-hidden group cursor-pointer">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full transform origin-top-right transition-all duration-500 group-hover:scale-110"></div>
          
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="bg-primary-100 group-hover:bg-primary-200 text-primary-700 rounded-lg p-4 transition-colors duration-300">
              {icon}
            </div>
            <div className="text-5xl font-serif text-primary-200 font-bold transition-colors duration-300">
              {count}
            </div>
          </div>
          
          <h3 className="text-xl md:text-2xl font-serif font-bold text-primary-800 mb-4 relative z-10 group-hover:text-primary-600 transition-colors">{title}</h3>
          <p className="text-secondary-700 flex-grow relative z-10">{description}</p>
          
          <div className="mt-6 pt-4 border-t border-gray-100 relative z-10">
            <span className="text-primary-600 font-medium inline-flex items-center group-hover:text-primary-700 transition-colors">
              <span>{t('industryMain.industrySection.learnMore')}</span>
              <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
  
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
  
  // Get industries and stats data from translations
  const industries = t('industryMain.industrySection.industries');
  const stats = t('industryMain.stats');
  
  // Map industry icons
  const industryIcons = [
    <FaBuilding size={28} />,
    <FaLaptopCode size={28} />,
    <FaPrescriptionBottleAlt size={28} />,
    <FaIndustry size={28} />,
    <FaHome size={28} />,
    <FaHospital size={28} />
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[300px] pt-16 pb-7 md:pt-24 md:pb-7 overflow-hidden bg-primary-800 text-white">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 bg-repeat" style={{ backgroundImage: 'url(/images/backgrounds/legal-pattern.svg)' }}></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-white/5"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary-600/20 blur-3xl"></div>
          <div className="absolute top-1/3 left-1/3 w-48 h-48 rounded-full bg-secondary-500/10 blur-xl"></div>
        </div>
        
        <div className="container-custom relative z-10 my-auto pt-32">
          <div className="max-w-4xl mx-auto text-center my-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
              {t('industryMain.hero.title')}
            </h1>
            
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto animate-fade-in animate-delay-200">
              {t('industryMain.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-offwhite relative">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center fade-in-section" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-700 mb-2">{stat.count}</div>
                <p className="text-secondary-600 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-offwhite">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-section">
            <div className="inline-flex items-center justify-center mb-3">
              <span className="h-px w-6 bg-primary-600"></span>
              <span className="mx-2 text-primary-600 font-medium uppercase tracking-wider text-sm">
                {t('industryMain.industrySection.sectionTitle')}
              </span>
              <span className="h-px w-6 bg-primary-600"></span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-6">
              {t('industryMain.industrySection.title')}
            </h2>
            
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              {t('industryMain.industrySection.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <IndustryCard 
                key={index}
                icon={industryIcons[index]}
                title={industry.title}
                description={industry.description}
                count={industry.count}
                link={industry.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5 bg-repeat" style={{ backgroundImage: 'url(/images/backgrounds/legal-pattern.svg)' }}></div>
        <div className="absolute left-0 top-0 w-1/2 h-full bg-primary-50/50 z-0"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative fade-in-section">
              <div className="relative rounded-xl overflow-hidden shadow-elegant-lg">
                {/* Background shape */}
                <div className="absolute inset-0 bg-secondary-800 z-10"></div>
                
                {/* Content */}
                <div className="relative p-10 z-20 text-white">
                  <h3 className="text-2xl font-serif font-bold text-white mb-6">
                    {t('industryMain.approach.industryApproach.title')}
                  </h3>
                  
                  <p className="mb-6">
                    {t('industryMain.approach.industryApproach.paragraph1')}
                  </p>
                  
                  <p>
                    {t('industryMain.approach.industryApproach.paragraph2')}
                  </p>
                  
                  <div className="mt-8 flex justify-center">
                    <FaBuilding size={60} className="text-white/30" />
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-1/2 h-1/2 bg-secondary-100 rounded-br-xl"></div>
              <div className="absolute -z-10 -top-6 -left-6 w-1/2 h-1/2 bg-primary-100 rounded-tl-xl"></div>
            </div>
            
            <div className="fade-in-section">
              <div className="inline-flex items-center mb-4">
                <span className="h-px w-6 bg-primary-600"></span>
                <span className="mx-2 text-primary-600 font-medium uppercase tracking-wider text-sm">
                  {t('industryMain.approach.valueLabel')}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-6">
                {t('industryMain.approach.title')}
              </h2>
              
              <p className="text-lg text-secondary-700 mb-6">
                {t('industryMain.approach.description')}
              </p>
              
              <div className="space-y-6 mt-8">
                {t('industryMain.approach.features').map((feature, index) => (
                  <div key={index} className="bg-white shadow-elegant p-6 rounded-lg border-l-4 border-primary-600">
                    <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-secondary-700">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-secondary-900/10 rounded-tr-full"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/10 blur-2xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              {t('industryMain.cta.title')}
            </h2>
            
            <p className="text-xl text-white/80 mb-8">
              {t('industryMain.cta.description')}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="btn bg-white text-secondary-800 hover:bg-white/90 transition-all duration-300 shadow-elegant hover:shadow-elegant-lg hover:-translate-y-1">
                {t('industryMain.cta.contactButton')}
              </Link>
              
              <Link to="/practice-areas" className="btn bg-transparent border border-white text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                {t('industryMain.cta.exploreButton')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
