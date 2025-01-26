import { Trophy, Target, Users, Calendar } from "lucide-react";
import { CarouselItem } from "@/components/ui/carousel";

export const AchievementsSlide = () => {
  return (
    <CarouselItem className="h-screen flex items-center justify-center">
      <div className="text-white space-y-8 p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Достижения и Челленджи</h2>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm space-y-4">
            <div className="flex items-center space-x-3">
              <Trophy className="h-6 w-6 text-yellow-400" />
              <h3 className="text-xl font-semibold">Достижения</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
                <span>Ранняя пташка</span>
                <span className="text-yellow-400">+50 XP</span>
              </div>
              <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
                <span>Марафонец</span>
                <span className="text-yellow-400">+100 XP</span>
              </div>
              <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
                <span>Исследователь</span>
                <span className="text-yellow-400">+75 XP</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm space-y-4">
            <div className="flex items-center space-x-3">
              <Target className="h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-semibold">Активные челленджи</h3>
            </div>
            <div className="space-y-3">
              <div className="relative bg-white/5 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <span>10,000 шагов в день</span>
                  <span>7/30 дней</span>
                </div>
                <div className="mt-2 h-2 bg-white/10 rounded-full">
                  <div className="h-full w-1/4 bg-blue-400 rounded-full"></div>
                </div>
              </div>
              <div className="relative bg-white/5 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <span>Новые места</span>
                  <span>3/5 мест</span>
                </div>
                <div className="mt-2 h-2 bg-white/10 rounded-full">
                  <div className="h-full w-3/5 bg-blue-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm flex items-center space-x-4">
            <Users className="h-8 w-8 text-purple-400" />
            <div>
              <h4 className="font-semibold">Социальные достижения</h4>
              <p className="text-sm text-gray-300">Делитесь маршрутами с друзьями</p>
            </div>
          </div>
          
          <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm flex items-center space-x-4">
            <Calendar className="h-8 w-8 text-green-400" />
            <div>
              <h4 className="font-semibold">Календарь активностей</h4>
              <p className="text-sm text-gray-300">Планируйте свои маршруты</p>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};