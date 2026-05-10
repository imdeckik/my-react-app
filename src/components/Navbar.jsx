function Navbar() {
  return (
    <nav className="flex justify-between items-center px-16 py-5 bg-white border-b border-gray-100">
      <div className="text-xl font-bold text-gray-900">BuildFast</div>
      <div className="flex items-center gap-8">
        <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">
          Features
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">
          Pricing
        </a>
        <a
          href="#"
          className="bg-gray-900 text-white px-5 py-2 rounded-md text-sm hover:bg-gray-700"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
