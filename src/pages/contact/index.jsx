import { useContext, useEffect, useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaGavel } from 'react-icons/fa'
import { LanguageContext } from '../../App'

const ContactInfo = ({ icon, title, children }) => (
  <div className="flex gap-4 items-start mb-8 fade-in-section">
    <div className="min-w-12 h-12 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-serif font-bold text-primary-800 mb-1">{title}</h3>
      <div className="text-secondary-700">{children}</div>
    </div>
  </div>
);

export default function Contact() {
  const { language } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
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
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send this data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[300px] pt-16 pb-7 md:pt-24 md:pb-7 overflow-hidden bg-primary-800 text-white">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 bg-repeat" style={{ backgroundImage: 'url(/images/backgrounds/legal-pattern.svg)' }}></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-secondary-600/30 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-white/10 blur-xl"></div>
        </div>
        
        <div className="container-custom relative z-10 my-auto pt-32">
          <div className="max-w-4xl mx-auto text-center">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">
              {language === 'en' ? 'Contact Us' : 'Kontakt'}
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in animate-delay-200">
              {language === 'en'
                ? 'We\'re here to help with your legal needs. Reach out to schedule a consultation with our team.'
                : 'Ovdje smo da pomognemo s vašim pravnim potrebama. Javite nam se za dogovor konzultacija s našim timom.'}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-offwhite">
        <div className="container-custom">
          <div className="grid md:grid-cols-12 gap-10">
            {/* Contact Information */}
            <div className="md:col-span-5 fade-in-section">
              <div className="bg-white rounded-xl shadow-elegant p-8 h-full">
                <div className="inline-block bg-primary-50 text-primary-700 p-4 rounded-lg mb-6">
                  <FaGavel size={28} />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-800 mb-6">
                  {language === 'en' ? 'Our Contact Information' : 'Naši kontakt podaci'}
                </h2>
                
                <p className="text-secondary-700 mb-8">
                  {language === 'en'
                    ? 'Feel free to reach out through any of the following channels. We look forward to hearing from you.'
                    : 'Slobodno nas kontaktirajte putem bilo kojeg od sljedećih kanala. Radujemo se vašem javljanju.'}
                </p>
                
                <div className="space-y-6">
                  <ContactInfo icon={<FaMapMarkerAlt size={20} />} title={language === 'en' ? 'Office Address' : 'Adresa ureda'}>
                    <p>Ana Bandalo Law Office</p>
                    <p>Ilica 191, 10000 Zagreb, Croatia</p>
                  </ContactInfo>
                  
                  <ContactInfo icon={<FaPhone size={20} />} title={language === 'en' ? 'Phone Number' : 'Telefonski broj'}>
                    <p>+385 1 4668 833</p>
                    <p>+385 98 279 722</p>
                  </ContactInfo>
                  
                  <ContactInfo icon={<FaEnvelope size={20} />} title={language === 'en' ? 'Email Address' : 'Email adresa'}>
                    <p>info@bandalo.law</p>
                  </ContactInfo>
                  
                  <ContactInfo icon={<FaClock size={20} />} title={language === 'en' ? 'Office Hours' : 'Radno vrijeme'}>
                    <p>{language === 'en' ? 'Monday to Friday' : 'Ponedjeljak do petak'}: 9:00 - 17:00</p>
                    <p>{language === 'en' ? 'Saturday & Sunday' : 'Subota i nedjelja'}: {language === 'en' ? 'Closed' : 'Zatvoreno'}</p>
                  </ContactInfo>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-7 fade-in-section">
              <div className="bg-white rounded-xl shadow-elegant p-8">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-800 mb-6">
                  {language === 'en' ? 'Send Us a Message' : 'Pošaljite nam poruku'}
                </h2>
                
                <p className="text-secondary-700 mb-8">
                  {language === 'en'
                    ? 'Have a question or need legal assistance? Fill out the form below and we\'ll get back to you as soon as possible.'
                    : 'Imate pitanje ili trebate pravnu pomoć? Ispunite donji obrazac i javit ćemo vam se što je prije moguće.'}
                </p>
                
                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 mb-8 fade-in-section">
                    <h3 className="text-xl font-bold mb-2">
                      {language === 'en' ? 'Thank You!' : 'Hvala Vam!'}
                    </h3>
                    <p>
                      {language === 'en'
                        ? 'Your message has been sent successfully. We\'ll get back to you shortly.'
                        : 'Vaša poruka je uspješno poslana. Javit ćemo vam se uskoro.'}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-secondary-800 font-medium mb-2">
                          {language === 'en' ? 'Your Name' : 'Vaše ime'}*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                          placeholder={language === 'en' ? 'Enter your full name' : 'Unesite vaše puno ime'}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-secondary-800 font-medium mb-2">
                          {language === 'en' ? 'Email Address' : 'Email adresa'}*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                          placeholder={language === 'en' ? 'Enter your email' : 'Unesite vašu email adresu'}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-secondary-800 font-medium mb-2">
                          {language === 'en' ? 'Phone Number' : 'Telefonski broj'}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                          placeholder={language === 'en' ? 'Enter your phone number' : 'Unesite vaš telefonski broj'}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-secondary-800 font-medium mb-2">
                          {language === 'en' ? 'Subject' : 'Predmet'}*
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                          placeholder={language === 'en' ? 'Enter subject' : 'Unesite predmet'}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-secondary-800 font-medium mb-2">
                        {language === 'en' ? 'Your Message' : 'Vaša poruka'}*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                        placeholder={language === 'en' ? 'Enter your message here...' : 'Unesite vašu poruku ovdje...'}
                      ></textarea>
                    </div>
                    
                    <div className="text-right">
                      <button
                        type="submit"
                        className="btn bg-primary-600 text-white hover:bg-primary-700 px-8 py-3 shadow-elegant hover:shadow-elegant-lg hover:-translate-y-1"
                      >
                        {language === 'en' ? 'Send Message' : 'Pošalji poruku'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 fade-in-section">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-6">
              {language === 'en' ? 'Find Us' : 'Pronađite nas'}
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Our office is conveniently located in the heart of Zagreb. We welcome you to visit us for a consultation.'
                : 'Naš ured je smješten u srcu Zagreba. Pozivamo vas da nas posjetite na konzultacije.'}
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-elegant h-96 fade-in-section">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.3135683896676!2d15.943526376888188!3d45.813565911308286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6e24eb98cf7%3A0xb286d9b7b91d486c!2sIlica%20191%2C%2010000%2C%20Zagreb!5e0!3m2!1sen!2shr!4v1711400856372!5m2!1sen!2shr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-primary-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 bg-repeat" style={{ backgroundImage: 'url(/images/backgrounds/legal-pattern.svg)' }}></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12 fade-in-section">
            <div className="inline-flex items-center justify-center mb-3">
              <span className="h-px w-6 bg-primary-600"></span>
              <span className="mx-2 text-primary-600 font-medium uppercase tracking-wider text-sm">
                {language === 'en' ? 'FAQ' : 'Česta pitanja'}
              </span>
              <span className="h-px w-6 bg-primary-600"></span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-6">
              {language === 'en' ? 'Frequently Asked Questions' : 'Često postavljena pitanja'}
            </h2>
            
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Find answers to common questions about our services and how we can assist you with your legal needs.'
                : 'Pronađite odgovore na uobičajena pitanja o našim uslugama i kako vam možemo pomoći s vašim pravnim potrebama.'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-elegant p-6 fade-in-section">
              <h3 className="text-xl font-serif font-bold text-primary-800 mb-3">
                {language === 'en' 
                  ? 'How do I schedule a consultation?' 
                  : 'Kako dogovoriti konzultacije?'}
              </h3>
              <p className="text-secondary-700">
                {language === 'en'
                  ? 'You can schedule a consultation by calling our office, sending an email, or filling out the contact form on this page. We will get back to you promptly to arrange a meeting at a convenient time.'
                  : 'Konzultacije možete dogovoriti pozivom u naš ured, slanjem e-maila ili ispunjavanjem kontakt obrasca na ovoj stranici. Brzo ćemo vam se javiti kako bismo dogovorili sastanak u vrijeme koje vam odgovara.'}
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-elegant p-6 fade-in-section">
              <h3 className="text-xl font-serif font-bold text-primary-800 mb-3">
                {language === 'en' 
                  ? 'What should I bring to my first meeting?' 
                  : 'Što trebam ponijeti na prvi sastanak?'}
              </h3>
              <p className="text-secondary-700">
                {language === 'en'
                  ? 'Please bring any documents relevant to your legal matter, including contracts, correspondence, and any court papers you have received. This will help us better understand your situation and provide appropriate advice.'
                  : 'Molimo donesite sve dokumente relevantne za vaš pravni predmet, uključujući ugovore, korespondenciju i sve sudske dokumente koje ste primili. To će nam pomoći da bolje razumijemo vašu situaciju i pružimo odgovarajući savjet.'}
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-elegant p-6 fade-in-section">
              <h3 className="text-xl font-serif font-bold text-primary-800 mb-3">
                {language === 'en' 
                  ? 'What are your fees?' 
                  : 'Koje su vaše naknade?'}
              </h3>
              <p className="text-secondary-700">
                {language === 'en'
                  ? 'Our fees vary depending on the nature and complexity of your legal matter. We offer transparent pricing and will discuss fee arrangements during your initial consultation. We strive to provide cost-effective solutions for all our clients.'
                  : 'Naše naknade variraju ovisno o prirodi i složenosti vašeg pravnog predmeta. Nudimo transparentne cijene i razgovarat ćemo o aranžmanima naknada tijekom vaših početnih konzultacija. Nastojimo pružiti ekonomična rješenja za sve naše klijente.'}
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-elegant p-6 fade-in-section">
              <h3 className="text-xl font-serif font-bold text-primary-800 mb-3">
                {language === 'en' 
                  ? 'How long will my legal matter take?' 
                  : 'Koliko će trajati moj pravni predmet?'}
              </h3>
              <p className="text-secondary-700">
                {language === 'en'
                  ? 'The timeframe for resolving legal matters varies widely depending on the specifics of your case. During our consultation, we will provide an estimate based on our experience with similar matters and keep you informed throughout the process.'
                  : 'Vremenski okvir za rješavanje pravnih pitanja uvelike varira ovisno o specifičnostima vašeg slučaja. Tijekom konzultacija, dat ćemo procjenu na temelju našeg iskustva sa sličnim predmetima i informirati vas tijekom cijelog procesa.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
