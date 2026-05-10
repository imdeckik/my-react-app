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
    <div className="text-center py-20 px-16 max-w-xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Join the waitlist
      </h2>

      <p className="text-gray-500 text-lg mb-8">
        {emails.length === 0
          ? "Be the first to know when we launch."
          : `${emails.length} ${
              emails.length === 1 ? "person" : "people"
            } already waiting.`}
      </p>

      <div className="flex gap-3 justify-center mb-4">
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
          className="px-5 py-3 border border-gray-200 rounded-lg text-base w-72 outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white px-7 py-3 rounded-lg text-base cursor-pointer"
        >
          Join
        </button>
      </div>

      {message && (
        <p
          className={`text-sm font-medium ${
            messageType === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}

      {emails.length > 0 && (
        <div className="mt-10 text-left">
          <h3 className="text-base font-semibold text-gray-900 mb-3">
            On the waitlist:
          </h3>
          {emails.map(function (e) {
            return (
              <div
                key={e}
                className="px-4 py-3 bg-white rounded-lg border border-gray-100 mb-2 text-sm text-gray-500"
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
