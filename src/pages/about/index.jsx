import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBalanceScale, FaGavel, FaUserTie } from 'react-icons/fa'
import { LanguageContext } from '../../App'

export default function About() {
  const { language } = useContext(LanguageContext);
  
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
              {language === 'en' ? 'About Us' : 'O nama'}
            </h1>
            <p className="text-xl text-primary-100 mb-8 animate-fade-in animate-delay-200">
              {language === 'en'
                ? 'Committed to excellence and personalized legal solutions since 2010'
                : 'Posvećeni izvrsnosti i personaliziranim pravnim rješenjima od 2010. godine, s fokusom na klijentu i uspjeh u svakom predmetu'}
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
                  {language === 'en' ? 'Our Mission' : 'Naša Misija'}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-6">
                {language === 'en' 
                  ? 'Legal Excellence with a Personal Touch'
                  : 'Pravna izvrsnost s osobnim pristupom'}
              </h2>
              
              <p className="text-lg text-secondary-700 mb-6">
                {language === 'en'
                  ? 'Ana Bandalo Law Firm, established in 2010, specializes in providing high-quality legal services in the fields of corporate, commercial, and civil law throughout Croatia.'
                  : 'Odvjetnički ured Ana Bandalo, osnovan 2010. godine, specijaliziran je za pružanje visokokvalitetnih pravnih usluga u područjima korporativnog, trgovačkog i građanskog prava diljem Hrvatske.'}
              </p>
              
              <p className="text-lg text-secondary-700 mb-6">
                {language === 'en'
                  ? 'What distinguishes us is our approach - we combine professional excellence with a personal, client-centered approach to legal problem solving.'
                  : 'Ono što nas razlikuje je naš pristup - kombiniramo profesionalnu izvrsnost s osobnim, klijentu orijentiranim pristupom pravnom rješavanju problema.'}
              </p>
              
              <p className="text-lg text-secondary-700">
                {language === 'en'
                  ? 'Our goal is to provide effective and comprehensive legal support that meets the unique needs of each client.'
                  : 'Naš cilj je pružiti učinkovitu i sveobuhvatnu pravnu podršku koja zadovoljava jedinstvene potrebe svakog klijenta.'}
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
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Personal Approach */}
            <div className="card hover-lift fade-in-section rounded-xl">
              <div className="text-primary-600 mb-4">
                <FaUserTie size={40} />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-800 mb-3">
                {language === 'en' ? 'Personal Approach' : 'Osobni pristup'}
              </h3>
              <p className="text-secondary-700">
                {language === 'en'
                  ? 'We focus on building relationships and providing individualized attention to each client\'s unique needs and goals.'
                  : 'Fokusiramo se na izgradnju odnosa i pružanje individualizirane pažnje jedinstvenim potrebama i ciljevima svakog klijenta.'}
              </p>
            </div>
            
            {/* Professionalism */}
            <div className="card hover-lift fade-in-section rounded-xl">
              <div className="text-primary-600 mb-4">
                <FaGavel size={40} />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-800 mb-3">
                {language === 'en' ? 'Professionalism' : 'Profesionalizam'}
              </h3>
              <p className="text-secondary-700">
                {language === 'en'
                  ? 'We adhere to the highest standards of legal ethics and provide conscientious service based on years of experience.'
                  : 'Pridržavamo se najviših standarda pravne etike i pružamo savjesnu uslugu temeljenu na dugogodišnjem iskustvu.'}
              </p>
            </div>
            
            {/* Excellence */}
            <div className="card hover-lift fade-in-section rounded-xl">
              <div className="text-primary-600 mb-4">
                <FaBalanceScale size={40} />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-800 mb-3">
                {language === 'en' ? 'Excellence' : 'Izvrsnost'}
              </h3>
              <p className="text-secondary-700">
                {language === 'en'
                  ? 'We constantly improve our knowledge and stay current with legal trends to provide innovative and effective solutions.'
                  : 'Stalno usavršavamo svoje znanje i pratimo pravne trendove kako bismo pružili inovativna i učinkovita rješenja.'}
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
                {language === 'en' ? 'Ready to Work Together?' : 'Spremni za suradnju?'}
              </h2>
              
              <p className="text-xl text-primary-100 mb-8">
                {language === 'en'
                  ? 'Contact us today to schedule a consultation and discover how we can help with your legal needs.'
                  : 'Kontaktirajte nas danas kako biste dogovorili konzultacije i otkrili kako vam možemo pomoći s vašim pravnim potrebama.'}
              </p>
              
              <Link to="/contact" className="btn bg-white text-primary-800 hover:bg-white/90 transition-all duration-300 inline-flex items-center shadow-elegant hover:shadow-elegant-lg hover:-translate-y-1">
                {language === 'en' ? 'Contact Us' : 'Kontaktirajte nas'}
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
