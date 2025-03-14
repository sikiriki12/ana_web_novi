import { Link } from 'react-router-dom'
import { FaPrescriptionBottleAlt, FaArrowRight, FaMedkit, FaFileContract, FaGavel, FaUserTie } from 'react-icons/fa'
import { useTranslations } from '../../../hooks/use-translations'

export default function PharmaIndustry() {
  const { t } = useTranslations();
  
  // Map service icons
  const serviceIcons = [
    <FaUserTie size={20} />,
    <FaGavel size={20} />,
    <FaFileContract size={20} />,
    <FaMedkit size={20} />
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
                {t('industry.pharma.breadcrumb')}
              </Link>
              <span className="mx-3">/</span>
              <span>{t('industry.pharma.title')}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
              {t('industry.pharma.title')}
            </h1>
            
            <p className="text-xl text-primary-100 mb-8 animate-fade-in animate-delay-200 max-w-3xl mx-auto">
              {t('industry.pharma.description')}
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
                      {t('industry.pharma.intro.title')}
                    </h2>
                    
                    <p>
                      {t('industry.pharma.intro.paragraph1')}
                    </p>
                    
                    <p>
                      {t('industry.pharma.intro.paragraph2')}
                    </p>
                  </div>
                </div>
                
                {/* Our approach section */}
                <div className="bg-primary-50 rounded-xl p-8 my-10">
                  <h3 className="text-2xl font-serif font-bold text-primary-800 mb-6">
                    {t('industry.pharma.approach.title')}
                  </h3>
                  
                  <p>
                    {t('industry.pharma.approach.paragraph1')}
                  </p>
                  
                  <p className="mb-0">
                    {t('industry.pharma.approach.paragraph2')}
                  </p>
                </div>
              </div>
              
              {/* Services Grid */}
              <div className="mt-12">
                <h3 className="text-2xl font-serif font-bold text-primary-800 mb-8">
                  {t('industry.pharma.services.title')}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {t('industry.pharma.services.items').map((service, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-elegant p-6 border border-primary-100 hover:border-primary-300 transition-all duration-300 hover:shadow-elegant-lg">
                      <div className="bg-primary-50 p-3 w-fit rounded-lg text-primary-600 mb-4">
                        {serviceIcons[index]}
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
                  {t('industry.pharma.sidebar.cta.title')}
                </h3>
                
                <p className="text-primary-100 mb-6">
                  {t('industry.pharma.sidebar.cta.description')}
                </p>
                
                <Link to="/contact" className="btn bg-white text-primary-800 hover:bg-white/90 transition-all duration-300 w-full flex justify-center items-center">
                  {t('common.contactUs')}
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
              
              {/* Why Choose Us */}
              <div className="bg-primary-50 rounded-xl p-8">
                <h3 className="text-xl font-serif font-bold text-primary-800 mb-4">
                  {t('industry.pharma.sidebar.whyChooseUs.title')}
                </h3>
                
                <ul className="space-y-4">
                  {t('industry.pharma.sidebar.whyChooseUs.reasons').map((reason, index) => (
                    <li key={index} className="flex items-start">
                      <div className="text-primary-600 mr-3 mt-1">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <p className="text-secondary-700 font-medium">
                        {reason}
                      </p>
                    </li>
                  ))}
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
              {t('industry.pharma.bottomCta.title')}
            </h2>
            
            <p className="text-lg text-secondary-700 mb-8 max-w-3xl mx-auto">
              {t('industry.pharma.bottomCta.description')}
            </p>
            
            <Link to="/contact" className="btn btn-primary">
              {t('industry.pharma.bottomCta.buttonText')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
