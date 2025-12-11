import EnquiryAndSimilarSection from "../components/sections/project-detail/EnquiryAndSimilarSection";
import LocationMapSection from "../components/sections/project-detail/LocationMapSection";
import ProjectDetailHero from "../components/sections/project-detail/ProjectDetailHero";
import ProjectGallerySection from "../components/sections/project-detail/ProjectGallerySection";
import ProjectHighlightSection from "../components/sections/project-detail/ProjectHighlights";
import ProjectOverviewSection from "../components/sections/project-detail/ProjectOverviewSection";
import QuickFactsBand from "../components/sections/project-detail/QuickFactsBand";
import ScopeAndHighlightsSection from "../components/sections/project-detail/ScopeAndHighlightsSection";
 

export default function ProjectDetailPage() {
  return (
    <>
      <ProjectDetailHero/>
      <ProjectHighlightSection/>
      <QuickFactsBand/>
      <ProjectOverviewSection/>
      <ScopeAndHighlightsSection/>
      <ProjectGallerySection/>
      <LocationMapSection/>
      <EnquiryAndSimilarSection/>
    </>
  );
}