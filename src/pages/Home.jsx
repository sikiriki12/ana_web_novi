import { useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaGavel, FaUserTie, FaBalanceScale, FaBuilding, FaChevronDown, FaArrowRight } from 'react-icons/fa'
import { LanguageContext } from '../App'


export default function Home() {
  const { language } = useContext(LanguageContext)
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
      <section ref={heroRef} className="relative overflow-hidden flex flex-col justify-start sm:justify-center min-h-screen pt-36 sm:pt-32 md:pt-28 lg:pt-20 bg-offwhite">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 z-0 bg-offwhite opacity-95"></div>
        
        {/* Content container */}
        <div className="container-custom relative z-20 pt-2">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text content - Animated entrance */}
            <div className="lg:col-span-7 space-y-6">
              {/* Animated heading */}
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-800 leading-tight animate-slide-up">
                  Ana Bandalo
                </h1>
                <p className="text-3xl md:text-4xl font-serif text-primary-600 animate-slide-up animate-delay-200">
                  {language === 'en' ? 'Attorney at Law' : 'Odvjetnica'}
                </p>
              </div>
              
              <p className="text-xl md:text-2xl font-serif text-secondary-700 max-w-xl animate-fade-in animate-delay-300">
                {language === 'en' 
                  ? 'With over 20 years of legal experience, delivering exceptional results for clients.' 
                  : 'S više od 20 godina pravnog iskustva, ostvarujemo iznimne rezultate za klijente.'}
              </p>
              
              <p className="text-lg text-secondary-600 max-w-xl animate-fade-in animate-delay-400">
                {language === 'en'
                  ? 'Providing focused and passionate legal representation in corporate and civil law matters throughout Croatia.'
                  : 'Pružamo fokusirano i strastveno pravno zastupanje u poslovima korporativnog i građanskog prava diljem Hrvatske.'}
              </p>
              
              <div className="flex flex-wrap gap-6 pt-4 animate-fade-in animate-delay-500">
                <Link to="/contact" className="btn btn-primary hover:-translate-y-1 shadow-lg text-base">
                  {language === 'en' ? 'Contact us' : 'Kontaktirajte nas'}
                </Link>
                <Link to="/about" className="btn btn-secondary hover:-translate-y-1 text-base">
                  {language === 'en' ? 'Learn more' : 'Saznajte više'}
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

      {/* Core Values Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background design */}
        <div className="absolute top-0 right-0 w-full h-full bg-gray-50 z-0"></div>
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary-50 to-primary-50/0 z-0"></div>
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-primary-100/50 z-0"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-3">
              <span className="h-px w-6 bg-primary-600"></span>
              <span className="mx-2 text-primary-600 font-medium uppercase tracking-wider text-sm">
                {language === 'en' ? 'Our Philosophy' : 'Naša Filozofija'}
              </span>
              <span className="h-px w-6 bg-primary-600"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-6">
              {language === 'en' ? 'Our Core Values' : 'Naše temeljne vrijednosti'}
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Building long-lasting client relationships since 2010 through our commitment to excellence and personalized service.'
                : 'Izgradnja dugotrajnih odnosa s klijentima od 2010. kroz našu predanost izvrsnosti i osobnom pristupu.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Personal Approach */}
            <div className="group">
              <div className="card rounded-xl bg-white shadow flex flex-col h-full">
                <div className="bg-primary-100 p-6 rounded-t-xl relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img src="/personal_approach.jpg" alt="Personal Approach" className="object-cover w-full h-full opacity-15" />
                  </div>
                  <div className="relative z-10">
                    <div className="bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center shadow-md mb-2">
                      <FaUserTie className="text-primary-600 text-2xl" />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-serif font-bold text-primary-800 mb-3 flex items-center">
                    <span className="h-6 w-1 bg-primary-600 rounded-full mr-2"></span>
                    {language === 'en' ? 'Personal Approach' : 'Osobni pristup'}
                  </h3>
                  <p className="text-secondary-600 flex-grow">
                    {language === 'en'
                      ? 'We focus on building relationships and providing individualized attention to each client\'s unique needs and goals.'
                      : 'Fokusiramo se na izgradnju odnosa i pružanje individualizirane pažnje jedinstvenim potrebama i ciljevima svakog klijenta.'}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Professionalism */}
            <div className="group">
              <div className="card rounded-xl bg-white shadow flex flex-col h-full">
                <div className="bg-primary-100 p-6 rounded-t-xl relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img src="/professionalism.jpg" alt="Professionalism" className="object-cover w-full h-full opacity-15" />
                  </div>
                  <div className="relative z-10">
                    <div className="bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center shadow-md mb-2">
                      <FaGavel className="text-primary-600 text-2xl" />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-serif font-bold text-primary-800 mb-3 flex items-center">
                    <span className="h-6 w-1 bg-primary-600 rounded-full mr-2"></span>
                    {language === 'en' ? 'Professionalism' : 'Profesionalizam'}
                  </h3>
                  <p className="text-secondary-600 flex-grow">
                    {language === 'en'
                      ? 'We adhere to the highest standards of legal ethics and provide conscientious service based on years of experience.'
                      : 'Pridržavamo se najviših standarda pravne etike i pružamo savjesnu uslugu temeljenu na dugogodišnjem iskustvu.'}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Excellence */}
            <div className="group">
              <div className="card rounded-xl bg-white shadow flex flex-col h-full">
                <div className="bg-primary-100 p-6 rounded-t-xl relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img src="/excellence.jpg" alt="Excellence" className="object-cover w-full h-full opacity-15" />
                  </div>
                  <div className="relative z-10">
                    <div className="bg-white rounded-full p-3 w-16 h-16 flex items-center justify-center shadow-md mb-2">
                      <FaBalanceScale className="text-primary-600 text-2xl" />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-serif font-bold text-primary-800 mb-3 flex items-center">
                    <span className="h-6 w-1 bg-primary-600 rounded-full mr-2"></span>
                    {language === 'en' ? 'Excellence' : 'Izvrsnost'}
                  </h3>
                  <p className="text-secondary-600 flex-grow">
                    {language === 'en'
                      ? 'We constantly improve our knowledge and stay current with legal trends to provide innovative and effective solutions.'
                      : 'Stalno usavršavamo svoje znanje i pratimo pravne trendove kako bismo pružili inovativna i učinkovita rješenja.'}
                  </p>
                </div>
              </div>
            </div>
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
                {language === 'en' ? 'Legal Expertise' : 'Pravna Stručnost'}
              </span>
              <span className="h-px w-6 bg-primary-600"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-6">
              {language === 'en' ? 'Practice Areas' : 'Područja prakse'}
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              {language === 'en'
                ? 'We provide comprehensive legal services across a range of practice areas to meet your diverse needs.'
                : 'Pružamo sveobuhvatne pravne usluge u različitim područjima prakse kako bismo zadovoljili vaše raznolike potrebe.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Commercial Law */}
            <div className="group">
              <div className="card rounded-lg bg-white shadow p-8 border-t-4 border-primary-600 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[100px] border-t-primary-100/50 border-l-[100px] border-l-transparent z-0"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-primary-800 mb-4 flex items-center">
                    <span className="mr-4 text-primary-600 opacity-70">#01</span>
                    {language === 'en' ? 'Commercial Law' : 'Trgovačko pravo'}
                  </h3>
                  
                  <p className="text-secondary-600">
                    {language === 'en'
                      ? 'We provide legal assistance in business operations, offering legal advice in the field of contract law, drafting commercial contracts, and representation in commercial disputes.'
                      : 'Pružamo pravnu pomoć u poslovanju, pravne savjete iz područja ugovornog prava, sastavljamo trgovačke ugovore i zastupamo u trgovačkim sporovima.'}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Labor Law */}
            <div className="group">
              <div className="card rounded-lg bg-white shadow p-8 border-t-4 border-primary-600 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[100px] border-t-primary-100/50 border-l-[100px] border-l-transparent z-0"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-primary-800 mb-4 flex items-center">
                    <span className="mr-4 text-primary-600 opacity-70">#02</span>
                    {language === 'en' ? 'Labor Law' : 'Radno pravo'}
                  </h3>
                  
                  <p className="text-secondary-600">
                    {language === 'en'
                      ? 'We provide consulting and representation services regarding employment contracts, rights and obligations of workers and employers, and resolution of disputes in the field of labor relations.'
                      : 'Pružamo usluge savjetovanja i zastupanja u vezi s ugovorima o radu, pravima i obvezama radnika i poslodavaca, kao i u rješavanju sporova u području radnih odnosa.'}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Corporate Law */}
            <div className="group">
              <div className="card rounded-lg bg-white shadow p-8 border-t-4 border-primary-600 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[100px] border-t-primary-100/50 border-l-[100px] border-l-transparent z-0"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-primary-800 mb-4 flex items-center">
                    <span className="mr-4 text-primary-600 opacity-70">#03</span>
                    {language === 'en' ? 'Corporate Law' : 'Pravo trgovačkih društava'}
                  </h3>
                  
                  <p className="text-secondary-600">
                    {language === 'en'
                      ? 'We provide legal services related to the establishment of companies, management issues, and status changes, including complete legal support during mergers and acquisitions.'
                      : 'Pružamo pravne usluge u vezi s osnivanjem trgovačkih društava, pitanjima upravljanja i statusnim promjenama, uključujući i kompletnu pravnu podršku tijekom pripajanja i preuzimanja društava.'}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Real Estate & Civil Law */}
            <div className="group">
              <div className="card rounded-lg bg-white shadow p-8 border-t-4 border-primary-600 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[100px] border-t-primary-100/50 border-l-[100px] border-l-transparent z-0"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-primary-800 mb-4 flex items-center">
                    <span className="mr-4 text-primary-600 opacity-70">#04</span>
                    {language === 'en' ? 'Real Estate & Civil Law' : 'Nekretnine i Građansko pravo'}
                  </h3>
                  
                  <p className="text-secondary-600">
                    {language === 'en'
                      ? 'We provide complete legal support during real estate investments and represent clients in civil proceedings related to property rights, contract disputes, and damage compensation claims.'
                      : 'Pružamo kompletnu pravnu potporu prilikom nekretninskih investicija i zastupamo klijente u građanskim postupcima vezanim za vlasnička prava, ugovorne sporove i zahtjeve za naknadu štete.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/practice-areas" className="btn btn-primary inline-flex items-center">
              {language === 'en' ? 'View All Practice Areas' : 'Pregledajte sva područja prakse'}
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
                {language === 'en' ? 'Specialized Knowledge' : 'Specijalizirano Znanje'}
              </span>
              <span className="h-px w-6 bg-primary-600"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-6">
              {language === 'en' ? 'Industry Expertise' : 'Industrijska stručnost'}
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              {language === 'en'
                ? 'We have extensive experience across various industries, allowing us to provide specialized legal solutions tailored to your specific sector.'
                : 'Imamo veliko iskustvo u različitim industrijama, što nam omogućuje pružanje specijaliziranih pravnih rješenja prilagođenih vašem specifičnom sektoru.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Construction */}
            <div className="group">
              <div className="bg-white rounded-xl shadow-md flex flex-col items-center text-center p-8 h-full relative overflow-hidden">
                <div className="absolute -right-16 -top-20 w-32 h-32 bg-primary-100 rounded-full"></div>
                <div className="relative z-10">
                  <div className="relative bg-white ring-8 ring-primary-50 shadow-md rounded-full p-6 mb-6">
                    <div className="absolute inset-0 z-0 rounded-full overflow-hidden opacity-40">
                      <img src="/construction.jpg" alt="" className="object-cover w-full h-full" />
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-primary-800 mb-3">
                    {language === 'en' ? 'Construction Industry' : 'Građevinska industrija'}
                  </h3>
                  <p className="text-secondary-600 text-sm">
                    {language === 'en' 
                      ? 'Legal expertise in construction contracts, regulations, and dispute resolution.' 
                      : 'Pravna stručnost u građevinskim ugovorima, propisima i rješavanju sporova.'}
                  </p>
                </div>
              </div>
            </div>
            
            {/* IT */}
            <div className="group">
              <div className="bg-white rounded-xl shadow-md flex flex-col items-center text-center p-8 h-full relative overflow-hidden">
                <div className="absolute -right-16 -top-20 w-32 h-32 bg-primary-100 rounded-full"></div>
                <div className="relative z-10">
                  <div className="relative bg-white ring-8 ring-primary-50 shadow-md rounded-full p-6 mb-6">
                    <div className="absolute inset-0 z-0 rounded-full overflow-hidden opacity-40">
                      <img src="/it_industry.jpg" alt="" className="object-cover w-full h-full" />
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-primary-800 mb-3">
                    {language === 'en' ? 'IT Industry' : 'IT Industrija'}
                  </h3>
                  <p className="text-secondary-600 text-sm">
                    {language === 'en' 
                      ? 'Specialized in intellectual property, data protection, and technology contracts.' 
                      : 'Specijalizirani za intelektualno vlasništvo, zaštitu podataka i tehnološke ugovore.'}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Pharma */}
            <div className="group">
              <div className="bg-white rounded-xl shadow-md flex flex-col items-center text-center p-8 h-full relative overflow-hidden">
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-primary-100 rounded-full"></div>
                <div className="relative z-10">
                  <div className="relative bg-white ring-8 ring-primary-50 shadow-md rounded-full p-6 mb-6">
                    <div className="absolute inset-0 z-0 rounded-full overflow-hidden opacity-15">
                      <img src="/healthcare.jpg" alt="" className="object-cover w-full h-full" />
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-primary-800 mb-3">
                    {language === 'en' ? 'Pharma & Healthcare' : 'Pharma i zdravstvo'}
                  </h3>
                  <p className="text-secondary-600 text-sm">
                    {language === 'en' 
                      ? 'Legal expertise in pharmaceutical regulations, compliance, and healthcare law.' 
                      : 'Pravna stručnost u farmaceutskim propisima, usklađenosti i zdravstvenom pravu.'}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Manufacturing */}
            <div className="group">
              <div className="bg-white rounded-xl shadow-md flex flex-col items-center text-center p-8 h-full relative overflow-hidden">
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-primary-100 rounded-full"></div>
                <div className="relative z-10">
                  <div className="relative bg-white ring-8 ring-primary-50 shadow-md rounded-full p-6 mb-6">
                    <div className="absolute inset-0 z-0 rounded-full overflow-hidden opacity-15">
                      <img src="/manufacturing.jpg" alt="" className="object-cover w-full h-full" />
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-primary-800 mb-3">
                    {language === 'en' ? 'Manufacturing & Services' : 'Proizvodnja i usluge'}
                  </h3>
                  <p className="text-secondary-600 text-sm">
                    {language === 'en' 
                      ? 'Expert in production regulations, service contracts and business operations.' 
                      : 'Stručnjak za propise o proizvodnji, ugovore o uslugama i poslovne operacije.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/experience" className="btn btn-primary inline-flex items-center">
              {language === 'en' ? 'Explore All Industry Expertise' : 'Istražite sva industrijska znanja'}
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
              {language === 'en' ? 'Need Legal Assistance?' : 'Trebate pravnu pomoć?'}
            </h2>
            
            <p className="text-lg text-primary-100 max-w-3xl mx-auto mb-8">
              {language === 'en'
                ? 'Contact us today to schedule a consultation and discover how we can help you with your legal needs.'
                : 'Kontaktirajte nas danas kako biste dogovorili konzultacije i otkrili kako vam možemo pomoći s vašim pravnim potrebama.'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-secondary transform hover:-translate-y-1 hover:shadow-lg transition-all">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                {language === 'en' ? 'Contact us' : 'Kontaktirajte nas'}
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
