import Card from "./Card";

function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Ship in days",
      description:
        "Pre-built components and templates so you spend time on your product, not boilerplate.",
      highlight: false,
    },
    {
      icon: "🔒",
      title: "Auth built in",
      description:
        "Login, signup, and user management handled out of the box. No configuration needed.",
      highlight: true,
    },
    {
      icon: "📈",
      title: "Analytics ready",
      description:
        "Know exactly how users are using your product from day one.",
      highlight: false,
    },
  ];

  return (
    <section className="py-20 px-16 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
        Everything you need to launch
      </h2>
      <div className="flex gap-6">
        {features.map(function (feature) {
          return (
            <Card
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              highlight={feature.highlight}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Features;
