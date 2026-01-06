import { MessageSquare, Cpu, RefreshCw, Rocket } from 'lucide-react';

export interface HowItWorksProps {
  // Add props as needed
}

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Share Your Vision',
    description: 'Tell us what you need. We speak both human and code.',
    icon: MessageSquare,
  },
  {
    number: 2,
    title: 'AI Builds, We Supervise',
    description: 'Our AI systems create your project while our team ensures quality.',
    icon: Cpu,
  },
  {
    number: 3,
    title: 'You Review, We Refine',
    description: "Iterate until it's exactly right. Unlimited revisions included.",
    icon: RefreshCw,
  },
  {
    number: 4,
    title: 'Launch',
    description: 'Deploy to production and start seeing results.',
    icon: Rocket,
  },
];

const HowItWorks: React.FC<HowItWorksProps> = () => {
  return (
    <section id="how-it-works" className="bg-gray-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 sm:text-xl">
            From idea to launch in 4 simple steps
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Connecting Line - Desktop (horizontal) */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200" />

          {/* Connecting Line - Mobile/Tablet (vertical) */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 sm:left-12" />

          {/* Steps */}
          <div className="relative flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative flex lg:flex-col lg:items-center lg:w-1/4 pl-20 sm:pl-24 lg:pl-0"
                >
                  {/* Step Card */}
                  <div className="group flex-1 lg:flex-none lg:w-full">
                    {/* Number Circle - Mobile (positioned on the line) */}
                    <div className="lg:hidden absolute left-4 sm:left-8 -translate-x-1/2 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white border-2 border-accent-500 z-10">
                      <span className="text-xl sm:text-2xl font-bold text-accent-500">
                        {step.number}
                      </span>
                    </div>

                    {/* Card */}
                    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 lg:text-center">
                      {/* Number - Desktop (inside card) */}
                      <div className="hidden lg:flex lg:justify-center lg:mb-4">
                        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-accent-50 border-2 border-accent-500 z-10">
                          <span className="text-4xl font-bold text-accent-500">
                            {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="mb-4 lg:mb-4">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 group-hover:bg-primary-100 transition-colors duration-300">
                          <Icon className="h-6 w-6 text-primary-600" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Connector - Desktop (between cards) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-2 top-24 transform translate-x-1/2 z-10">
                      <svg
                        className="h-4 w-4 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
