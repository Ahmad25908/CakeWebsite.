// app/about/page.tsx
import AboutBanner from '@/components/about/AboutBanner';
import StorySection from '@/components/about/StorySection';
import ValuesSection from '@/components/about/ValuesSection';
import HighlightsGallery from '@/components/about/HighlightsGallery';
import TeamSection from '@/components/about/TeamSection';
import ChooseUsSection from '@/components/about/ChooseUsSection';

export default function AboutPage() {
  return (
    <main className="bg-[#f7f0ff] text-[#4b2e5d] font-inter">
      <AboutBanner />
      <StorySection />
      <ValuesSection />
      <HighlightsGallery />
      <TeamSection />
      <ChooseUsSection />
    </main>
  );
}