import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaGavel, FaUserTie, FaBalanceScale, FaBuilding, FaChevronDown, FaArrowRight } from 'react-icons/fa'
import { useTranslations } from '../hooks/use-translations'


export default function Home() {
  const { t } = useTranslations();
  const heroRef = useRef(null);
  
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
  
  // Scroll to next section
  const scrollToNext = () => {
    if (heroRef.current) {
      const heroHeight = heroRef.current.offsetHeight;
      window.scrollTo({
        top: heroHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      {/* Hero Section - Full height with elegant background */}
      <section ref={heroRef} className="relative overflow-hidden flex flex-col justify-start sm:justify-center min-h-screen pt-[130px] sm:pt-32 md:pt-28 lg:pt-20 bg-offwhite">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 z-0 bg-offwhite opacity-95"></div>
        
        {/* Content container */}
        <div className="container-custom relative z-20 pt-2">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text content - Animated entrance */}
            <div className="lg:col-span-7 space-y-6">
              {/* Hero content starts directly with the first paragraph */}
              
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-primary-800 font-bold max-w-2xl animate-fade-in animate-delay-300">
                {t('home.hero.mainText')}
              </p>
              
              <p className="text-lg md:text-xl text-secondary-600 max-w-2xl animate-fade-in animate-delay-400">
                {t('home.hero.subText')}
              </p>
              
              <div className="flex flex-wrap gap-6 pt-4 animate-fade-in animate-delay-500">
                <Link to="/contact" className="btn btn-primary hover:-translate-y-1 shadow-lg text-base">
                  {t('common.contactUs')}
                </Link>
                <Link to="/about" className="btn btn-secondary hover:-translate-y-1 text-base">
                  {t('common.learnMore')}
                </Link>
              </div>
            </div>
            
            {/* Image - With sophisticated animation */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative animate-float">
                {/* Decorative elements */}
                <div className="absolute -left-10 top-10 w-24 h-24 rounded-full bg-secondary-500/10 animate-pulse z-0" 
                     style={{ animationDuration: '7s' }}></div>
                <div className="absolute -right-5 -bottom-5 w-40 h-40 rounded-full bg-accent-600/10 animate-pulse z-0"
                     style={{ animationDuration: '5s' }}></div>
                
                {/* Professional image - free from box */}
                <div className="relative z-10">
                  <img 
                    src="/Ana_animated.webp"
                    alt="Ana Bandalo"
                    className="max-w-full h-auto max-h-[600px] object-contain drop-shadow-xl animate-fade-in"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-30" onClick={scrollToNext}>
            <FaChevronDown className="text-primary-600 text-3xl opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background design elements */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-primary-50/50 z-0"></div>
        <div className="absolute right-20 bottom-20 w-32 h-32 rounded-full bg-primary-100/20 z-0"></div>
        <div className="absolute left-0 top-1/4 w-16 h-64 bg-primary-100/20 z-0"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-3">
              <span className="h-px w-6 bg-primary-600"></span>
              <span className="mx-2 text-primary-600 font-medium uppercase tracking-wider text-sm">
                {t('home.practiceAreas.sectionTitle')}
              </span>
              <span className="h-px w-6 bg-primary-600"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-6">
              {t('home.practiceAreas.title')}
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              {t('home.practiceAreas.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Commercial Law */}
            <Link to="/practice-areas/commercial-law" className="group">
              <div className="card rounded-lg bg-white shadow p-8 border-t-4 border-primary-600 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[100px] border-t-primary-100/50 border-l-[100px] border-l-transparent z-0"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-primary-800 mb-4 flex items-center">
                    <span className="mr-4 text-primary-600 opacity-70">#01</span>
                    {t('home.practiceAreas.areas.commercialLaw.title')}
                  </h3>
                  
                  <p className="text-secondary-600">
                    {t('home.practiceAreas.areas.commercialLaw.description')}
                  </p>
                  
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
              </div>
            </Link>
            
            {/* Labor Law */}
            <Link to="/practice-areas/labor-law" className="group">
              <div className="card rounded-lg bg-white shadow p-8 border-t-4 border-primary-600 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[100px] border-t-primary-100/50 border-l-[100px] border-l-transparent z-0"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-primary-800 mb-4 flex items-center">
                    <span className="mr-4 text-primary-600 opacity-70">#02</span>
                    {t('home.practiceAreas.areas.laborLaw.title')}
                  </h3>
                  
                  <p className="text-secondary-600">
                    {t('home.practiceAreas.areas.laborLaw.description')}
                  </p>
                  
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
              </div>
            </Link>
            
            {/* Corporate Law */}
            <Link to="/practice-areas/corporate-law" className="group">
              <div className="card rounded-lg bg-white shadow p-8 border-t-4 border-primary-600 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[100px] border-t-primary-100/50 border-l-[100px] border-l-transparent z-0"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-primary-800 mb-4 flex items-center">
                    <span className="mr-4 text-primary-600 opacity-70">#03</span>
                    {t('home.practiceAreas.areas.corporateLaw.title')}
                  </h3>
                  
                  <p className="text-secondary-600">
                    {t('home.practiceAreas.areas.corporateLaw.description')}
                  </p>
                  
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
              </div>
            </Link>
            
            {/* Real Estate & Civil Law */}
            <Link to="/practice-areas/real-estate" className="group">
              <div className="card rounded-lg bg-white shadow p-8 border-t-4 border-primary-600 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[100px] border-t-primary-100/50 border-l-[100px] border-l-transparent z-0"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-primary-800 mb-4 flex items-center">
                    <span className="mr-4 text-primary-600 opacity-70">#04</span>
                    {t('home.practiceAreas.areas.realEstate.title')}
                  </h3>
                  
                  <p className="text-secondary-600">
                    {t('home.practiceAreas.areas.realEstate.description')}
                  </p>
                  
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
              </div>
            </Link>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/practice-areas" className="btn btn-primary inline-flex items-center">
              {t('home.practiceAreas.viewAll')}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Industry Expertise */}
      <section className="py-20 bg-primary-50 relative overflow-hidden">
        {/* Background design elements */}
        <div className="absolute inset-0 opacity-10 bg-repeat" style={{ backgroundImage: 'url(/images/backgrounds/legal-pattern.svg)' }}></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl"></div>
        <div className="absolute right-20 top-20 w-40 h-40 bg-primary-300/20 rounded-full blur-2xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-3">
              <span className="h-px w-6 bg-primary-600"></span>
              <span className="mx-2 text-primary-600 font-medium uppercase tracking-wider text-sm">
                {t('home.industry.sectionTitle')}
              </span>
              <span className="h-px w-6 bg-primary-600"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-6">
              {t('home.industry.title')}
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              {t('home.industry.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Construction */}
            <Link to="/industry/construction" className="group cursor-pointer">
              <div className="bg-white rounded-xl shadow-md flex flex-col items-center text-center p-8 h-full relative overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="absolute -right-16 -top-20 w-32 h-32 bg-primary-100 rounded-full"></div>
                <div className="relative z-10">
                  <div className="relative bg-white ring-8 ring-primary-50 shadow-md rounded-full p-6 mb-6">
                    <div className="absolute inset-0 z-0 rounded-full overflow-hidden opacity-40">
                      <img src="/construction.jpg" alt="" className="object-cover w-full h-full" />
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-primary-800 mb-3">
                    {t('home.industry.industries.construction.title')}
                  </h3>
                  <p className="text-secondary-600 text-sm h-20">
                    {t('home.industry.industries.construction.description')}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-primary-600 font-medium inline-flex items-center underline">
                      {t('common.learnMore')}
                      <FaArrowRight className="ml-1 w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* IT */}
            <Link to="/industry/it" className="group cursor-pointer">
              <div className="bg-white rounded-xl shadow-md flex flex-col items-center text-center p-8 h-full relative overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="absolute -right-16 -top-20 w-32 h-32 bg-primary-100 rounded-full"></div>
                <div className="relative z-10">
                  <div className="relative bg-white ring-8 ring-primary-50 shadow-md rounded-full p-6 mb-6">
                    <div className="absolute inset-0 z-0 rounded-full overflow-hidden opacity-40">
                      <img src="/it_industry.jpg" alt="" className="object-cover w-full h-full" />
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-primary-800 mb-3">
                    {t('home.industry.industries.it.title')}
                  </h3>
                  <p className="text-secondary-600 text-sm h-20">
                    {t('home.industry.industries.it.description')}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-primary-600 font-medium inline-flex items-center underline">
                      {t('common.learnMore')}
                      <FaArrowRight className="ml-1 w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Pharma */}
            <Link to="/industry/pharma" className="group cursor-pointer">
              <div className="bg-white rounded-xl shadow-md flex flex-col items-center text-center p-8 h-full relative overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-primary-100 rounded-full"></div>
                <div className="relative z-10">
                  <div className="relative bg-white ring-8 ring-primary-50 shadow-md rounded-full p-6 mb-6">
                    <div className="absolute inset-0 z-0 rounded-full overflow-hidden opacity-15">
                      <img src="/healthcare.jpg" alt="" className="object-cover w-full h-full" />
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-primary-800 mb-3">
                    {t('home.industry.industries.pharma.title')}
                  </h3>
                  <p className="text-secondary-600 text-sm h-20">
                    {t('home.industry.industries.pharma.description')}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-primary-600 font-medium inline-flex items-center underline">
                      {t('common.learnMore')}
                      <FaArrowRight className="ml-1 w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Manufacturing */}
            <Link to="/industry/manufacturing" className="group cursor-pointer">
              <div className="bg-white rounded-xl shadow-md flex flex-col items-center text-center p-8 h-full relative overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-primary-100 rounded-full"></div>
                <div className="relative z-10">
                  <div className="relative bg-white ring-8 ring-primary-50 shadow-md rounded-full p-6 mb-6">
                    <div className="absolute inset-0 z-0 rounded-full overflow-hidden opacity-15">
                      <img src="/manufacturing.jpg" alt="" className="object-cover w-full h-full" />
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-primary-800 mb-3">
                    {t('home.industry.industries.manufacturing.title')}
                  </h3>
                  <p className="text-secondary-600 text-sm h-20">
                    {t('home.industry.industries.manufacturing.description')}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-primary-600 font-medium inline-flex items-center underline">
                      {t('common.learnMore')}
                      <FaArrowRight className="ml-1 w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/industry" className="btn btn-primary inline-flex items-center">
              {t('home.industry.viewAll')}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-700"></div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-600/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary-800/40 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 md:p-16 shadow-lg border border-white/20 max-w-4xl mx-auto text-center">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg">
              <FaBalanceScale className="text-primary-700 text-2xl" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              {t('home.cta.title')}
            </h2>
            
            <p className="text-lg text-primary-100 max-w-3xl mx-auto mb-8">
              {t('home.cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-secondary transform hover:-translate-y-1 hover:shadow-lg transition-all">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                {t('common.contactUs')}
              </Link>
              <a href="tel:+38514668833" className="btn bg-white/20 hover:bg-white/30 text-white transform hover:-translate-y-1 hover:shadow-lg transition-all">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                +385 1 4668 833
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
