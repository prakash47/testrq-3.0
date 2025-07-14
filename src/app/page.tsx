import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";

const HomeHeroSection = dynamic(
  () => import("@/components/sections/HomeHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const HomeSection2 = dynamic(
  () => import("@/components/sections/HomeSection2"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const HomeComprehensiveSoftwareTesting = dynamic(
  () => import("@/components/sections/HomeComprehensiveSoftwareTesting"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function Home() {
  return (
    <div>
      <MainLayout>
        <HomeHeroSection />
        <HomeSection2 />
        <HomeComprehensiveSoftwareTesting />
      </MainLayout>
    </div>
  );
}
