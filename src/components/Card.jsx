function Card({ icon, title, description }) {
  return (
    <div
      style={{
        flex: "1",
        backgroundColor: "white",
        padding: "32px 24px",
        borderRadius: "12px",
        border: "1px solid #e0e0e0",
      }}
    >
      <div style={{ fontSize: "28px", marginBottom: "16px" }}>{icon}</div>
      <h3
        style={{
          fontSize: "18px",
          color: "#1a1a2e",
          marginBottom: "10px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: "#666",
          fontSize: "14px",
          lineHeight: "1.6",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default Card;
