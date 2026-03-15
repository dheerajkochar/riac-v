'use client';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#f5f3ee] py-20 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold font-syne text-[#1a1a1a] leading-tight">
            Turn Your Ideas Into Reality
          </h1>
          
          <p className="text-lg text-[#666666] font-dm-sans leading-relaxed">
            Connect with professors who share your passion. Get mentorship, validation, and resources for your startup or research idea.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => scrollToSection('submit-form')}
              className="bg-[#2d6be4] hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition font-dm-sans font-medium"
            >
              Submit My Idea
            </button>
            <button
              onClick={() => scrollToSection('professor-directory')}
              className="border-2 border-[#2d6be4] text-[#2d6be4] hover:bg-blue-50 px-8 py-3 rounded-lg transition font-dm-sans font-medium"
            >
              Browse Professors
            </button>
          </div>
        </div>

        {/* Right Side - Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="text-4xl font-bold font-syne text-[#2d6be4]">234+</div>
            <div className="text-gray-600 font-dm-sans mt-2">Professors</div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="text-4xl font-bold font-syne text-[#2d6be4]">30+</div>
            <div className="text-gray-600 font-dm-sans mt-2">Research Fields</div>
          </div>
     
        </div>
      </div>
    </section>
  );
}
