import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaPrescriptionBottleAlt, FaArrowRight, FaMedkit, FaFileContract, FaGavel, FaUserTie } from 'react-icons/fa'
import { LanguageContext } from '../../../App'

export default function PharmaIndustry() {
  const { language } = useContext(LanguageContext);
  
  // Service items based on language
  const services = language === 'en' ? [
    {
      icon: <FaUserTie size={20} />,
      title: 'Labor Law Expertise',
      description: 'Legal counseling and representation in employment law, including compliance with healthcare labor regulations and dispute resolution.'
    },
    {
      icon: <FaGavel size={20} />,
      title: 'Public Procurement Support',
      description: 'Legal counseling and representation in public procurement procedures, ensuring compliance with healthcare procurement regulations.'
    },
    {
      icon: <FaFileContract size={20} />,
      title: 'Business Transaction Support',
      description: 'Legal support in business transactions, including drafting and reviewing commercial contracts tailored to pharmaceutical industry needs.'
    },
    {
      icon: <FaMedkit size={20} />,
      title: 'Medical Liability & Media Claims',
      description: 'Representation in litigation proceedings for medical malpractice claims and damages caused by information published in media.'
    }
  ] : [
    {
      icon: <FaUserTie size={20} />,
      title: 'Pravno savjetovanje i zastupanje pred sudovima na području radnog prava',
      description: 'Stručno pravno savjetovanje i zastupanje u području radnog prava, uključujući usklađenost sa zdravstvenim radnim propisima i rješavanje sporova.'
    },
    {
      icon: <FaGavel size={20} />,
      title: 'Pravno savjetovanje i zastupanje u postupcima javne nabave',
      description: 'Pravno savjetovanje i zastupanje u postupcima javne nabave, osiguravajući usklađenost s propisima o nabavi u zdravstvu.'
    },
    {
      icon: <FaFileContract size={20} />,
      title: 'Pravna potpora u poslovnim transakcijama, izrada trgovačkih ugovora',
      description: 'Pravna potpora u poslovnim transakcijama, uključujući izradu i pregled trgovačkih ugovora prilagođenih potrebama farmaceutske industrije.'
    },
    {
      icon: <FaMedkit size={20} />,
      title: 'Zastupanje u postupcima radi naknade štete',
      description: 'Zastupanje u parničnim postupcima radi naknade štete zbog liječničke pogreške, kao i u postupcima radi naknade štete prouzročene informacijama objavljenim u medijima.'
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
              <Link to="/experience" className="hover:text-white transition-colors">
                {language === 'en' ? 'Industry Expertise' : 'Industrijska stručnost'}
              </Link>
              <span className="mx-3">/</span>
              <span>{language === 'en' ? 'Pharmaceutical & Healthcare' : 'Farmaceutska industrija i zdravstvo'}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
              {language === 'en' ? 'Pharmaceutical & Healthcare' : 'Farmaceutska industrija i zdravstvo'}
            </h1>
            
            <p className="text-xl text-primary-100 mb-8 animate-fade-in animate-delay-200 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Specialized legal solutions for pharmaceutical companies and healthcare providers'
                : 'Specijalizirana pravna rješenja za farmaceutske tvrtke i pružatelje zdravstvenih usluga'}
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
                    <FaPrescriptionBottleAlt size={28} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-primary-800 mt-0 mb-4">
                      {language === 'en' 
                        ? 'Legal Expertise for the Healthcare Sector' 
                        : 'Pravna stručnost za zdravstveni sektor'}
                    </h2>
                    
                    <p>
                      {language === 'en'
                        ? 'The pharmaceutical and healthcare industries operate within a highly regulated environment with complex legal challenges. Our team offers specialized legal expertise to navigate these challenges while ensuring compliance with industry-specific regulations.'
                        : 'Farmaceutska industrija i zdravstvo djeluju unutar visoko reguliranog okruženja sa složenim pravnim izazovima. Naš tim nudi specijaliziranu pravnu stručnost za navigaciju kroz ove izazove, osiguravajući usklađenost s propisima specifičnim za industriju.'}
                    </p>
                    
                    <p>
                      {language === 'en'
                        ? 'We assist pharmaceutical companies, healthcare providers, and related businesses with regulatory compliance, labor issues, public procurement, commercial transactions, and liability concerns unique to the healthcare sector.'
                        : 'Pomažemo farmaceutskim tvrtkama, pružateljima zdravstvenih usluga i povezanim poduzećima s regulatornom usklađenošću, radnim pitanjima, javnom nabavom, komercijalnim transakcijama i pitanjima odgovornosti jedinstvenim za zdravstveni sektor.'}
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
                      ? 'We understand that healthcare and pharmaceutical organizations face unique legal challenges that require both legal expertise and industry knowledge. Our approach combines deep understanding of healthcare regulations with practical business solutions.'
                      : 'Razumijemo da zdravstvene i farmaceutske organizacije suočavaju se s jedinstvenim pravnim izazovima koji zahtijevaju i pravnu stručnost i poznavanje industrije. Naš pristup kombinira duboko razumijevanje zdravstvenih propisa s praktičnim poslovnim rješenjima.'}
                  </p>
                  
                  <p className="mb-0">
                    {language === 'en'
                      ? 'We work closely with our clients to develop legal strategies that not only ensure compliance but also support their business objectives and protect their interests in this highly specialized sector.'
                      : 'Blisko surađujemo s našim klijentima kako bismo razvili pravne strategije koje ne samo da osiguravaju usklađenost, već i podržavaju njihove poslovne ciljeve i štite njihove interese u ovom visoko specijaliziranom sektoru.'}
                  </p>
                </div>
              </div>
              
              {/* Services Grid */}
              <div className="mt-12">
                <h3 className="text-2xl font-serif font-bold text-primary-800 mb-8">
                  {language === 'en' ? 'Our Pharmaceutical & Healthcare Services' : 'Naše usluge za farmaceutsku industriju i zdravstvo'}
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
                  {language === 'en' ? 'Need Healthcare Legal Support?' : 'Trebate pravnu podršku u zdravstvu?'}
                </h3>
                
                <p className="text-primary-100 mb-6">
                  {language === 'en'
                    ? 'Contact us today to discuss how our specialized legal services can support your pharmaceutical or healthcare organization.'
                    : 'Kontaktirajte nas danas kako biste razgovarali o tome kako naše specijalizirane pravne usluge mogu podržati vašu farmaceutsku ili zdravstvenu organizaciju.'}
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
                      {language === 'en' ? 'Deep understanding of healthcare regulations' : 'Duboko razumijevanje zdravstvenih propisa'}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary-600 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-secondary-700 font-medium">
                      {language === 'en' ? 'Experience with public procurement in healthcare' : 'Iskustvo s javnom nabavom u zdravstvu'}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary-600 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-secondary-700 font-medium">
                      {language === 'en' ? 'Proven track record in medical liability cases' : 'Dokazani uspjeh u slučajevima medicinske odgovornosti'}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary-600 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-secondary-700 font-medium">
                      {language === 'en' ? 'Specialized in healthcare labor compliance' : 'Specijalizirani za usklađenost s radnim pravom u zdravstvu'}
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
                ? 'Partner with Us for Your Healthcare Legal Needs' 
                : 'Surađujte s nama za vaše zdravstvene pravne potrebe'}
            </h2>
            
            <p className="text-lg text-secondary-700 mb-8 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Contact our team today to discuss how we can support your pharmaceutical or healthcare organization with specialized legal solutions.'
                : 'Kontaktirajte naš tim danas kako bismo razgovarali o tome kako možemo podržati vašu farmaceutsku ili zdravstvenu organizaciju specijaliziranim pravnim rješenjima.'}
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
