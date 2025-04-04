
const StatsSection = () => {
  const stats = [
    { number: "25,000+", label: "Students" },
    { number: "2,500+", label: "Faculty Members" },
    { number: "150+", label: "Degree Programs" },
    { number: "200+", label: "Partner Organizations" }
  ];

  return (
    <section className="bg-bisht-navy text-white py-16">
      <div className="page-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-bisht-gold mb-2">{stat.number}</div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
