
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1470813740244-df37b8c1edcb")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative container h-full flex items-center justify-center text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Download Your Perfect Wallpaper Today
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Stunning high-resolution wallpapers for every screen
          </p>
          <Button size="lg" className="text-lg px-8">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
