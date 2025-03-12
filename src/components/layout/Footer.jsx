import { FaMapMarkerAlt, FaPhone, FaMobile, FaEnvelope, FaClock, FaBalanceScale, FaChevronRight } from 'react-icons/fa'

export default function Footer({ language }) {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="relative overflow-hidden">
      {/* Top section with decorative wave */}
      <div className="absolute top-0 left-0 w-full h-10 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-16 text-primary-900" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
      
      {/* Main footer content */}
      <div className="bg-primary-900 text-white pt-16 pb-8 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 bg-repeat" style={{ backgroundImage: 'url(/images/backgrounds/legal-pattern.svg)' }}></div>
        
        {/* Content */}
        <div className="container-custom relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-4">
            {/* Contact Information */}
            <div className="lg:col-span-4">
              <div className="flex items-center mb-6">
                <FaBalanceScale className="text-primary-300 text-2xl mr-3" />
                <h3 className="text-xl font-serif font-bold text-white">
                  {language === 'en' ? 'Law Office Ana Bandalo' : 'Odvjetnički ured Ana Bandalo'}
                </h3>
              </div>
              
              <ul className="space-y-5">
                <li className="flex items-start group">
                  <div className="mt-1 mr-3 bg-primary-800/60 p-2 rounded-md group-hover:bg-primary-700 transition-colors duration-300">
                    <FaMapMarkerAlt className="text-primary-300" />
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-primary-200">
                      {language === 'en' ? 'Address:' : 'Adresa:'}
                    </p>
                    <p className="text-gray-300 mb-0">
                      Većeslava Holjevca 40,<br />
                      10000 Zagreb, {language === 'en' ? 'Croatia' : 'Hrvatska'}<br />
                      ({language === 'en' ? 'Business center' : 'Poslovni centar'} RECRO, 3. {language === 'en' ? 'floor' : 'kat'})
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start group">
                  <div className="mt-1 mr-3 bg-primary-800/60 p-2 rounded-md group-hover:bg-primary-700 transition-colors duration-300">
                    <FaPhone className="text-primary-300" />
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-primary-200">
                      {language === 'en' ? 'Phone:' : 'Telefon:'}
                    </p>
                    <a href="tel:+38514668833" className="text-gray-300 hover:text-white transition-colors duration-300">
                      +385 1 4668 833
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start group">
                  <div className="mt-1 mr-3 bg-primary-800/60 p-2 rounded-md group-hover:bg-primary-700 transition-colors duration-300">
                    <FaMobile className="text-primary-300" />
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-primary-200">
                      {language === 'en' ? 'Mobile:' : 'Mobitel:'}
                    </p>
                    <a href="tel:+385915187473" className="text-gray-300 hover:text-white transition-colors duration-300">
                      +385 91 518 74 73
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start group">
                  <div className="mt-1 mr-3 bg-primary-800/60 p-2 rounded-md group-hover:bg-primary-700 transition-colors duration-300">
                    <FaEnvelope className="text-primary-300" />
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-primary-200">Email:</p>
                    <a 
                      href="mailto:info@bandalo.law" 
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      info@bandalo.law
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start group">
                  <div className="mt-1 mr-3 bg-primary-800/60 p-2 rounded-md group-hover:bg-primary-700 transition-colors duration-300">
                    <FaClock className="text-primary-300" />
                  </div>
                  <div>
                    <p className="font-medium mb-1 text-primary-200">
                      {language === 'en' ? 'Working Hours:' : 'Radno vrijeme:'}
                    </p>
                    <p className="text-gray-300 mb-0">
                      {language === 'en' 
                        ? 'Mon – Fri: 09:00 - 17:00 (by appointment only)'
                        : 'Pon – Pet: 09:00 - 17:00 (isključivo uz prethodnu najavu)'}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Quick Links - Practice Areas */}
            <div className="lg:col-span-3">
              <h3 className="text-lg font-serif font-bold text-white mb-5 flex items-center">
                <span className="h-1 w-6 bg-primary-400 rounded-full mr-2"></span>
                {language === 'en' ? 'Practice Areas' : 'Područja prakse'}
              </h3>
              <ul className="space-y-3">
                <li>
                  <div className="text-gray-300 flex items-center">
                    <FaChevronRight className="mr-2 text-xs text-primary-400" />
                    {language === 'en' ? 'Commercial Law' : 'Trgovačko pravo'}
                  </div>
                </li>
                <li>
                  <div className="text-gray-300 flex items-center">
                    <FaChevronRight className="mr-2 text-xs text-primary-400" />
                    {language === 'en' ? 'Labor Law' : 'Radno pravo'}
                  </div>
                </li>
                <li>
                  <div className="text-gray-300 flex items-center">
                    <FaChevronRight className="mr-2 text-xs text-primary-400" />
                    {language === 'en' ? 'Corporate Law' : 'Pravo trgovačkih društava'}
                  </div>
                </li>
                <li>
                  <div className="text-gray-300 flex items-center">
                    <FaChevronRight className="mr-2 text-xs text-primary-400" />
                    {language === 'en' ? 'Real Estate & Civil Law' : 'Nekretnine i Građansko pravo'}
                  </div>
                </li>
              </ul>
              
              <h3 className="text-lg font-serif font-bold text-white mt-8 mb-5 flex items-center">
                <span className="h-1 w-6 bg-primary-400 rounded-full mr-2"></span>
                {language === 'en' ? 'Industry Expertise' : 'Industrijska stručnost'}
              </h3>
              <ul className="space-y-3">
                <li>
                  <div className="text-gray-300 flex items-center">
                    <FaChevronRight className="mr-2 text-xs text-primary-400" />
                    {language === 'en' ? 'Construction Industry' : 'Građevinska industrija'}
                  </div>
                </li>
                <li>
                  <div className="text-gray-300 flex items-center">
                    <FaChevronRight className="mr-2 text-xs text-primary-400" />
                    {language === 'en' ? 'IT Industry' : 'IT Industrija'}
                  </div>
                </li>
                <li>
                  <div className="text-gray-300 flex items-center">
                    <FaChevronRight className="mr-2 text-xs text-primary-400" />
                    {language === 'en' ? 'Pharma & Healthcare' : 'Pharma i zdravstvo'}
                  </div>
                </li>
                <li>
                  <div className="text-gray-300 flex items-center">
                    <FaChevronRight className="mr-2 text-xs text-primary-400" />
                    {language === 'en' ? 'Manufacturing & Services' : 'Proizvodnja i usluge'}
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Map */}
            <div className="lg:col-span-5">
              <h3 className="text-lg font-serif font-bold text-white mb-5 flex items-center">
                <span className="h-1 w-6 bg-primary-400 rounded-full mr-2"></span>
                {language === 'en' ? 'Location' : 'Lokacija'}
              </h3>
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-primary-800">
                <iframe
                  title="Office Location"
                  className="w-full h-96"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.7890741539656!2d15.977645!3d45.777593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d68b5d090f41%3A0xf66c41080881c656!2sVe%C4%87eslava%20Holjevca%2040%2C%2010000%2C%20Zagreb!5e0!3m2!1sen!2shr!4v1637330285695!5m2!1sen!2shr"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-800 text-center">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © {currentYear} {language === 'en' ? 'Attorney at Law Ana Bandalo' : 'Odvjetnica Ana Bandalo'} • 
                <span className="text-gray-500"> {language === 'en' ? 'All Rights Reserved' : 'Sva prava pridržana'}</span>
              </p>
              {/* Footer navigation links removed */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
