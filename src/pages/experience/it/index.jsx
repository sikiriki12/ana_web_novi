import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaLaptopCode, FaArrowRight, FaCode, FaFileContract, FaGavel, FaUserTie } from 'react-icons/fa'
import { LanguageContext } from '../../../App'

export default function ITIndustry() {
  const { language } = useContext(LanguageContext);
  
  // Service items based on language
  const services = language === 'en' ? [
    {
      icon: <FaLaptopCode size={20} />,
      title: 'Corporate Mergers & Acquisitions',
      description: 'Legal support during corporate mergers, acquisitions, and other status changes in the technology sector.'
    },
    {
      icon: <FaGavel size={20} />,
      title: 'Commercial Dispute Resolution',
      description: 'Representation in commercial disputes specific to technology companies, including intellectual property and contract disputes.'
    },
    {
      icon: <FaUserTie size={20} />,
      title: 'Labor Law Support',
      description: 'Legal counseling and representation in labor law matters, including employment contracts, labor disputes, and IP ownership issues.'
    },
    {
      icon: <FaFileContract size={20} />,
      title: 'Business Operations Advisory',
      description: 'Legal consulting for business operations including drafting and reviewing commercial contracts tailored to IT industry needs.'
    }
  ] : [
    {
      icon: <FaLaptopCode size={20} />,
      title: 'Pravna potpora tijekom preuzimanja trgovačkih društava',
      description: 'Sveobuhvatna pravna podrška tijekom preuzimanja trgovačkih društava i drugih statusnih promjena u tehnološkom sektoru.'
    },
    {
      icon: <FaGavel size={20} />,
      title: 'Zastupanje u trgovačkim sporovima',
      description: 'Stručno zastupanje u trgovačkim sporovima specifičnim za tehnološke tvrtke, uključujući intelektualno vlasništvo i ugovorne sporove.'
    },
    {
      icon: <FaUserTie size={20} />,
      title: 'Pravno savjetovanje i zastupanje na području radnog prava',
      description: 'Pravno savjetovanje i zastupanje u pitanjima radnog prava, uključujući ugovore o radu, radne sporove i pitanja vlasništva nad intelektualnim vlasništvom.'
    },
    {
      icon: <FaFileContract size={20} />,
      title: 'Pravno savjetovanje u poslovanju',
      description: 'Pravno savjetovanje za poslovanje uključujući izradu i pregled trgovačkih ugovora prilagođenih potrebama IT industrije.'
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
              <span>{language === 'en' ? 'IT Industry' : 'IT Industrija'}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
              {language === 'en' ? 'IT Industry' : 'IT Industrija'}
            </h1>
            
            <p className="text-xl text-primary-100 mb-8 animate-fade-in animate-delay-200 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Specialized legal solutions for technology companies, startups, and digital enterprises'
                : 'Specijalizirana pravna rješenja za tehnološke tvrtke, startupove i digitalna poduzeća'}
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
                    <FaCode size={28} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-primary-800 mt-0 mb-4">
                      {language === 'en' 
                        ? 'Legal Expertise for the Technology Sector' 
                        : 'Pravna stručnost za tehnološki sektor'}
                    </h2>
                    
                    <p>
                      {language === 'en'
                        ? 'The IT industry operates in a rapidly evolving ecosystem with unique legal challenges related to intellectual property, data protection, and digital transactions. Our team specializes in providing legal solutions tailored to the distinctive needs of technology companies.'
                        : 'IT industrija djeluje u brzo razvijajućem ekosustavu s jedinstvenim pravnim izazovima vezanim uz intelektualno vlasništvo, zaštitu podataka i digitalne transakcije. Naš tim je specijaliziran za pružanje pravnih rješenja prilagođenih specifičnim potrebama tehnoloških tvrtki.'}
                    </p>
                    
                    <p>
                      {language === 'en'
                        ? 'We work with businesses of all sizes in the technology sector, from innovative startups to established software companies, supporting them through growth, corporate changes, and the complexities of operating in a digital marketplace.'
                        : 'Surađujemo s tvrtkama svih veličina u tehnološkom sektoru, od inovativnih startupova do etabliranih softverskih tvrtki, podržavajući ih tijekom rasta, korporativnih promjena i složenosti poslovanja na digitalnom tržištu.'}
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
                      ? 'We understand that technology companies need agile, practical legal solutions that can keep pace with innovation. Our approach combines deep technical understanding with legal expertise to provide advice that is both legally sound and aligned with business objectives.'
                      : 'Razumijemo da tehnološke tvrtke trebaju agilna, praktična pravna rješenja koja mogu držati korak s inovacijama. Naš pristup kombinira duboko tehničko razumijevanje s pravnom stručnošću kako bismo pružili savjete koji su pravno utemeljeni i usklađeni s poslovnim ciljevima.'}
                  </p>
                  
                  <p className="mb-0">
                    {language === 'en'
                      ? 'Whether you\'re navigating complex M&A transactions, protecting intellectual property, managing employment relationships, or structuring commercial agreements, our team provides responsive, technology-focused legal guidance.'
                      : 'Bez obzira navigirate li složenim M&A transakcijama, štitite intelektualno vlasništvo, upravljate radnim odnosima ili strukturirate trgovačke sporazume, naš tim pruža responzivno, tehnološki fokusirano pravno vodstvo.'}
                  </p>
                </div>
              </div>
              
              {/* Services Grid */}
              <div className="mt-12">
                <h3 className="text-2xl font-serif font-bold text-primary-800 mb-8">
                  {language === 'en' ? 'Our IT Industry Services' : 'Naše usluge za IT industriju'}
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
                  {language === 'en' ? 'Need IT Legal Support?' : 'Trebate pravnu podršku u IT sektoru?'}
                </h3>
                
                <p className="text-primary-100 mb-6">
                  {language === 'en'
                    ? 'Contact us today to discuss how our specialized legal services can support your technology business.'
                    : 'Kontaktirajte nas danas kako biste razgovarali o tome kako naše specijalizirane pravne usluge mogu podržati vaše tehnološko poslovanje.'}
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
                      {language === 'en' ? 'Specialized knowledge of IT industry legal frameworks' : 'Specijalizirano znanje o pravnim okvirima IT industrije'}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary-600 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-secondary-700 font-medium">
                      {language === 'en' ? 'Experience with technology M&A transactions' : 'Iskustvo s tehnološkim M&A transakcijama'}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary-600 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-secondary-700 font-medium">
                      {language === 'en' ? 'Understanding of intellectual property issues in tech' : 'Razumijevanje pitanja intelektualnog vlasništva u tehnologiji'}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary-600 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <p className="text-secondary-700 font-medium">
                      {language === 'en' ? 'Support for startups and growing tech companies' : 'Podrška za startupove i rastuće tehnološke tvrtke'}
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
                ? 'Partner with Us for Your Technology Legal Needs' 
                : 'Surađujte s nama za vaše tehnološke pravne potrebe'}
            </h2>
            
            <p className="text-lg text-secondary-700 mb-8 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Contact our team today to discuss how we can support your technology business with specialized legal solutions.'
                : 'Kontaktirajte naš tim danas kako bismo razgovarali o tome kako možemo podržati vaše tehnološko poslovanje specijaliziranim pravnim rješenjima.'}
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
