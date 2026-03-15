import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import SubmitIdea from '@/components/SubmitIdea';
import ProfessorDirectory from '@/components/ProfessorDirectory';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <ProfessorDirectory />
    </main>
  );
}
