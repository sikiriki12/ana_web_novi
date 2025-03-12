import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaIndustry, FaArrowRight, FaCogs, FaFileContract, FaGavel, FaUserTie } from 'react-icons/fa'
import { LanguageContext } from '../../../App'

export default function ManufacturingIndustry() {
  const { language } = useContext(LanguageContext);
  
  // Service items based on language
  const services = language === 'en' ? [
    {
      icon: <FaFileContract size={20} />,
      title: 'Commercial Contract Advisory',
      description: 'Legal counseling and drafting of commercial contracts tailored to the manufacturing and service industries.'
    },
    {
      icon: <FaGavel size={20} />,
      title: 'Commercial & Labor Dispute Resolution',
      description: 'Representation in commercial and labor disputes to ensure your business interests are protected.'
    },
    {
      icon: <FaUserTie size={20} />,
      title: 'Collective Redundancy Procedures',
      description: 'Legal representation and counseling during collective redundancy procedures to ensure compliance with labor regulations.'
    },
    {
      icon: <FaCogs size={20} />,
      title: 'Legal Proceedings Representation',
      description: 'Representation in public procurement, bankruptcy and pre-bankruptcy proceedings, and enforcement proceedings.'
    }
  ] : [
    {
      icon: <FaFileContract size={20} />,
      title: 'Pravno savjetovanje i izrada trgovačkih ugovora',
      description: 'Pravno savjetovanje i izrada trgovačkih ugovora prilagođenih proizvodnoj industriji i sektoru usluga.'
    },
    {
      icon: <FaGavel size={20} />,
      title: 'Zastupanje u trgovačkim i radnim sporovima',
      description: 'Stručno zastupanje u trgovačkim i radnim sporovima kako bi se osigurala zaštita vaših poslovnih interesa.'
    },
    {
      icon: <FaUserTie size={20} />,
      title: 'Zastupanje u postupku kolektivnog zbrinjavanja viška radnika',
      description: 'Pravno zastupanje i savjetovanje tijekom postupka kolektivnog zbrinjavanja viška radnika uz osiguranje usklađenosti s radnim propisima.'
    },
    {
      icon: <FaCogs size={20} />,
      title: 'Zastupanje u raznim pravnim postupcima',
      description: 'Zastupanje u postupcima javne nabave, stečajnim i predstečajnim postupcima, te ovršnim postupcima.'
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
              <span>{language === 'en' ? 'Manufacturing & Services' : 'Proizvodnja i usluge'}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
              {language === 'en' ? 'Manufacturing & Services' : 'Proizvodnja i usluge'}
            </h1>
            
            <p className="text-xl text-primary-100 mb-8 animate-fade-in animate-delay-200 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Tailored legal solutions for manufacturing companies and service providers'
                : 'Prilagođena pravna rješenja za proizvodne tvrtke i pružatelje usluga'}
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
                    <FaIndustry size={28} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-primary-800 mt-0 mb-4">
                      {language === 'en' 
                        ? 'Legal Expertise for Manufacturing & Services' 
                        : 'Pravna stručnost za proizvodnju i usluge'}
                    </h2>
                    
                    <p>
                      {language === 'en'
                        ? 'The manufacturing and service sectors face diverse legal challenges ranging from complex contracts and labor matters to regulatory compliance and dispute resolution. Our firm provides comprehensive legal solutions tailored to these industries\' specific needs.'
                        : 'Sektori proizvodnje i usluga suočavaju se s različitim pravnim izazovima, od složenih ugovora i radnih pitanja do regulatorne usklađenosti i rješavanja sporova. Naša tvrtka pruža sveobuhvatna pravna rješenja prilagođena specifičnim potrebama ovih industrija.'}
                    </p>
                    
                    <p>
                      {language === 'en'
                        ? 'We work with companies across the manufacturing and service spectrum, helping them navigate legal complexities while maintaining operational efficiency and protecting their business interests.'
                        : 'Surađujemo s tvrtkama iz cijelog spektra proizvodnje i usluga, pomažući im navigirati kroz pravne složenosti uz održavanje operativne učinkovitosti i zaštitu njihovih poslovnih interesa.'}
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
                      ? 'We understand that manufacturing and service businesses operate in competitive environments where legal issues must be resolved efficiently and cost-effectively. Our approach is practical and business-focused, combining legal expertise with industry knowledge.'
                      : 'Razumijemo da proizvodna i uslužna poduzeća posluju u konkurentnim okruženjima gdje pravna pitanja moraju biti riješena učinkovito i ekonomično. Naš pristup je praktičan i poslovno orijentiran, kombinirajući pravnu stručnost s poznavanjem industrije.'}
                  </p>
                  
                  <p className="mb-0">
                    {language === 'en'
                      ? 'From contract negotiation to dispute resolution and labor matters, we provide strategic legal guidance that aligns with your business objectives and mitigates risk while supporting growth and operational excellence.'
                      : 'Od pregovora o ugovorima do rješavanja sporova i radnih pitanja, pružamo strateške pravne smjernice koje su usklađene s vašim poslovnim ciljevima i smanjuju rizik, istovremeno podržavajući rast i operativnu izvrsnost.'}
                  </p>
                </div>
              </div>
              
              {/* Services Grid */}
              <div className="mt-12">
                <h3 className="text-2xl font-serif font-bold text-primary-800 mb-8">
                  {language === 'en' ? 'Our Manufacturing & Services Expertise' : 'Naša stručnost za proizvodnju i usluge'}
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
                  {language === 'en' ? 'Need Manufacturing & Services Legal Support?' : 'Trebate pravnu podršku za proizvodnju i usluge?'}
                </h3>
                
                <p className="text-primary-100 mb-6">
                  {language === 'en'
                    ? 'Contact us today to discuss how our specialized legal services can support your manufacturing or service business.'
                    : 'Kontaktirajte nas danas kako biste razgovarali o tome kako naše specijalizirane pravne usluge mogu podržati vaše proizvodno ili uslužno poslovanje.'}
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
                      {language === 'en' ? 'Industry-specific contract expertise' : 'Stručnost za ugovore specifične za industriju'}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary-600 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-secondary-700 font-medium">
                      {language === 'en' ? 'Experience with complex labor matters' : 'Iskustvo sa složenim radnim pitanjima'}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary-600 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-secondary-700 font-medium">
                      {language === 'en' ? 'Proven success in commercial disputes' : 'Dokazani uspjeh u trgovačkim sporovima'}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary-600 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-secondary-700 font-medium">
                      {language === 'en' ? 'Comprehensive regulatory compliance support' : 'Sveobuhvatna podrška za regulatornu usklađenost'}
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
                ? 'Partner with Us for Your Manufacturing & Services Legal Needs' 
                : 'Surađujte s nama za vaše pravne potrebe u proizvodnji i uslugama'}
            </h2>
            
            <p className="text-lg text-secondary-700 mb-8 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Contact our team today to discuss how we can support your manufacturing or service business with specialized legal solutions.'
                : 'Kontaktirajte naš tim danas kako bismo razgovarali o tome kako možemo podržati vaše proizvodno ili uslužno poslovanje specijaliziranim pravnim rješenjima.'}
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
