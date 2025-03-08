
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <div className="py-12 px-4">
      <div className="container max-w-xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
        <p className="text-muted-foreground mb-6">
          Subscribe to get notified about new wallpapers and features
        </p>
        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </div>
  );
}
