import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaFileContract, FaArrowRight } from 'react-icons/fa'
import { LanguageContext } from '../../../App'
import PracticeAreasList from '../../../components/ui/PracticeAreasList'

export default function ContractLaw() {
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
              <span>{language === 'en' ? 'Contract Law' : 'Ugovorno pravo'}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
              {language === 'en' ? 'Contract Law' : 'Ugovorno pravo'}
            </h1>
            
            <p className="text-xl text-primary-100 mb-8 animate-fade-in animate-delay-200 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Expert contract drafting, review, and negotiation that protects your interests'
                : 'Stručna izrada, pregled i pregovaranje ugovora koji štite vaše interese'}
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
                    <FaFileContract size={24} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-primary-800 m-0">
                    {language === 'en' ? 'Our Contract Law Services' : 'Naše usluge ugovornog prava'}
                  </h2>
                </div>
                
                <p>
                  {language === 'en'
                    ? 'We excel in drafting, reviewing, and negotiating various types of contracts and agreements. Our expertise ensures that your contracts are legally sound, protect your interests, and effectively manage risks in business relationships.'
                    : 'Specijalizirani smo za izradu, pregled i pregovore o različitim vrstama ugovora i sporazuma. Naša stručnost osigurava da su vaši ugovori pravno valjani, štite vaše interese i učinkovito upravljaju rizicima u poslovnim odnosima.'}
                </p>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {language === 'en' ? 'Contract Drafting & Review' : 'Izrada i pregled ugovora'}
                </h3>
                
                <p>
                  {language === 'en'
                    ? 'We provide comprehensive contract drafting and review services, including:'
                    : 'Pružamo sveobuhvatne usluge izrade i pregleda ugovora, uključujući:'}
                </p>
                
                <ul>
                  {language === 'en' ? (
                    <>
                      <li>Commercial contracts and agreements</li>
                      <li>Real estate and property contracts</li>
                      <li>Supply and distribution agreements</li>
                      <li>Employment contracts and policies</li>
                      <li>Licensing and intellectual property agreements</li>
                      <li>Confidentiality and non-disclosure agreements</li>
                      <li>Partnership and joint venture agreements</li>
                    </>
                  ) : (
                    <>
                      <li>Trgovački ugovori i sporazumi</li>
                      <li>Ugovori o nekretninama i imovini</li>
                      <li>Ugovori o opskrbi i distribuciji</li>
                      <li>Ugovori o radu i pravilnici</li>
                      <li>Licencni ugovori i ugovori o intelektualnom vlasništvu</li>
                      <li>Ugovori o povjerljivosti i tajnosti podataka</li>
                      <li>Partnerski ugovori i ugovori o zajedničkom pothvatu</li>
                    </>
                  )}
                </ul>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {language === 'en' ? 'Contract Negotiation' : 'Pregovaranje ugovora'}
                </h3>
                
                <p>
                  {language === 'en'
                    ? 'Our experienced attorneys represent clients in contract negotiations to ensure favorable terms and conditions. We carefully analyze each clause, identify potential risks, propose amendments, and negotiate to achieve the best possible outcome for our clients. Our approach is both strategic and practical, focusing on protecting your interests while facilitating successful business relationships.'
                    : 'Naši iskusni odvjetnici zastupaju klijente u pregovorima o ugovorima kako bi osigurali povoljne uvjete. Pažljivo analiziramo svaku klauzulu, identificiramo potencijalne rizike, predlažemo izmjene i pregovaramo za postizanje najboljeg mogućeg ishoda za naše klijente. Naš pristup je i strateški i praktičan, s fokusom na zaštitu vaših interesa uz istovremeno olakšavanje uspješnih poslovnih odnosa.'}
                </p>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {language === 'en' ? 'Contract Dispute Resolution' : 'Rješavanje ugovornih sporova'}
                </h3>
                
                <p>
                  {language === 'en'
                    ? 'When contractual disputes arise, we provide comprehensive legal representation to protect your interests. Our services include:'
                    : 'Kada dođe do ugovornih sporova, pružamo sveobuhvatno pravno zastupanje za zaštitu vaših interesa. Naše usluge uključuju:'}
                </p>
                
                <ul>
                  {language === 'en' ? (
                    <>
                      <li>Contract breach assessment and claims</li>
                      <li>Dispute negotiation and settlement</li>
                      <li>Mediation and arbitration</li>
                      <li>Litigation representation</li>
                      <li>Post-dispute contract restructuring</li>
                    </>
                  ) : (
                    <>
                      <li>Procjena kršenja ugovora i potraživanja</li>
                      <li>Pregovori o sporovima i nagodbe</li>
                      <li>Medijacija i arbitraža</li>
                      <li>Zastupanje u parnicama</li>
                      <li>Restrukturiranje ugovora nakon spora</li>
                    </>
                  )}
                </ul>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {language === 'en' ? 'Contract Management & Compliance' : 'Upravljanje ugovorima i usklađenost'}
                </h3>
                
                <p>
                  {language === 'en'
                    ? 'We assist clients in developing effective contract management systems and ensuring compliance with regulatory requirements. Our team provides guidance on contract implementation, performance monitoring, and periodic review to ensure ongoing compliance and risk mitigation. We help businesses maintain clear records of their contractual obligations and deadlines, reducing the risk of unintentional breaches and legal exposure.'
                    : 'Pomažemo klijentima u razvoju učinkovitih sustava upravljanja ugovorima i osiguravanju usklađenosti s regulatornim zahtjevima. Naš tim pruža smjernice o implementaciji ugovora, praćenju izvršenja i periodičnom pregledu kako bi se osigurala kontinuirana usklađenost i smanjenje rizika. Pomažemo tvrtkama održavati jasne evidencije o njihovim ugovornim obvezama i rokovima, smanjujući rizik od nenamjernih kršenja i pravne izloženosti.'}
                </p>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:col-span-1">
              <PracticeAreasList currentArea="contract-law" />
              
              <div className="bg-primary-800 text-white rounded-xl p-8">
                <h3 className="text-xl font-serif font-bold mb-4">
                  {language === 'en' ? 'Need Contract Assistance?' : 'Trebate pomoć s ugovorima?'}
                </h3>
                
                <p className="mb-6 text-primary-100">
                  {language === 'en'
                    ? 'Contact us today to discuss your contract needs with our experienced legal team.'
                    : 'Kontaktirajte nas danas za razgovor o vašim ugovornim potrebama s našim iskusnim pravnim timom.'}
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
