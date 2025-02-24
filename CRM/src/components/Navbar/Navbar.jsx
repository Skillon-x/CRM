export const Navbar = () => {
    return (
      <nav className="fixed top-0 w-full bg-[#0A1845]/30 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">Logo</div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-white hover:text-blue-400">Features</a>
              <a href="#how-it-works" className="text-white hover:text-blue-400">How It Works</a>
              <a href="#trusted" className="text-white hover:text-blue-400">Trusted By</a>
            </div>
          </div>
        </div>
      </nav>
    );
  };