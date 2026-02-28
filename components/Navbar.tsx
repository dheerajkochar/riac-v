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
      <div className="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold font-syne text-white">
            RESEARCH AND INNOVATION AFFAIRS<span className="text-[#2d6be4]">COUNCIL</span>
          </h1>
        </div>
        
        <ul className="hidden md:flex gap-8">
          <li>
            <button
              onClick={() => scrollToSection('submit-form')}
              className="text-gray-300 hover:text-white transition font-dm-sans"
            >
              Submit Idea
            </button>
          </li>
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

        <button
          onClick={() => scrollToSection('submit-form')}
          className="bg-[#2d6be4] hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition font-dm-sans font-medium"
        >
          Find a Mentor
        </button>
      </div>
    </nav>
  );
}
