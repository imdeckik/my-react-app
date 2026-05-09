function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        backgroundColor: "white",
        borderBottom: "1px solid #eee",
      }}
    >
      <div style={{ fontSize: "22px", fontWeight: "700", color: "#1a1a2e" }}>
        Momentum
      </div>
      <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
        <a href="#" style={{ color: "#555", textDecoration: "none" }}>
          Features
        </a>
        <a href="#" style={{ color: "#555", textDecoration: "none" }}>
          Pricing
        </a>
        <a
          href="#"
          style={{
            backgroundColor: "#1a1a2e",
            color: "white",
            padding: "10px 20px",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
