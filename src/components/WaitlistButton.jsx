function WaitlistButton({ onJoin }) {
  return (
    <button
      onClick={onJoin}
      style={{
        backgroundColor: "#4a90e2",
        color: "white",
        border: "none",
        padding: "14px 28px",
        borderRadius: "8px",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      Join waitlist
    </button>
  );
}

export default WaitlistButton;
