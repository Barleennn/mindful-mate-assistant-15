import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { MainSlide } from "@/components/carousel-slides/MainSlide";
import { NotificationsSlide } from "@/components/carousel-slides/NotificationsSlide";
import { RouteAnalysisSlide } from "@/components/carousel-slides/RouteAnalysisSlide";
import { PersonalizedRecommendationsSlide } from "@/components/carousel-slides/PersonalizedRecommendationsSlide";
import { DailySummarySlide } from "@/components/carousel-slides/DailySummarySlide";
import { HealthTrackerSlide } from "@/components/carousel-slides/HealthTrackerSlide";
import { AchievementsSlide } from "@/components/carousel-slides/AchievementsSlide";
import { FinalSlide } from "@/components/carousel-slides/FinalSlide";
import { useEffect, useRef } from "react";
import RecordRTC from "recordrtc";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const startRecording = async () => {
      try {
        console.log("Starting video recording...");
        
        const stream = await navigator.mediaDevices.getDisplayMedia({
          video: {
            width: 1080,
            height: 1080,
            frameRate: 30
          }
        });

        const recorder = new RecordRTC(stream, {
          type: 'video',
          mimeType: 'video/webm;codecs=h264',
          frameRate: 30,
          quality: 100,
          videoBitsPerSecond: 8000000, // 8 Mbps for high quality
        });

        recorder.startRecording();

        // Wait for all slides to play (8 slides * 5 seconds each)
        await new Promise(resolve => setTimeout(resolve, 40000));

        recorder.stopRecording(() => {
          console.log("Recording stopped, preparing download...");
          const blob = recorder.getBlob();
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = url;
          a.download = 'presentation.webm';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          stream.getTracks().forEach(track => track.stop());
        });

        toast({
          title: "Запись началась",
          description: "Видео будет автоматически скачано после завершения презентации",
        });
      } catch (error) {
        console.error("Error recording video:", error);
        toast({
          variant: "destructive",
          title: "Ошибка записи",
          description: "Не удалось начать запись видео",
        });
      }
    };

    // Start recording when the page loads
    startRecording();
  }, [toast]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#243949] to-[#517fa4]">
      <div className="aspect-square max-w-[1080px] mx-auto" ref={carouselRef}>
        <Carousel className="w-full h-full" opts={{ loop: true, align: "start" }} autoplay>
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
    </div>
  );
};

export default Index;