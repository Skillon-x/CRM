export const FeaturesSection = () => {
    const features = [
      {
        title: "Optimise expense",
        description: "Bring harmony to team expenses with budget limits and real-time monitoring. Freedom for your staff. Peace of mind for you."
      },
      {
        title: "Finance management",
        description: "Gain real-time sales insights and make data-driven decisions effortlessly. Monitor revenue trends and track your business growth seamlessly."
      },
      {
        title: "Sales Management",
        description: "Take control of your sales performance with our powerful Sales Dashboard—your all-in-one solution for tracking revenue, monitoring trends, and making data-driven decisions."
      },
      {
        title: "Marketing",
        description: "Drive impactful campaigns with real-time marketing analytics. Analyze audience behavior and optimize engagement strategies."
      }
    ];
  
    return (
      <section id="features" className="min-h-screen py-20 bg-[#0A1845]/20 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12">
            Powerful features to help you close sales faster
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-blue-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };