import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaBuilding, FaArrowRight } from 'react-icons/fa'
import { LanguageContext } from '../../../App'
import PracticeAreasList from '../../../components/ui/PracticeAreasList'

export default function CorporateLaw() {
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
              <span>{language === 'en' ? 'Corporate Law' : 'Pravo trgovačkih društava'}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
              {language === 'en' ? 'Corporate Law' : 'Pravo trgovačkih društava'}
            </h1>
            
            <p className="text-xl text-primary-100 mb-8 animate-fade-in animate-delay-200 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Expert legal support for company formation, governance, and corporate transactions'
                : 'Stručna pravna podrška za osnivanje tvrtki, upravljanje i korporativne transakcije'}
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
                    <FaBuilding size={24} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-primary-800 m-0">
                    {language === 'en' ? 'Our Corporate Law Services' : 'Naše usluge prava trgovačkih društava'}
                  </h2>
                </div>
                
                <p>
                  {language === 'en'
                    ? 'We provide comprehensive legal services related to the establishment of companies, management issues, and status changes, offering expert guidance through every phase of corporate development.'
                    : 'Pružamo sveobuhvatne pravne usluge u vezi s osnivanjem trgovačkih društava, pitanjima upravljanja i statusnim promjenama, nudeći stručno vodstvo kroz svaku fazu korporativnog razvoja.'}
                </p>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {language === 'en' ? 'Company Formation & Structuring' : 'Osnivanje i strukturiranje društava'}
                </h3>
                
                <p>
                  {language === 'en'
                    ? 'We assist in the establishment of various business entities, advising on the most appropriate corporate structure based on your business goals, liability concerns, tax implications, and operational requirements. Our services include:'
                    : 'Pomažemo u osnivanju različitih poslovnih subjekata, savjetujući o najprikladnijoj korporativnoj strukturi na temelju vaših poslovnih ciljeva, pitanja odgovornosti, poreznih implikacija i operativnih zahtjeva. Naše usluge uključuju:'}
                </p>
                
                <ul>
                  {language === 'en' ? (
                    <>
                      <li>Incorporation of limited liability companies (d.o.o.)</li>
                      <li>Establishment of joint stock companies (d.d.)</li>
                      <li>Formation of branches and representative offices</li>
                      <li>Drafting of articles of association and other founding documents</li>
                      <li>Handling all regulatory filings and registrations</li>
                    </>
                  ) : (
                    <>
                      <li>Osnivanje društava s ograničenom odgovornošću (d.o.o.)</li>
                      <li>Osnivanje dioničkih društava (d.d.)</li>
                      <li>Osnivanje podružnica i predstavništava</li>
                      <li>Izrada društvenih ugovora i drugih osnivačkih dokumenata</li>
                      <li>Upravljanje svim regulatornim podnescima i registracijama</li>
                    </>
                  )}
                </ul>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {language === 'en' ? 'Mergers & Acquisitions' : 'Spajanja i preuzimanja'}
                </h3>
                
                <p>
                  {language === 'en'
                    ? 'We provide complete legal support during the merger and acquisition of companies. We guide clients through the entire M&A process, from initial due diligence to the final transaction closing.'
                    : 'Pružamo kompletnu pravnu podršku tijekom postupka pripajanja i preuzimanja društava. Vodimo klijente kroz cijeli proces M&A, od početne dubinske analize do konačnog zatvaranja transakcije.'}
                </p>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {language === 'en' ? 'Shareholder & Investor Agreements' : 'Dioničarski i investitorski ugovori'}
                </h3>
                
                <p>
                  {language === 'en'
                    ? 'We draft and negotiate agreements between company members, investors, and other stakeholders, including:'
                    : 'Sastavljamo i pregovaramo ugovore između članova društva, investitora i drugih dionika, uključujući:'}
                </p>
                
                <ul>
                  {language === 'en' ? (
                    <>
                      <li>Shareholders agreements</li>
                      <li>Convertible loan agreements</li>
                      <li>Intellectual property transfer agreements</li>
                      <li>Option agreements between companies and employees</li>
                      <li>Investment and financing agreements</li>
                    </>
                  ) : (
                    <>
                      <li>Ugovore između članova društva o upisu dionica/poslovnih udjela (Shareholders agreements)</li>
                      <li>Ugovore o konvertibilnim zajmovima (Convertible Loan Agreements)</li>
                      <li>Ugovore o prijenosu prava intelektualnog vlasništva</li>
                      <li>Opcijske ugovore između društva i radnika</li>
                      <li>Investicijske i financijske ugovore</li>
                    </>
                  )}
                </ul>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {language === 'en' ? 'Startup & IT Industry Expertise' : 'Startup i IT industrija stručnost'}
                </h3>
                
                <p>
                  {language === 'en'
                    ? 'We have extensive experience in the IT industry and financing companies in early stages of development. We provide specialized legal advice on funding strategies, including increase of share capital and subscription of shares/interests, as well as convertible loans structured according to agreements between investors and company founders.'
                    : 'Imamo bogato iskustvo na području IT industrije i financiranja društava u ranim fazama razvoja. Pružamo specijalizirane pravne savjete o strategijama financiranja, uključujući povećanje temeljnog kapitala i upis dionica/udjela, kao i konvertibilnih zajmova strukturiranih prema dogovoru između investitora i osnivača društva.'}
                </p>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:col-span-1">
              <PracticeAreasList currentArea="corporate-law" />
              
              <div className="bg-primary-800 text-white rounded-xl p-8">
                <h3 className="text-xl font-serif font-bold mb-4">
                  {language === 'en' ? 'Need Corporate Law Advice?' : 'Trebate savjet iz prava trgovačkih društava?'}
                </h3>
                
                <p className="mb-6 text-primary-100">
                  {language === 'en'
                    ? 'Contact us today to schedule a consultation for corporate law matters.'
                    : 'Kontaktirajte nas danas za dogovor konzultacija za pitanja prava trgovačkih društava.'}
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
