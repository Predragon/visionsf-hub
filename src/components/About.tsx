import { Zap, DollarSign, Brain, MapPin } from 'lucide-react';

export interface AboutProps {
  // Add props as needed
}

interface ValueCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const values: ValueCard[] = [
  {
    icon: Zap,
    title: 'Fast',
    description: 'Average 14-day delivery',
  },
  {
    icon: DollarSign,
    title: 'Affordable',
    description: '30% below market rates',
  },
  {
    icon: Brain,
    title: 'Smart',
    description: 'Gets better with every project',
  },
  {
    icon: MapPin,
    title: 'Local',
    description: 'San Francisco-based',
  },
];

const About: React.FC<AboutProps> = () => {
  return (
    <section id="about" className="bg-gray-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Built by a Non-Coder Who Taught AI to Code
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Founder Story */}
          <div className="space-y-8">
            {/* Founder Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg ring-4 ring-primary-100">
                <img
                  src="/images/nenad-photo.jpg"
                  alt="Nenad Mirkovic - Founder of VisionSF"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Story Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Not a developer by training, Nenad Mirkovic had a vision: make software
                development accessible to everyone. Frustrated with traditional development's
                slow timelines and high costs, he built Workshop - an AI platform that learns
                from every project.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Now, that same technology powers VisionSF. We're not just building software;
                we're building it smarter, faster, and more affordably than traditional agencies.
                Every project makes our AI better, and those improvements benefit all our clients.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Based in San Francisco, we combine the innovation of the Bay Area with the
                accessibility that small businesses and startups deserve.
              </p>
            </div>

            {/* Workshop Teaser */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                The Workshop Advantage
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The secret behind our speed? Workshop, our self-improving AI development
                platform. Every project we complete makes us smarter - and that benefits you.
              </p>
            </div>
          </div>

          {/* Right Column - Values */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 text-center lg:text-left">
              Our Values
            </h3>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 mb-4">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">
                      {value.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Additional Trust Element */}
            <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl p-6 text-white mt-6">
              <h4 className="text-xl font-semibold mb-2">
                Why Choose VisionSF?
              </h4>
              <p className="text-primary-100 leading-relaxed">
                We've combined human creativity with AI efficiency to deliver results that
                traditional agencies simply can't match. Our unique approach means you get
                enterprise-quality work at startup-friendly prices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
