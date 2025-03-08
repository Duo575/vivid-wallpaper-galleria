
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download } from "lucide-react";

const featuredWallpapers = [
  {
    title: "Cosmic Nebula",
    specs: "16:9 • 4K",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
  },
  {
    title: "Mountain Summit",
    specs: "16:9 • 4K",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    title: "Starry Night",
    specs: "16:9 • 4K",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
  },
];

export default function WallpaperGrid() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Wallpapers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredWallpapers.map((wallpaper) => (
            <Card key={wallpaper.title} className="card-hover overflow-hidden">
              <CardHeader className="p-0">
                <div className="aspect-video relative">
                  <img
                    src={wallpaper.image}
                    alt={wallpaper.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{wallpaper.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{wallpaper.specs}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
