'use client';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold font-syne text-[#1a1a1a] text-center mb-4">
          How It Works
        </h2>
       

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-[#f5f3ee] p-8 rounded-xl border-t-4 border-[#2d6be4]">
            <div className="text-5xl font-bold font-syne text-[#2d6be4] mb-4">01</div>
            <h3 className="text-2xl font-bold font-syne text-[#1a1a1a] mb-4">
              Describe Your Idea
            </h3>
            <p className="text-[#666666] font-dm-sans leading-relaxed">
              Share your startup concept or research idea with specific details about your vision.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#f5f3ee] p-8 rounded-xl border-t-4 border-[#2d6be4]">
            <div className="text-5xl font-bold font-syne text-[#2d6be4] mb-4">02</div>
            <h3 className="text-2xl font-bold font-syne text-[#1a1a1a] mb-4">
              Choose Your Field
            </h3>
            <p className="text-[#666666] font-dm-sans leading-relaxed">
              Select one or more research fields that align with your idea.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#f5f3ee] p-8 rounded-xl border-t-4 border-[#2d6be4]">
            <div className="text-5xl font-bold font-syne text-[#2d6be4] mb-4">03</div>
            <h3 className="text-2xl font-bold font-syne text-[#1a1a1a] mb-4">
              Get Matched & Connect
            </h3>
            <p className="text-[#666666] font-dm-sans leading-relaxed">
              Instantly see professors in your field and reach out to discuss collaboration.
            </p>
          </div>
        </div>
<p className="text-center text-[#666666] font-dm-sans mb-16">
          All information is taken from SVNIT official website. For any suggestions or changes, please let us know.
        </p>

        <div className="flex justify-center mt-1">
          <a
            href="mailto:rias@svnit.ac.in"
            className="px-4 py-3 bg-[#2d6be4] text-white font-syne font-bold rounded-lg hover:bg-[#1e4fa8] transition-colors duration-300"
          >
            Suggestion
          </a>
        </div>
      </div>
    </section>
  );
}
