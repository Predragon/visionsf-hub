import { TrendingUp, Users, Clock, ExternalLink } from 'lucide-react';

export interface PortfolioProps {
  // Add props as needed
}

const Portfolio: React.FC<PortfolioProps> = () => {
  const techStack = ['React', 'FastAPI', 'Supabase', 'Cloudflare Pages'];

  const results = [
    {
      icon: TrendingUp,
      value: '40%',
      label: 'increase in online orders',
    },
    {
      icon: Users,
      value: '300+',
      label: 'loyalty members',
    },
  ];

  return (
    <section id="portfolio" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-xl text-gray-600">Real results for real businesses</p>
        </div>

        {/* Featured Case Study Card */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - Project Mockup */}
            <div className="relative h-64 lg:h-auto min-h-[300px] bg-gray-100">
              <img
                src="/images/sip-sing-mockup.svg"
                alt="Sip & Sing PWA - Restaurant ordering and loyalty app"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Right Side - Case Study Content */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-medium text-primary-600">21 Day Delivery</span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Sip & Sing Restaurant PWA
              </h3>

              {/* Challenge */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Challenge
                </h4>
                <p className="text-gray-700">
                  Local restaurant needed online ordering, loyalty program
                </p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Solution
                </h4>
                <p className="text-gray-700">
                  Full-stack PWA with React, FastAPI, Supabase
                </p>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                  Results
                </h4>
                <div className="flex flex-wrap gap-4">
                  {results.map((result, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <result.icon className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gray-900">{result.value}</p>
                        <p className="text-sm text-gray-600">{result.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                View Full Case Study
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Placeholder for Future Projects */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full">
            <span className="text-gray-500 font-medium">More projects coming soon...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
