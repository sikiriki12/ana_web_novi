import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaArrowRight, FaBuilding, FaFileContract, FaGavel, FaUserTie } from 'react-icons/fa'
import { LanguageContext } from '../../../App'

export default function RealEstateIndustry() {
  const { language } = useContext(LanguageContext);
  
  // Service items based on language
  const services = language === 'en' ? [
    {
      icon: <FaBuilding size={20} />,
      title: 'Property Transactions',
      description: 'Legal support for property acquisitions, sales, lease agreements, and real estate development projects with comprehensive contract drafting and review.'
    },
    {
      icon: <FaGavel size={20} />,
      title: 'Real Estate Litigation',
      description: 'Representation in property title disputes, land use conflicts, construction disputes, and enforcement proceedings related to real estate.'
    },
    {
      icon: <FaFileContract size={20} />,
      title: 'Regulatory Compliance',
      description: 'Guidance on zoning regulations, construction permits, environmental compliance, and other regulatory matters affecting real estate projects.'
    },
    {
      icon: <FaUserTie size={20} />,
      title: 'Investment Advisory',
      description: 'Legal counseling for real estate investors, including due diligence, financing structures, joint ventures, and risk assessment for property investments.'
    }
  ] : [
    {
      icon: <FaBuilding size={20} />,
      title: 'Transakcije nekretninama',
      description: 'Pravna podrška za kupnju i prodaju nekretnina, ugovore o zakupu i projekte razvoja nekretnina sa sveobuhvatnim sastavljanjem i pregledom ugovora.'
    },
    {
      icon: <FaGavel size={20} />,
      title: 'Sporovi vezani uz nekretnine',
      description: 'Zastupanje u sporovima oko vlasništva nekretnina, konflikata oko korištenja zemljišta, građevinskih sporova i ovršnih postupaka vezanih uz nekretnine.'
    },
    {
      icon: <FaFileContract size={20} />,
      title: 'Regulatorna usklađenost',
      description: 'Savjetovanje o propisima zoniranja, građevinskim dozvolama, ekološkoj usklađenosti i drugim regulatornim pitanjima koja utječu na projekte nekretnina.'
    },
    {
      icon: <FaUserTie size={20} />,
      title: 'Investicijsko savjetovanje',
      description: 'Pravno savjetovanje za investitore u nekretnine, uključujući dubinsku analizu, strukturiranje financiranja, zajedničke pothvate i procjenu rizika za ulaganja u nekretnine.'
    }
  ];

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
              <Link to="/industry" className="hover:text-white transition-colors">
                {language === 'en' ? 'Industry Expertise' : 'Industrijska stručnost'}
              </Link>
              <span className="mx-3">/</span>
              <span>{language === 'en' ? 'Real Estate' : 'Nekretnine'}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
              {language === 'en' ? 'Real Estate Industry' : 'Industrija nekretnina'}
            </h1>
            
            <p className="text-xl text-primary-100 mb-8 animate-fade-in animate-delay-200 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Comprehensive legal solutions for real estate developers, investors, and property owners'
                : 'Sveobuhvatna pravna rješenja za investitore u nekretnine, vlasnike nekretnina i građevinske tvrtke'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Main content area */}
            <div className="md:col-span-8">
              <div className="prose prose-lg max-w-none">
                {/* Introduction */}
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-5 mt-1">
                    <FaHome size={28} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-primary-800 mt-0 mb-4">
                      {language === 'en' 
                        ? 'Legal Expertise for the Real Estate Sector' 
                        : 'Pravna stručnost za sektor nekretnina'}
                    </h2>
                    
                    <p>
                      {language === 'en'
                        ? 'The real estate industry operates within a complex legal framework of property laws, transactions, zoning regulations, and potential disputes. We bring specialized knowledge and experience to help real estate businesses navigate these challenges while maximizing value and minimizing risks.'
                        : 'Industrija nekretnina djeluje unutar složenog pravnog okvira imovinskih zakona, transakcija, propisa o zoniranju i potencijalnih sporova. Donosimo specijalizirano znanje i iskustvo kako bismo pomogli tvrtkama iz područja nekretnina u navigaciji kroz ove izazove, istovremeno maksimizirajući vrijednost i minimizirajući rizike.'}
                    </p>
                    
                    <p>
                      {language === 'en'
                        ? 'We work with real estate developers, property management firms, institutional investors, and individual property owners to provide comprehensive legal support throughout all phases of real estate projects, from initial acquisition through development, leasing, management, and eventual disposition.'
                        : 'Surađujemo s investitorima u nekretnine, tvrtkama za upravljanje nekretninama, institucionalnim investitorima i individualnim vlasnicima nekretnina kako bismo pružili sveobuhvatnu pravnu podršku kroz sve faze projekata nekretnina, od početnog stjecanja kroz razvoj, najam, upravljanje i eventualnu prodaju.'}
                    </p>
                  </div>
                </div>
                
                {/* Our approach section */}
                <div className="bg-primary-50 rounded-xl p-8 my-10">
                  <h3 className="text-2xl font-serif font-bold text-primary-800 mb-6">
                    {language === 'en' ? 'Our Approach' : 'Naš pristup'}
                  </h3>
                  
                  <p>
                    {language === 'en'
                      ? 'We understand that real estate transactions and developments involve significant investments and complex legal considerations. Our legal solutions are designed to be practical, efficient, and responsive to the unique demands of the real estate industry.'
                      : 'Razumijemo da transakcije i razvoj nekretnina uključuju značajna ulaganja i složena pravna pitanja. Naša pravna rješenja osmišljena su da budu praktična, učinkovita i da odgovaraju jedinstvenim zahtjevima industrije nekretnina.'}
                  </p>
                  
                  <p className="mb-0">
                    {language === 'en'
                      ? 'By combining industry-specific knowledge with legal expertise, we help clients anticipate potential issues before they arise, resolve disputes efficiently when they occur, and establish robust legal frameworks that support successful project outcomes and protect investments.'
                      : 'Kombiniranjem znanja specifičnog za industriju s pravnom stručnošću, pomažemo klijentima predvidjeti potencijalne probleme prije nego što nastanu, učinkovito riješiti sporove kada se pojave i uspostaviti robusne pravne okvire koji podržavaju uspješne ishode projekata i štite ulaganja.'}
                  </p>
                </div>
              </div>
              
              {/* Services Grid */}
              <div className="mt-12">
                <h3 className="text-2xl font-serif font-bold text-primary-800 mb-8">
                  {language === 'en' ? 'Our Real Estate Industry Services' : 'Naše usluge za industriju nekretnina'}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {services.map((service, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-elegant p-6 border border-primary-100 hover:border-primary-300 transition-all duration-300 hover:shadow-elegant-lg">
                      <div className="bg-primary-50 p-3 w-fit rounded-lg text-primary-600 mb-4">
                        {service.icon}
                      </div>
                      <h4 className="text-xl font-serif font-bold text-primary-800 mb-3">{service.title}</h4>
                      <p className="text-secondary-700">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:col-span-4">
              {/* Quick Contact CTA */}
              <div className="bg-primary-800 text-white rounded-xl p-8 mb-8">
                <h3 className="text-xl font-serif font-bold mb-4">
                  {language === 'en' ? 'Need Real Estate Legal Support?' : 'Trebate pravnu podršku za nekretnine?'}
                </h3>
                
                <p className="text-primary-100 mb-6">
                  {language === 'en'
                    ? 'Contact us today to discuss how our specialized legal services can support your real estate business or investments.'
                    : 'Kontaktirajte nas danas kako biste razgovarali o tome kako naše specijalizirane pravne usluge mogu podržati vaše poslovanje ili ulaganja u nekretnine.'}
                </p>
                
                <Link to="/contact" className="btn bg-white text-primary-800 hover:bg-white/90 transition-all duration-300 w-full flex justify-center items-center">
                  {language === 'en' ? 'Contact Us' : 'Kontaktirajte nas'}
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
              
              {/* Why Choose Us */}
              <div className="bg-primary-50 rounded-xl p-8">
                <h3 className="text-xl font-serif font-bold text-primary-800 mb-4">
                  {language === 'en' ? 'Why Choose Us' : 'Zašto odabrati nas'}
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="text-primary-600 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-secondary-700 font-medium">
                      {language === 'en' ? 'Deep understanding of real estate regulations and laws' : 'Duboko razumijevanje propisa i zakona o nekretninama'}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary-600 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-secondary-700 font-medium">
                      {language === 'en' ? 'Experience with complex real estate transactions' : 'Iskustvo sa složenim transakcijama nekretnina'}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary-600 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-secondary-700 font-medium">
                      {language === 'en' ? 'Proven track record in real estate dispute resolution' : 'Dokazani uspjeh u rješavanju sporova vezanih uz nekretnine'}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary-600 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-secondary-700 font-medium">
                      {language === 'en' ? 'Tailored advice for your specific property needs' : 'Prilagođeni savjeti za specifične potrebe vaših nekretnina'}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-primary-800 mb-6">
              {language === 'en' 
                ? 'Partner with Us for Your Real Estate Legal Needs' 
                : 'Surađujte s nama za vaše pravne potrebe u području nekretnina'}
            </h2>
            
            <p className="text-lg text-secondary-700 mb-8 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Contact us today to discuss how we can support your real estate business or investments with specialized legal solutions.'
                : 'Kontaktirajte nas danas kako bismo razgovarali o tome kako možemo podržati vaše poslovanje ili ulaganja u nekretnine specijaliziranim pravnim rješenjima.'}
            </p>
            
            <Link to="/contact" className="btn btn-primary">
              {language === 'en' ? 'Schedule a Consultation' : 'Zakažite konzultacije'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
