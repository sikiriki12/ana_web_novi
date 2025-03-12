import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaGavel, FaUserTie, FaBalanceScale, FaBuilding, FaHandshake, FaFileContract } from 'react-icons/fa'
import { LanguageContext } from '../../App'

const PracticeArea = ({ icon, title, description, index }) => (
  <div className="fade-in-section hover-lift">
    <div className="bg-white rounded-xl shadow-elegant hover:shadow-elegant-lg p-8 h-full border-t-4 border-transparent hover:border-primary-600 transition-all duration-300 flex flex-col">
      <div className="mb-6 flex items-center justify-between">
        <div className="bg-primary-50 text-primary-700 p-4 rounded-lg">
          {icon}
        </div>
        <span className="text-4xl font-serif text-primary-200 font-bold">#{String(index).padStart(2, '0')}</span>
      </div>
      
      <h3 className="text-2xl font-serif font-bold text-primary-800 mb-4">{title}</h3>
      <p className="text-secondary-700 flex-grow">{description}</p>
    </div>
  </div>
);

export default function PracticeAreas() {
  const { language } = useContext(LanguageContext);
  
  // Animation for sections on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  // Practice areas data based on language
  const practiceAreas = language === 'en' ? [
    {
      icon: <FaGavel size={28} />,
      title: 'Commercial Law',
      description: 'We provide legal assistance in business operations, offering specialized advice in contract law, drafting commercial contracts, and representation in commercial disputes. Our commercial law services help businesses navigate complex legal environments while minimizing risk.',
      link: '/practice-areas/commercial-law'
    },
    {
      icon: <FaUserTie size={28} />,
      title: 'Labor Law',
      description: 'Our labor law services include consulting and representation regarding employment contracts, defining rights and obligations of workers and employers, and resolution of disputes. We help both businesses and employees navigate the complexities of labor regulations and relationships.',
      link: '/practice-areas/labor-law'
    },
    {
      icon: <FaBuilding size={28} />,
      title: 'Corporate Law',
      description: 'We provide comprehensive legal services related to company establishment, management issues, and status changes, including complete legal support during mergers and acquisitions. Our corporate law team brings expertise to governance, compliance, and restructuring matters.',
      link: '/practice-areas/corporate-law'
    },
    {
      icon: <FaBalanceScale size={28} />,
      title: 'Real Estate & Civil Law',
      description: 'Our team offers complete legal support during real estate investments and represents clients in civil proceedings related to property rights, contract disputes, and damage compensation claims. We bring clarity to complex real estate transactions and civil matters.',
      link: '/practice-areas/real-estate'
    },
    {
      icon: <FaFileContract size={28} />,
      title: 'Contract Law',
      description: 'We excel in drafting, reviewing, and negotiating various types of contracts and agreements. Our expertise ensures that your contracts are legally sound, protect your interests, and effectively manage risks in business relationships.',
      link: '/practice-areas/contract-law'
    },
    {
      icon: <FaHandshake size={28} />,
      title: 'Dispute Resolution',
      description: 'We represent clients in a wide range of dispute resolution procedures, including litigation, arbitration, and mediation. Our approach focuses on finding the most efficient and cost-effective solutions to complex legal disputes.',
      link: '/practice-areas/dispute-resolution'
    }
  ] : [
    {
      icon: <FaGavel size={28} />,
      title: 'Trgovačko pravo',
      description: 'Pružamo pravnu pomoć u poslovanju, pravne savjete iz područja ugovornog prava, sastavljamo trgovačke ugovore i zastupamo u trgovačkim sporovima. Naše usluge trgovačkog prava pomažu tvrtkama navigirati kroz složena pravna okruženja uz minimiziranje rizika.',
      link: '/practice-areas/commercial-law'
    },
    {
      icon: <FaUserTie size={28} />,
      title: 'Radno pravo',
      description: 'Naše usluge radnog prava uključuju savjetovanje i zastupanje u vezi s ugovorima o radu, definiranje prava i obveza radnika i poslodavaca, kao i rješavanje sporova. Pomažemo tvrtkama i zaposlenicima razumjeti složenosti radnih propisa i odnosa.',
      link: '/practice-areas/labor-law'
    },
    {
      icon: <FaBuilding size={28} />,
      title: 'Pravo trgovačkih društava',
      description: 'Pružamo sveobuhvatne pravne usluge u vezi s osnivanjem trgovačkih društava, pitanjima upravljanja i statusnim promjenama, uključujući i kompletnu pravnu podršku tijekom pripajanja i preuzimanja društava. Naš tim donosi stručnost u pitanjima upravljanja, usklađenosti i restrukturiranja.',
      link: '/practice-areas/corporate-law'
    },
    {
      icon: <FaBalanceScale size={28} />,
      title: 'Nekretnine i Građansko pravo',
      description: 'Naš tim pruža kompletnu pravnu potporu prilikom nekretninskih investicija i zastupa klijente u građanskim postupcima vezanim za vlasnička prava, ugovorne sporove i zahtjeve za naknadu štete. Donosimo jasnoću u složene transakcije nekretnina i građanska pitanja.',
      link: '/practice-areas/real-estate'
    },
    {
      icon: <FaFileContract size={28} />,
      title: 'Ugovorno pravo',
      description: 'Specijalizirani smo za izradu, pregled i pregovore o različitim vrstama ugovora i sporazuma. Naša stručnost osigurava da su vaši ugovori pravno valjani, štite vaše interese i učinkovito upravljaju rizicima u poslovnim odnosima.',
      link: '/practice-areas/contract-law'
    },
    {
      icon: <FaHandshake size={28} />,
      title: 'Rješavanje sporova',
      description: 'Zastupamo klijente u širokom rasponu postupaka rješavanja sporova, uključujući parnične postupke, arbitražu i medijaciju. Naš pristup je usmjeren na pronalaženje najučinkovitijih i ekonomičnih rješenja za složene pravne sporove.',
      link: '/practice-areas/dispute-resolution'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[300px] pt-16 pb-7 md:pt-24 md:pb-7 overflow-hidden bg-primary-800 text-white">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 bg-repeat" style={{ backgroundImage: 'url(/images/backgrounds/legal-pattern.svg)' }}></div>
        
        
        <div className="container-custom relative z-10 my-auto pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
              {language === 'en' ? 'Practice Areas' : 'Područja prakse'}
            </h1>
            
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto animate-fade-in animate-delay-200">
              {language === 'en'
                ? 'Comprehensive legal services tailored to your specific needs across various practice areas'
                : 'Sveobuhvatne pravne usluge prilagođene vašim specifičnim potrebama u različitim područjima prakse'}
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 bg-offwhite">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <PracticeArea 
                key={index}
                icon={area.icon}
                title={area.title}
                description={area.description}
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Legal Approach Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5 bg-repeat" style={{ backgroundImage: 'url(/images/backgrounds/legal-pattern.svg)' }}></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary-50/50 z-0"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="fade-in-section">
              <div className="inline-flex items-center mb-4">
                <span className="h-px w-6 bg-primary-600"></span>
                <span className="mx-2 text-primary-600 font-medium uppercase tracking-wider text-sm">
                  {language === 'en' ? 'Our Methodology' : 'Naša Metodologija'}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-6">
                {language === 'en' 
                  ? 'Our Legal Approach'
                  : 'Naš pravni pristup'}
              </h2>
              
              <p className="text-lg text-secondary-700 mb-6">
                {language === 'en'
                  ? 'Regardless of the practice area, we approach each case with the same core principles: thoroughness, strategic thinking, and client-focused solutions.'
                  : 'Bez obzira na područje prakse, pristupamo svakom slučaju s istim temeljnim načelima: temeljitost, strateško razmišljanje i rješenja usmjerena na klijenta.'}
              </p>
              
              <div className="space-y-6 mt-8">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="min-w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-serif font-bold text-lg">1</div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">
                      {language === 'en' ? 'Initial Consultation & Assessment' : 'Početne konzultacije i procjena'}
                    </h3>
                    <p className="text-secondary-700">
                      {language === 'en'
                        ? 'We begin with a comprehensive assessment of your legal situation, understanding your goals and concerns.'
                        : 'Započinjemo s sveobuhvatnom procjenom vaše pravne situacije, razumijevanjem vaših ciljeva i briga.'}
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="min-w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-serif font-bold text-lg">2</div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">
                      {language === 'en' ? 'Strategic Planning' : 'Strateško planiranje'}
                    </h3>
                    <p className="text-secondary-700">
                      {language === 'en'
                        ? 'We develop a tailored strategy based on your specific situation, objectives, and the legal context.'
                        : 'Razvijamo prilagođenu strategiju temeljenu na vašoj specifičnoj situaciji, ciljevima i pravnom kontekstu.'}
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="min-w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-serif font-bold text-lg">3</div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">
                      {language === 'en' ? 'Implementation & Execution' : 'Implementacija i izvršenje'}
                    </h3>
                    <p className="text-secondary-700">
                      {language === 'en'
                        ? 'We execute the strategy with precision, leveraging our expertise and experience to achieve the best possible outcome.'
                        : 'Izvršavamo strategiju s preciznošću, koristeći našu stručnost i iskustvo za postizanje najboljih mogućih rezultata.'}
                    </p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="min-w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-serif font-bold text-lg">4</div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">
                      {language === 'en' ? 'Ongoing Support & Adaptation' : 'Kontinuirana podrška i prilagodba'}
                    </h3>
                    <p className="text-secondary-700">
                      {language === 'en'
                        ? 'We provide continuous support and adapt our approach as needed, keeping you informed throughout the process.'
                        : 'Pružamo kontinuiranu podršku i prilagođavamo naš pristup prema potrebi, informirajući vas tijekom cijelog procesa.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative fade-in-section">
              <div className="relative rounded-xl overflow-hidden shadow-elegant-lg">
                {/* Background shape */}
                <div className="absolute inset-0 bg-primary-800 z-10"></div>
                
                {/* Content */}
                <div className="relative p-10 z-20 text-white">
                  <h3 className="text-2xl font-serif font-bold text-white mb-6">
                    {language === 'en' ? 'Client-Centered Philosophy' : 'Filozofija usmjerena na klijenta'}
                  </h3>
                  
                  <p className="mb-6">
                    {language === 'en'
                      ? 'Our approach places your needs at the center of everything we do. We believe that effective legal representation requires not just expertise in the law, but a deep understanding of our clients\' objectives and concerns.'
                      : 'Naš pristup stavlja vaše potrebe u središte svega što radimo. Vjerujemo da učinkovito pravno zastupanje zahtijeva ne samo stručnost u pravu, već i duboko razumijevanje ciljeva i briga naših klijenata.'}
                  </p>
                  
                  <p>
                    {language === 'en'
                      ? 'This philosophy guides our work across all practice areas, ensuring that the legal strategies we develop are always aligned with your best interests.'
                      : 'Ova filozofija vodi naš rad u svim područjima prakse, osiguravajući da su pravne strategije koje razvijamo uvijek usklađene s vašim najboljim interesima.'}
                  </p>
                  
                  <div className="mt-8 flex justify-center">
                    <FaBalanceScale size={60} className="text-white/30" />
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-1/2 h-1/2 bg-primary-100 rounded-br-xl"></div>
              <div className="absolute -z-10 -top-6 -left-6 w-1/2 h-1/2 bg-secondary-100 rounded-tl-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-secondary-900/10 rounded-tr-full"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-accent-600/20 blur-2xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              {language === 'en' 
                ? 'Need Help with a Legal Matter?' 
                : 'Trebate pomoć s pravnim pitanjem?'}
            </h2>
            
            <p className="text-xl text-primary-100 mb-8">
              {language === 'en'
                ? 'Contact us today to schedule a consultation with our experienced legal team and discover how we can assist you.'
                : 'Kontaktirajte nas danas kako biste dogovorili konzultacije s našim iskusnim pravnim timom i otkrili kako vam možemo pomoći.'}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="btn bg-white text-primary-800 hover:bg-white/90 transition-all duration-300 shadow-elegant hover:shadow-elegant-lg hover:-translate-y-1">
                {language === 'en' ? 'Schedule a Consultation' : 'Dogovorite konzultacije'}
              </Link>
              
              <Link to="/about" className="btn bg-transparent border border-white text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                {language === 'en' ? 'Learn About Our Firm' : 'Saznajte o našoj tvrtki'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
