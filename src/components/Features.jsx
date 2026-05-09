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
    <section
      style={{ padding: "80px 60px", maxWidth: "1000px", margin: "0 auto" }}
    >
      <h2
        style={{
          fontSize: "32px",
          color: "#1a1a2e",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Everything you need to launch
      </h2>
      <div style={{ display: "flex", gap: "24px" }}>
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
