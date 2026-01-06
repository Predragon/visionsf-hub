import { Twitter, Linkedin, Github } from 'lucide-react';

const footerNavigation = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com', icon: Github },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-md"
            >
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-primary-400">Vision</span>
                <span className="text-accent-400">SF</span>
              </span>
            </a>
            <p className="mt-4 max-w-md text-base text-gray-400">
              Your Vision, Built by AI
            </p>
            <p className="mt-2 max-w-md text-sm text-gray-500">
              We transform your ideas into stunning digital experiences using
              cutting-edge AI technology and expert craftsmanship.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Navigation
            </h3>
            <nav className="mt-4" aria-label="Footer navigation">
              <ul className="space-y-3">
                {footerNavigation.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-400 transition-colors duration-200 hover:text-white focus:outline-none focus-visible:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Connect
            </h3>
            <div className="mt-4 flex gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all duration-200 hover:bg-primary-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-500 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} VisionSF. All rights reserved.
            </p>
            <p className="text-sm text-gray-600">
              Powered by{' '}
              <span className="font-medium text-gray-500">Workshop</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
