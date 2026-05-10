function WaitlistButton({ onJoin }) {
  return (
    <button
      onClick={onJoin}
      className="bg-blue-500 hover:bg-blue-600 text-white px-7 py-3 rounded-lg text-base cursor-pointer"
    >
      Join waitlist
    </button>
  );
}

export default WaitlistButton;
