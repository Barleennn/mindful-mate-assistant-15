import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { MainSlide } from "@/components/carousel-slides/MainSlide";
import { NotificationsSlide } from "@/components/carousel-slides/NotificationsSlide";
import { RouteAnalysisSlide } from "@/components/carousel-slides/RouteAnalysisSlide";
import { PersonalizedRecommendationsSlide } from "@/components/carousel-slides/PersonalizedRecommendationsSlide";
import { DailySummarySlide } from "@/components/carousel-slides/DailySummarySlide";
import { HealthTrackerSlide } from "@/components/carousel-slides/HealthTrackerSlide";
import { AchievementsSlide } from "@/components/carousel-slides/AchievementsSlide";
import { FinalSlide } from "@/components/carousel-slides/FinalSlide";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#243949] to-[#517fa4]">
      <div className="container mx-auto px-4 py-8">
        <AspectRatio ratio={1} className="bg-background rounded-lg overflow-hidden shadow-xl">
          <Carousel 
            className="w-full h-full" 
            opts={{ 
              loop: true, 
              align: "start",
              skipSnaps: false,
              dragFree: false
            }} 
            autoplay
          >
            <CarouselContent className="h-full">
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
        </AspectRatio>
      </div>
    </div>
  );
};

export default Index;