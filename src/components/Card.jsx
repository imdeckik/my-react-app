function Card({ icon, title, description, highlight = false }) {
  return (
    <div
      className={`flex-1 bg-white p-8 rounded-xl ${
        highlight ? "border-2 border-blue-500" : "border border-gray-200"
      }`}
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      {highlight && (
        <span className="inline-block mt-3 bg-blue-50 text-blue-500 text-xs font-medium px-3 py-1 rounded-full">
          Most popular
        </span>
      )}
    </div>
  );
}

export default Card;
