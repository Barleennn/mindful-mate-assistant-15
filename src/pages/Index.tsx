import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { MainSlide } from "@/components/carousel-slides/MainSlide";
import { NotificationsSlide } from "@/components/carousel-slides/NotificationsSlide";
import { RouteAnalysisSlide } from "@/components/carousel-slides/RouteAnalysisSlide";
import { PersonalizedRecommendationsSlide } from "@/components/carousel-slides/PersonalizedRecommendationsSlide";
import { DailySummarySlide } from "@/components/carousel-slides/DailySummarySlide";
import { HealthTrackerSlide } from "@/components/carousel-slides/HealthTrackerSlide";
import { AchievementsSlide } from "@/components/carousel-slides/AchievementsSlide";
import { FinalSlide } from "@/components/carousel-slides/FinalSlide";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#243949] to-[#517fa4]">
      <Carousel className="w-full" opts={{ loop: true, align: "start" }} autoplay>
        <CarouselContent>
          <MainSlide />
          <NotificationsSlide />
          <RouteAnalysisSlide />
          <PersonalizedRecommendationsSlide />
          <DailySummarySlide />
          <HealthTrackerSlide />
          <AchievementsSlide />
          <FinalSlide />
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Index;