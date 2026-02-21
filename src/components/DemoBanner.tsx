import { Lock } from "lucide-react";

const DemoBanner = () => {
  return (
    <div className="bg-amber-500 text-black py-2.5 px-4 text-center font-bold text-sm md:text-base tracking-wide z-[100] relative">
      <div className="container mx-auto flex items-center justify-center gap-2 flex-wrap">
        <Lock className="w-4 h-4" />
        <span>🚧 This is a DEMO website — PAY to unlock FULL EXPOSURE 🚧</span>
        <Lock className="w-4 h-4" />
      </div>
    </div>
  );
};

export default DemoBanner;
