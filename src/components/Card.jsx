function Card({ icon, title, description, highlight }) {
  return (
    <div
      style={{
        flex: "1",
        backgroundColor: "white",
        padding: "32px 24px",
        borderRadius: "12px",
        border: highlight ? "2px solid #4a90e2" : "1px solid #e0e0e0",
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
      {highlight && (
        <span
          style={{
            display: "inline-block",
            marginTop: "12px",
            backgroundColor: "#e8f0fe",
            color: "#4a90e2",
            fontSize: "12px",
            fontWeight: "500",
            padding: "4px 10px",
            borderRadius: "99px",
          }}
        >
          Most popular
        </span>
      )}
    </div>
  );
}

export default Card;
