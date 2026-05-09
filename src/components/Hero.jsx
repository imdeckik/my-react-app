import WaitlistButton from "./WaitlistButton";

function Hero({ onJoin }) {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "100px 60px",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          fontSize: "56px",
          color: "#1a1a2e",
          lineHeight: "1.2",
          marginBottom: "20px",
        }}
      >
        Ship your startup <span style={{ color: "#4a90e2" }}>faster</span>
      </h1>
      <p
        style={{
          fontSize: "18px",
          color: "#666",
          lineHeight: "1.7",
          marginBottom: "40px",
        }}
      >
        The toolkit for solo founders who want to build and launch without a
        team.
      </p>
      <WaitlistButton onJoin={onJoin} />
    </section>
  );
}

export default Hero;
