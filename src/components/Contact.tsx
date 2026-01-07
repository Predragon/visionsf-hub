import { useState } from 'react';
import { Mail, Calendar, Clock, Send, CheckCircle } from 'lucide-react';

export interface ContactProps {
  // Add props as needed
}

const Contact: React.FC<ContactProps> = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.target as HTMLFormElement;
    if (form.checkValidity()) {
      // For demo purposes, show success message
      // In production, Formspree handles the submission
      setIsSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Start Your Project
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tell us about your vision
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600 max-w-sm">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-primary-600 hover:text-primary-700 font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/your-form-id"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Hidden field for form identification */}
                <input type="hidden" name="_form_name" value="visionsf-contact" />

                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors placeholder-gray-400"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors placeholder-gray-400"
                  />
                </div>

                {/* Project Type Dropdown */}
                <div>
                  <label
                    htmlFor="project-type"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="project-type"
                    name="project_type"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white text-gray-900"
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>
                    <option value="landing-page">Landing Page</option>
                    <option value="website">Website</option>
                    <option value="web-app">Web App</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Budget Range Dropdown */}
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Budget Range <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white text-gray-900"
                  >
                    <option value="" disabled>
                      Select your budget
                    </option>
                    <option value="under-5k">&lt;$5K</option>
                    <option value="5k-15k">$5K-$15K</option>
                    <option value="15k-30k">$15K-$30K</option>
                    <option value="30k-plus">$30K+</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message <span className="text-gray-400">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors placeholder-gray-400 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  Start Your Project
                </button>
              </form>
            )}
          </div>

          {/* Right Column - Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Email Contact */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Email Us
                </h3>
                <a
                  href="mailto:hello@visionsf.com"
                  className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  hello@visionsf.com
                </a>
              </div>
            </div>

            {/* Calendar Link */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Book a Call
                </h3>
                <a
                  href="#"
                  className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  Schedule a call
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Quick Response
                </h3>
                <p className="text-gray-600">
                  We respond within 24 hours
                </p>
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="mt-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-3">
                Not sure where to start?
              </h3>
              <p className="text-primary-100 mb-4">
                No worries! Schedule a free consultation and we'll help you figure out the best approach for your project.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white text-primary-600 font-semibold px-5 py-3 rounded-lg hover:bg-primary-50 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
