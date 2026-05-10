import { useState } from "react";

function Waitlist() {
  const [email, setEmail] = useState("");
  const [emails, setEmails] = useState([]);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  function handleSubmit() {
    if (email === "") {
      setMessage("Please enter your email address.");
      setMessageType("error");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setMessage("Please enter a valid email.");
      setMessageType("error");
      return;
    }

    if (emails.includes(email)) {
      setMessage("You're already on the waitlist!");
      setMessageType("error");
      return;
    }

    setEmails([...emails, email]);
    setMessage(`You're in! We'll be in touch at ${email}`);
    setMessageType("success");
    setEmail("");
  }

  return (
    <div
      style={{
        textAlign: "center",
        padding: "80px 60px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          color: "#1a1a2e",
          marginBottom: "16px",
        }}
      >
        Join the waitlist
      </h2>

      <p
        style={{
          color: "#666",
          marginBottom: "32px",
          fontSize: "18px",
        }}
      >
        {emails.length === 0
          ? "Be the first to know when we launch."
          : `${emails.length} ${
              emails.length === 1 ? "person" : "people"
            } already waiting.`}
      </p>

      <div
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
          marginBottom: "16px",
        }}
      >
        <input
          type="email"
          value={email}
          onChange={function (e) {
            setEmail(e.target.value);
          }}
          onKeyDown={function (e) {
            if (e.key === "Enter") handleSubmit();
          }}
          placeholder="Enter your email address"
          style={{
            padding: "14px 20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            fontSize: "16px",
            width: "280px",
            outline: "none",
          }}
        />
        <button
          onClick={handleSubmit}
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
          Join
        </button>
      </div>

      {message && (
        <p
          style={{
            color: messageType === "success" ? "#27ae60" : "#e74c3c",
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          {message}
        </p>
      )}

      {emails.length > 0 && (
        <div style={{ marginTop: "40px", textAlign: "left" }}>
          <h3
            style={{ fontSize: "16px", color: "#1a1a2e", marginBottom: "12px" }}
          >
            On the waitlist:
          </h3>
          {emails.map(function (e) {
            return (
              <div
                key={e}
                style={{
                  padding: "10px 16px",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  border: "1px solid #eee",
                  marginBottom: "8px",
                  fontSize: "14px",
                  color: "#555",
                }}
              >
                {e}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Waitlist;
