import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaUserTie, FaArrowRight } from 'react-icons/fa'
import { LanguageContext } from '../../../App'
import PracticeAreasList from '../../../components/ui/PracticeAreasList'

export default function LaborLaw() {
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
              <span>{language === 'en' ? 'Labor Law' : 'Radno pravo'}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
              {language === 'en' ? 'Labor Law' : 'Radno pravo'}
            </h1>
            
            <p className="text-xl text-primary-100 mb-8 animate-fade-in animate-delay-200 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Comprehensive employment law services for both employers and employees'
                : 'Sveobuhvatne usluge radnog prava za poslodavce i zaposlenike'}
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
                    <FaUserTie size={24} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-primary-800 m-0">
                    {language === 'en' ? 'Our Labor Law Services' : 'Naše usluge radnog prava'}
                  </h2>
                </div>
                
                <p>
                  {language === 'en'
                    ? 'We provide consulting and representation services regarding employment contracts, rights and obligations of workers and employers, as well as in resolving disputes in the field of labor relations.'
                    : 'Pružamo usluge savjetovanja i zastupanja u vezi s ugovorima o radu, pravima i obvezama radnika i poslodavaca, kao i u rješavanju sporova u području radnih odnosa.'}
                </p>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {language === 'en' ? 'Employment Contract Management' : 'Upravljanje ugovorima o radu'}
                </h3>
                
                <p>
                  {language === 'en'
                    ? 'We provide legal support throughout the entire process of employment contract management, including:'
                    : 'Pružamo pravnu potporu tijekom cijelog postupka upravljanja ugovorima o radu, uključujući:'}
                </p>
                
                <ul>
                  {language === 'en' ? (
                    <>
                      <li>Contract drafting and review</li>
                      <li>Negotiation and amendments</li>
                      <li>Employment termination procedures</li>
                      <li>Workplace policies and regulations</li>
                      <li>Employee reward plans</li>
                      <li>Education and professional development agreements</li>
                    </>
                  ) : (
                    <>
                      <li>Izrada i pregled ugovora o radu</li>
                      <li>Pregovori i izmjene</li>
                      <li>Postupci otkazivanja ugovora o radu</li>
                      <li>Pravilnici o radu i odluke poslodavca</li>
                      <li>Planovi nagrađivanja radnika</li>
                      <li>Ugovori o troškovima edukacija i stručnom usavršavanju</li>
                    </>
                  )}
                </ul>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {language === 'en' ? 'International Employment Services' : 'Međunarodne usluge zapošljavanja'}
                </h3>
                
                <p>
                  {language === 'en'
                    ? 'We provide advice and complete services in the field of labor law to employers and temporary employment agencies, including obtaining residence and work permits for foreign workers, drafting specific employment contracts with international elements, and navigating cross-border employment regulations.'
                    : 'Pružamo savjete i kompletnu uslugu iz područja radnog prava poslodavcima i agencijama za privremeno zapošljavanje, uključujući pribavljanje dozvola za boravak i rad stranih radnika, sastavljanje specifičnih ugovora o radu s međunarodnim elementom i navigaciju propisa o prekograničnom zapošljavanju.'}
                </p>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {language === 'en' ? 'Collective Labor Relations' : 'Kolektivni radni odnosi'}
                </h3>
                
                <p>
                  {language === 'en'
                    ? 'We represent clients in collective redundancy procedures and represent employers before trade unions. Our expertise extends to collective bargaining, labor disputes involving multiple employees, and compliance with collective agreements.'
                    : 'Zastupamo u postupcima kolektivnog zbrinjavanja viška radnika, te zastupamo poslodavce pred sindikatima. Naša stručnost uključuje kolektivno pregovaranje, radne sporove koji uključuju više zaposlenika i usklađenost s kolektivnim ugovorima.'}
                </p>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {language === 'en' ? 'Labor Dispute Resolution' : 'Rješavanje radnih sporova'}
                </h3>
                
                <p>
                  {language === 'en'
                    ? 'We have extensive experience in representing clients before courts in labor disputes related to various issues, including:'
                    : 'Imamo bogato iskustvo u zastupanju pred sudovima u radnopravnim sporovima vezanim uz različita pitanja, uključujući:'}
                </p>
                
                <ul>
                  {language === 'en' ? (
                    <>
                      <li>Permissibility of dismissals</li>
                      <li>Workplace discrimination</li>
                      <li>Right to compensation</li>
                      <li>Determination of employment relationship</li>
                      <li>Working hours and leave disputes</li>
                      <li>Workplace harassment claims</li>
                    </>
                  ) : (
                    <>
                      <li>Dopuštenost otkaza</li>
                      <li>Diskriminacija na radnom mjestu</li>
                      <li>Pravo na naknadu štete</li>
                      <li>Utvrđenje radnopravnog odnosa</li>
                      <li>Sporovi u vezi s radnim vremenom i odmorima</li>
                      <li>Zahtjevi zbog uznemiravanja na radnom mjestu</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:col-span-1">
              <PracticeAreasList currentArea="labor-law" />
              
              <div className="bg-primary-800 text-white rounded-xl p-8">
                <h3 className="text-xl font-serif font-bold mb-4">
                  {language === 'en' ? 'Need Labor Law Advice?' : 'Trebate savjet iz radnog prava?'}
                </h3>
                
                <p className="mb-6 text-primary-100">
                  {language === 'en'
                    ? 'Contact us today to schedule a consultation with our experienced labor law team.'
                    : 'Kontaktirajte nas danas za dogovor konzultacija s našim iskusnim timom za radno pravo.'}
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
