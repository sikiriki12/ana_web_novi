import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Disclosure, Transition } from '@headlessui/react'
import { FaBars, FaTimes, FaBalanceScale, FaPhone } from 'react-icons/fa'
import { useTranslations } from '../../hooks/use-translations'

const navigation = [
  { key: 'navigation.about', href: '/about' },
  { key: 'navigation.practiceAreas', href: '/practice-areas' },
  { key: 'navigation.industry', href: '/industry' },
  { key: 'navigation.contact', href: '/contact' },
]

export default function Header({ language, setLanguage }) {
  const { t } = useTranslations();
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  
  // Debug: Log path information
  console.log("Current pathname:", location.pathname);
  console.log("Path segments:", location.pathname.split('/'));
  console.log("Path depth:", location.pathname.split('/').length);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Disclosure as="nav" className={`fixed w-full z-50 transition-all duration-500 border-t-0 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      {({ open }) => (
        <>
          {/* Top bar with contact info */}
          <div className="hidden sm:block bg-primary-600 text-white">
            <div className="container-custom py-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <a href="tel:+38514668833" className="flex items-center hover:text-primary-200 transition-colors">
                    <FaPhone className="mr-1" size={10} />
                    <span className="text-xs">+385 1 4668 833</span>
                  </a>
                  <span className="text-primary-400">|</span>
                  <a href="mailto:info@bandalo.law" className="hover:text-primary-200 transition-colors text-xs">
                    info@bandalo.law
                  </a>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => setLanguage(language === 'en' ? 'hr' : 'en')}
                    className="text-primary-200 hover:text-white transition-colors font-medium text-xs"
                  >
                    {language === 'en' ? t('navigation.switchToHr') : t('navigation.switchToEn')}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="container-custom">
            <div className="relative flex items-center justify-between h-3">
              {/* Mobile menu button - moved to right side */}
              <div className="absolute inset-y-0 right-8 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-primary-800 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FaTimes className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              
              {/* Logo */}
              <div className="flex-1 flex items-center justify-between relative">
                <div className="flex-shrink-0 ml-1 sm:ml-0">
                <Link to="/" className="flex items-center group absolute top-1/2 translate-y-[-10px]">
                  <div>
                      <h1 className="text-sm font-serif font-bold text-primary-800 m-0 leading-none">
                        Ana Bandalo
                      </h1>
                      <p className="text-[10px] uppercase tracking-wide text-secondary-500 font-medium leading-tight">
                        {t('navigation.lawFirm')}
                      </p>
                    </div>
                  </Link>
                </div>
                
                {/* Desktop Navigation Links */}
                <div className="hidden sm:flex sm:space-x-6 sm:justify-end">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`${
                        location.pathname === item.href || 
                        location.pathname.startsWith(item.href)
                          ? 'border-primary-600 text-primary-800'
                          : 'border-transparent text-secondary-800 hover:border-secondary-300 hover:text-primary-700'
                      } inline-flex items-center px-1 border-b text-base font-medium transition-all duration-300 hover:scale-105 h-full`}
                    >
                      {t(item.key)}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Language Selector */}
              <div className="sm:hidden absolute inset-y-0 right-0 flex items-center pr-2">
                <button
                  type="button"
                  onClick={() => setLanguage(language === 'en' ? 'hr' : 'en')}
                  className="bg-primary-100 p-0.5 px-1 rounded text-primary-800 hover:bg-primary-200 transition-colors text-[9px]"
                  aria-label="Change language"
                >
                  {language === 'en' ? 'HR' : 'EN'}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <Transition
            enter="transition duration-300 ease-out"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition duration-300 ease-in"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Disclosure.Panel className="sm:hidden bg-white shadow-lg border-t border-gray-200">
              <div className="px-3 pt-3 pb-4 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.href}
                    as={Link}
                    to={item.href}
                    className={`${
                      location.pathname === item.href || 
                      location.pathname.startsWith(item.href)
                        ? 'bg-primary-50 text-primary-800 border-l-4 border-primary-600 pl-3'
                        : 'text-secondary-800 hover:bg-secondary-50 hover:text-primary-700 pl-4'
                    } block py-3 rounded-md text-base font-medium transition-all duration-300`}
                  >
                    {t(item.key)}
                  </Disclosure.Button>
                ))}
                
                <div className="pt-3 mt-3 border-t border-gray-200">
                  <Link
                    to="/contact"
                    className="flex justify-center w-full bg-primary-700 text-white py-3 rounded-md text-base font-medium hover:bg-primary-800 transition-colors"
                  >
                    <FaPhone className="mr-2" />
                    {t('common.contactUs')}
                  </Link>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
