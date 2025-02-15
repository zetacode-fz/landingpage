const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-auto"
              src="https://placehold.co/200x80?text=MLWay"
              alt="MLWay Logo"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
