import { Lock } from "lucide-react";

const DemoBanner = () => {
  return (
    <div className="bg-amber-500 text-black py-1 md:py-2.5 px-3 md:px-4 text-center font-bold text-xs md:text-base tracking-wide z-[100] relative">
      <div className="container mx-auto flex items-center justify-center gap-1 md:gap-2 flex-nowrap overflow-hidden">
        <Lock className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
        <span className="truncate">🚧 This is a DEMO website — PAY to unlock FULL EXPOSURE 🚧</span>
        <Lock className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
      </div>
    </div>
  );
};

export default DemoBanner;
