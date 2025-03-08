
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">WallpaperHaven</h4>
            <p className="text-muted-foreground">
              Stunning wallpapers for every screen
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-primary">About</a></li>
              <li><a href="/pricing" className="hover:text-primary">Pricing</a></li>
              <li><a href="/support" className="hover:text-primary">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/terms" className="hover:text-primary">Terms</a></li>
              <li><a href="/privacy" className="hover:text-primary">Privacy</a></li>
              <li><a href="/cookies" className="hover:text-primary">Cookies</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-muted-foreground/20 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} WallpaperHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
