import React, { useEffect } from "react";
import useInView from "../../hook/useInView";

const FeatureTag = ({ text }) => (
  <span className="px-4 py-2 bg-gray-800/60 text-gray-300 rounded-full border border-gray-700">
    {text}
  </span>
);

const SectionLayout = ({ title, subtitle, description, features, mockup, reverse }) => {
  const [ref, isInView] = useInView(0.5);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-20 md:my-50 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className={reverse ? "order-2" : "order-1"}>
        <div className="inline-block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 mb-6">
          <span className="text-gray-300 text-sm font-medium">{title}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-200 mb-6">{subtitle}</h3>
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-3">
          {features.map((text, idx) => (
            <FeatureTag key={idx} text={text} />
          ))}
        </div>
      </div>
      <div className={reverse ? "order-1" : "order-2"}>{mockup}</div>
    </div>
  );
};

// Custom Mockups for each service

const WebsiteMockup = () => (
    <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden">
        <div className="bg-gray-800 p-4 text-white font-semibold">Home | About | Services | Contact</div>
        <div className="bg-gradient-to-br from-purple-700 to-pink-600 p-6">
            <h2 className="text-white text-xl font-bold">Your Business Website</h2>
            <p className="text-gray-200 mt-2">Fast. Responsive. Optimized.</p>
        </div>
        <div className="p-4 text-gray-300 space-y-2">
            <div className="bg-gray-800 h-4 w-3/4 rounded"></div>
            <div className="bg-gray-800 h-4 w-2/3 rounded"></div>
            <div className="bg-gray-800 h-4 w-1/2 rounded"></div>
        </div>
    </div>
);

const ChatMockup = () => (
    <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
            <div>
                <div className="text-white font-semibold text-sm">AI Assistant</div>
                <div className="text-green-400 text-xs">Online</div>
            </div>
        </div>
        <div className="space-y-3">
            <div className="bg-gray-800 rounded-lg p-3">
                <div className="text-white text-sm font-medium mb-1">How can I assist?</div>
                <div className="text-gray-400 text-xs">Draft emails, summarize meetings, set reminders...</div>
            </div>
            <div className="bg-purple-600 rounded-lg p-3 ml-8">
                <div className="text-white text-sm">Schedule client call at 3 PM</div>
            </div>
            <div className="flex gap-2">
                <button className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">Summarize</button>
                <button className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">Generate Email</button>
            </div>
        </div>
    </div>
);

const AppDevMockup = () => (
    <div className="bg-gray-900/80 rounded-xl border border-gray-800 p-4">
        <div className="bg-gray-800 p-3 rounded-md text-gray-300">
            <div className="text-white font-semibold mb-2">MyFitness App</div>
            <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-4 rounded-lg text-sm">
                <p className="text-white">Welcome back, Alex 👋</p>
                <p className="text-gray-200 mt-1">Steps today: <strong>8,234</strong></p>
            </div>
            <div className="mt-4 space-y-2">
                <div className="bg-gray-700 h-4 w-3/4 rounded"></div>
                <div className="bg-gray-700 h-4 w-2/3 rounded"></div>
            </div>
        </div>
    </div>
);

const SEOMockup = () => (
    <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-gray-300">
        <div className="bg-gray-800 p-3 rounded mb-3">
            <div className="text-sm font-medium text-white">Search Engine Preview</div>
        </div>
        <div className="space-y-2">
            <div className="text-blue-400 underline text-sm">www.example.com/best-seo-agency</div>
            <div className="text-white text-md font-semibold">Best SEO Agency in 2025 | Boost Rankings Fast</div>
            <div className="text-gray-400 text-sm">We help your website rank higher with proven SEO strategies, keyword research, and optimization.</div>
        </div>
    </div>
);

const MarketingMockup = () => (
    <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-4">
        <div className="text-white text-sm font-semibold mb-4">Campaign Analytics</div>
        <div className="space-y-2">
            <div className="bg-purple-500/30 p-3 rounded-md flex justify-between items-center">
                <div className="text-gray-200">CTR</div>
                <div className="text-white font-bold">5.4%</div>
            </div>
            <div className="bg-pink-500/30 p-3 rounded-md flex justify-between items-center">
                <div className="text-gray-200">Leads</div>
                <div className="text-white font-bold">264</div>
            </div>
            <div className="bg-green-500/30 p-3 rounded-md flex justify-between items-center">
                <div className="text-gray-200">Conversions</div>
                <div className="text-white font-bold">72</div>
            </div>
        </div>
    </div>
);

export default function ServicesSection() {

     return (
    <section className="min-h-screen bg-black relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        {/* {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white opacity-10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))} */}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-300 text-sm font-medium">Our Services</span>
          </div>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            We design, develop, and implement automation tools that help you work smarter, not harder
          </p>
        </div>

        <SectionLayout
          title="Website Development"
          subtitle="High-Performance Web Platforms"
          description="From landing pages to full-stack apps, we create fast, responsive, and scalable web solutions tailored to your brand."
          features={["Next.js", "Tailwind CSS", "CMS Integration", "SEO Friendly"]}
          mockup={<WebsiteMockup />}
        />

        <SectionLayout
          title="AI Assistant"
          subtitle="Delegate Daily Tasks"
          description="Let our AI assistants handle repetitive tasks—scheduling, summarizing, automating—so you can focus on what matters."
          features={["Summarization", "Email Drafting", "Task Automation"]}
          mockup={<ChatMockup />}
          reverse
        />

        <SectionLayout
          title="App Development"
          subtitle="Seamless Mobile Experiences"
          description="We craft beautiful, high-performance apps for iOS and Android using cross-platform frameworks and native capabilities."
          features={["React Native", "Flutter", "Cross-platform", "Offline Support"]}
          mockup={<AppDevMockup />}
        />

        <SectionLayout
          title="SEO Optimization"
          subtitle="Climb the Search Ranks"
          description="We audit, optimize, and grow your visibility through technical SEO, keyword targeting, and great content."
          features={["Technical SEO", "Content Optimization", "Keyword Research", "Backlinks"]}
          mockup={<SEOMockup />}
          reverse
        />

        <SectionLayout
          title="Digital Marketing"
          subtitle="Reach & Convert Your Audience"
          description="Our campaigns are built for performance—designed to engage, convert, and scale through paid ads and content strategies."
          features={["PPC", "Analytics", "Email Funnels", "Content Creation"]}
          mockup={<MarketingMockup />}
        />
      </div>
    </section>
  );
}