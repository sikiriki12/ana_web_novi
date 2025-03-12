import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaBalanceScale, FaArrowRight, FaHome } from 'react-icons/fa'
import { LanguageContext } from '../../../App'
import PracticeAreasList from '../../../components/ui/PracticeAreasList'

export default function RealEstate() {
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
              <span>{language === 'en' ? 'Real Estate & Civil Law' : 'Nekretnine i Građansko pravo'}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
              {language === 'en' ? 'Real Estate & Civil Law' : 'Nekretnine i Građansko pravo'}
            </h1>
            
            <p className="text-xl text-primary-100 mb-8 animate-fade-in animate-delay-200 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Comprehensive legal support for real estate transactions and civil matters'
                : 'Sveobuhvatna pravna podrška za transakcije nekretnina i građanska pitanja'}
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
                    <FaHome size={24} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-primary-800 m-0">
                    {language === 'en' ? 'Our Real Estate & Civil Law Services' : 'Naše usluge Nekretnina i Građanskog prava'}
                  </h2>
                </div>
                
                <p>
                  {language === 'en'
                    ? 'We provide complete legal support during real estate investments and represent clients in civil proceedings, bringing clarity to complex property transactions and civil matters.'
                    : 'Pružamo kompletnu pravnu potporu prilikom nekretninskih investicija i zastupamo klijente u građanskim postupcima, donoseći jasnoću u složene transakcije nekretnina i građanska pitanja.'}
                </p>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {language === 'en' ? 'Real Estate Transactions' : 'Transakcije nekretninama'}
                </h3>
                
                <p>
                  {language === 'en'
                    ? 'Our real estate practice offers comprehensive legal services for all aspects of property transactions, including:'
                    : 'Naša praksa u području nekretnina nudi sveobuhvatne pravne usluge za sve aspekte transakcija nekretninama, uključujući:'}
                </p>
                
                <ul>
                  {language === 'en' ? (
                    <>
                      <li>Property acquisitions and sales</li>
                      <li>Lease agreements</li>
                      <li>Development projects</li>
                      <li>Land use and zoning matters</li>
                      <li>Property title disputes</li>
                      <li>Construction contracts</li>
                    </>
                  ) : (
                    <>
                      <li>Kupnja i prodaja nekretnina</li>
                      <li>Ugovori o zakupu</li>
                      <li>Razvojni projekti</li>
                      <li>Pitanja korištenja zemljišta i zoniranja</li>
                      <li>Sporovi oko vlasništva nekretnina</li>
                      <li>Građevinski ugovori</li>
                    </>
                  )}
                </ul>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {language === 'en' ? 'Civil Litigation' : 'Građanske parnice'}
                </h3>
                
                <p>
                  {language === 'en'
                    ? 'We represent clients in a wide range of civil proceedings related to:'
                    : 'Zastupamo klijente u širokom rasponu građanskih postupaka vezanih za:'}
                </p>
                
                <ul>
                  {language === 'en' ? (
                    <>
                      <li>Property rights disputes</li>
                      <li>Contract disputes</li>
                      <li>Enforcement proceedings</li>
                      <li>Debt collection</li>
                      <li>Lease relationships</li>
                      <li>Damage compensation claims</li>
                    </>
                  ) : (
                    <>
                      <li>Sporovi o vlasničkim pravima</li>
                      <li>Ugovorni sporovi</li>
                      <li>Ovršni postupci</li>
                      <li>Naplata potraživanja</li>
                      <li>Zakupni odnosi</li>
                      <li>Zahtjevi za naknadu štete</li>
                    </>
                  )}
                </ul>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {language === 'en' ? 'Specialized Damage Claims' : 'Specijalizirani zahtjevi za naknadu štete'}
                </h3>
                
                <p>
                  {language === 'en'
                    ? 'We have specific expertise in handling complex damage compensation claims, including:'
                    : 'Imamo specifičnu stručnost u rješavanju složenih zahtjeva za naknadu štete, uključujući:'}
                </p>
                
                <ul>
                  {language === 'en' ? (
                    <>
                      <li>Medical malpractice claims</li>
                      <li>Damages caused by information published in media</li>
                      <li>Personal injury compensation</li>
                      <li>Professional liability claims</li>
                    </>
                  ) : (
                    <>
                      <li>Liječničke greške</li>
                      <li>Štete prouzročene informacijama objavljenim u medijima</li>
                      <li>Naknade za osobne ozljede</li>
                      <li>Zahtjevi za profesionalnu odgovornost</li>
                    </>
                  )}
                </ul>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {language === 'en' ? 'Administrative Disputes' : 'Upravni sporovi'}
                </h3>
                
                <p>
                  {language === 'en'
                    ? 'We represent clients in proceedings related to illegal actions of state bodies and bodies with public authority. Our expertise extends to all areas of administrative law, helping clients navigate complex regulatory environments.'
                    : 'Zastupamo klijente u postupcima vezanim uz nezakonita postupanja državnih tijela i tijela s javnim ovlastima. Naša stručnost proteže se na sva područja upravnog prava, pomažući klijentima u navigaciji složenim regulatornim okruženjima.'}
                </p>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {language === 'en' ? 'Human Rights Protection' : 'Zaštita ljudskih prava'}
                </h3>
                
                <p>
                  {language === 'en'
                    ? 'We have extensive experience in representing clients before the European Court of Human Rights and domestic courts in human rights cases. Our team is committed to protecting fundamental rights and ensuring fair treatment under the law.'
                    : 'Imamo bogato iskustvo u zastupanju klijenata pred Europskim sudom za ljudska prava i domaćim sudovima u slučajevima zaštite ljudskih prava. Naš tim je predan zaštiti temeljnih prava i osiguravanju pravednog tretmana prema zakonu.'}
                </p>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:col-span-1">
              <PracticeAreasList currentArea="real-estate" />
              
              <div className="bg-primary-800 text-white rounded-xl p-8">
                <h3 className="text-xl font-serif font-bold mb-4">
                  {language === 'en' ? 'Need Real Estate or Civil Law Advice?' : 'Trebate savjet iz područja nekretnina ili građanskog prava?'}
                </h3>
                
                <p className="mb-6 text-primary-100">
                  {language === 'en'
                    ? 'Contact us today to schedule a consultation with our experienced team of legal experts.'
                    : 'Kontaktirajte nas danas za dogovor konzultacija s našim iskusnim timom pravnih stručnjaka.'}
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
