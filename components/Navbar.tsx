'use client';

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0d0d12] shadow-lg">
      <div className="max-w-6xl mx-auto px-8 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold font-syne text-white">
            RESEARCH AND INNOVATION AFFAIRS <span className="text-[#2d6be4]">COUNCIL</span>
          </h1>
        </div>
        
        <ul className="hidden md:flex gap-8">
    
          <li>
            <button
              onClick={() => scrollToSection('professor-directory')}
              className="text-gray-300 hover:text-white transition font-dm-sans"
            >
              Browse Professors
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-300 hover:text-white transition font-dm-sans"
            >
              How It Works
            </button>
          </li>
        </ul>

       
      </div>
    </nav>
  );
}
