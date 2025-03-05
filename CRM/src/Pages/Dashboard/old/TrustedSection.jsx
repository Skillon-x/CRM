export const TrustedSection = () => {
    const companies = ['Layers', 'Sisyphus', 'Circooles', 'Catalog', 'Quotient'];
    
    return (
      <section id="trusted" className="min-h-screen py-20 bg-gradient-to-b from-transparent via-[#0A1845]/10 to-transparent">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Many Established Companies
          </h2>
          <p className="text-blue-200 mb-12">
            20+ Businesses and Companies uses Converge for their CRM Platform
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  