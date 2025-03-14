import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaGavel, FaArrowRight } from 'react-icons/fa'
import { LanguageContext } from '../../../App'
import PracticeAreasList from '../../../components/ui/PracticeAreasList'

export default function CommercialLaw() {
  const { language } = useContext(LanguageContext);

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
              <Link to="/practice-areas" className="hover:text-white transition-colors">
                {language === 'en' ? 'Practice Areas' : 'Područja prakse'}
              </Link>
              <span className="mx-3">/</span>
              <span>{language === 'en' ? 'Commercial Law' : 'Trgovačko pravo'}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
              {language === 'en' ? 'Commercial Law' : 'Trgovačko pravo'}
            </h1>
            
            <p className="text-xl text-primary-100 mb-8 animate-fade-in animate-delay-200 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Expert legal representation for businesses across all types of commercial matters and disputes'
                : 'Stručno pravno zastupanje tvrtki u svim vrstama trgovačkih pitanja i sporova'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <div className="inline-flex items-center mb-4">
                  <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4">
                    <FaGavel size={24} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-primary-800 m-0">
                    {language === 'en' ? 'Our Commercial Law Services' : 'Naše usluge trgovačkog prava'}
                  </h2>
                </div>
                
                <p>
                  {language === 'en'
                    ? 'We provide comprehensive legal assistance to businesses, offering expert guidance in contract law, drafting commercial agreements, and representing clients in commercial disputes.'
                    : 'Klijentima pružamo sveobuhvatnu pravnu pomoć u poslovanju pružajući stručne savjete iz područja ugovornog prava, sastavljamo trgovačke ugovore i zastupamo u trgovačkim sporovima.'}
                </p>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {language === 'en' ? 'Contract Drafting and Review' : 'Izrada i pregled ugovora'}
                </h3>
                
                <p>
                  {language === 'en'
                    ? 'We draft, review, and negotiate various types of commercial contracts, including:'
                    : 'Sastavljamo, pregledavamo i pregovaramo razne vrste trgovačkih ugovora, uključujući:'}
                </p>
                
                <ul>
                  {language === 'en' ? (
                    <>
                      <li>Distribution agreements</li>
                      <li>Publishing contracts</li>
                      <li>Licensing agreements</li>
                      <li>Procurement contracts</li>
                      <li>Construction contracts</li>
                      <li>General terms and conditions of business</li>
                      <li>All necessary documentation for business operations</li>
                    </>
                  ) : (
                    <>
                      <li>Ugovori o distribuciji</li>
                      <li>Izdavački ugovori</li>
                      <li>Ugovori o licenciji</li>
                      <li>Ugovori o nabavi</li>
                      <li>Ugovori o izvođenju radova</li>
                      <li>Opći uvjeti poslovanja</li>
                      <li>Sva potrebna dokumentacija za poslovanje</li>
                    </>
                  )}
                </ul>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {language === 'en' ? 'Business Transactions' : 'Poslovne transakcije'}
                </h3>
                
                <p>
                  {language === 'en'
                    ? 'We represent clients in negotiations during business transactions, prepare all necessary contracts (business transfer agreements, intellectual property transfer agreements, etc.), and provide legal assistance throughout the entire transaction process.'
                    : 'Zastupamo u pregovorima pri sklapanju poslovnih transakcija, izrađujemo potrebne ugovore (ugovori o prijenosu gospodarske cjeline, ugovori o prijenosu prava intelektualnog vlasništva itd.) te pružamo pravnu pomoć tijekom cijelog postupka transakcije.'}
                </p>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {language === 'en' ? 'Dispute Resolution' : 'Rješavanje sporova'}
                </h3>
                
                <p>
                  {language === 'en'
                    ? 'We represent clients in commercial disputes before courts, in debt collection proceedings, public procurement procedures, before administrative and regulatory bodies, as well as in pre-bankruptcy and bankruptcy proceedings. We also handle mediation and arbitration proceedings for our clients.'
                    : 'Zastupamo stranke u trgovačkim sporovima pred sudovima, u postupcima naplate potraživanja, javne nabave, pred upravnim i regulatornim tijelima, kao i u predstečajnim i stečajnim postupcima. Zastupamo u postupcima mirenja i arbitražnim postupcima.'}
                </p>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {language === 'en' ? 'Regulatory Compliance' : 'Regulatorna usklađenost'}
                </h3>
                
                <p>
                  {language === 'en'
                    ? 'We provide legal assistance to clients in all aspects of business operations, ensuring that the client\'s business complies with regulations, and represent them in inspection supervision proceedings.'
                    : 'Klijentima pružamo pravnu pomoć u svim aspektima poslovanja osiguravajući da poslovanje klijenta bude usklađeno s propisima, te zastupamo u postupcima inspekcijskih nadzora.'}
                </p>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:col-span-1">
              <PracticeAreasList currentArea="commercial-law" />
              
              <div className="bg-primary-800 text-white rounded-xl p-8">
                <h3 className="text-xl font-serif font-bold mb-4">
                  {language === 'en' ? 'Need Commercial Law Advice?' : 'Trebate savjet iz trgovačkog prava?'}
                </h3>
                
                <p className="mb-6 text-primary-100">
                  {language === 'en'
                    ? 'Contact us today to schedule a consultation regarding commercial law matters.'
                    : 'Kontaktirajte nas danas za dogovor konzultacija za pitanja trgovačkog prava.'}
                </p>
                
                <Link to="/contact" className="btn bg-white text-primary-800 hover:bg-white/90 transition-all duration-300 w-full flex justify-center items-center">
                  {language === 'en' ? 'Contact Us' : 'Kontaktirajte nas'}
                  <FaArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
