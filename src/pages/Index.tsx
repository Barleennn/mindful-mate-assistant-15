import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { MainSlide } from "@/components/carousel-slides/MainSlide";
import { NotificationsSlide } from "@/components/carousel-slides/NotificationsSlide";
import { RouteAnalysisSlide } from "@/components/carousel-slides/RouteAnalysisSlide";
import { PersonalizedRecommendationsSlide } from "@/components/carousel-slides/PersonalizedRecommendationsSlide";
import { DailySummarySlide } from "@/components/carousel-slides/DailySummarySlide";
import { HealthTrackerSlide } from "@/components/carousel-slides/HealthTrackerSlide";
import { AchievementsSlide } from "@/components/carousel-slides/AchievementsSlide";
import { FinalSlide } from "@/components/carousel-slides/FinalSlide";
import { useEffect } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";
import { toast } from "sonner";

const Index = () => {
  useEffect(() => {
    const generateVideo = async () => {
      try {
        toast.info("Начинаем создание видео...");
        
        const ffmpeg = new FFmpeg();
        await ffmpeg.load({
          coreURL: await toBlobURL(`/ffmpeg-core.js`, "text/javascript"),
          wasmURL: await toBlobURL(`/ffmpeg-core.wasm`, "application/wasm"),
        });

        // Создаем последовательность кадров
        const slides = document.querySelectorAll('.embla__slide');
        let frameCount = 0;

        for (const slide of slides) {
          const canvas = await html2canvas(slide as HTMLElement, {
            width: 1080,
            height: 1080,
            scale: 2
          });
          
          const blob = await new Promise<Blob>((resolve) => 
            canvas.toBlob((blob) => resolve(blob!), 'image/jpeg', 1.0)
          );
          
          const arrayBuffer = await blob.arrayBuffer();
          ffmpeg.writeFile(`frame${frameCount.toString().padStart(4, '0')}.jpg`, new Uint8Array(arrayBuffer));
          frameCount++;
        }

        // Создаем видео из кадров
        await ffmpeg.exec([
          '-framerate', '1',
          '-i', 'frame%04d.jpg',
          '-c:v', 'libx264',
          '-pix_fmt', 'yuv420p',
          '-vf', 'scale=1080:1080',
          'output.mp4'
        ]);

        // Скачиваем готовое видео
        const data = await ffmpeg.readFile('output.mp4');
        const videoBlob = new Blob([data], { type: 'video/mp4' });
        const videoUrl = URL.createObjectURL(videoBlob);
        
        const a = document.createElement('a');
        a.href = videoUrl;
        a.download = 'presentation.mp4';
        a.click();
        
        toast.success("Видео успешно создано и скачано!");
      } catch (error) {
        console.error('Ошибка при создании видео:', error);
        toast.error("Произошла ошибка при создании видео");
      }
    };

    generateVideo();
  }, []);

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