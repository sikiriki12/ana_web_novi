import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaHandshake, FaArrowRight } from 'react-icons/fa'
import { LanguageContext } from '../../../App'
import PracticeAreasList from '../../../components/ui/PracticeAreasList'

export default function DisputeResolution() {
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
              <span>{language === 'en' ? 'Dispute Resolution' : 'Rješavanje sporova'}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
              {language === 'en' ? 'Dispute Resolution' : 'Rješavanje sporova'}
            </h1>
            
            <p className="text-xl text-primary-100 mb-8 animate-fade-in animate-delay-200 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Strategic and effective representation in litigation, arbitration, and mediation'
                : 'Strateško i učinkovito zastupanje u parničnim postupcima, arbitraži i medijaciji'}
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
                    <FaHandshake size={24} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-primary-800 m-0">
                    {language === 'en' ? 'Our Dispute Resolution Services' : 'Naše usluge rješavanja sporova'}
                  </h2>
                </div>
                
                <p>
                  {language === 'en'
                    ? 'We represent clients in a wide range of dispute resolution procedures, including litigation, arbitration, and mediation. Our approach focuses on finding the most efficient and cost-effective solutions to complex legal disputes.'
                    : 'Zastupamo klijente u širokom rasponu postupaka rješavanja sporova, uključujući parnične postupke, arbitražu i medijaciju. Naš pristup je usmjeren na pronalaženje najučinkovitijih i ekonomičnih rješenja za složene pravne sporove.'}
                </p>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {language === 'en' ? 'Litigation Services' : 'Usluge parničenja'}
                </h3>
                
                <p>
                  {language === 'en'
                    ? 'We represent clients in court proceedings across various areas of law, providing:'
                    : 'Zastupamo klijente u sudskim postupcima u različitim područjima prava, pružajući:'}
                </p>
                
                <ul>
                  {language === 'en' ? (
                    <>
                      <li>Strategic case assessment and planning</li>
                      <li>Pre-litigation negotiations</li>
                      <li>Court representation at all levels</li>
                      <li>Expert witness coordination</li>
                      <li>Post-judgment enforcement</li>
                      <li>Appeals and review proceedings</li>
                    </>
                  ) : (
                    <>
                      <li>Stratešku procjenu i planiranje slučaja</li>
                      <li>Pregovore prije parnice</li>
                      <li>Zastupanje na sudu na svim razinama</li>
                      <li>Koordinaciju vještaka</li>
                      <li>Ovršne postupke</li>
                      <li>Žalbene postupke i postupke preispitivanja</li>
                    </>
                  )}
                </ul>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {language === 'en' ? 'Arbitration' : 'Arbitraža'}
                </h3>
                
                <p>
                  {language === 'en'
                    ? 'We have extensive experience in domestic and international arbitration proceedings. Our arbitration services include drafting arbitration clauses, representing clients throughout the arbitration process, and enforcing arbitral awards. We have successfully handled complex arbitrations across various sectors, including commercial, construction, and investment disputes.'
                    : 'Imamo veliko iskustvo u domaćim i međunarodnim arbitražnim postupcima. Naše usluge arbitraže uključuju sastavljanje arbitražnih klauzula, zastupanje klijenata tijekom arbitražnog postupka i izvršenje arbitražnih odluka. Uspješno smo vodili složene arbitraže u različitim sektorima, uključujući trgovačke, građevinske i investicijske sporove.'}
                </p>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {language === 'en' ? 'Mediation & Alternative Dispute Resolution' : 'Medijacija i alternativno rješavanje sporova'}
                </h3>
                
                <p>
                  {language === 'en'
                    ? 'We recognize that litigation is not always the most effective approach to resolving disputes. We are skilled in various forms of alternative dispute resolution (ADR), including:'
                    : 'Prepoznajemo da parnica nije uvijek najučinkovitiji pristup rješavanju sporova. Vješti smo u različitim oblicima alternativnog rješavanja sporova (ARS), uključujući:'}
                </p>
                
                <ul>
                  {language === 'en' ? (
                    <>
                      <li>Mediation representation and advocacy</li>
                      <li>Negotiated settlements</li>
                      <li>Early neutral evaluation</li>
                      <li>Dispute review boards</li>
                      <li>Mini-trials and summary jury trials</li>
                    </>
                  ) : (
                    <>
                      <li>Zastupanje i zagovaranje u medijaciji</li>
                      <li>Pregovaračke nagodbe</li>
                      <li>Ranu neutralnu evaluaciju</li>
                      <li>Odbore za pregled sporova</li>
                      <li>Mini-suđenja i skraćena suđenja</li>
                    </>
                  )}
                </ul>
                
                <h3 className="text-2xl font-serif font-bold text-primary-800 mt-8 mb-4">
                  {language === 'en' ? 'Strategic Dispute Resolution Approach' : 'Strateški pristup rješavanju sporova'}
                </h3>
                
                <p>
                  {language === 'en'
                    ? 'We take a strategic approach to dispute resolution, carefully assessing each case to determine the most effective path forward. This includes:'
                    : 'Primjenjujemo strateški pristup rješavanju sporova, pažljivo procjenjujući svaki slučaj kako bismo odredili najučinkovitiji put naprijed. To uključuje:'}
                </p>
                
                <ul>
                  {language === 'en' ? (
                    <>
                      <li>Early case assessment and risk analysis</li>
                      <li>Cost-benefit analysis of different resolution methods</li>
                      <li>Development of tailored dispute resolution strategies</li>
                      <li>Proactive management of legal costs</li>
                      <li>Creative solutions that address business objectives</li>
                    </>
                  ) : (
                    <>
                      <li>Ranu procjenu slučaja i analizu rizika</li>
                      <li>Analizu troškova i koristi različitih metoda rješavanja</li>
                      <li>Razvoj prilagođenih strategija za rješavanje sporova</li>
                      <li>Proaktivno upravljanje pravnim troškovima</li>
                      <li>Kreativna rješenja koja odgovaraju poslovnim ciljevima</li>
                    </>
                  )}
                </ul>
                
                <p className="mt-8">
                  {language === 'en'
                    ? 'Our ultimate goal is to achieve the best possible outcome for our clients while minimizing costs, business disruption, and reputational damage. We work closely with clients to understand their objectives and develop dispute resolution strategies that align with their broader business goals.'
                    : 'Naš krajnji cilj je postići najbolji mogući ishod za naše klijente uz minimiziranje troškova, poslovnih poremećaja i reputacijske štete. Usko surađujemo s klijentima kako bismo razumjeli njihove ciljeve i razvili strategije rješavanja sporova koje su usklađene s njihovim širim poslovnim ciljevima.'}
                </p>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:col-span-1">
              <PracticeAreasList currentArea="dispute-resolution" />
              
              <div className="bg-primary-800 text-white rounded-xl p-8">
                <h3 className="text-xl font-serif font-bold mb-4">
                  {language === 'en' ? 'Need Help With a Dispute?' : 'Trebate pomoć s rješavanjem spora?'}
                </h3>
                
                <p className="mb-6 text-primary-100">
                  {language === 'en'
                    ? 'Contact us today to discuss your case and explore dispute resolution options.'
                    : 'Kontaktirajte nas danas za razgovor o vašem slučaju i istraživanje opcija rješavanja sporova.'}
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
