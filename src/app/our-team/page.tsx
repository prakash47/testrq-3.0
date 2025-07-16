import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";

const TeamHeroSection = dynamic(
  () => import("@/components/sections/TeamHeroSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const TeamLeadershipSection = dynamic(
  () => import("@/components/sections/TeamLeadershipSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const TeamMembersSection = dynamic(
  () => import("@/components/sections/TeamMembersSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const TeamCultureSection = dynamic(
  () => import("@/components/sections/TeamCultureSection"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

const HomeReadyToElevate = dynamic(
  () => import("@/components/sections/HomeReadyToElevate"),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  }
);

export default function OurTeam() {
  return (
    <div>
      <MainLayout>
        <TeamHeroSection />
        <TeamLeadershipSection />
        <TeamMembersSection />
        <TeamCultureSection />
        <HomeReadyToElevate />
      </MainLayout>
    </div>
  );
}

