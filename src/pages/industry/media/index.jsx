import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaNewspaper, FaArrowRight, FaCopyright, FaGavel, FaShieldAlt, FaFileContract } from 'react-icons/fa'
import { LanguageContext } from '../../../App'

export default function MediaIndustry() {
  const { language } = useContext(LanguageContext);
  
  // Service items based on language
  const services = language === 'en' ? [
    {
      icon: <FaCopyright size={20} />,
      title: 'Intellectual Property',
      description: 'Protection and management of intellectual property rights for media content, including copyright registration, licensing agreements, and IP portfolio management.'
    },
    {
      icon: <FaGavel size={20} />,
      title: 'Media Litigation',
      description: 'Representation in defamation cases, copyright infringement claims, privacy violations, and other disputes specific to the media and publishing industries.'
    },
    {
      icon: <FaShieldAlt size={20} />,
      title: 'Regulatory Compliance',
      description: 'Guidance on media regulations, advertising standards, data protection requirements, and industry-specific compliance issues.'
    },
    {
      icon: <FaFileContract size={20} />,
      title: 'Content and Distribution',
      description: 'Legal support for content creation, publishing agreements, distribution contracts, digital rights management, and talent agreements.'
    }
  ] : [
    {
      icon: <FaCopyright size={20} />,
      title: 'Intelektualno vlasništvo',
      description: 'Zaštita i upravljanje pravima intelektualnog vlasništva za medijski sadržaj, uključujući registraciju autorskih prava, licencne ugovore i upravljanje IP portfeljem.'
    },
    {
      icon: <FaGavel size={20} />,
      title: 'Medijski sporovi',
      description: 'Zastupanje u slučajevima klevete, povrede autorskih prava, kršenja privatnosti i drugim sporovima specifičnim za medijsku i izdavačku industriju.'
    },
    {
      icon: <FaShieldAlt size={20} />,
      title: 'Regulatorna usklađenost',
      description: 'Savjetovanje o medijskim propisima, standardima oglašavanja, zahtjevima zaštite podataka i specifičnim pitanjima usklađenosti za industriju.'
    },
    {
      icon: <FaFileContract size={20} />,
      title: 'Sadržaj i distribucija',
      description: 'Pravna podrška za stvaranje sadržaja, izdavačke ugovore, distribucijske ugovore, upravljanje digitalnim pravima i ugovore s talentima.'
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
              <span>{language === 'en' ? 'Media' : 'Mediji'}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
              {language === 'en' ? 'Media Industry' : 'Medijska industrija'}
            </h1>
            
            <p className="text-xl text-primary-100 mb-8 animate-fade-in animate-delay-200 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Specialized legal solutions for publishers, broadcasters, digital media, and content creators'
                : 'Specijalizirana pravna rješenja za izdavače, televizijske kuće, digitalne medije i kreatore sadržaja'}
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
                    <FaNewspaper size={28} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-primary-800 mt-0 mb-4">
                      {language === 'en' 
                        ? 'Legal Expertise for the Media Sector' 
                        : 'Pravna stručnost za medijski sektor'}
                    </h2>
                    
                    <p>
                      {language === 'en'
                        ? 'The media industry faces unique legal challenges at the intersection of intellectual property, free speech, privacy, and rapidly evolving digital technologies. We bring specialized knowledge to help media companies navigate this complex landscape while protecting their interests and creative assets.'
                        : 'Medijska industrija suočava se s jedinstvenim pravnim izazovima na sjecištu intelektualnog vlasništva, slobode govora, privatnosti i brzo razvijajućih digitalnih tehnologija. Donosimo specijalizirano znanje kako bismo pomogli medijskim tvrtkama u navigaciji kroz ovaj složeni krajolik, istovremeno štiteći njihove interese i kreativnu imovinu.'}
                    </p>
                    
                    <p>
                      {language === 'en'
                        ? 'We work with traditional publishers, broadcasters, digital media platforms, content creators, and advertising agencies to provide comprehensive legal support across all aspects of media operations, from content creation and distribution to regulatory compliance and dispute resolution.'
                        : 'Surađujemo s tradicionalnim izdavačima, televizijskim kućama, platformama digitalnih medija, kreatorima sadržaja i oglašivačkim agencijama kako bismo pružili sveobuhvatnu pravnu podršku u svim aspektima medijskog poslovanja, od stvaranja i distribucije sadržaja do regulatorne usklađenosti i rješavanja sporova.'}
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
                      ? 'We understand that media law requires a delicate balance between legal protection and creative freedom. Our approach combines deep industry knowledge with legal expertise to provide practical solutions that safeguard your rights while enabling innovative content development and distribution.'
                      : 'Razumijemo da medijsko pravo zahtijeva osjetljivu ravnotežu između pravne zaštite i kreativne slobode. Naš pristup kombinira duboko poznavanje industrije s pravnom stručnošću kako bismo pružili praktična rješenja koja štite vaša prava, istovremeno omogućujući inovativni razvoj i distribuciju sadržaja.'}
                  </p>
                  
                  <p className="mb-0">
                    {language === 'en'
                      ? 'In the rapidly evolving media landscape, we stay at the forefront of emerging legal issues related to digital rights, social media, user-generated content, and cross-border distribution, providing forward-thinking advice that anticipates challenges before they arise.'
                      : 'U brzo razvijajućem medijskom okruženju, ostajemo na čelu novih pravnih pitanja vezanih uz digitalna prava, društvene medije, korisnički generiran sadržaj i prekograničnu distribuciju, pružajući napredne savjete koji predviđaju izazove prije nego što nastanu.'}
                  </p>
                </div>
              </div>
              
              {/* Services Grid */}
              <div className="mt-12">
                <h3 className="text-2xl font-serif font-bold text-primary-800 mb-8">
                  {language === 'en' ? 'Our Media Industry Services' : 'Naše usluge za medijsku industriju'}
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
                  {language === 'en' ? 'Need Media Legal Support?' : 'Trebate pravnu podršku za medije?'}
                </h3>
                
                <p className="text-primary-100 mb-6">
                  {language === 'en'
                    ? 'Contact us today to discuss how our specialized legal services can support your media business and protect your content.'
                    : 'Kontaktirajte nas danas kako biste razgovarali o tome kako naše specijalizirane pravne usluge mogu podržati vaše medijsko poslovanje i zaštititi vaš sadržaj.'}
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
                      {language === 'en' ? 'Specialized knowledge of media and entertainment law' : 'Specijalizirano znanje o medijskom i zabavnom pravu'}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary-600 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-secondary-700 font-medium">
                      {language === 'en' ? 'Experience with complex intellectual property matters' : 'Iskustvo sa složenim pitanjima intelektualnog vlasništva'}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary-600 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-secondary-700 font-medium">
                      {language === 'en' ? 'Proven track record in defamation and privacy cases' : 'Dokazani uspjeh u slučajevima klevete i privatnosti'}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary-600 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-secondary-700 font-medium">
                      {language === 'en' ? 'Understanding of digital media and emerging platforms' : 'Razumijevanje digitalnih medija i novih platformi'}
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
                ? 'Partner with Us for Your Media Legal Needs' 
                : 'Surađujte s nama za vaše medijske pravne potrebe'}
            </h2>
            
            <p className="text-lg text-secondary-700 mb-8 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Contact us today to discuss how we can support your media business with specialized legal solutions for content creation, distribution, and protection.'
                : 'Kontaktirajte nas danas kako bismo razgovarali o tome kako možemo podržati vaše medijsko poslovanje specijaliziranim pravnim rješenjima za stvaranje, distribuciju i zaštitu sadržaja.'}
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
