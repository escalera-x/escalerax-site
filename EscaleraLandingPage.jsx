export default function EscaleraLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <img src="/EscaleraX.jpeg" alt="EscaleraX Logo" className="h-20 mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Only Pay When You Scale</h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
          Performance-Based Brand Systems: Ads, Funnels, Automation & AI — all built to profit.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-2xl shadow hover:bg-gray-100">
          Book a Free Scaling Audit
        </button>
      </section>

      {/* Problem Section */}
      <section className="px-6 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-center">The Problem</h2>
        <ul className="max-w-3xl mx-auto space-y-4 text-lg list-disc list-inside">
          <li>Brands overspend on agencies that don’t deliver ROI.</li>
          <li>Funnels break down, leaving leads cold.</li>
          <li>Founders wear too many hats and can’t scale efficiently.</li>
        </ul>
      </section>

      {/* Solution Section */}
      <section className="px-6 py-16 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center">The EscaleraX Solution</h2>
        <p className="max-w-3xl mx-auto text-center text-lg mb-6">
          We build and manage profit-focused systems with a simple structure:
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8 text-center">
          <div className="bg-blue-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">1. Small Setup Fee</h3>
            <p>Get onboarded and systems built without huge agency retainers.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">2. Shared Profit Model</h3>
            <p>You only pay a % of the profits we help generate. No results = no payout.</p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="px-6 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-center">What You Get</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-2">📈 Paid Ads</h3>
            <p>Meta, Google, TikTok campaigns that convert cold traffic.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-2">🤖 Funnels + Automation</h3>
            <p>Optimized flows to convert and nurture leads automatically.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-2">📬 Email + SMS</h3>
            <p>Automated campaigns that bring customers back again and again.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-2">💰 Monetization Strategy</h3>
            <p>We build a system that actually turns traffic into profit.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Scale Together</h2>
        <p className="mb-6 text-lg">Ready to grow? Book a free call and let’s map your scale system.</p>
        <a href="https://calendly.com/edgar-guerrero-escalerax" target="_blank" rel="noopener noreferrer">
          <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-2xl shadow hover:bg-gray-100">
            Book My Free Audit
          </button>
        </a>
      </section>
    </div>
  );
}
