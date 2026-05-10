function Hero({ onJoin }) {
  return (
    <section className="text-center py-24 px-16 max-w-2xl mx-auto">
      <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-5">
        Ship your startup <span className="text-blue-500">faster</span>
      </h1>
      <p className="text-lg text-gray-500 leading-relaxed mb-10">
        The toolkit for solo founders who want to build and launch without a
        team.
      </p>
      <div className="flex gap-4 justify-center">
        <button
          onClick={onJoin}
          className="bg-blue-500 hover:bg-blue-600 text-white px-7 py-3 rounded-lg text-base cursor-pointer"
        >
          Start for free
        </button>
        <button className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-7 py-3 rounded-lg text-base cursor-pointer">
          See how it works
        </button>
      </div>
    </section>
  );
}

export default Hero;
