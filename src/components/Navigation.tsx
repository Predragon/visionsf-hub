import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Sticky shadow effect
      setIsScrolled(window.scrollY > 10);

      // Active section detection
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = useCallback((href: string) => {
    setIsOpen(false);
    setActiveSection(href);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-md"
          onClick={() => handleNavClick('#home')}
        >
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-primary-600">Vision</span>
            <span className="text-accent-500">SF</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 md:flex" role="menubar">
          {navItems.map((item) => (
            <li key={item.href} role="none">
              <a
                href={item.href}
                role="menuitem"
                onClick={() => handleNavClick(item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${
                  activeSection === item.href
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {item.label}
                {/* Active indicator */}
                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 transform bg-accent-500 transition-all duration-300 ${
                    activeSection === item.href ? 'w-6' : 'w-0'
                  }`}
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button (Desktop) */}
        <a
          href="#contact"
          onClick={() => handleNavClick('#contact')}
          className="hidden rounded-full bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-700 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 active:scale-95 md:inline-flex"
        >
          Get Started
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
          {isOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-sm transform bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4">
          <span className="text-xl font-bold tracking-tight">
            <span className="text-primary-600">Vision</span>
            <span className="text-accent-500">SF</span>
          </span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <nav className="px-4 py-6" aria-label="Mobile navigation">
          <ul className="space-y-1" role="menu">
            {navItems.map((item, index) => (
              <li key={item.href} role="none">
                <a
                  href={item.href}
                  role="menuitem"
                  onClick={() => handleNavClick(item.href)}
                  className={`flex items-center rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${
                    activeSection === item.href
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                  tabIndex={isOpen ? 0 : -1}
                >
                  {/* Active indicator dot */}
                  <span
                    className={`mr-3 h-2 w-2 rounded-full transition-all duration-200 ${
                      activeSection === item.href
                        ? 'bg-accent-500'
                        : 'bg-transparent'
                    }`}
                    aria-hidden="true"
                  />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <div className="mt-8 px-4">
            <a
              href="#contact"
              onClick={() => handleNavClick('#contact')}
              className="flex w-full items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-700 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 active:scale-95"
              tabIndex={isOpen ? 0 : -1}
            >
              Get Started
            </a>
          </div>
        </nav>

        {/* Mobile Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-gray-100 bg-gray-50 px-8 py-6">
          <p className="text-center text-sm text-gray-500">
            Ready to transform your digital presence?
          </p>
        </div>
      </div>
    </header>
  );
}
