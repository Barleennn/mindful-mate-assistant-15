import { ListCheck, Clock, Activity, Calendar, MapPin, Route } from "lucide-react";
import { CarouselItem } from "@/components/ui/carousel";
import { useEffect, useRef } from "react";

export const DailySummarySlide = () => {
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            iconRefs.current.forEach((icon) => {
              if (icon) {
                icon.classList.add("animate-icon-bounce-rotate");
              }
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (slideRef.current) {
      observer.observe(slideRef.current);
    }

    const handleAnimationEnd = (element: HTMLDivElement) => {
      element.classList.remove("animate-icon-bounce-rotate");
    };

    iconRefs.current.forEach((icon) => {
      if (icon) {
        icon.addEventListener("animationend", () => handleAnimationEnd(icon));
      }
    });

    return () => {
      if (slideRef.current) {
        observer.unobserve(slideRef.current);
      }
      iconRefs.current.forEach((icon) => {
        if (icon) {
          icon.removeEventListener("animationend", () => handleAnimationEnd(icon));
        }
      });
    };
  }, []);

  return (
    <CarouselItem className="h-screen flex items-center justify-center" ref={slideRef}>
      <div className="text-white space-y-8 p-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 animate-fade-up">
            <div className="flex items-center gap-4 mb-4">
              <div ref={el => iconRefs.current[0] = el}>
                <ListCheck className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold">Итоги дня</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div ref={el => iconRefs.current[1] = el}>
                  <Clock className="h-5 w-5 text-blue-400" />
                </div>
                <span>8 часов продуктивной работы</span>
              </div>
              <div className="flex items-center gap-2">
                <div ref={el => iconRefs.current[2] = el}>
                  <Activity className="h-5 w-5 text-green-400" />
                </div>
                <span>12,000 шагов пройдено</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 animate-fade-up">
            <div className="flex items-center gap-4 mb-4">
              <div ref={el => iconRefs.current[3] = el}>
                <Calendar className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold">План на завтра</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div ref={el => iconRefs.current[4] = el}>
                  <MapPin className="h-5 w-5 text-yellow-400" />
                </div>
                <span>Встреча в офисе (10:00)</span>
              </div>
              <div className="flex items-center gap-2">
                <div ref={el => iconRefs.current[5] = el}>
                  <Route className="h-5 w-5 text-blue-400" />
                </div>
                <span>Новый маршрут для пробежки</span>
              </div>
              <div className="flex items-center gap-2">
                <div ref={el => iconRefs.current[6] = el}>
                  <Activity className="h-5 w-5 text-green-400" />
                </div>
                <span>Цель: 15,000 шагов</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};