import { useEffect, useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaGavel } from 'react-icons/fa'
import { useTranslations } from '../../hooks/use-translations'

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
  const { t } = useTranslations();
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
              {t('contact.title')}
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in animate-delay-200">
              {t('contact.subtitle')}
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
                  {t('contact.contactInfo.title')}
                </h2>
                
                <p className="text-secondary-700 mb-8">
                  {t('contact.contactInfo.description')}
                </p>
                
                <div className="space-y-6">
                  <ContactInfo icon={<FaMapMarkerAlt size={20} />} title={t('contact.contactInfo.address.title')}>
                    <p>{t('contact.contactInfo.address.line1')}</p>
                    <p>{t('contact.contactInfo.address.line2')}</p>
                    <p>{t('contact.contactInfo.address.line3')}</p>
                  </ContactInfo>
                  
                  <ContactInfo icon={<FaPhone size={20} />} title={t('contact.contactInfo.phone.title')}>
                    <p>{t('contact.contactInfo.phone.line1')}</p>
                    <p>{t('contact.contactInfo.phone.line2')}</p>
                  </ContactInfo>
                  
                  <ContactInfo icon={<FaEnvelope size={20} />} title={t('contact.contactInfo.email.title')}>
                    <p>{t('contact.contactInfo.email.line1')}</p>
                  </ContactInfo>
                  
                  <ContactInfo icon={<FaClock size={20} />} title={t('contact.contactInfo.hours.title')}>
                    <p>{t('contact.contactInfo.hours.line1')}</p>
                    <p>{t('contact.contactInfo.hours.line2')}</p>
                  </ContactInfo>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-7 fade-in-section">
              <div className="bg-white rounded-xl shadow-elegant p-8">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-800 mb-6">
                  {t('contact.form.title')}
                </h2>
                
                <p className="text-secondary-700 mb-8">
                  {t('contact.form.description')}
                </p>
                
                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 mb-8 fade-in-section">
                    <h3 className="text-xl font-bold mb-2">
                      {t('contact.form.success.title')}
                    </h3>
                    <p>
                      {t('contact.form.success.message')}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-secondary-800 font-medium mb-2">
                          {t('contact.form.nameLabel')}*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                          placeholder={t('contact.form.namePlaceholder')}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-secondary-800 font-medium mb-2">
                          {t('contact.form.emailLabel')}*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                          placeholder={t('contact.form.emailPlaceholder')}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-secondary-800 font-medium mb-2">
                          {t('contact.form.phoneLabel')}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                          placeholder={t('contact.form.phonePlaceholder')}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-secondary-800 font-medium mb-2">
                          {t('contact.form.subjectLabel')}*
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                          placeholder={t('contact.form.subjectPlaceholder')}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-secondary-800 font-medium mb-2">
                        {t('contact.form.messageLabel')}*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                        placeholder={t('contact.form.messagePlaceholder')}
                      ></textarea>
                    </div>
                    
                    <div className="text-right">
                      <button
                        type="submit"
                        className="btn bg-primary-600 text-white hover:bg-primary-700 px-8 py-3 shadow-elegant hover:shadow-elegant-lg hover:-translate-y-1"
                      >
                        {t('contact.form.submitButton')}
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
              {t('contact.location.title')}
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              {t('contact.location.description')}
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-elegant h-96 fade-in-section">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.7890741539656!2d15.977645!3d45.777593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d68b5d090f41%3A0xf66c41080881c656!2sVe%C4%87eslava%20Holjevca%2040%2C%2010000%2C%20Zagreb!5e0!3m2!1sen!2shr!4v1637330285695!5m2!1sen!2shr"
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
                FAQ
              </span>
              <span className="h-px w-6 bg-primary-600"></span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-6">
              {t('contact.faq.title')}
            </h2>
            
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              {t('contact.faq.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {t('contact.faq.questions').map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-elegant p-6 fade-in-section">
                <h3 className="text-xl font-serif font-bold text-primary-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-secondary-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
