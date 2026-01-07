import { Layout, Globe, Code2, Zap, Handshake, ArrowRight } from 'lucide-react';

export interface ServicesProps {
  // Add props as needed
}

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  isRush?: boolean;
  isPartnership?: boolean;
}

const services: ServiceCard[] = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Landing Pages",
    description: "High-converting landing pages that turn visitors into customers. Perfect for product launches and campaigns.",
    price: "$1,000",
    isRush: true,
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Business Websites",
    description: "Complete business websites with modern design, responsive layouts, and SEO optimization.",
    price: "$3,000",
    isRush: true,
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Web Applications",
    description: "Custom web applications built with React, authentication, databases, and integrations.",
    price: "$8,000+",
    isRush: true,
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Rush Delivery",
    description: "Need it faster? Get any project delivered in 50% less time.",
    price: "+50%",
    isRush: false,
  },
  {
    icon: <Handshake className="w-8 h-8" />,
    title: "Partnership",
    description: "For promising startups: flexible equity + cash arrangements. Let's grow together.",
    price: "Custom",
    isPartnership: true,
  },
];

const ServiceCardComponent: React.FC<{ service: ServiceCard }> = ({ service }) => {
  const isSpecialCard = service.isPartnership;

  return (
    <div
      className={`relative group rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        isSpecialCard
          ? 'bg-gradient-to-br from-primary-600 to-accent-600 text-white'
          : 'bg-white border border-gray-200 hover:border-gray-300'
      }`}
    >
      {/* Rush Available Badge */}
      {service.isRush && (
        <div className="absolute -top-3 -right-3 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          Rush Available
        </div>
      )}

      {/* Icon */}
      <div
        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 ${
          isSpecialCard
            ? 'bg-white/20'
            : 'bg-primary-100 text-primary-600'
        }`}
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3
        className={`text-xl font-semibold mb-2 ${
          isSpecialCard ? 'text-white' : 'text-gray-900'
        }`}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className={`text-sm mb-4 leading-relaxed ${
          isSpecialCard ? 'text-primary-100' : 'text-gray-600'
        }`}
      >
        {service.description}
      </p>

      {/* Price */}
      <div className="flex items-center justify-between">
        <span
          className={`text-2xl font-bold ${
            isSpecialCard ? 'text-white' : 'text-gray-900'
          }`}
        >
          {service.price}
        </span>

        {/* Learn More Link */}
        <a
          href="#contact"
          className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
            isSpecialCard
              ? 'text-white hover:text-primary-200'
              : 'text-primary-600 hover:text-primary-700'
          }`}
        >
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

const Services: React.FC<ServicesProps> = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional development at startup-friendly prices
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCardComponent key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
