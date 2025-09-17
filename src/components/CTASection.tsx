import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Upload } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Every Story Matters
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Join our community in preserving the irreplaceable wisdom of Rwandan elders. 
            Whether you're sharing stories or learning from them, you're part of something meaningful.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur border-white/20 text-center">
            <CardContent className="p-8">
              <Upload className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">For Elders</h3>
              <p className="text-white/80 mb-6">
                Share your stories, traditions, and wisdom with future generations who will treasure them.
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Start Sharing
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur border-white/20 text-center">
            <CardContent className="p-8">
              <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">For Youth</h3>
              <p className="text-white/80 mb-6">
                Learn from elders, discover your heritage, and help bridge the generational gap with respect.
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Start Learning
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur border-white/20 text-center">
            <CardContent className="p-8">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">For Communities</h3>
              <p className="text-white/80 mb-6">
                Strengthen bonds between generations and ensure cultural heritage thrives in the digital age.
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Join Community
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <p className="text-lg opacity-90 mb-6">
            Together, we ensure that wisdom lives on — <em>Twibuke</em>
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-golden">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;