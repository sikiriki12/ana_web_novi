import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBalanceScale, FaGavel, FaUserTie } from 'react-icons/fa'
import { useTranslations } from '../../hooks/use-translations'

export default function About() {
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
        
        <div className="container-custom relative z-10 my-auto pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
              {t('about.title')}
            </h1>
            <p className="text-xl text-primary-100 mb-8 animate-fade-in animate-delay-200">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
        
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-offwhite">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section">
              <div className="inline-flex items-center mb-4">
                <span className="h-px w-6 bg-primary-600"></span>
                <span className="mx-2 text-primary-600 font-medium uppercase tracking-wider text-sm">
                  {t('about.mission.label')}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-6">
                {t('about.mission.title')}
              </h2>
              
              <p className="text-lg text-secondary-700 mb-6">
                {t('about.mission.paragraph1')}
              </p>
              
              <p className="text-lg text-secondary-700 mb-6">
                {t('about.mission.paragraph2')}
              </p>
              
              <p className="text-lg text-secondary-700">
                {t('about.mission.paragraph3')}
              </p>
            </div>
            
            <div className="relative fade-in-section">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-primary-50 transform -rotate-3 rounded-lg"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-secondary-50 transform rotate-1 rounded-lg"></div>
              
              {/* Image */}
              <div className="relative bg-white p-6 rounded-lg shadow-elegant z-10">
                <img 
                  src="/office.jpg" 
                  alt="Law Office"
                  className="w-full h-80 object-cover object-top rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Core Values Section */}
      <section className="py-16 bg-primary-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 bg-repeat" style={{ backgroundImage: 'url(/images/backgrounds/legal-pattern.svg)' }}></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16 fade-in-section">
            <div className="inline-flex items-center justify-center mb-3">
              <span className="h-px w-6 bg-primary-600"></span>
              <span className="mx-2 text-primary-600 font-medium uppercase tracking-wider text-sm">
                {t('about.values.label')}
              </span>
              <span className="h-px w-6 bg-primary-600"></span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-6">
              {t('about.values.title')}
            </h2>
            
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              {t('about.values.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Personal Approach */}
            <div className="card hover-lift fade-in-section rounded-xl">
              <div className="text-primary-600 mb-4">
                <FaUserTie size={40} />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-800 mb-3">
                {t('about.values.personal.title')}
              </h3>
              <p className="text-secondary-700">
                {t('about.values.personal.description')}
              </p>
            </div>
            
            {/* Professionalism */}
            <div className="card hover-lift fade-in-section rounded-xl">
              <div className="text-primary-600 mb-4">
                <FaGavel size={40} />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-800 mb-3">
                {t('about.values.professionalism.title')}
              </h3>
              <p className="text-secondary-700">
                {t('about.values.professionalism.description')}
              </p>
            </div>
            
            {/* Excellence */}
            <div className="card hover-lift fade-in-section rounded-xl">
              <div className="text-primary-600 mb-4">
                <FaBalanceScale size={40} />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-800 mb-3">
                {t('about.values.excellence.title')}
              </h3>
              <p className="text-secondary-700">
                {t('about.values.excellence.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="bg-primary-800 rounded-2xl p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/5"></div>
            
            <div className="relative z-10 text-center text-white max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                {t('about.cta.title')}
              </h2>
              
              <p className="text-xl text-primary-100 mb-8">
                {t('about.cta.description')}
              </p>
              
              <Link to="/contact" className="btn bg-white text-primary-800 hover:bg-white/90 transition-all duration-300 inline-flex items-center shadow-elegant hover:shadow-elegant-lg hover:-translate-y-1">
                {t('common.contactUs')}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
