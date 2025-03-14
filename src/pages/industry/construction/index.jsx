import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaBuilding, FaArrowRight, FaHardHat, FaFileContract, FaGavel, FaUserTie } from 'react-icons/fa'
import { LanguageContext } from '../../../App'

export default function ConstructionIndustry() {
  const { language } = useContext(LanguageContext);
  
  // Service items based on language
  const services = language === 'en' ? [
    {
      icon: <FaBuilding size={20} />,
      title: 'Real Estate Investment Support',
      description: 'Legal support during real estate investments, including property acquisitions, development projects, and construction contracts.'
    },
    {
      icon: <FaGavel size={20} />,
      title: 'Construction Dispute Resolution',
      description: 'Legal counseling and representation related to construction disputes, including contract disputes, permit issues, and liability claims.'
    },
    {
      icon: <FaFileContract size={20} />,
      title: 'Commercial Contract Drafting',
      description: 'Legal counseling and drafting of commercial contracts tailored to the construction industry\'s specific needs and regulations.'
    },
    {
      icon: <FaUserTie size={20} />,
      title: 'Commercial & Labor Dispute Representation',
      description: 'Representation in commercial and labor disputes, ensuring your business interests are protected throughout the legal process.'
    }
  ] : [
    {
      icon: <FaBuilding size={20} />,
      title: 'Pravna potpora tijekom nekretninskih investicija',
      description: 'Sveobuhvatna pravna podrška tijekom procesa investiranja u nekretnine, uključujući kupnju zemljišta, razvoj projekata i građevinske ugovore.'
    },
    {
      icon: <FaGavel size={20} />,
      title: 'Pravno savjetovanje i zastupanje vezano za sporove u građevini',
      description: 'Stručno pravno savjetovanje i zastupanje u svim vrstama građevinskih sporova, uključujući sporove oko ugovora, dozvola i odgovornosti.'
    },
    {
      icon: <FaFileContract size={20} />,
      title: 'Pravno savjetovanje i izrada trgovačkih ugovora',
      description: 'Izrada i pregled specijaliziranih trgovačkih ugovora prilagođenih specifičnim potrebama i propisima građevinske industrije.'
    },
    {
      icon: <FaUserTie size={20} />,
      title: 'Zastupanje u trgovačkim i radnim sporovima',
      description: 'Stručno zastupanje u trgovačkim i radnim sporovima, osiguravajući da su vaši poslovni interesi zaštićeni tijekom cijelog pravnog procesa.'
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
              <span>{language === 'en' ? 'Construction Industry' : 'Građevinska industrija'}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
              {language === 'en' ? 'Construction Industry' : 'Građevinska industrija'}
            </h1>
            
            <p className="text-xl text-primary-100 mb-8 animate-fade-in animate-delay-200 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Comprehensive legal solutions for construction companies, contractors, and real estate developers'
                : 'Sveobuhvatna pravna rješenja za građevinske tvrtke, izvođače i investitore u nekretnine'}
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
                    <FaHardHat size={28} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-primary-800 mt-0 mb-4">
                      {language === 'en' 
                        ? 'Legal Expertise for the Construction Sector' 
                        : 'Pravna stručnost za građevinski sektor'}
                    </h2>
                    
                    <p>
                      {language === 'en'
                        ? 'The construction industry operates within a complex legal framework of contracts, regulations, and potential disputes. We bring specialized knowledge and experience to help construction businesses navigate these challenges while focusing on their core operations.'
                        : 'Građevinska industrija djeluje unutar složenog pravnog okvira ugovora, propisa i potencijalnih sporova. Donosimo specijalizirano znanje i iskustvo kako bi pomogli građevinskim tvrtkama u navigaciji kroz ove izazove dok se fokusiraju na svoje osnovne djelatnosti.'}
                    </p>
                    
                    <p>
                      {language === 'en'
                        ? 'We work with construction companies of all sizes, property developers, contractors, and subcontractors to provide comprehensive legal support throughout all phases of construction projects, from initial land acquisition through project completion and beyond.'
                        : 'Surađujemo s građevinskim tvrtkama svih veličina, investitorima u nekretnine, izvođačima i podizvođačima kako bismo pružili sveobuhvatnu pravnu podršku kroz sve faze građevinskih projekata, od početnog stjecanja zemljišta do završetka projekta i dalje.'}
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
                      ? 'We understand that construction projects involve significant investments and tight timelines. Our legal solutions are designed to be practical, efficient, and responsive to the unique demands of the construction industry.'
                      : 'Razumijemo da građevinski projekti uključuju značajna ulaganja i kratke rokove. Naša pravna rješenja osmišljena su da budu praktična, učinkovita i da odgovaraju jedinstvenim zahtjevima građevinske industrije.'}
                  </p>
                  
                  <p className="mb-0">
                    {language === 'en'
                      ? 'By combining industry-specific knowledge with legal expertise, we help clients anticipate potential issues before they arise, resolve disputes efficiently when they occur, and establish robust legal frameworks that support successful project outcomes.'
                      : 'Kombiniranjem znanja specifičnog za industriju s pravnom stručnošću, pomažemo klijentima predvidjeti potencijalne probleme prije nego što nastanu, učinkovito riješiti sporove kada se pojave i uspostaviti robusne pravne okvire koji podržavaju uspješne ishode projekata.'}
                  </p>
                </div>
              </div>
              
              {/* Services Grid */}
              <div className="mt-12">
                <h3 className="text-2xl font-serif font-bold text-primary-800 mb-8">
                  {language === 'en' ? 'Our Construction Industry Services' : 'Naše usluge za građevinsku industriju'}
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
                  {language === 'en' ? 'Need Construction Legal Support?' : 'Trebate pravnu podršku u građevini?'}
                </h3>
                
                <p className="text-primary-100 mb-6">
                  {language === 'en'
                    ? 'Contact us today to discuss how our specialized legal services can support your construction business.'
                    : 'Kontaktirajte nas danas kako biste razgovarali o tome kako naše specijalizirane pravne usluge mogu podržati vaše građevinsko poslovanje.'}
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
                      {language === 'en' ? 'Deep understanding of construction industry regulations' : 'Duboko razumijevanje propisa građevinske industrije'}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary-600 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-secondary-700 font-medium">
                      {language === 'en' ? 'Experience with complex construction contracts' : 'Iskustvo sa složenim građevinskim ugovorima'}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary-600 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-secondary-700 font-medium">
                      {language === 'en' ? 'Proven track record in construction dispute resolution' : 'Dokazani uspjeh u rješavanju građevinskih sporova'}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary-600 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-secondary-700 font-medium">
                      {language === 'en' ? 'Tailored advice for your specific project needs' : 'Prilagođeni savjeti za specifične potrebe vašeg projekta'}
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
                ? 'Let\'s Build Your Construction Legal Strategy Together' 
                : 'Izgradimo zajedno vašu građevinsku pravnu strategiju'}
            </h2>
            
            <p className="text-lg text-secondary-700 mb-8 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Contact us today to discuss how we can support your construction business with specialized legal solutions.'
                : 'Kontaktirajte nas danas kako bismo razgovarali o tome kako možemo podržati vaše građevinsko poslovanje specijaliziranim pravnim rješenjima.'}
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
